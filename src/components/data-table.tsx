import { ActivityLog } from '@/entities/ActivityLog'
import { format } from 'date-fns'

type DataTableProps = {
  data: ActivityLog[]
}

export default function DataTable({ data }: DataTableProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">User</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Action</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Time</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b border-border last:border-0">
                <td className="py-3 px-4 text-sm">{item.userId}</td>
                <td className="py-3 px-4 text-sm">{item.action}</td>
                <td className="py-3 px-4 text-sm text-muted-foreground">
                  {format(new Date(item.timestamp), 'MMM d, HH:mm')}
                </td>
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td colSpan={3} className="py-3 px-4 text-sm text-center text-muted-foreground">
                  No activity data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}