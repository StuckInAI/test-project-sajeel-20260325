import DashboardLayout from '@/components/dashboard-layout'

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        <div className="bg-card border border-border rounded-lg p-6 text-center">
          <p className="text-muted-foreground">Settings panel will be available soon.</p>
        </div>
      </div>
    </DashboardLayout>
  )
}