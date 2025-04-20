import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { UserCheck, Users, FileText, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Recruitment = () => {
  return (
    <DashboardLayout>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Recruitment</h2>
        <div className="flex gap-2">
          <Button variant="outline">Export Report</Button>
          <Button>Post New Job</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Jobs
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              4 closing soon
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Applications
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">
              +23 this week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Interviews Scheduled
            </CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">
              Next 7 days
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Time to Hire
            </CardTitle>
            <Search className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18 days</div>
            <p className="text-xs text-muted-foreground">
              Average duration
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Recent Job Postings</CardTitle>
            <CardDescription>Active job listings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Senior Software Engineer</p>
                  <p className="text-sm text-muted-foreground">Engineering Department</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm">25 Applications</p>
                    <p className="text-xs text-muted-foreground">Posted 5 days ago</p>
                  </div>
                  <Badge>Active</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">UX Designer</p>
                  <p className="text-sm text-muted-foreground">Design Team</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm">18 Applications</p>
                    <p className="text-xs text-muted-foreground">Posted 3 days ago</p>
                  </div>
                  <Badge>Active</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Product Manager</p>
                  <p className="text-sm text-muted-foreground">Product Department</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm">32 Applications</p>
                    <p className="text-xs text-muted-foreground">Posted 7 days ago</p>
                  </div>
                  <Badge>Active</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Recruitment;