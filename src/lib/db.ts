import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { ActivityLog } from '@/entities/ActivityLog'

const databaseUrl = process.env.DATABASE_URL || 'file:./dev.db'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: databaseUrl.replace('file:', ''),
  synchronize: process.env.NODE_ENV !== 'production',
  logging: false,
  entities: [ActivityLog],
  migrations: ['src/db/migrations/**/*.ts'],
  subscribers: [],
})

// Initialize connection
export async function initializeDatabase() {
  try {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize()
    }
    return AppDataSource
  } catch (error) {
    console.error('Error initializing database:', error)
    throw error
  }
}