
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { Shield, Lock, UserCheck, Briefcase } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { useAuth, UserRole } from "@/context/AuthContext";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});

const Login = () => {
  const { toast } = useToast();
  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const [activeRole, setActiveRole] = useState<UserRole>("employee");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await login(values.email, values.password, activeRole);
      toast({
        title: "Success",
        description: "You have successfully logged in",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid credentials. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/20 via-background to-background flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary">HR Management System Pro</h1>
          <p className="text-muted-foreground mt-2">Secure access with role-based permissions</p>
        </div>

        <Card className="w-full shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Sign in</CardTitle>
            <CardDescription className="text-center">
              Choose your role to access the system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeRole} onValueChange={(value) => setActiveRole(value as UserRole)}>
              <TabsList className="grid grid-cols-4 mb-4">
                <TabsTrigger value="superAdmin" className="flex flex-col items-center py-2 gap-1">
                  <Shield className="h-4 w-4" />
                  <span className="text-xs">Super Admin</span>
                </TabsTrigger>
                <TabsTrigger value="hrAdmin" className="flex flex-col items-center py-2 gap-1">
                  <UserCheck className="h-4 w-4" />
                  <span className="text-xs">HR Admin</span>
                </TabsTrigger>
                <TabsTrigger value="employee" className="flex flex-col items-center py-2 gap-1">
                  <Briefcase className="h-4 w-4" />
                  <span className="text-xs">Employee</span>
                </TabsTrigger>
                <TabsTrigger value="intern" className="flex flex-col items-center py-2 gap-1">
                  <UserCheck className="h-4 w-4" />
                  <span className="text-xs">Intern</span>
                </TabsTrigger>
              </TabsList>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder={`${activeRole}@example.com`} 
                            {...field} 
                            type="email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input placeholder="••••••••" {...field} type="password" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Signing in..." : "Sign In"}
                  </Button>
                </form>
              </Form>
            </Tabs>
          </CardContent>
          <CardFooter>
            <p className="text-center text-sm text-muted-foreground w-full">
              For demo purposes, use credentials like 
              <span className="font-semibold text-primary"> {activeRole}@example.com</span> 
              with any password
            </p>
          </CardFooter>
        </Card>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Secure HR Management System Pro with Biometric Authentication
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
