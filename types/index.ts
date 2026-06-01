export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Trip {
  id: string;
  title: string;
  description?: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  budget?: number;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface TripMember {
  id: string;
  tripId: string;
  userId: string;
  role: 'organizer' | 'member';
  joinedAt: Date;
  user?: User;
}

export interface Itinerary {
  id: string;
  tripId: string;
  day: number;
  title: string;
  description?: string;
  location?: string;
  startTime?: string;
  endTime?: string;
  estimatedCost?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Expense {
  id: string;
  tripId: string;
  description: string;
  amount: number;
  category: 'accommodation' | 'food' | 'transport' | 'activities' | 'other';
  paidBy: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface ExpenseSplit {
  id: string;
  expenseId: string;
  userId: string;
  amount: number;
  settled: boolean;
}

export interface Settlement {
  id: string;
  tripId: string;
  fromUserId: string;
  toUserId: string;
  amount: number;
  settledAt?: Date;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}
