import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { Calendar, Clock, Users, Check, X, AlertCircle } from "lucide-react";
import { LeaveRequestDialog } from "@/components/LeaveRequestDialog";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAuth } from "@/context/AuthContext";
import { format } from "date-fns";

const LeaveManagement = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { user } = useAuth();
  
  // Mock leave requests data
  const leaveRequests = [
    {
      id: 1,
      type: "Annual Leave",
      startDate: new Date(2024, 3, 15),
      endDate: new Date(2024, 3, 20),
      status: "approved",
      reason: "Family vacation",
    },
    {
      id: 2,
      type: "Sick Leave",
      startDate: new Date(2024, 3, 10),
      endDate: new Date(2024, 3, 12),
      status: "pending",
      reason: "Medical appointment",
    },
    {
      id: 3,
      type: "Personal Leave",
      startDate: new Date(2024, 3, 5),
      endDate: new Date(2024, 3, 5),
      status: "rejected",
      reason: "Personal matters",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-100 text-green-800">Approved</Badge>;
      case "rejected":
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>;
      default:
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
    }
  };

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Leave Management</h2>
        <div className="flex gap-2">
          <Button variant="outline">Export Report</Button>
          <Button onClick={() => setIsDialogOpen(true)}>Request Leave</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4">
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
              Pending Requests
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              Awaiting approval
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Team on Leave
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Currently on leave
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Upcoming Leaves
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">
              Next 30 days
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Leave Requests</CardTitle>
          <CardDescription>View and manage your leave requests</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Status</TableHead>
                {user?.role === "hrAdmin" && <TableHead>Actions</TableHead>}
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaveRequests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell>{request.type}</TableCell>
                  <TableCell>{format(request.startDate, "MMM dd, yyyy")}</TableCell>
                  <TableCell>{format(request.endDate, "MMM dd, yyyy")}</TableCell>
                  <TableCell>{request.reason}</TableCell>
                  <TableCell>{getStatusBadge(request.status)}</TableCell>
                  {user?.role === "hrAdmin" && (
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 w-8 p-0"
                          disabled={request.status !== "pending"}
                        >
                          <Check className="h-4 w-4 text-green-600" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 w-8 p-0"
                          disabled={request.status !== "pending"}
                        >
                          <X className="h-4 w-4 text-red-600" />
                        </Button>
                      </div>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <LeaveRequestDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </DashboardLayout>
  );
};

export default LeaveManagement;