'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Edit,
  Trash2,
  Phone,
  Mail,
  Building,
  Star,
  Users,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRouter } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const customers = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@techcorp.com',
    phone: '+1 (555) 123-4567',
    company: 'Tech Corp',
    status: 'active',
    value: '$12,500',
    avatar: '/placeholder.svg?height=40&width=40&text=AJ',
    priority: 'high',
    lastContact: '2 hours ago',
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob@designstudio.com',
    phone: '+1 (555) 234-5678',
    company: 'Design Studio',
    status: 'prospect',
    value: '$8,200',
    avatar: '/placeholder.svg?height=40&width=40&text=BS',
    priority: 'medium',
    lastContact: '1 day ago',
  },
  {
    id: 3,
    name: 'Carol Davis',
    email: 'carol@marketinginc.com',
    phone: '+1 (555) 345-6789',
    company: 'Marketing Inc',
    status: 'active',
    value: '$15,800',
    avatar: '/placeholder.svg?height=40&width=40&text=CD',
    priority: 'high',
    lastContact: '3 hours ago',
  },
  {
    id: 4,
    name: 'David Wilson',
    email: 'david@consultingllc.com',
    phone: '+1 (555) 456-7890',
    company: 'Consulting LLC',
    status: 'inactive',
    value: '$5,400',
    avatar: '/placeholder.svg?height=40&width=40&text=DW',
    priority: 'low',
    lastContact: '2 weeks ago',
  },
  {
    id: 5,
    name: 'Eva Brown',
    email: 'eva@startuphub.com',
    phone: '+1 (555) 567-8901',
    company: 'Startup Hub',
    status: 'prospect',
    value: '$22,100',
    avatar: '/placeholder.svg?height=40&width=40&text=EB',
    priority: 'high',
    lastContact: '5 hours ago',
  },
];

export default function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const router = useRouter();

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || customer.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="status-active">Active</Badge>;
      case 'prospect':
        return <Badge className="status-prospect">Prospect</Badge>;
      case 'inactive':
        return <Badge className="status-inactive">Inactive</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getPriorityIcon = (priority: string) => {
    if (priority === 'high') {
      return <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />;
    }
    return null;
  };

  return (
    <div className="flex-1 space-y-8 p-6 md:p-10 pt-8 grid-overlay">
      {/* Header */}
      <div className="flex items-center justify-between fade-in">
        <div className="flex items-center space-x-6">
          <SidebarTrigger />
          <div>
            <h1 className="text-5xl font-bold tracking-tight text-gradient mb-2">Customers</h1>
            <p className="text-muted-foreground text-lg">
              Manage your customer relationships and track interactions
            </p>
          </div>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="dark-button-primary h-12 px-6">
              <Plus className="mr-2 h-5 w-5" />
              Add Customer
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] dark-card border-0">
            <DialogHeader className="pb-6">
              <DialogTitle className="text-3xl font-bold text-foreground">
                Add New Customer
              </DialogTitle>
              <DialogDescription className="text-muted-foreground text-base mt-2">
                Enter the customer details below to add them to your CRM.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              <div className="grid grid-cols-4 items-center gap-6">
                <Label htmlFor="name" className="text-right font-semibold text-foreground">
                  Name
                </Label>
                <Input id="name" className="col-span-3 dark-input h-12" placeholder="John Doe" />
              </div>
              <div className="grid grid-cols-4 items-center gap-6">
                <Label htmlFor="email" className="text-right font-semibold text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  className="col-span-3 dark-input h-12"
                  placeholder="john@company.com"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-6">
                <Label htmlFor="phone" className="text-right font-semibold text-foreground">
                  Phone
                </Label>
                <Input
                  id="phone"
                  className="col-span-3 dark-input h-12"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-6">
                <Label htmlFor="company" className="text-right font-semibold text-foreground">
                  Company
                </Label>
                <Input
                  id="company"
                  className="col-span-3 dark-input h-12"
                  placeholder="Company Inc."
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-6">
                <Label htmlFor="status" className="text-right font-semibold text-foreground">
                  Status
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3 dark-input h-12">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent className="dark-dropdown">
                    <SelectItem value="prospect">Prospect</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter className="pt-6">
              <Button
                variant="outline"
                onClick={() => setIsAddDialogOpen(false)}
                className="dark-button mr-3 h-12 px-6"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                onClick={() => setIsAddDialogOpen(false)}
                className="dark-button-primary h-12 px-6"
              >
                Add Customer
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Main Card */}
      <Card className="dark-card slide-up">
        <CardHeader className="pb-8">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-3xl font-bold text-foreground flex items-center gap-3">
                <div className="circle-element h-10 w-10">
                  <Users className="h-5 w-5 text-foreground" />
                </div>
                Customer Directory
              </CardTitle>
              <CardDescription className="text-muted-foreground mt-3 text-lg">
                {filteredCustomers.length} customers found
              </CardDescription>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search customers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 w-80 dark-input h-12 text-base"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[200px] dark-input h-12">
                  <Filter className="mr-2 h-5 w-5" />
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent className="dark-dropdown">
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="prospect">Prospect</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Customer Table */}
          <div className="dark-table">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-border hover:bg-transparent">
                  <TableHead className="font-bold text-foreground text-base py-4">
                    Customer
                  </TableHead>
                  <TableHead className="font-bold text-foreground text-base py-4">
                    Company
                  </TableHead>
                  <TableHead className="font-bold text-foreground text-base py-4">
                    Contact
                  </TableHead>
                  <TableHead className="font-bold text-foreground text-base py-4">Status</TableHead>
                  <TableHead className="font-bold text-foreground text-base py-4">Value</TableHead>
                  <TableHead className="font-bold text-foreground text-base py-4">
                    Last Contact
                  </TableHead>
                  <TableHead className="text-right font-bold text-foreground text-base py-4">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCustomers.map((customer) => (
                  <TableRow
                    key={customer.id}
                    className="dark-table-row"
                    onClick={() => router.push(`/customers/${customer.id}`)}
                  >
                    <TableCell className="py-4">
                      <div className="flex items-center space-x-4">
                        <div className="circle-element h-12 w-12">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={customer.avatar || '/placeholder.svg'} />
                            <AvatarFallback className="bg-secondary text-foreground font-bold text-sm">
                              {customer.name
                                .split(' ')
                                .map((n) => n[0])
                                .join('')}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <p className="font-bold text-foreground text-base">{customer.name}</p>
                            {getPriorityIcon(customer.priority)}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="flex items-center space-x-3">
                        <Building className="h-5 w-5 text-muted-foreground" />
                        <span className="font-semibold text-foreground text-base">
                          {customer.company}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <Mail className="mr-3 h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground font-medium">
                            {customer.email}
                          </span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Phone className="mr-3 h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground font-medium">
                            {customer.phone}
                          </span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="py-4">{getStatusBadge(customer.status)}</TableCell>
                    <TableCell className="py-4">
                      <span className="font-bold text-green-400 text-xl">{customer.value}</span>
                    </TableCell>
                    <TableCell className="py-4">
                      <span className="text-base text-muted-foreground font-medium">
                        {customer.lastContact}
                      </span>
                    </TableCell>
                    <TableCell className="text-right py-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            className="circle-element h-10 w-10 p-0"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <MoreHorizontal className="h-5 w-5" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="dark-dropdown">
                          <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
                            <Edit className="mr-3 h-4 w-4" />
                            Edit Customer
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
                            <Mail className="mr-3 h-4 w-4" />
                            Send Email
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
                            <Phone className="mr-3 h-4 w-4" />
                            Call Customer
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="text-red-400 focus:text-red-400"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Trash2 className="mr-3 h-4 w-4" />
                            Delete Customer
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
