import { Users, DollarSign, Activity, TrendingUp } from 'lucide-react'
import { SummaryData } from '@/lib/data'

type SummaryCardsProps = {
  data: SummaryData
}

export default function SummaryCards({ data }: SummaryCardsProps) {
  const cards = [
    {
      title: 'Total Users',
      value: data.totalUsers.toLocaleString(),
      icon: Users,
      change: '+12.5%',
      color: 'bg-blue-500',
    },
    {
      title: 'Revenue',
      value: `$${data.revenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      icon: DollarSign,
      change: '+8.2%',
      color: 'bg-green-500',
    },
    {
      title: 'Active Sessions',
      value: data.activeSessions.toLocaleString(),
      icon: Activity,
      change: '+3.1%',
      color: 'bg-purple-500',
    },
    {
      title: 'Conversion Rate',
      value: `${data.conversionRate}%`,
      icon: TrendingUp,
      change: '+1.5%',
      color: 'bg-orange-500',
    },
  ]
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div key={card.title} className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-2 rounded-md ${card.color} text-white`}>
              <card.icon className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium text-green-600">{card.change}</span>
          </div>
          <h3 className="text-2xl font-bold">{card.value}</h3>
          <p className="text-muted-foreground text-sm mt-1">{card.title}</p>
        </div>
      ))}
    </div>
  )
}