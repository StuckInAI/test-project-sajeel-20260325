import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'

@Entity('activity_logs')
export class ActivityLog {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  userId: string

  @Column()
  action: string

  @CreateDateColumn()
  timestamp: Date

  @Column({ nullable: true })
  details: string
}