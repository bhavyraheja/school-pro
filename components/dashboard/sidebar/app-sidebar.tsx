import React from 'react'
import {
    ArrowRight,
    AudioWaveform,
    BadgeCheck,
    BarChart2,
    Bell,
    BookOpen,
    Bot,
    Bus,
    ChevronRight,
    ChevronsUpDown,
    Command,
    CreditCard,
    DollarSign,
    Folder,
    Forward,
    Frame,
    GalleryVerticalEnd,
    GraduationCap,
    Key,
    LayoutDashboard,
    LogOut,
    Map,
    MessageSquare,
    MoreHorizontal,
    Package,
    PieChart,
    Plus,
    Settings2,
    ShoppingCart,
    Sparkles,
    SquareTerminal,
    Trash2,
    UserCog,
    Users,
} from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarInset,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarProvider,
    SidebarRail,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from '@/components/logo';


export default function AppSidebar() {
    const user= {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    }
    const sidebarLinks = [
        {
          title: "Dashboard",
          url: "/dashboard",
          icon: LayoutDashboard,
          isActive: true,
          items: [
            {
              title: "Overview",
              url: "/dashboard/overview",
            },
          ],
        },
        {
          title: "Student Management",
          url: "/students",
          icon: Users,
          items: [
            {
              title: "Student Directory",
              url: "/dashboard/students",
            },
            {
              title: "Fees",
              url: "/dashboard/students/fees",
            },
            {
              title: "Student Ids",
              url: "/dashboard/students/ids",
            },
            {
              title: "Attendance",
              url: "/dashboard/students/attendance",
            },
          ],
        },
        {
          title: "Users",
          url: "/dashboard/users",
          icon: Users,
          items: [
            {
              title: "Parents",
              url: "/dashboard/users/parents",
            },
            {
              title: "Secretary",
              url: "/dashboard/users/secretary",
            },
          ],
        },
        {
          title: "Academics",
          url: "/dashboard/academics",
          icon: GraduationCap,
          items: [
            {
              title: "Classes and Streams",
              url: "/dashboard/academics/classes",
            },
            {
              title: "Examinations",
              url: "/academics/examinations",
            },
            {
              title: "Assignments",
              url: "/academics/assignments",
            },
            {
              title: "Report Cards",
              url: "/academics/reports",
            },
          ],
        },
        {
          title: "Staff Management",
          url: "/staff",
          icon: UserCog,
          items: [
            {
              title: "Staff Directory",
              url: "/staff/directory",
            },
            {
              title: "Attendance",
              url: "/staff/attendance",
            },
            {
              title: "Leave Management",
              url: "/staff/leave",
            },
            {
              title: "Performance",
              url: "/staff/performance",
            },
          ],
        },
        {
          title: "Communication",
          url: "/communication",
          icon: MessageSquare,
          items: [
            {
              title: "Messages",
              url: "/communication/messages",
            },
            {
              title: "Announcements",
              url: "/communication/announcements",
            },
            {
              title: "Notice Board",
              url: "/communication/notices",
            },
            {
              title: "Emergency Alerts",
              url: "/communication/alerts",
            },
          ],
        },
        {
          title: "Finance",
          url: "/finance",
          icon: DollarSign,
          items: [
            {
              title: "Fee Management",
              url: "/finance/fees",
            },
            {
              title: "Payments",
              url: "/finance/payments",
            },
            {
              title: "Scholarships",
              url: "/finance/scholarships",
            },
            {
              title: "Reports",
              url: "/finance/reports",
            },
          ],
        },
        {
          title: "Transport",
          url: "/transport",
          icon: Bus,
          items: [
            {
              title: "Routes",
              url: "/transport/routes",
            },
            {
              title: "Tracking",
              url: "/transport/tracking",
            },
            {
              title: "Drivers",
              url: "/transport/drivers",
            },
            {
              title: "Maintenance",
              url: "/transport/maintenance",
            },
          ],
        },
        {
          title: "Resources",
          url: "/resources",
          icon: BookOpen,
          items: [
            {
              title: "Library",
              url: "/resources/library",
            },
            {
              title: "Inventory",
              url: "/resources/inventory",
            },
            {
              title: "Facilities",
              url: "/resources/facilities",
            },
            {
              title: "Assets",
              url: "/resources/assets",
            },
          ],
        },
        {
          title: "Reports & Analytics",
          url: "/reports",
          icon: BarChart2,
          items: [
            {
              title: "Academic Reports",
              url: "/reports/academic",
            },
            {
              title: "Financial Reports",
              url: "/reports/financial",
            },
            {
              title: "Custom Reports",
              url: "/reports/custom",
            },
            {
              title: "Analytics Dashboard",
              url: "/reports/analytics",
            },
          ],
        },
        {
          title: "Settings",
          url: "/settings",
          icon: Settings2,
          items: [
            {
              title: "School Profile",
              url: "/settings/profile",
            },
            {
              title: "User Management",
              url: "/settings/users",
            },
            {
              title: "System Settings",
              url: "/settings/system",
            },
            {
              title: "Backup & Security",
              url: "/settings/security",
            },
          ],
        },
        {
          title: "Admin Only",
          url: "/dashboard/admin",
          icon: Key,
          items: [
            {
              title: "Contacts",
              url: "/dashboard/admin/contacts",
            },
          ],
        },
      ];
      
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <Logo/>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    
                    <SidebarMenu>
                        {sidebarLinks.map((item) => (
                            <Collapsible
                                key={item.title}
                                asChild
                                defaultOpen={item.isActive}
                                className="group/collapsible"
                            >
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton tooltip={item.title}>
                                            {item.icon && <item.icon />}
                                            <span>{item.title}</span>
                                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            {item.items?.map((subItem) => (
                                                <SidebarMenuSubItem key={subItem.title}>
                                                    <SidebarMenuSubButton asChild>
                                                        <a href={subItem.url}>
                                                            <span>{subItem.title}</span>
                                                        </a>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            ))}
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>

            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton
                                    size="lg"
                                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                                >
                                    <Avatar className="h-8 w-8 rounded-lg">
                                        <AvatarImage
                                            src={user.avatar}
                                            alt={user.name}
                                        />
                                        <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                                    </Avatar>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-semibold">
                                            {user.name}
                                        </span>
                                        <span className="truncate text-xs">
                                            {user.email}
                                        </span>
                                    </div>
                                    <ChevronsUpDown className="ml-auto size-4" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                                side="bottom"
                                align="end"
                                sideOffset={4}
                            >
                                <DropdownMenuLabel className="p-0 font-normal">
                                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                        <Avatar className="h-8 w-8 rounded-lg">
                                            <AvatarImage
                                                src={user.avatar}
                                                alt={user.name}
                                            />
                                            <AvatarFallback className="rounded-lg">
                                                CN
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="grid flex-1 text-left text-sm leading-tight">
                                            <span className="truncate font-semibold">
                                                {user.name}
                                            </span>
                                            <span className="truncate text-xs">
                                                {user.email}
                                            </span>
                                        </div>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <Sparkles />
                                        Upgrade to Pro
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <BadgeCheck />
                                        Account
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <CreditCard />
                                        Billing
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Bell />
                                        Notifications
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <LogOut />
                                    Log out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
