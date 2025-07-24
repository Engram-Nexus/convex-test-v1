'use client';

import {
  Calendar,
  Home,
  Settings,
  Users,
  BarChart3,
  Phone,
  Mail,
  Palette,
  Activity,
  Circle,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const items = [
  {
    title: 'Dashboard',
    url: '/',
    icon: Home,
  },
  {
    title: 'Customers',
    url: '/customers',
    icon: Users,
    badge: '2,350',
  },
  {
    title: 'Analytics',
    url: '/analytics',
    icon: BarChart3,
  },
  {
    title: 'Messages',
    url: '/messages',
    icon: Mail,
    badge: '12',
  },
  {
    title: 'Calls',
    url: '/calls',
    icon: Phone,
  },
  {
    title: 'Calendar',
    url: '/calendar',
    icon: Calendar,
  },
  {
    title: 'Style Guide',
    url: '/style-guide',
    icon: Palette,
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="dark-sidebar border-r-0">
      <SidebarHeader className="border-b border-border/50 px-6 py-8">
        <div className="flex items-center gap-4">
          <div className="circle-element h-12 w-12">
            <BarChart3 className="h-6 w-6 text-foreground" />
          </div>
          <div>
            <span className="text-2xl font-bold text-gradient">CRM Pro</span>
            <p className="text-sm text-muted-foreground font-medium -mt-1">Professional</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4 py-6 dark-scrollbar">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4 mb-4">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    className={`
                      nav-item
                      ${pathname === item.url ? 'active' : ''}
                    `}
                  >
                    <Link href={item.url} className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-3">
                        <item.icon className="h-5 w-5" />
                        <span className="font-medium">{item.title}</span>
                      </div>
                      {item.badge && (
                        <Badge
                          variant="secondary"
                          className="h-6 px-2 text-xs font-medium bg-secondary border border-border text-muted-foreground"
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border/50 p-6">
        <div className="dark-card p-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="circle-element h-12 w-12">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40&text=JD" />
                  <AvatarFallback className="bg-secondary text-foreground font-bold text-sm">
                    JD
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full border border-background"></div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground truncate">John Doe</p>
              <p className="text-xs text-muted-foreground truncate">Administrator</p>
            </div>
            <div className="relative circle-element h-8 w-8">
              <Activity className="h-4 w-4 text-muted-foreground" />
              <Circle className="absolute -top-1 -right-1 h-2 w-2 text-red-400 fill-red-400" />
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
