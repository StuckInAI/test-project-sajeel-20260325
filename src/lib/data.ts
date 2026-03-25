import { initializeDatabase } from './db'
import { ActivityLog } from '@/entities/ActivityLog'

export interface SummaryData {
  totalUsers: number
  revenue: number
  activeSessions: number
  conversionRate: number
}

export async function getSummaryData(): Promise<SummaryData> {
  // Mock data for dashboard
  return {
    totalUsers: 1240,
    revenue: 25480.50,
    activeSessions: 342,
    conversionRate: 3.2,
  }
}

export async function getRecentActivity(): Promise<ActivityLog[]> {
  try {
    const dataSource = await initializeDatabase()
    const activityRepository = dataSource.getRepository(ActivityLog)
    
    return await activityRepository.find({
      order: { timestamp: 'DESC' },
      take: 10,
    })
  } catch (error) {
    console.error('Error fetching activity:', error)
    return []
  }
}

export async function getRevenueData() {
  // Mock revenue data for chart
  return [
    { month: 'Jan', revenue: 4000 },
    { month: 'Feb', revenue: 3000 },
    { month: 'Mar', revenue: 5000 },
    { month: 'Apr', revenue: 2780 },
    { month: 'May', revenue: 5890 },
    { month: 'Jun', revenue: 4390 },
    { month: 'Jul', revenue: 7000 },
    { month: 'Aug', revenue: 3490 },
  ]
}