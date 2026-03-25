import 'reflect-metadata'
import { AppDataSource } from '@/lib/db'
import { ActivityLog } from '@/entities/ActivityLog'
import { subDays } from 'date-fns'

async function seed() {
  try {
    await AppDataSource.initialize()
    
    const activityRepository = AppDataSource.getRepository(ActivityLog)
    
    // Clear existing data
    await activityRepository.clear()
    
    // Seed activity logs
    const activities = []
    const actions = ['Login', 'Purchase', 'Profile Update', 'Logout', 'Page View', 'File Upload']
    const userIds = ['user1', 'user2', 'user3', 'user4', 'user5']
    
    for (let i = 0; i < 50; i++) {
      const activity = new ActivityLog()
      activity.userId = userIds[Math.floor(Math.random() * userIds.length)]
      activity.action = actions[Math.floor(Math.random() * actions.length)]
      activity.timestamp = subDays(new Date(), Math.floor(Math.random() * 30))
      activity.details = `Sample activity ${i + 1}`
      activities.push(activity)
    }
    
    await activityRepository.save(activities)
    
    console.log('Database seeded successfully!')
    process.exit(0)
  } catch (error) {
    console.error('Error seeding database:', error)
    process.exit(1)
  }
}

seed()