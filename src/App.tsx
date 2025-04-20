import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./pages/dashboard/Dashboard";
import AttendancePage from "./pages/AttendancePage";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import LeaveManagement from "./pages/LeaveManagement";
import Performance from "./pages/Performance";
import Recruitment from "./pages/Recruitment";
import Training from "./pages/Training";
import Payroll from "./pages/Payroll";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/hr/dashboard" element={<Dashboard />} />
            <Route path="/employee/dashboard" element={<Dashboard />} />
            <Route path="/intern/dashboard" element={<Dashboard />} />
            <Route path="/attendance" element={<AttendancePage />} />
            <Route path="/employees" element={<Dashboard />} />
            <Route path="/leave" element={<LeaveManagement />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/training" element={<Training />} />
            <Route path="/payroll" element={<Payroll />} />
            <Route path="/settings" element={<Settings />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
