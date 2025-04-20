import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { BookOpen, GraduationCap, Trophy, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Training = () => {
  return (
    <DashboardLayout>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Training & Development</h2>
        <div className="flex gap-2">
          <Button variant="outline">View Calendar</Button>
          <Button>Browse Courses</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Courses In Progress
            </CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              2 due this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Completed Courses
            </CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              This year
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Certifications
            </CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">
              Active certifications
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Learning Hours
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45h</div>
            <p className="text-xs text-muted-foreground">
              Last 30 days
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Current Courses</CardTitle>
            <CardDescription>Your active learning paths</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Advanced React Patterns</p>
                  <Badge variant="outline">In Progress</Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <p>Technical</p>
                  <p>75% Complete</p>
                </div>
                <Progress value={75} />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Project Management Essentials</p>
                  <Badge variant="outline">In Progress</Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <p>Management</p>
                  <p>40% Complete</p>
                </div>
                <Progress value={40} />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Data Security Fundamentals</p>
                  <Badge variant="outline">In Progress</Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <p>Security</p>
                  <p>60% Complete</p>
                </div>
                <Progress value={60} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recommended Courses</CardTitle>
            <CardDescription>Based on your role and interests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Leadership Skills</p>
                  <p className="text-sm text-muted-foreground">Management Track</p>
                </div>
                <Button variant="outline" size="sm">Enroll</Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Cloud Architecture</p>
                  <p className="text-sm text-muted-foreground">Technical Track</p>
                </div>
                <Button variant="outline" size="sm">Enroll</Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Agile Methodologies</p>
                  <p className="text-sm text-muted-foreground">Process Track</p>
                </div>
                <Button variant="outline" size="sm">Enroll</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Training;