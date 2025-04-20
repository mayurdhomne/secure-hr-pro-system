
import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  Users, Clock, Calendar, Award, FileText, BarChart, 
  TrendingUp, UserCheck, BookOpen, AlertTriangle, Check 
} from "lucide-react";

import { useAuth } from "@/context/AuthContext";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return <div>Loading...</div>;
  }

  const renderDashboardByRole = () => {
    switch (user.role) {
      case "superAdmin":
        return <SuperAdminDashboard />;
      case "hrAdmin":
        return <HRAdminDashboard />;
      case "employee":
        return <EmployeeDashboard />;
      case "intern":
        return <InternDashboard />;
      default:
        return <div>Unknown role</div>;
    }
  };

  return (
    <DashboardLayout>
      <div className="grid gap-4">
        {renderDashboardByRole()}
      </div>
    </DashboardLayout>
  );
};

const SuperAdminDashboard = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">System Overview</h2>
        <div className="flex gap-2">
          <Button variant="outline">Export Report</Button>
          <Button>System Settings</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Employees
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Attendance Rate
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92.5%</div>
            <p className="text-xs text-muted-foreground">
              +2.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Leave Utilization
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45%</div>
            <p className="text-xs text-muted-foreground">
              -3% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              System Health
            </CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Good</div>
            <p className="text-xs text-muted-foreground">
              All systems operational
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Department Statistics</CardTitle>
            <CardDescription>
              Employee distribution and performance metrics
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm font-medium">Engineering</span>
                  </div>
                  <span className="text-sm font-medium">420 employees</span>
                </div>
                <Progress value={34} />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="text-sm font-medium">Marketing</span>
                  </div>
                  <span className="text-sm font-medium">185 employees</span>
                </div>
                <Progress value={15} className="bg-muted [&>div]:bg-accent" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-sm font-medium">Sales</span>
                  </div>
                  <span className="text-sm font-medium">243 employees</span>
                </div>
                <Progress value={19} className="bg-muted [&>div]:bg-blue-400" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-sm font-medium">Finance</span>
                  </div>
                  <span className="text-sm font-medium">126 employees</span>
                </div>
                <Progress value={10} className="bg-muted [&>div]:bg-green-500" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span className="text-sm font-medium">Human Resources</span>
                  </div>
                  <span className="text-sm font-medium">85 employees</span>
                </div>
                <Progress value={7} className="bg-muted [&>div]:bg-purple-500" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                    <span className="text-sm font-medium">Operations</span>
                  </div>
                  <span className="text-sm font-medium">189 employees</span>
                </div>
                <Progress value={15} className="bg-muted [&>div]:bg-orange-400" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>System Modules</CardTitle>
            <CardDescription>
              Status of HR management modules
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Employee Management</span>
                </div>
                <Badge variant="outline" className="text-green-500 bg-green-50">Active</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Biometric Attendance</span>
                </div>
                <Badge variant="outline" className="text-green-500 bg-green-50">Active</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Leave Management</span>
                </div>
                <Badge variant="outline" className="text-green-500 bg-green-50">Active</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Performance</span>
                </div>
                <Badge variant="outline" className="text-green-500 bg-green-50">Active</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <UserCheck className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Recruitment</span>
                </div>
                <Badge variant="outline" className="text-green-500 bg-green-50">Active</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Payroll</span>
                </div>
                <Badge variant="outline" className="text-green-500 bg-green-50">Active</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Training</span>
                </div>
                <Badge variant="outline" className="text-yellow-500 bg-yellow-50">Upgrading</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent System Activities</CardTitle>
            <CardDescription>System-wide activity log</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-blue-100 p-2">
                  <Users className="h-4 w-4 text-blue-500" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">New employee records created</p>
                  <p className="text-xs text-muted-foreground">
                    HR Admin added 5 new employees to the system
                  </p>
                </div>
                <div className="text-xs text-muted-foreground">2 hours ago</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-green-100 p-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">System update completed</p>
                  <p className="text-xs text-muted-foreground">
                    Biometric attendance module updated to v2.4
                  </p>
                </div>
                <div className="text-xs text-muted-foreground">5 hours ago</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-red-100 p-2">
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Anomaly detected</p>
                  <p className="text-xs text-muted-foreground">
                    Multiple failed login attempts from IP 192.168.1.45
                  </p>
                </div>
                <div className="text-xs text-muted-foreground">1 day ago</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-purple-100 p-2">
                  <Check className="h-4 w-4 text-purple-500" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Data backup completed</p>
                  <p className="text-xs text-muted-foreground">
                    Weekly backup successfully completed
                  </p>
                </div>
                <div className="text-xs text-muted-foreground">1 day ago</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>System Resources</CardTitle>
            <CardDescription>Server usage and resources</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Database Storage</span>
                  <span className="text-sm font-medium">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">CPU Usage</span>
                  <span className="text-sm font-medium">34%</span>
                </div>
                <Progress value={34} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Memory</span>
                  <span className="text-sm font-medium">52%</span>
                </div>
                <Progress value={52} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Bandwidth</span>
                  <span className="text-sm font-medium">23%</span>
                </div>
                <Progress value={23} className="h-2" />
              </div>
              <div className="pt-2">
                <Button variant="outline" className="w-full">
                  View Server Details
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

const HRAdminDashboard = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">HR Dashboard</h2>
        <div className="flex gap-2">
          <Button variant="outline">Generate Reports</Button>
          <Button>Add Employee</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Employees
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground">
              +3 since yesterday
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Today's Attendance
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-xs text-muted-foreground">
              1,176 present of 1,248
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Open Leave Requests
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              8 pending approval
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Job Openings
            </CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              156 applications received
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Pending Leave Requests</CardTitle>
            <CardDescription>Requests awaiting approval</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatars/01.jpg" alt="Avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">Software Engineer</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm">Sick Leave</p>
                  <p className="text-xs text-muted-foreground">Apr 22 - Apr 24</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    <Check className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0 text-red-500">
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
                      className="h-4 w-4"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </Button>
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatars/02.jpg" alt="Avatar" />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Alice Smith</p>
                    <p className="text-xs text-muted-foreground">UX Designer</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm">Vacation</p>
                  <p className="text-xs text-muted-foreground">May 1 - May 10</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    <Check className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0 text-red-500">
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
                      className="h-4 w-4"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </Button>
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatars/03.jpg" alt="Avatar" />
                    <AvatarFallback>RJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Robert Johnson</p>
                    <p className="text-xs text-muted-foreground">Project Manager</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm">Personal Leave</p>
                  <p className="text-xs text-muted-foreground">Apr 26</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    <Check className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0 text-red-500">
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
                      className="h-4 w-4"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Employee Activities</CardTitle>
            <CardDescription>Latest activities across departments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-blue-100 p-2">
                  <Clock className="h-4 w-4 text-blue-500" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Attendance Verification</p>
                  <p className="text-xs text-muted-foreground">
                    26 employees verified via facial recognition
                  </p>
                </div>
                <div className="text-xs text-muted-foreground">10 min ago</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-green-100 p-2">
                  <FileText className="h-4 w-4 text-green-500" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Payroll Processed</p>
                  <p className="text-xs text-muted-foreground">
                    Monthly payroll processed for 1,248 employees
                  </p>
                </div>
                <div className="text-xs text-muted-foreground">1 hour ago</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-purple-100 p-2">
                  <UserCheck className="h-4 w-4 text-purple-500" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">New Employee Onboarded</p>
                  <p className="text-xs text-muted-foreground">
                    Sarah Mitchell joined as Senior Designer
                  </p>
                </div>
                <div className="text-xs text-muted-foreground">3 hours ago</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-orange-100 p-2">
                  <BookOpen className="h-4 w-4 text-orange-500" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Training Completed</p>
                  <p className="text-xs text-muted-foreground">
                    15 employees completed cybersecurity training
                  </p>
                </div>
                <div className="text-xs text-muted-foreground">5 hours ago</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Department Performance Overview</CardTitle>
            <CardDescription>Monthly performance metrics by department</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Engineering</p>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Good</Badge>
                  </div>
                  <Progress value={85} className="h-2" />
                  <p className="text-xs text-muted-foreground">85% of targets met</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Marketing</p>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Good</Badge>
                  </div>
                  <Progress value={92} className="h-2" />
                  <p className="text-xs text-muted-foreground">92% of targets met</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Sales</p>
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Average</Badge>
                  </div>
                  <Progress value={78} className="h-2" />
                  <p className="text-xs text-muted-foreground">78% of targets met</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Customer Support</p>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Good</Badge>
                  </div>
                  <Progress value={88} className="h-2" />
                  <p className="text-xs text-muted-foreground">88% of targets met</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

const EmployeeDashboard = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Employee Dashboard</h2>
        <Button variant="outline">View My Profile</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Attendance Status
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Present</div>
            <p className="text-xs text-muted-foreground">
              Clock in: 08:59 AM
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Leave Balance
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18 days</div>
            <p className="text-xs text-muted-foreground">
              5 days used this year
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Next Payroll
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Apr 30, 2025</div>
            <p className="text-xs text-muted-foreground">
              10 days from now
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Performance Score
            </CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2/5</div>
            <p className="text-xs text-muted-foreground">
              Last review: Feb 15, 2025
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Clock In/Out</CardTitle>
            <CardDescription>Mark your attendance</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-3xl font-bold mb-2">08:59:43 AM</div>
            <p className="text-sm text-muted-foreground mb-6">Monday, April 20, 2025</p>
            <div className="flex flex-col space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <Button variant="default" className="bg-green-600 hover:bg-green-700">
                  <Clock className="mr-2 h-4 w-4" />
                  Clock In
                </Button>
                <Button variant="outline" className="border-red-200 text-red-700 hover:bg-red-50">
                  <Clock className="mr-2 h-4 w-4" />
                  Clock Out
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Status: <span className="text-green-600">Clocked In at 08:59 AM</span>
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Leave</CardTitle>
            <CardDescription>Your scheduled time off</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-blue-100 p-2">
                  <Calendar className="h-4 w-4 text-blue-500" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Vacation</p>
                  <p className="text-xs text-muted-foreground">
                    May 15 - May 22, 2025
                  </p>
                </div>
                <Badge variant="outline" className="text-green-600">Approved</Badge>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-purple-100 p-2">
                  <Calendar className="h-4 w-4 text-purple-500" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Personal Day</p>
                  <p className="text-xs text-muted-foreground">
                    Jun 5, 2025
                  </p>
                </div>
                <Badge variant="outline" className="text-yellow-600">Pending</Badge>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t">
              <Button variant="outline" className="w-full">
                Request Leave
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Training Modules</CardTitle>
            <CardDescription>Your assigned learning paths</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Advanced React Patterns</p>
                  <span className="text-xs">75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Project Management</p>
                  <span className="text-xs">40%</span>
                </div>
                <Progress value={40} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Cybersecurity Essentials</p>
                  <span className="text-xs">100%</span>
                </div>
                <Progress value={100} className="h-2" />
              </div>
            </div>
            <div className="mt-4 pt-4 border-t">
              <Button variant="outline" className="w-full">
                Go to Learning Portal
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Attendance Summary</CardTitle>
            <CardDescription>Your attendance record for April 2025</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 30 }).map((_, i) => {
                const day = i + 1;
                const isToday = day === 20;
                const isPast = day < 20;
                
                const getStatus = () => {
                  if (day === 3 || day === 12) return "leave";
                  if (day === 5 || day === 19) return "weekend";
                  if (day === 9) return "late";
                  if (isPast || isToday) return "present";
                  return "future";
                };
                
                const status = getStatus();
                
                const getStyles = () => {
                  if (status === "present") return "bg-green-100 text-green-800 border-green-200";
                  if (status === "leave") return "bg-blue-100 text-blue-800 border-blue-200";
                  if (status === "weekend") return "bg-gray-100 text-gray-800 border-gray-200";
                  if (status === "late") return "bg-yellow-100 text-yellow-800 border-yellow-200";
                  return "bg-gray-50 text-gray-400 border-gray-100";
                };

                return (
                  <div
                    key={day}
                    className={`border rounded-md p-2 text-center ${getStyles()} ${
                      isToday ? "ring-2 ring-primary ring-offset-1" : ""
                    }`}
                  >
                    <div className="text-sm font-medium">{day}</div>
                    <div className="text-xs truncate">
                      {status === "present" && "Present"}
                      {status === "leave" && "Leave"}
                      {status === "weekend" && "Weekend"}
                      {status === "late" && "Late"}
                      {status === "future" && "-"}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center gap-6 mt-4 text-sm">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-green-100 border border-green-200 mr-2"></div>
                <span>Present</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-blue-100 border border-blue-200 mr-2"></div>
                <span>Leave</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-gray-100 border border-gray-200 mr-2"></div>
                <span>Weekend</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-yellow-100 border border-yellow-200 mr-2"></div>
                <span>Late</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

const InternDashboard = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Intern Dashboard</h2>
        <Button variant="outline">View My Profile</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Attendance Status
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Present</div>
            <p className="text-xs text-muted-foreground">
              Clock in: 09:15 AM
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Internship Duration
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3 months</div>
            <p className="text-xs text-muted-foreground">
              February 15 - May 15, 2025
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Training Progress
            </CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">65%</div>
            <p className="text-xs text-muted-foreground">
              7 of 12 modules completed
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Mentor
            </CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Kate Wilson</div>
            <p className="text-xs text-muted-foreground">
              Senior Marketing Manager
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Clock In/Out</CardTitle>
            <CardDescription>Mark your attendance</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-3xl font-bold mb-2">09:15:22 AM</div>
            <p className="text-sm text-muted-foreground mb-6">Monday, April 20, 2025</p>
            <div className="flex flex-col space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <Button variant="default" className="bg-green-600 hover:bg-green-700">
                  <Clock className="mr-2 h-4 w-4" />
                  Clock In
                </Button>
                <Button variant="outline" className="border-red-200 text-red-700 hover:bg-red-50">
                  <Clock className="mr-2 h-4 w-4" />
                  Clock Out
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Status: <span className="text-green-600">Clocked In at 09:15 AM</span>
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>My Tasks</CardTitle>
            <CardDescription>Assigned tasks and projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-blue-100 p-2">
                  <FileText className="h-4 w-4 text-blue-500" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Market Research Report</p>
                  <p className="text-xs text-muted-foreground">
                    Due: April 25, 2025
                  </p>
                </div>
                <Badge variant="outline" className="text-yellow-600">In Progress</Badge>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-purple-100 p-2">
                  <FileText className="h-4 w-4 text-purple-500" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Social Media Content</p>
                  <p className="text-xs text-muted-foreground">
                    Due: April 23, 2025
                  </p>
                </div>
                <Badge variant="outline" className="text-yellow-600">In Progress</Badge>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-green-100 p-2">
                  <FileText className="h-4 w-4 text-green-500" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Email Campaign</p>
                  <p className="text-xs text-muted-foreground">
                    Due: April 21, 2025
                  </p>
                </div>
                <Badge variant="outline" className="text-green-600">Completed</Badge>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t">
              <Button variant="outline" className="w-full">
                View All Tasks
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Training Modules</CardTitle>
            <CardDescription>Your assigned learning paths</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Marketing Fundamentals</p>
                  <span className="text-xs">100%</span>
                </div>
                <Progress value={100} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Social Media Strategy</p>
                  <span className="text-xs">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Content Creation</p>
                  <span className="text-xs">60%</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Email Marketing</p>
                  <span className="text-xs">25%</span>
                </div>
                <Progress value={25} className="h-2" />
              </div>
            </div>
            <div className="mt-4 pt-4 border-t">
              <Button variant="outline" className="w-full">
                Go to Learning Portal
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Internship Progress</CardTitle>
            <CardDescription>Your performance and milestone tracking</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Overall Progress</h3>
                  <span className="text-sm font-medium">65%</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium">Milestones</h3>
                <div className="grid gap-4">
                  <div className="flex items-center">
                    <div className="mr-4 h-8 w-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                      <Check className="h-5 w-5" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-sm font-medium">Orientation & Onboarding</p>
                      <p className="text-xs text-muted-foreground">Completed on Feb 15</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-4 h-8 w-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                      <Check className="h-5 w-5" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-sm font-medium">Initial Training</p>
                      <p className="text-xs text-muted-foreground">Completed on Mar 1</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-4 h-8 w-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                      <Check className="h-5 w-5" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-sm font-medium">First Project Completion</p>
                      <p className="text-xs text-muted-foreground">Completed on Mar 15</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-4 h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-sm font-medium">Mid-term Evaluation</p>
                      <p className="text-xs text-muted-foreground">In progress - Due Apr 25</p>
                    </div>
                  </div>
                  <div className="flex items-center opacity-50">
                    <div className="mr-4 h-8 w-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-sm font-medium">Final Presentation</p>
                      <p className="text-xs text-muted-foreground">Scheduled for May 10</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Dashboard;
