# Kundana Backend Plan

**Project:** Kundana.com — Burundi's #1 Dating App  
**Frontend status:** Live marketing + auth UI demo (Next.js on Vercel)  
**Database:** PostgreSQL  
**Goal:** Real accounts, activation, swipe/match, free chat after match, WhatsApp unlock, VIP subscriptions, payments, domain go-live

---

## 0) Where this file lives

```text
/Users/mac/deting-website/docs/BACKEND_PLAN.md
```

Repo path:

```text
docs/BACKEND_PLAN.md
```

When you say **"start backend"**, we follow this plan in order (Phase 0 → Phase 6).

---

## 1) Honest go-live reality check

A full production dating app with **real local payments, chat, VIP, unlocks, moderation, and domain** is normally multi-week work.

### What “live today” can realistically mean

| Track | Same day possible? | Meaning |
|------|---------------------|---------|
| A. Soft launch | Yes | Domain + SSL + DB + signup/login + profiles + activation payment **manual/confirm** flow |
| B. Core product MVP | 2–5 days | Swipe, match, free chat, WhatsApp unlock paid, VIP start/expire |
| C. Hardened production | 1–3+ weeks | Fraud checks, admin panel, payment provider contracts, monitoring, backups |

**Recommendation for today:** finish **Track A**, then immediately continue **Track B**.

Do **not** promise clients that Lumucash / Cashtel / Bencobu are fully automated until each provider API + webhook is tested with real money.

---

## 2) Product rules the backend must enforce

These match the current frontend business rules.

### Membership / money

| Product | Amount | Type | Rules |
|--------|--------|------|-------|
| Activation | **5,000 BIF** | One-time | Required before browse/swipe/interact |
| WhatsApp Unlock | **7,000 BIF** | Per target profile | Only after mutual match; permanent for that pair |
| Weekly VIP | **10,000 BIF** | 7 days | Includes **2 WhatsApp unlocks / week** + VIP badge + visibility boost |
| Monthly VIP / Diaspora | **20,000 BIF** | 30 days | Visibility boost + verification support + premium discovery |

### Payments accepted (Burundi)

- Lumucash
- Cashtel
- Bencobu eNoti

### User rules

- Age **18+** required
- Signup: phone **or** email, password, photo, residence, age, gender, contact number, relationship status
- After mutual match → **free in-app chat**
- Unlock WhatsApp only when user pays (or uses VIP free unlock quota)

### Safety rules (backend support)

- Flag / report users
- Block users
- Never expose WhatsApp number until unlock is paid/allowed
- Log payment attempts for disputes

---

## 3) Recommended architecture

### Best fit for this repo + Vercel frontend

```text
Browser (kundana.com)
   │
   ▼
Next.js (App Router) on Vercel
   ├── Marketing pages (already built)
   ├── Auth pages /register /login
   ├── App screens /discover /matches /chat /vip
   └── API routes under /api/*
           │
           ├── Prisma ORM
           ▼
      PostgreSQL (Neon or Supabase or Railway)
           │
           ├── Object storage (Cloudinary / S3 / Cloudflare R2) for photos
           ├── Payment providers (Lumucash / Cashtel / Bencobu webhooks)
           └── Realtime (optional day 2+): Pusher / Ably / Supabase Realtime for chat
```

### Why this stack

- Same codebase as current frontend → faster launch
- Prisma + PostgreSQL is clear and production-ready
- Vercel handles HTTPS / CDN
- Domain points to Vercel easily

### Alternative (only if you want a separate server)

```text
Frontend: Vercel (Next.js)
Backend:  Railway / Render / VPS (NestJS or Express + Prisma + PostgreSQL)
```

Use separate backend only if payment providers require long-running workers or you want full control of Node process. For today, **Next.js API + Prisma + Neon PostgreSQL** is the fastest correct path.

---

## 4) Domain + hosting + DNS (live today checklist)

### Suggested production URLs

| Item | Example |
|------|---------|
| Marketing + app | `https://kundana.com` |
| WWW redirect | `https://www.kundana.com` → apex |
| API | same origin `/api/*` (recommended) |
| Current preview | `https://dating-website-snowy.vercel.app` |

### Domain steps (Vercel)

1. Buy/transfer domain (`kundana.com`) at Namecheap / Cloudflare / local registrar.
2. Vercel → Project → **Settings → Domains** → add `kundana.com` + `www.kundana.com`.
3. Add DNS records Vercel shows (usually A/ALIAS + CNAME).
4. Wait for SSL certificate (auto).
5. Set production env vars (section 8).
6. Redeploy.

### Server / services to open today

| Service | Purpose | Suggested provider |
|---------|---------|--------------------|
| App hosting | Next.js | **Vercel** (already used) |
| PostgreSQL | Main DB | **Neon** or **Supabase** |
| Photo storage | Profile images | **Cloudinary** or **Cloudflare R2** |
| Email OTP / reset | Auth emails | Resend / Mailgun |
| SMS OTP (optional) | Phone verify | Twilio / local SMS gateway |
| Payments | Mobile money | Lumucash / Cashtel / Bencobu (API access needed) |
| Monitoring | Errors | Sentry |
| Backups | DB snapshots | Neon/Supabase automatic backups |

---

## 5) PostgreSQL schema (core)

Use Prisma. Exact migration files will be created when backend coding starts.

### Tables

1. **users**
   - id (uuid)
   - full_name
   - email (unique, nullable if phone signup)
   - phone (unique, nullable if email signup)
   - password_hash
   - role: `user` | `admin`
   - is_active
   - email_verified_at / phone_verified_at
   - created_at / updated_at

2. **profiles**
   - user_id (1:1)
   - age (check >= 18)
   - gender
   - residence / city
   - relationship_status
   - bio
   - contact_number (private)
   - whatsapp_number (private; only returned after unlock)
   - photo_urls (json/array)
   - is_verified
   - visibility_score
   - last_active_at

3. **subscriptions / entitlements**
   - user_id
   - plan: `activation` | `weekly_vip` | `monthly_vip`
   - status: `pending` | `active` | `expired` | `cancelled`
   - starts_at / ends_at (null for lifetime activation flag)
   - source_payment_id

4. **account_flags**
   - user_id
   - is_activated (boolean) — true after 5,000 BIF paid
   - vip_unlocks_remaining_this_week
   - vip_week_window_start

5. **likes**
   - from_user_id
   - to_user_id
   - unique(from,to)
   - created_at

6. **matches**
   - user_a_id / user_b_id (ordered pair)
   - created_at
   - unmatched_at (nullable)

7. **messages**
   - match_id
   - sender_id
   - body
   - created_at
   - read_at

8. **whatsapp_unlocks**
   - buyer_user_id
   - target_user_id
   - payment_id (nullable if VIP free unlock)
   - unlocked_at
   - unique(buyer, target)

9. **payments**
   - user_id
   - provider: `lumucash` | `cashtel` | `bencobu`
   - purpose: `activation` | `whatsapp_unlock` | `weekly_vip` | `monthly_vip`
   - amount_bif
   - currency `BIF`
   - status: `initiated` | `pending` | `paid` | `failed` | `refunded`
   - provider_ref
   - metadata json
   - paid_at

10. **reports / blocks**
    - reporter_id / reported_id / reason / status
    - blocker_id / blocked_id

### Indexes needed

- profiles(city), profiles(last_active_at)
- likes(from_user_id), likes(to_user_id)
- matches(user_a_id, user_b_id)
- payments(provider_ref) unique where not null
- subscriptions(user_id, status, ends_at)

---

## 6) API map (server side)

Base: `https://kundana.com/api`

### Auth

| Method | Path | Purpose |
|--------|------|---------|
| POST | `/api/auth/register` | Create user + profile + upload photo |
| POST | `/api/auth/login` | Email/phone + password → JWT/session |
| POST | `/api/auth/logout` | Clear session |
| GET | `/api/auth/me` | Current user + activation/VIP status |
| POST | `/api/auth/forgot-password` | Reset start |
| POST | `/api/auth/reset-password` | Reset complete |

### Profiles / discovery

| Method | Path | Purpose |
|--------|------|---------|
| GET | `/api/profiles/discover` | Swipe deck (activated users only) |
| GET | `/api/profiles/:id` | Public profile card |
| PATCH | `/api/profiles/me` | Update bio/photos/residence/etc |
| POST | `/api/profiles/me/photos` | Upload photos |

### Matching

| Method | Path | Purpose |
|--------|------|---------|
| POST | `/api/likes` | Like / pass |
| GET | `/api/matches` | List matches |
| DELETE | `/api/matches/:id` | Unmatch |

### Chat (free after match)

| Method | Path | Purpose |
|--------|------|---------|
| GET | `/api/matches/:id/messages` | Message history |
| POST | `/api/matches/:id/messages` | Send message |
| POST | `/api/matches/:id/read` | Mark read |

Realtime can be Phase 2 (polling first day is OK).

### Payments / subscriptions

| Method | Path | Purpose |
|--------|------|---------|
| POST | `/api/payments/activation/initiate` | Start 5,000 BIF |
| POST | `/api/payments/whatsapp-unlock/initiate` | Start 7,000 BIF |
| POST | `/api/payments/vip/weekly/initiate` | Start 10,000 BIF |
| POST | `/api/payments/vip/monthly/initiate` | Start 20,000 BIF |
| POST | `/api/payments/webhooks/lumucash` | Provider callback |
| POST | `/api/payments/webhooks/cashtel` | Provider callback |
| POST | `/api/payments/webhooks/bencobu` | Provider callback |
| GET | `/api/payments/:id/status` | Poll payment status |

### WhatsApp unlock

| Method | Path | Purpose |
|--------|------|---------|
| GET | `/api/unlocks` | My unlocked profiles |
| POST | `/api/unlocks` | Unlock (paid or VIP quota) |
| GET | `/api/unlocks/:targetUserId/number` | Return number only if unlocked |

### Safety / admin

| Method | Path | Purpose |
|--------|------|---------|
| POST | `/api/blocks` | Block user |
| POST | `/api/reports` | Report user |
| GET | `/api/admin/users` | Admin list |
| PATCH | `/api/admin/users/:id` | Ban / verify |
| GET | `/api/admin/payments` | Payment audit |

---

## 7) Subscription / entitlement logic (must be accurate)

### Activation

1. User registers → `is_activated = false`
2. User cannot discover/like/chat until activation paid
3. Payment webhook marks payment `paid`
4. Set `is_activated = true` (lifetime for account)

### Free chat

- Allowed only if:
  - both users activated
  - mutual match exists
  - neither blocked the other

### WhatsApp unlock

Allowed if:

1. Mutual match exists, AND
2. One of:
   - successful 7,000 BIF payment for that target, OR
   - active Weekly VIP with remaining weekly unlocks > 0

On VIP free unlock:

- decrement `vip_unlocks_remaining_this_week`
- create `whatsapp_unlocks` row
- never expose number in discover API

### Weekly VIP

- On paid: `ends_at = now + 7 days`
- Set unlocks remaining = 2
- Reset unlock window each 7-day cycle (or on purchase)
- Cron/job daily: expire VIP when `ends_at < now`

### Monthly VIP / Diaspora

- `ends_at = now + 30 days`
- Boost `visibility_score`
- Optional verification badge workflow (admin approve)

### Idempotency rules (critical)

- Same provider_ref must not activate twice
- Same buyer+target unlock must not charge twice
- Webhook retries must be safe (unique constraints)

---

## 8) Environment variables

Create `.env.local` (never commit secrets):

```bash
# App
NEXT_PUBLIC_APP_URL=https://kundana.com
NODE_ENV=production

# Database
DATABASE_URL=postgresql://USER:PASSWORD@HOST:5432/kundana?sslmode=require

# Auth
AUTH_SECRET=long-random-string
JWT_EXPIRES_IN=7d

# Storage
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
# or R2/S3 equivalents

# Payments
LUMUCASH_API_KEY=
LUMUCASH_WEBHOOK_SECRET=
CASHTEL_API_KEY=
CASHTEL_WEBHOOK_SECRET=
BENCOBU_API_KEY=
BENCOBU_WEBHOOK_SECRET=

# Fees (single source of truth)
FEE_ACTIVATION_BIF=5000
FEE_WHATSAPP_UNLOCK_BIF=7000
FEE_WEEKLY_VIP_BIF=10000
FEE_MONTHLY_VIP_BIF=20000

# Optional
SENTRY_DSN=
RESEND_API_KEY=
```

Mirror the same keys in **Vercel → Project → Settings → Environment Variables** (Production + Preview).

---

## 9) Folder plan (what we will add)

```text
src/
  app/
    api/
      auth/
      profiles/
      likes/
      matches/
      messages/
      payments/
      unlocks/
      blocks/
      reports/
      admin/
    (app)/
      discover/page.tsx
      matches/page.tsx
      chat/[matchId]/page.tsx
      settings/page.tsx
      vip/page.tsx
  server/
    db/
      prisma.ts
    auth/
    payments/
      lumucash.ts
      cashtel.ts
      bencobu.ts
      entitlements.ts
    storage/
    jobs/
      expire-subscriptions.ts
  lib/
    constants.ts          # already exists (fees)
    validators.ts         # extend for API schemas

prisma/
  schema.prisma
  migrations/

docs/
  BACKEND_PLAN.md         # this file
```

---

## 10) Implementation phases (exact order)

### Phase 0 — Prep (30–60 min)

- [ ] Confirm domain ownership
- [ ] Create Neon/Supabase PostgreSQL project
- [ ] Create Cloudinary (or R2) account
- [ ] Ask payment providers for sandbox/API docs + webhook URLs
- [ ] Add env vars locally + Vercel
- [ ] Decide auth style: **NextAuth/Auth.js** or custom JWT cookies

### Phase 1 — Database + Auth (same day core)

- [ ] Install Prisma + PostgreSQL client
- [ ] Write `schema.prisma` from section 5
- [ ] Run first migration
- [ ] Register API (photo upload + hash password)
- [ ] Login/logout + protected `/api/auth/me`
- [ ] Wire `/register` and `/login` forms to real APIs
- [ ] Block discover until activated

### Phase 2 — Activation payment (same day soft launch)

- [ ] Create payment initiate endpoint for 5,000 BIF
- [ ] Temporary **manual confirm mode** if provider API not ready:
  - user submits provider + transaction reference
  - admin marks paid
- [ ] Webhook skeleton for each provider
- [ ] On paid → `is_activated = true`
- [ ] Show activated state in UI

### Phase 3 — Discover / Like / Match

- [ ] Discover feed (exclude self, blocked, already liked)
- [ ] Like + pass endpoints
- [ ] Auto-create match on mutual like
- [ ] Matches list UI

### Phase 4 — Free chat

- [ ] Messages table + send/list APIs
- [ ] Chat UI for matched users only
- [ ] Optional: polling every 3–5s first (realtime later)

### Phase 5 — WhatsApp unlock + VIP (accurate billing)

- [ ] Unlock purchase 7,000 BIF
- [ ] Weekly VIP 10,000 BIF + 2 unlocks/week logic
- [ ] Monthly VIP 20,000 BIF + expiry job
- [ ] Hide numbers everywhere except unlock endpoint
- [ ] Payment history page

### Phase 6 — Safety, admin, harden, go public

- [ ] Block/report
- [ ] Admin verify/ban/payment review
- [ ] Rate limits
- [ ] Sentry + uptime check
- [ ] DB backup verification
- [ ] Legal pages updated for real processing
- [ ] Custom domain cutover from `*.vercel.app`

---

## 11) Same-day launch checklist (Track A)

Use this if client needs a working link **today**.

1. Domain connected on Vercel + HTTPS green  
2. PostgreSQL live + migrations applied  
3. Signup/login works with real DB  
4. Photo upload works  
5. Activation flow works (provider API **or** manual payment confirmation)  
6. Non-activated users cannot browse people  
7. Basic privacy: WhatsApp/contact not public  
8. Production env vars set  
9. Seed 5–10 test profiles  
10. Client demo script ready (register → pay/activate → wait for discover)

Then tell client: chat/VIP unlock automation is next sprint if payments APIs arrive late.

---

## 12) Payment provider integration notes

For each of Lumucash / Cashtel / Bencobu eNoti, collect before coding:

- [ ] API base URL
- [ ] Auth method (API key / OAuth)
- [ ] How to create a payment intent
- [ ] Required fields (MSISDN, amount, callback URL)
- [ ] Webhook signature verification method
- [ ] Success / fail status codes
- [ ] Sandbox credentials
- [ ] Settlement / refund rules
- [ ] Who owns merchant account (your company)

Until those docs exist, implement:

1. `payments` rows in DB  
2. Initiate → status `pending`  
3. Admin confirm OR mock webhook in staging  
4. Swap in real provider without changing entitlement logic  

Entitlement code must stay provider-agnostic.

---

## 13) Security requirements

- Password hashing: **bcrypt** or **argon2**
- HTTP-only secure cookies for session
- CSRF protection for cookie auth
- Validate all inputs with Zod (server + client)
- Signed upload restrictions (image types/size)
- Never return `whatsapp_number` / `contact_number` in discover payloads
- Webhook signature verification required in production
- Rate-limit auth + payments endpoints
- Admin routes role-gated
- Store minimal PII logs

---

## 14) Testing plan before calling it “working”

### Must pass

- Register under 18 rejected
- Register 18+ succeeds
- Login works
- Discover blocked before activation
- Activation payment success unlocks discover
- Like A→B and B→A creates one match
- Chat works only for match
- WhatsApp number hidden before unlock
- Unlock after 7,000 BIF shows number
- Weekly VIP grants exactly 2 free unlocks / week
- VIP expiry removes benefits
- Double webhook does not double-activate
- Blocked user cannot message

### Load / ops

- DB backup restore tested once
- Vercel deploy from `main` succeeds
- Domain SSL valid on mobile network in Burundi

---

## 15) Roles / who does what

| Role | Tasks |
|------|------|
| You (product owner) | Domain, payment merchant accounts, provider API access, content/legal |
| Frontend (done/ongoing) | Wire forms to APIs, build discover/chat/VIP screens |
| Backend (next) | Prisma, APIs, entitlements, webhooks |
| Ops | Neon/Vercel env, DNS, monitoring |

---

## 16) What we will build first when you say “start backend”

Exact first coding slice:

1. Add Prisma + PostgreSQL connection  
2. Create schema/migration for users/profiles/payments/activation  
3. Implement `/api/auth/register` + `/api/auth/login` + `/api/auth/me`  
4. Connect existing `/register` and `/login` UI to real APIs  
5. Add activation payment initiate + manual/admin confirm path  
6. Gate discover behind `is_activated`

After that slice works on staging domain, we continue match → chat → unlock → VIP.

---

## 17) Current frontend already ready for backend

Already in this project:

- Branding, pricing copy, safety section
- Register fields (photo, residence, age, gender, contact, relationship status, 18+)
- Login UI
- Password show/hide + confirm match hint
- Fee constants in `src/lib/constants.ts`

Backend should treat `src/lib/constants.ts` fees as the product source of truth (and mirror in env vars).

---

## 18) Decision checklist before coding starts

Reply with these choices (or accept defaults):

1. **DB host:** Neon (default) / Supabase / other  
2. **Auth:** Auth.js session cookies (default) / custom JWT  
3. **Photos:** Cloudinary (default) / R2 / S3  
4. **Payments today:** Manual confirm first (default) / real provider APIs ready now  
5. **Domain:** `kundana.com` ready? yes/no  
6. **Separate backend server?** No, keep Next.js API (default) / Yes separate Nest/Express  

Defaults are chosen for fastest accurate launch.

---

## 19) Status

| Item | Status |
|------|--------|
| Frontend demo | Done |
| This backend plan file | Done (`docs/BACKEND_PLAN.md`) |
| Prisma / PostgreSQL | Not started |
| Real auth APIs | Not started |
| Real payments | Not started |
| Custom domain production cutover | Waiting on your DNS + this backend |

---

**Next step:** say **“start backend”** (and answer section 18 if you want non-default choices). We will begin Phase 1 immediately from this file.
