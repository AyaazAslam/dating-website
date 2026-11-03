import type { Profile } from '@/types'

/** Fictional demo profiles for the product mockup only. */
export const profiles: Profile[] = [
  {
    id: 'p1',
    name: 'Amina',
    age: 24,
    city: 'Bujumbura',
    occupation: 'Nurse',
    bio: 'Coffee walks, Sunday markets, and honest conversations.',
    interests: ['Music', 'Travel', 'Cooking'],
    image:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80',
    compatibility: 92,
    verified: true,
    onlineStatus: 'online',
  },
  {
    id: 'p2',
    name: 'Eric',
    age: 28,
    city: 'Gitega',
    occupation: 'Engineer',
    bio: 'Quiet evenings, football on weekends, building something lasting.',
    interests: ['Football', 'Design', 'Hiking'],
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    compatibility: 88,
    verified: true,
    onlineStatus: 'online',
  },
  {
    id: 'p3',
    name: 'Diane',
    age: 26,
    city: 'Ngozi',
    occupation: 'Teacher',
    bio: 'Books, lakeside sunsets, and people who keep their word.',
    interests: ['Reading', 'Art', 'Yoga'],
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    compatibility: 85,
    verified: true,
    onlineStatus: 'away',
  },
  {
    id: 'p4',
    name: 'Jean',
    age: 30,
    city: 'Bujumbura',
    occupation: 'Entrepreneur',
    bio: 'Looking for someone curious about life and kind in private.',
    interests: ['Business', 'Food', 'Travel'],
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    compatibility: 90,
    verified: false,
    onlineStatus: 'online',
  },
  {
    id: 'p5',
    name: 'Claire',
    age: 23,
    city: 'Rumonge',
    occupation: 'Designer',
    bio: 'Soft humor, sharp taste, and lake mornings.',
    interests: ['Design', 'Photography', 'Dance'],
    image:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80',
    compatibility: 87,
    verified: true,
    onlineStatus: 'online',
  },
  {
    id: 'p6',
    name: 'Patrick',
    age: 29,
    city: 'Kayanza',
    occupation: 'Doctor',
    bio: 'Steady, warm, and ready for something real.',
    interests: ['Health', 'Running', 'Music'],
    image:
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80',
    compatibility: 84,
    verified: true,
    onlineStatus: 'offline',
  },
  {
    id: 'p7',
    name: 'Nadia',
    age: 27,
    city: 'Bujumbura',
    occupation: 'Journalist',
    bio: 'Stories by day, slow dinners by night.',
    interests: ['Writing', 'Cinema', 'Coffee'],
    image:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=80',
    compatibility: 91,
    verified: true,
    onlineStatus: 'online',
  },
  {
    id: 'p8',
    name: 'Alain',
    age: 31,
    city: 'Gitega',
    occupation: 'Architect',
    bio: 'Building spaces and hoping to share one.',
    interests: ['Architecture', 'Jazz', 'Travel'],
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
    compatibility: 86,
    verified: true,
    onlineStatus: 'away',
  },
]

export const heroProfile = profiles[0]
