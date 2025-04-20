
import React, { useState } from "react";
import { Calendar, Clock, Users, ArrowDown, ArrowUp } from "lucide-react";

import { useAuth } from "@/context/AuthContext";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import BiometricAttendance from "@/components/BiometricAttendance";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const AttendancePage = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<"mark" | "history" | "team">("mark");
  
  const isSuperAdminOrHR = user?.role === 'superAdmin' || user?.role === 'hrAdmin';
  
  return (
    <DashboardLayout>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Attendance Management</h2>
        {isSuperAdminOrHR && (
          <div className="flex gap-2">
            <Button variant="outline">Export Report</Button>
            <Button>Configure Settings</Button>
          </div>
        )}
      </div>
      
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as any)} className="mt-6">
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="mark">Mark Attendance</TabsTrigger>
          <TabsTrigger value="history">My History</TabsTrigger>
          {isSuperAdminOrHR && <TabsTrigger value="team">Team Attendance</TabsTrigger>}
          {!isSuperAdminOrHR && <TabsTrigger value="stats">Statistics</TabsTrigger>}
        </TabsList>
        
        <div className="mt-6">
          <TabsContent value="mark" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <BiometricAttendance />
              </div>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Today's Status</CardTitle>
                    <CardDescription>Your attendance record for today</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="mr-4 h-10 w-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                            <Clock className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium">Clock In</p>
                            <p className="text-sm text-muted-foreground">Today at 08:59 AM</p>
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Verified</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between opacity-50">
                        <div className="flex items-center">
                          <div className="mr-4 h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                            <Clock className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium">Clock Out</p>
                            <p className="text-sm text-muted-foreground">Not clocked out yet</p>
                          </div>
                        </div>
                        <Badge variant="outline">Pending</Badge>
                      </div>
                      
                      <div className="pt-4 border-t">
                        <p className="text-sm font-medium">Verification Method</p>
                        <p className="text-sm text-muted-foreground">Facial recognition</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Information</CardTitle>
                    <CardDescription>Attendance summary and policies</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-muted-foreground">Working Hours</p>
                          <p className="font-medium">8 hours/day</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-muted-foreground">Attendance Rate</p>
                          <p className="font-medium">96.5%</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-muted-foreground">Late Arrivals</p>
                          <p className="font-medium">2 this month</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-muted-foreground">Early Departures</p>
                          <p className="font-medium">1 this month</p>
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <Button variant="outline" className="w-full">View Policy</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="history" className="mt-0">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Attendance History</CardTitle>
                  <CardDescription>Your attendance records for the past month</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Input
                    type="month"
                    defaultValue="2025-04"
                    className="w-40"
                  />
                  <Button variant="outline" size="sm">Filter</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Working Days</p>
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <p className="text-2xl font-bold mt-2">22</p>
                        <p className="text-xs text-muted-foreground">of 22 days</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Present Days</p>
                          <Users className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <p className="text-2xl font-bold mt-2">21</p>
                        <p className="text-xs text-muted-foreground">95.5% attendance</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">On Time</p>
                          <ArrowUp className="h-4 w-4 text-green-600" />
                        </div>
                        <p className="text-2xl font-bold mt-2">19</p>
                        <p className="text-xs text-muted-foreground">90.5% punctuality</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Late Arrivals</p>
                          <ArrowDown className="h-4 w-4 text-red-600" />
                        </div>
                        <p className="text-2xl font-bold mt-2">2</p>
                        <p className="text-xs text-muted-foreground">9.5% of working days</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="rounded-md border">
                    <div className="grid grid-cols-5 bg-muted/50 p-3 text-sm font-medium">
                      <div>Date</div>
                      <div>Clock In</div>
                      <div>Clock Out</div>
                      <div>Working Hours</div>
                      <div>Status</div>
                    </div>
                    {Array.from({ length: 10 }).map((_, i) => {
                      // Generate mock data for past days
                      const date = new Date();
                      date.setDate(date.getDate() - i);
                      const day = date.toLocaleDateString("en-US", { 
                        month: "short", 
                        day: "numeric",
                        year: "numeric"
                      });
                      
                      // Weekend check
                      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
                      
                      // Random data for clock in (between 8:50 and 9:10)
                      const clockInHour = 8;
                      const clockInMin = Math.floor(Math.random() * 20) + 50;
                      const clockInTime = `${clockInHour}:${clockInMin.toString().padStart(2, "0")} AM`;
                      
                      // Random data for clock out (between 5:00 and 5:30)
                      const clockOutHour = 17;
                      const clockOutMin = Math.floor(Math.random() * 30);
                      const clockOutTime = `${clockOutHour - 12}:${clockOutMin.toString().padStart(2, "0")} PM`;
                      
                      // Calculate working hours
                      const workingHours = (clockOutHour - clockInHour) + (clockOutMin - clockInMin) / 60;
                      const workingHoursFormatted = workingHours.toFixed(1);
                      
                      // Status based on clock in time
                      let status;
                      if (isWeekend) {
                        status = <Badge className="bg-blue-100 text-blue-800">Weekend</Badge>;
                      } else if (i === 3) {
                        status = <Badge className="bg-blue-100 text-blue-800">Leave</Badge>;
                      } else if (clockInMin > 59) {
                        status = <Badge className="bg-yellow-100 text-yellow-800">Late</Badge>;
                      } else {
                        status = <Badge className="bg-green-100 text-green-800">Present</Badge>;
                      }
                      
                      return (
                        <div key={i} className="grid grid-cols-5 p-3 border-t text-sm">
                          <div>{day}</div>
                          <div>{isWeekend || i === 3 ? "-" : clockInTime}</div>
                          <div>{isWeekend || i === 3 ? "-" : clockOutTime}</div>
                          <div>{isWeekend || i === 3 ? "-" : `${workingHoursFormatted}h`}</div>
                          <div>{status}</div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="flex justify-center">
                    <Button variant="outline">Load More</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {isSuperAdminOrHR && (
            <TabsContent value="team" className="mt-0">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Team Attendance</CardTitle>
                    <CardDescription>Monitor your team's attendance records</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input placeholder="Search employee..." className="w-64" />
                    <Button variant="outline" size="sm">Search</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-md border overflow-hidden">
                      <div className="bg-muted/50 p-3 text-sm font-medium grid grid-cols-6">
                        <div>Employee</div>
                        <div>Department</div>
                        <div>Today's Status</div>
                        <div>Clock In</div>
                        <div>Clock Out</div>
                        <div>Actions</div>
                      </div>
                      
                      {Array.from({ length: 7 }).map((_, i) => {
                        const names = ["John Doe", "Alice Smith", "Robert Johnson", "Emily Davis", "Michael Wilson", "Sarah Brown", "David Miller"];
                        const departments = ["Engineering", "Marketing", "Finance", "HR", "Operations", "Customer Support", "Product"];
                        const statuses = ["Present", "Late", "Absent", "Leave", "Present", "Present", "On Leave"];
                        const statusColors = {
                          "Present": "bg-green-100 text-green-800",
                          "Late": "bg-yellow-100 text-yellow-800",
                          "Absent": "bg-red-100 text-red-800",
                          "Leave": "bg-blue-100 text-blue-800",
                          "On Leave": "bg-blue-100 text-blue-800"
                        };
                        
                        // Clock in times
                        const times = ["08:55 AM", "09:15 AM", "-", "-", "08:50 AM", "08:58 AM", "-"];
                        
                        // Clock out times (empty for those who haven't clocked out yet)
                        const outTimes = ["05:05 PM", "", "-", "-", "05:15 PM", "", "-"];
                        
                        return (
                          <div key={i} className="p-3 border-t grid grid-cols-6 items-center">
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarFallback>{names[i].split(" ").map(n => n[0]).join("")}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">{names[i]}</p>
                                <p className="text-sm text-muted-foreground">#{1000 + i}</p>
                              </div>
                            </div>
                            <div>{departments[i]}</div>
                            <div>
                              <Badge className={statusColors[statuses[i] as keyof typeof statusColors]}>
                                {statuses[i]}
                              </Badge>
                            </div>
                            <div>{times[i]}</div>
                            <div>{outTimes[i] || "-"}</div>
                            <div>
                              <Button variant="outline" size="sm">View Details</Button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-muted-foreground">Showing 7 of 248 employees</div>
                      <div className="flex gap-1">
                        <Button variant="outline" size="sm" disabled>Previous</Button>
                        <Button variant="outline" size="sm">Next</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          )}
          
          {!isSuperAdminOrHR && (
            <TabsContent value="stats" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Attendance Statistics</CardTitle>
                  <CardDescription>Your attendance patterns and analytics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Monthly Attendance Rate</h3>
                      <div className="h-[200px] bg-muted/30 rounded-md flex items-end justify-between px-4 py-6">
                        {Array.from({ length: 12 }).map((_, i) => {
                          const height = 30 + Math.floor(Math.random() * 60);
                          return (
                            <div key={i} className="flex flex-col items-center">
                              <div 
                                className="w-8 bg-primary/80 rounded-sm" 
                                style={{ height: `${height}%` }}
                              ></div>
                              <p className="text-xs mt-2">{["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i]}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Average Clock In Time</h3>
                        <Card className="border-dashed">
                          <CardContent className="p-6">
                            <div className="flex items-center justify-center gap-4">
                              <Clock className="h-12 w-12 text-primary/60" />
                              <div className="text-4xl font-bold">8:57 AM</div>
                            </div>
                            <p className="text-center text-muted-foreground text-sm mt-2">3 minutes before work hours</p>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Average Working Hours</h3>
                        <Card className="border-dashed">
                          <CardContent className="p-6">
                            <div className="flex items-center justify-center gap-4">
                              <Calendar className="h-12 w-12 text-primary/60" />
                              <div className="text-4xl font-bold">8.2h</div>
                            </div>
                            <p className="text-center text-muted-foreground text-sm mt-2">0.2h more than required</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          )}
        </div>
      </Tabs>
    </DashboardLayout>
  );
};

export default AttendancePage;
