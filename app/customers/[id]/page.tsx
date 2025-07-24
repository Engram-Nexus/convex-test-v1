'use client';

import { use } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Edit,
  MoreHorizontal,
  ArrowLeft,
  Building,
  User,
  Clock,
  CheckCircle,
  AlertCircle,
  Trash2,
} from 'lucide-react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Mock customer data - in a real app, this would come from an API
const getCustomerData = (id: string) => {
  const customers = {
    '1': {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice@techcorp.com',
      phone: '+1 (555) 123-4567',
      company: 'Tech Corp',
      position: 'CTO',
      status: 'active',
      value: '$12,500',
      avatar: '/placeholder.svg?height=100&width=100&text=AJ',
      address: '123 Tech Street, San Francisco, CA 94105',
      joinDate: '2023-01-15',
      lastContact: '2024-01-20',
      dealStage: 'Negotiation',
      dealProgress: 75,
      tags: ['Enterprise', 'High Priority', 'Tech'],
      notes:
        'Key decision maker for enterprise software solutions. Very interested in our premium package.',
    },
    '2': {
      id: 2,
      name: 'Bob Smith',
      email: 'bob@designstudio.com',
      phone: '+1 (555) 234-5678',
      company: 'Design Studio',
      position: 'Creative Director',
      status: 'prospect',
      value: '$8,200',
      avatar: '/placeholder.svg?height=100&width=100&text=BS',
      address: '456 Design Ave, New York, NY 10001',
      joinDate: '2023-03-22',
      lastContact: '2024-01-18',
      dealStage: 'Proposal',
      dealProgress: 45,
      tags: ['Creative', 'Medium Priority'],
      notes:
        'Looking for design tools and creative software solutions. Budget conscious but quality focused.',
    },
    '3': {
      id: 3,
      name: 'Carol Davis',
      email: 'carol@marketinginc.com',
      phone: '+1 (555) 345-6789',
      company: 'Marketing Inc',
      position: 'Marketing Manager',
      status: 'active',
      value: '$15,800',
      avatar: '/placeholder.svg?height=100&width=100&text=CD',
      address: '789 Marketing Blvd, Chicago, IL 60601',
      joinDate: '2022-11-08',
      lastContact: '2024-01-22',
      dealStage: 'Closed Won',
      dealProgress: 100,
      tags: ['Marketing', 'Loyal Customer', 'High Value'],
      notes:
        'Long-term customer with multiple successful campaigns. Excellent relationship and high satisfaction.',
    },
    '4': {
      id: 4,
      name: 'David Wilson',
      email: 'david@consultingllc.com',
      phone: '+1 (555) 456-7890',
      company: 'Consulting LLC',
      position: 'Senior Consultant',
      status: 'inactive',
      value: '$5,400',
      avatar: '/placeholder.svg?height=100&width=100&text=DW',
      address: '321 Consulting Way, Boston, MA 02101',
      joinDate: '2023-06-10',
      lastContact: '2023-12-15',
      dealStage: 'Closed Lost',
      dealProgress: 0,
      tags: ['Consulting', 'Inactive'],
      notes: 'Project was put on hold due to budget constraints. May revisit in Q3.',
    },
    '5': {
      id: 5,
      name: 'Eva Brown',
      email: 'eva@startuphub.com',
      phone: '+1 (555) 567-8901',
      company: 'Startup Hub',
      position: 'Founder & CEO',
      status: 'prospect',
      value: '$22,100',
      avatar: '/placeholder.svg?height=100&width=100&text=EB',
      address: '654 Innovation Dr, Austin, TX 73301',
      joinDate: '2024-01-05',
      lastContact: '2024-01-21',
      dealStage: 'Discovery',
      dealProgress: 25,
      tags: ['Startup', 'High Potential', 'Innovation'],
      notes: 'Fast-growing startup with significant funding. Looking for scalable solutions.',
    },
  };

  return customers[id as keyof typeof customers] || null;
};

const activities = [
  {
    id: 1,
    type: 'call',
    title: 'Follow-up call completed',
    description: 'Discussed project requirements and timeline',
    date: '2024-01-20',
    time: '2:30 PM',
    status: 'completed',
  },
  {
    id: 2,
    type: 'email',
    title: 'Proposal sent',
    description: 'Sent detailed proposal with pricing options',
    date: '2024-01-18',
    time: '10:15 AM',
    status: 'sent',
  },
  {
    id: 3,
    type: 'meeting',
    title: 'Demo scheduled',
    description: 'Product demonstration meeting set for next week',
    date: '2024-01-15',
    time: '3:00 PM',
    status: 'scheduled',
  },
  {
    id: 4,
    type: 'note',
    title: 'Initial contact',
    description: 'First conversation about potential partnership',
    date: '2024-01-10',
    time: '11:45 AM',
    status: 'completed',
  },
];

const deals = [
  {
    id: 1,
    title: 'Enterprise Software License',
    value: '$12,500',
    stage: 'Negotiation',
    probability: 75,
    closeDate: '2024-02-15',
    status: 'active',
  },
  {
    id: 2,
    title: 'Consulting Services',
    value: '$8,000',
    stage: 'Proposal',
    probability: 45,
    closeDate: '2024-03-01',
    status: 'active',
  },
];

export default function CustomerProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const customer = getCustomerData(id);

  if (!customer) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Customer Not Found</h2>
          <p className="text-muted-foreground mb-4">
            The customer you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/customers">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Customers
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'call':
        return <Phone className="h-4 w-4" />;
      case 'email':
        return <Mail className="h-4 w-4" />;
      case 'meeting':
        return <Calendar className="h-4 w-4" />;
      case 'note':
        return <User className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getActivityStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'scheduled':
        return <AlertCircle className="h-4 w-4 text-blue-500" />;
      case 'sent':
        return <CheckCircle className="h-4 w-4 text-blue-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="flex-1 space-y-8 p-6 md:p-10 pt-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <SidebarTrigger />
          <Link href="/customers">
            <Button className="glass-button text-slate-700 hover:text-slate-900 font-medium h-12 px-6 rounded-2xl">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Customers
            </Button>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Button className="glass-primary h-12 px-6 rounded-2xl font-medium shadow-lg">
            <Edit className="mr-2 h-5 w-5" />
            Edit Customer
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="glass-button h-12 w-12 p-0 rounded-2xl">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="glass-card border-0 rounded-2xl apple-shadow"
            >
              <DropdownMenuItem className="rounded-xl">
                <Mail className="mr-3 h-4 w-4" />
                Send Email
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-xl">
                <Phone className="mr-3 h-4 w-4" />
                Schedule Call
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-xl">
                <User className="mr-3 h-4 w-4" />
                Add Note
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-600 focus:text-red-600 rounded-xl">
                <Trash2 className="mr-3 h-4 w-4" />
                Delete Customer
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Customer Header Card */}
      <Card className="glass-card rounded-3xl border-0 overflow-hidden apple-shadow-lg">
        <CardContent className="pt-10">
          <div className="flex items-start space-x-8">
            <Avatar className="h-28 w-28 ring-4 ring-white/30 shadow-xl">
              <AvatarImage src={customer.avatar || '/placeholder.svg'} alt={customer.name} />
              <AvatarFallback className="text-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold">
                {customer.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-4">
              <div className="flex items-center space-x-4">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">
                  {customer.name}
                </h1>
                <Badge
                  className={`px-4 py-2 font-semibold rounded-full text-base ${
                    customer.status === 'active'
                      ? 'status-active-glass'
                      : customer.status === 'prospect'
                        ? 'status-prospect-glass'
                        : 'status-inactive-glass'
                  }`}
                >
                  {customer.status}
                </Badge>
              </div>
              <div className="flex items-center space-x-8 text-slate-500">
                <div className="flex items-center space-x-3">
                  <Building className="h-6 w-6" />
                  <span className="font-semibold text-lg">{customer.company}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <User className="h-6 w-6" />
                  <span className="font-semibold text-lg">{customer.position}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {customer.tags.map((tag) => (
                  <Badge
                    key={tag}
                    className="bg-blue-100/80 border-blue-200/50 text-blue-700 font-semibold px-4 py-2 rounded-full backdrop-blur-sm"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="text-right glass-card p-6 rounded-2xl">
              <div className="text-4xl font-bold text-emerald-600">{customer.value}</div>
              <div className="text-base text-emerald-600/70 font-semibold mt-1">Total Value</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Left Column - Contact Info & Quick Stats */}
        <div className="space-y-4">
          <Card className="glass-card rounded-3xl border-0 overflow-hidden apple-shadow">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="font-medium">{customer.email}</p>
                  <p className="text-sm text-muted-foreground">Email</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="font-medium">{customer.phone}</p>
                  <p className="text-sm text-muted-foreground">Phone</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="font-medium">{customer.address}</p>
                  <p className="text-sm text-muted-foreground">Address</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card rounded-3xl border-0 overflow-hidden apple-shadow">
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Customer Since</span>
                <span className="font-medium">
                  {new Date(customer.joinDate).toLocaleDateString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Last Contact</span>
                <span className="font-medium">
                  {new Date(customer.lastContact).toLocaleDateString()}
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Deal Progress</span>
                  <span className="font-medium">{customer.dealProgress}%</span>
                </div>
                <Progress value={customer.dealProgress} className="h-2" />
                <p className="text-sm text-muted-foreground">Stage: {customer.dealStage}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Tabs Content */}
        <div className="md:col-span-2">
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="deals">Deals</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <Card className="glass-card rounded-3xl border-0 overflow-hidden apple-shadow">
                <CardHeader>
                  <CardTitle>Customer Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{customer.notes}</p>
                </CardContent>
              </Card>

              <Card className="glass-card rounded-3xl border-0 overflow-hidden apple-shadow">
                <CardHeader>
                  <CardTitle>Recent Activity Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {activities.slice(0, 3).map((activity) => (
                      <div key={activity.id} className="flex items-center space-x-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                          {getActivityIcon(activity.type)}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{activity.title}</p>
                          <p className="text-sm text-muted-foreground">{activity.date}</p>
                        </div>
                        {getActivityStatusIcon(activity.status)}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activity" className="space-y-4">
              <Card className="glass-card rounded-3xl border-0 overflow-hidden apple-shadow">
                <CardHeader>
                  <CardTitle>Activity Timeline</CardTitle>
                  <CardDescription>Complete history of customer interactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activities.map((activity) => (
                      <div
                        key={activity.id}
                        className="flex items-start space-x-4 pb-4 border-b last:border-b-0"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                          {getActivityIcon(activity.type)}
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">{activity.title}</p>
                            <div className="flex items-center space-x-2">
                              <span className="text-sm text-muted-foreground">{activity.time}</span>
                              {getActivityStatusIcon(activity.status)}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">{activity.description}</p>
                          <p className="text-xs text-muted-foreground">{activity.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="deals" className="space-y-4">
              <Card className="glass-card rounded-3xl border-0 overflow-hidden apple-shadow">
                <CardHeader>
                  <CardTitle>Active Deals</CardTitle>
                  <CardDescription>Current opportunities and deals in progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {deals.map((deal) => (
                      <div key={deal.id} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium">{deal.title}</h3>
                          <div className="text-right">
                            <p className="font-bold text-green-600">{deal.value}</p>
                            <p className="text-sm text-muted-foreground">Close: {deal.closeDate}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Stage: {deal.stage}</span>
                            <span>{deal.probability}% probability</span>
                          </div>
                          <Progress value={deal.probability} className="h-2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notes" className="space-y-4">
              <Card className="glass-card rounded-3xl border-0 overflow-hidden apple-shadow">
                <CardHeader>
                  <CardTitle>Customer Notes</CardTitle>
                  <CardDescription>Internal notes and observations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-muted rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-medium">Initial Assessment</p>
                        <span className="text-sm text-muted-foreground">Jan 15, 2024</span>
                      </div>
                      <p className="text-sm">{customer.notes}</p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-medium">Follow-up Strategy</p>
                        <span className="text-sm text-muted-foreground">Jan 20, 2024</span>
                      </div>
                      <p className="text-sm">
                        Customer is very responsive to email communication. Prefers detailed
                        technical specifications. Schedule monthly check-ins.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
