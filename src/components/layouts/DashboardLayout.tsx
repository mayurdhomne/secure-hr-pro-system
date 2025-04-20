
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { 
  User, Users, UserCheck, Settings, Calendar, Clock, FileText, 
  BarChart, Briefcase, Award, BookOpen, Bell, LogOut 
} from "lucide-react";

import { cn } from "@/lib/utils";
import { useAuth, UserRole } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface SidebarItem {
  title: string;
  icon: React.ReactNode;
  href: string;
  roles: UserRole[];
  badge?: string;
}

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const sidebarItems: SidebarItem[] = [
  {
    title: "Dashboard",
    icon: <BarChart className="h-5 w-5" />,
    href: "/dashboard",
    roles: ["superAdmin", "hrAdmin", "employee", "intern"]
  },
  {
    title: "Employee Management",
    icon: <Users className="h-5 w-5" />,
    href: "/employees",
    roles: ["superAdmin", "hrAdmin"],
  },
  {
    title: "Attendance",
    icon: <Clock className="h-5 w-5" />,
    href: "/attendance",
    roles: ["superAdmin", "hrAdmin", "employee", "intern"],
  },
  {
    title: "Leave Management",
    icon: <Calendar className="h-5 w-5" />,
    href: "/leave",
    roles: ["superAdmin", "hrAdmin", "employee", "intern"],
    badge: "2"
  },
  {
    title: "Performance",
    icon: <Award className="h-5 w-5" />,
    href: "/performance",
    roles: ["superAdmin", "hrAdmin", "employee"],
  },
  {
    title: "Recruitment",
    icon: <UserCheck className="h-5 w-5" />,
    href: "/recruitment",
    roles: ["superAdmin", "hrAdmin"],
  },
  {
    title: "Training",
    icon: <BookOpen className="h-5 w-5" />,
    href: "/training",
    roles: ["superAdmin", "hrAdmin", "employee", "intern"],
  },
  {
    title: "Payroll",
    icon: <FileText className="h-5 w-5" />,
    href: "/payroll",
    roles: ["superAdmin", "hrAdmin", "employee"],
  },
  {
    title: "Settings",
    icon: <Settings className="h-5 w-5" />,
    href: "/settings",
    roles: ["superAdmin", "hrAdmin"],
  },
];

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  
  if (!user) {
    return <div>Loading...</div>;
  }

  const roleName = {
    superAdmin: "Super Admin",
    hrAdmin: "HR Admin",
    employee: "Employee",
    intern: "Intern",
  }[user.role];

  const filteredItems = sidebarItems.filter((item) => item.roles.includes(user.role));

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col fixed inset-y-0 z-50 border-r w-64 bg-sidebar">
        <div className="flex h-16 items-center px-4 border-b border-sidebar-border">
          <Link to="/dashboard" className="flex items-center gap-2 font-semibold text-lg text-sidebar-foreground">
            <Briefcase className="h-6 w-6" />
            <span>HR Pro System</span>
          </Link>
        </div>
        
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-2 gap-1">
            {filteredItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                  location.pathname.startsWith(item.href)
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                )}
              >
                {item.icon}
                <span>{item.title}</span>
                {item.badge && (
                  <Badge variant="secondary" className="ml-auto">
                    {item.badge}
                  </Badge>
                )}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="mt-auto p-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3 mb-1">
            <Avatar>
              <AvatarImage src={user.avatar} />
              <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm font-medium text-sidebar-foreground">{user.name}</p>
              <p className="text-xs text-sidebar-foreground/70">{roleName}</p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full justify-start mt-2 text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
            onClick={logout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b sticky top-0 bg-background z-40">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileSidebarOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>

        <div className="flex items-center gap-2">
          <Briefcase className="h-5 w-5" />
          <span className="font-semibold text-lg">HR Pro System</span>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user.avatar} />
                <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>
              <div className="flex flex-col">
                <span>{user.name}</span>
                <span className="text-xs text-muted-foreground">{roleName}</span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate("/profile")}>
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/settings")}>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Mobile Sidebar */}
      {isMobileSidebarOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 z-50 w-64 bg-sidebar border-r p-4 overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <Link to="/dashboard" className="flex items-center gap-2 font-semibold text-lg text-sidebar-foreground">
                <Briefcase className="h-6 w-6" />
                <span>HR Pro System</span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileSidebarOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </Button>
            </div>
            
            <Separator className="mb-4" />
            
            <div className="space-y-1">
              {filteredItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                    location.pathname.startsWith(item.href)
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                  )}
                  onClick={() => setIsMobileSidebarOpen(false)}
                >
                  {item.icon}
                  <span>{item.title}</span>
                  {item.badge && (
                    <Badge variant="secondary" className="ml-auto">
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              ))}
            </div>
            
            <Separator className="my-4" />
            
            <div className="mt-auto">
              <div className="flex items-center gap-3 mb-2">
                <Avatar>
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-sidebar-foreground">{user.name}</p>
                  <p className="text-xs text-sidebar-foreground/70">{roleName}</p>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start mt-2 text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                onClick={logout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </>
      )}

      {/* Main Content */}
      <div className="md:pl-64">
        <main className="p-4 md:p-6 max-w-7xl mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
