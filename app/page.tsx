'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import {
  Users,
  DollarSign,
  Phone,
  Mail,
  Calendar,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Target,
  Activity,
  Dot,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const salesData = [
  { month: 'Jan', sales: 4000, leads: 240, revenue: 12000 },
  { month: 'Feb', sales: 3000, leads: 139, revenue: 9500 },
  { month: 'Mar', sales: 2000, leads: 980, revenue: 15000 },
  { month: 'Apr', sales: 2780, leads: 390, revenue: 11200 },
  { month: 'May', sales: 1890, leads: 480, revenue: 8900 },
  { month: 'Jun', sales: 2390, leads: 380, revenue: 13400 },
];

const pieData = [
  { name: 'Active', value: 45, color: '#22c55e' },
  { name: 'Prospects', value: 35, color: '#3b82f6' },
  { name: 'Inactive', value: 20, color: '#6b7280' },
];

const recentActivities = [
  {
    id: 1,
    type: 'call',
    customer: 'Alice Johnson',
    company: 'Tech Corp',
    time: '2 hours ago',
    status: 'completed',
    avatar: '/placeholder.svg?height=40&width=40&text=AJ',
  },
  {
    id: 2,
    type: 'email',
    customer: 'Bob Smith',
    company: 'Design Studio',
    time: '4 hours ago',
    status: 'sent',
    avatar: '/placeholder.svg?height=40&width=40&text=BS',
  },
  {
    id: 3,
    type: 'meeting',
    customer: 'Carol Davis',
    company: 'Marketing Inc',
    time: '1 day ago',
    status: 'scheduled',
    avatar: '/placeholder.svg?height=40&width=40&text=CD',
  },
  {
    id: 4,
    type: 'call',
    customer: 'David Wilson',
    company: 'Consulting LLC',
    time: '2 days ago',
    status: 'missed',
    avatar: '/placeholder.svg?height=40&width=40&text=DW',
  },
];

const topDeals = [
  {
    customer: 'Eva Brown',
    company: 'Startup Hub',
    value: '$22,100',
    stage: 'Negotiation',
    probability: 85,
  },
  {
    customer: 'Alice Johnson',
    company: 'Tech Corp',
    value: '$15,800',
    stage: 'Proposal',
    probability: 70,
  },
  {
    customer: 'Carol Davis',
    company: 'Marketing Inc',
    value: '$12,500',
    stage: 'Discovery',
    probability: 45,
  },
];

export default function Dashboard() {
  return (
    <div className="flex-1 space-y-8 p-6 md:p-10 pt-8 grid-overlay">
      {/* Header */}
      <div className="flex items-center justify-between fade-in">
        <div className="flex items-center space-x-6">
          <SidebarTrigger />
          <div>
            <h1 className="text-5xl font-bold tracking-tight text-gradient mb-2">Dashboard</h1>
            <p className="text-muted-foreground text-lg">
              Welcome back, John! Here&apos;s what&apos;s happening today.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button className="dark-button h-12 px-6">
            <Calendar className="mr-2 h-5 w-5" />
            Today
          </Button>
          <Button className="dark-button-primary h-12 px-6">
            <Plus className="mr-2 h-5 w-5" />
            Add Customer
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 slide-up">
        <Card className="metric-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Total Customers
            </CardTitle>
            <div className="circle-element h-12 w-12">
              <Users className="h-6 w-6 text-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="metric-value">2,350</div>
            <div className="flex items-center">
              <ArrowUpRight className="h-4 w-4 mr-1 text-green-400" />
              <span className="metric-change-positive">+20.1%</span>
              <span className="text-muted-foreground text-sm ml-2">from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="metric-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Revenue
            </CardTitle>
            <div className="circle-element h-12 w-12">
              <DollarSign className="h-6 w-6 text-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="metric-value">$45,231</div>
            <div className="flex items-center">
              <ArrowUpRight className="h-4 w-4 mr-1 text-green-400" />
              <span className="metric-change-positive">+12.5%</span>
              <span className="text-muted-foreground text-sm ml-2">from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="metric-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Conversion Rate
            </CardTitle>
            <div className="circle-element h-12 w-12">
              <Target className="h-6 w-6 text-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="metric-value">12.5%</div>
            <div className="flex items-center">
              <ArrowDownRight className="h-4 w-4 mr-1 text-red-400" />
              <span className="metric-change-negative">-2.1%</span>
              <span className="text-muted-foreground text-sm ml-2">from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="metric-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Active Deals
            </CardTitle>
            <div className="circle-element h-12 w-12">
              <Activity className="h-6 w-6 text-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="metric-value">573</div>
            <div className="flex items-center">
              <ArrowUpRight className="h-4 w-4 mr-1 text-green-400" />
              <span className="metric-change-positive">+201</span>
              <span className="text-muted-foreground text-sm ml-2">since last week</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Activity */}
      <div className="grid gap-8 lg:grid-cols-7 slide-up">
        {/* Sales Chart */}
        <Card className="lg:col-span-4 dark-card">
          <CardHeader className="pb-6">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-bold text-foreground">Sales Overview</CardTitle>
                <CardDescription className="text-muted-foreground mt-2 text-base">
                  Monthly performance and trends
                </CardDescription>
              </div>
              <Badge className="bg-accent text-foreground border border-border px-4 py-2 rounded-full font-medium">
                <Dot className="w-4 h-4 mr-1 text-green-400" />
                This Month
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pl-2">
            <ChartContainer
              config={{
                sales: {
                  label: 'Sales',
                  color: '#ffffff',
                },
                leads: {
                  label: 'Leads',
                  color: '#a0a0a0',
                },
              }}
              className="h-[400px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={salesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                  <XAxis
                    dataKey="month"
                    stroke="rgb(150, 150, 150)"
                    fontSize={14}
                    fontWeight={500}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="rgb(150, 150, 150)"
                    fontSize={14}
                    fontWeight={500}
                    tickLine={false}
                    axisLine={false}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="sales" fill="var(--color-sales)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="leads" fill="var(--color-leads)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Customer Distribution */}
        <Card className="lg:col-span-3 dark-card">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl font-bold text-foreground">
              Customer Distribution
            </CardTitle>
            <CardDescription className="text-muted-foreground mt-2 text-base">
              Status breakdown
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[240px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={4}
                    dataKey="value"
                    stroke="rgba(255, 255, 255, 0.1)"
                    strokeWidth={1}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
              {pieData.map((item) => (
                <div key={item.name} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div
                      className="w-3 h-3 rounded-full border border-white/20"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm font-medium text-muted-foreground">{item.name}</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">{item.value}%</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity and Top Deals */}
      <div className="grid gap-8 lg:grid-cols-2 slide-up">
        {/* Recent Activity */}
        <Card className="dark-card">
          <CardHeader className="pb-6">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Recent Activity
                </CardTitle>
                <CardDescription className="text-muted-foreground mt-2 text-base">
                  Latest customer interactions
                </CardDescription>
              </div>
              <Button className="dark-button">View All</Button>
            </div>
          </CardHeader>
          <CardContent className="dark-scrollbar">
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-accent/30 transition-all duration-200"
                >
                  <div className="circle-element h-12 w-12">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={activity.avatar || '/placeholder.svg'} />
                      <AvatarFallback className="bg-secondary text-foreground font-bold text-sm">
                        {activity.customer
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-base font-semibold text-foreground">{activity.customer}</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground font-medium">
                          {activity.time}
                        </span>
                        {activity.type === 'call' && <Phone className="h-4 w-4 text-blue-400" />}
                        {activity.type === 'email' && <Mail className="h-4 w-4 text-green-400" />}
                        {activity.type === 'meeting' && (
                          <Calendar className="h-4 w-4 text-purple-400" />
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">{activity.company}</p>
                    <Badge
                      className={`text-xs font-medium rounded-full px-3 py-1 ${
                        activity.status === 'completed'
                          ? 'status-active'
                          : activity.status === 'missed'
                            ? 'status-inactive'
                            : 'status-prospect'
                      }`}
                    >
                      {activity.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Deals */}
        <Card className="dark-card">
          <CardHeader className="pb-6">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-bold text-foreground">Top Deals</CardTitle>
                <CardDescription className="text-muted-foreground mt-2 text-base">
                  Highest value opportunities
                </CardDescription>
              </div>
              <Button className="dark-button">View All</Button>
            </div>
          </CardHeader>
          <CardContent className="dark-scrollbar">
            <div className="space-y-4">
              {topDeals.map((deal, index) => (
                <div
                  key={index}
                  className="p-5 rounded-lg border border-border hover:bg-accent/20 transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="font-bold text-foreground text-lg">{deal.customer}</p>
                      <p className="text-sm text-muted-foreground font-medium">{deal.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-400">{deal.value}</p>
                      <p className="text-sm text-muted-foreground font-medium">{deal.stage}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground font-medium">Probability</span>
                      <span className="font-bold text-foreground">{deal.probability}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-white h-2 rounded-full transition-all duration-500"
                        style={{ width: `${deal.probability}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
