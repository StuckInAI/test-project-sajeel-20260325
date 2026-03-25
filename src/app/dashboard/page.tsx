import DashboardLayout from '@/components/dashboard-layout'
import SummaryCards from '@/components/summary-cards'
import DataTable from '@/components/data-table'
import RevenueChart from '@/components/revenue-chart'
import { getSummaryData, getRecentActivity } from '@/lib/data'

export default async function DashboardPage() {
  const summaryData = await getSummaryData()
  const recentActivity = await getRecentActivity()
  
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
        </div>
        
        <SummaryCards data={summaryData} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
          <div>
            <DataTable data={recentActivity} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}