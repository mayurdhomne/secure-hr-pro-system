# Secure HR Pro System

A modern, secure, and comprehensive Human Resource Management System built with React, TypeScript, and Tailwind CSS. This system streamlines HR operations with features for employee management, attendance tracking, leave management, and more.

## Features

### Employee Management
- Complete employee profile management
- Role-based access control (Super Admin, HR Admin, Employee, Intern)
- Employee onboarding and offboarding workflows
- Document management

### Attendance Management
- Biometric attendance tracking
- Real-time attendance monitoring
- Attendance reports and analytics
- Work hour calculations

### Leave Management
- Multiple leave types (Annual, Sick, Personal, etc.)
- Leave request and approval workflow
- Leave balance tracking
- Calendar integration

### Performance Management
- Performance review cycles
- Goal setting and tracking
- Feedback management
- Performance metrics and analytics

### Training & Development
- Training program management
- Course enrollment and tracking
- Skill development monitoring
- Training effectiveness assessment

### Payroll Management
- Salary processing
- Tax calculations
- Deduction management
- Payslip generation

### Recruitment
- Job posting management
- Candidate tracking
- Interview scheduling
- Hiring workflow

## Technology Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS with Shadcn UI components
- **Build Tool**: Vite
- **State Management**: React Context
- **Date Handling**: date-fns
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone (https://github.com/mayurdhomne/secure-hr-pro-system)
cd secure-hr-pro-system
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Default Login Credentials

- Super Admin: superadmin@example.com
- HR Admin: hradmin@example.com
- Employee: employee@example.com
- Intern: intern@example.com

## Project Structure

```
src/
  ├── components/     # Reusable UI components
  ├── context/        # React Context providers
  ├── hooks/          # Custom React hooks
  ├── lib/            # Utility functions
  ├── pages/          # Application pages/routes
  └── styles/         # Global styles and Tailwind config
```

## Security Features

- Role-based access control
- Secure authentication flow
- Protected routes
- Input validation and sanitization
- Session management

## License

This project is licensed under the MIT License - see the LICENSE file for details.
