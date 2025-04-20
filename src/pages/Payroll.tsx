import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { DollarSign, CreditCard, FileText, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Payroll = () => {
  return (
    <DashboardLayout>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Payroll Management</h2>
        <div className="flex gap-2">
          <Button variant="outline">Download Slip</Button>
          <Button>Process Payroll</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Net Salary
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$5,240</div>
            <p className="text-xs text-muted-foreground">
              April 2025
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Last Payment
            </CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Mar 31</div>
            <p className="text-xs text-muted-foreground">
              Processed successfully
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              YTD Earnings
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$15,720</div>
            <p className="text-xs text-muted-foreground">
              Jan - Apr 2025
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pay Slips
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              Available slips
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Salary Breakdown</CardTitle>
            <CardDescription>April 2025</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Basic Salary</p>
                  <p className="text-sm text-muted-foreground">Base compensation</p>
                </div>
                <p className="font-medium">$4,000</p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Bonus</p>
                  <p className="text-sm text-muted-foreground">Performance bonus</p>
                </div>
                <p className="font-medium">$800</p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Allowances</p>
                  <p className="text-sm text-muted-foreground">Transport & Meal</p>
                </div>
                <p className="font-medium">$440</p>
              </div>
              <div className="flex items-center justify-between border-t pt-4">
                <div>
                  <p className="font-medium">Gross Salary</p>
                  <p className="text-sm text-muted-foreground">Before deductions</p>
                </div>
                <p className="font-medium">$5,240</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Pay Slips</CardTitle>
            <CardDescription>Download your salary statements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">March 2025</p>
                  <p className="text-sm text-muted-foreground">Processed on Mar 31</p>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant="outline" className="text-green-600">Paid</Badge>
                  <Button variant="outline" size="sm">Download</Button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">February 2025</p>
                  <p className="text-sm text-muted-foreground">Processed on Feb 28</p>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant="outline" className="text-green-600">Paid</Badge>
                  <Button variant="outline" size="sm">Download</Button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">January 2025</p>
                  <p className="text-sm text-muted-foreground">Processed on Jan 31</p>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant="outline" className="text-green-600">Paid</Badge>
                  <Button variant="outline" size="sm">Download</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Payroll;