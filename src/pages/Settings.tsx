import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { Settings as SettingsIcon, Users, Bell, Shield, Database, Mail, Globe } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">System Settings</h2>
        <Button>Save Changes</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 mt-4">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <CardTitle>User Management</CardTitle>
            </div>
            <CardDescription>Configure user roles and permissions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Role-based Access Control</p>
                  <p className="text-sm text-muted-foreground">Enable role management</p>
                </div>
                <Switch checked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Two-Factor Authentication</p>
                  <p className="text-sm text-muted-foreground">Require 2FA for all users</p>
                </div>
                <Switch checked />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Bell className="h-4 w-4 text-muted-foreground" />
              <CardTitle>Notifications</CardTitle>
            </div>
            <CardDescription>Manage system notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">Send email alerts</p>
                </div>
                <Switch checked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">System Alerts</p>
                  <p className="text-sm text-muted-foreground">In-app notifications</p>
                </div>
                <Switch checked />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-muted-foreground" />
              <CardTitle>Security Settings</CardTitle>
            </div>
            <CardDescription>Configure security preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Password Policy</p>
                  <p className="text-sm text-muted-foreground">Enforce strong passwords</p>
                </div>
                <Switch checked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Session Timeout</p>
                  <p className="text-sm text-muted-foreground">Auto logout after inactivity</p>
                </div>
                <Switch checked />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Database className="h-4 w-4 text-muted-foreground" />
              <CardTitle>System Preferences</CardTitle>
            </div>
            <CardDescription>General system settings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Automatic Backups</p>
                  <p className="text-sm text-muted-foreground">Daily system backup</p>
                </div>
                <Switch checked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">System Maintenance</p>
                  <p className="text-sm text-muted-foreground">Schedule maintenance</p>
                </div>
                <Switch />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <CardTitle>Communication</CardTitle>
            </div>
            <CardDescription>Email and messaging settings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">SMTP Configuration</p>
                  <p className="text-sm text-muted-foreground">Email server settings</p>
                </div>
                <Switch checked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Message Templates</p>
                  <p className="text-sm text-muted-foreground">Custom email templates</p>
                </div>
                <Switch checked />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <CardTitle>Localization</CardTitle>
            </div>
            <CardDescription>Regional settings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Time Zone</p>
                  <p className="text-sm text-muted-foreground">Set system timezone</p>
                </div>
                <Switch checked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Date Format</p>
                  <p className="text-sm text-muted-foreground">Regional date format</p>
                </div>
                <Switch checked />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Settings;