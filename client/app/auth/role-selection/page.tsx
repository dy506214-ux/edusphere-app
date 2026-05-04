'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { 
  GraduationCap, 
  Users, 
  UserCircle, 
  Shield, 
  Calculator, 
  Bus,
  BookOpen,
  TrendingUp,
  Lock,
  Zap,
  BarChart3,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { Card } from '@/components/ui/card';

const roles = [
  {
    id: 'student',
    name: 'STUDENT',
    icon: GraduationCap,
    color: 'from-blue-500 to-blue-600',
    hoverColor: 'hover:from-blue-600 hover:to-blue-700',
    description: 'Access your learning resources and activities',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-600',
    route: '/auth/login/student'
  },
  {
    id: 'teacher',
    name: 'TEACHER',
    icon: Users,
    color: 'from-green-500 to-green-600',
    hoverColor: 'hover:from-green-600 hover:to-green-700',
    description: 'Manage classes, students and academic activities',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    textColor: 'text-green-600',
    route: '/auth/login/teacher'
  },
  {
    id: 'parent',
    name: 'PARENT',
    icon: UserCircle,
    color: 'from-orange-500 to-orange-600',
    hoverColor: 'hover:from-orange-600 hover:to-orange-700',
    description: "Track your child's performance and updates",
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    textColor: 'text-orange-600',
    route: '/auth/login/parent'
  },
  {
    id: 'admin',
    name: 'ADMIN',
    icon: Shield,
    color: 'from-purple-500 to-purple-600',
    hoverColor: 'hover:from-purple-600 hover:to-purple-700',
    description: 'Manage system settings, users and configurations',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-600',
    route: '/auth/login/admin'
  },
  {
    id: 'accountant',
    name: 'ACCOUNTANT',
    icon: Calculator,
    color: 'from-teal-500 to-teal-600',
    hoverColor: 'hover:from-teal-600 hover:to-teal-700',
    description: 'Manage fees, invoices and financial records',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    textColor: 'text-teal-600',
    route: '/auth/login/accountant'
  },
  {
    id: 'transport',
    name: 'TRANSPORT MANAGER',
    icon: Bus,
    color: 'from-red-500 to-red-600',
    hoverColor: 'hover:from-red-600 hover:to-red-700',
    description: 'Manage vehicles, routes and transportation',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    textColor: 'text-red-600',
    route: '/auth/login/transport'
  }
];

const features = [
  { icon: Lock, text: 'Secure Data Protection' },
  { icon: Zap, text: 'AI-Powered Analytics & Insights' },
  { icon: BookOpen, text: 'Integrated All Modules' },
  { icon: Clock, text: 'Real-time Live Updates' },
  { icon: BarChart3, text: 'Scalable Future Ready' },
  { icon: GraduationCap, text: 'Smart Digital Campus' }
];

const workflowSteps = [
  { label: 'Role Selection', icon: Users },
  { label: 'Role-wise Login', icon: Lock },
  { label: 'Dashboard Access', icon: BarChart3 },
  { label: 'Module Selection', icon: BookOpen },
  { label: 'Perform Actions', icon: CheckCircle2 },
  { label: 'Reports & Analytics', icon: TrendingUp }
];

export default function RoleSelectionPage() {
  const router = useRouter();

  const handleRoleSelect = (route: string) => {
    router.push(route);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white py-6 shadow-2xl"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="bg-white/10 backdrop-blur-sm p-3 rounded-xl"
              >
                <GraduationCap className="h-10 w-10" />
              </motion.div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">SMART SCHOOL MANAGEMENT SYSTEM</h1>
                <p className="text-yellow-300 text-sm font-semibold mt-1">
                  ROLE SELECTION → ROLE-WISE LOGIN
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Features Bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="bg-white border-b shadow-sm py-4"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-2 text-sm"
              >
                <feature.icon className="h-5 w-5 text-blue-600" />
                <span className="text-slate-700 font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Role Selection Card */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Card className="p-8 shadow-2xl border-2 border-slate-200 bg-white">
              <div className="text-center mb-8">
                <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-bold text-lg mb-4">
                  1. ROLE SELECTION
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Choose Your Role</h2>
                <p className="text-slate-600">Select your role to continue</p>
              </div>

              <div className="space-y-3">
                {roles.map((role, index) => (
                  <motion.button
                    key={role.id}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.03, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleRoleSelect(role.route)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 ${role.borderColor} ${role.bgColor} transition-all duration-300 hover:shadow-lg group`}
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${role.color} text-white group-hover:scale-110 transition-transform`}>
                      <role.icon className="h-6 w-6" />
                    </div>
                    <span className={`font-bold text-left ${role.textColor}`}>
                      {role.name}
                    </span>
                  </motion.button>
                ))}
              </div>

              <div className="mt-8 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <Shield className="h-4 w-4" />
                  <span className="font-medium">Secure • Smart • Reliable</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Login Forms Preview */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-bold text-lg mb-4">
                2. ROLE-WISE LOGIN
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Login based on selected role</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {roles.map((role, index) => (
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="cursor-pointer"
                  onClick={() => handleRoleSelect(role.route)}
                >
                  <Card className="p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-300 bg-white">
                    <div className="text-center mb-4">
                      <div className={`inline-block p-4 rounded-full bg-gradient-to-br ${role.color} text-white mb-3`}>
                        <role.icon className="h-8 w-8" />
                      </div>
                      <h3 className={`font-bold text-lg ${role.textColor} mb-1`}>
                        {role.name} LOGIN
                      </h3>
                      <p className="text-sm text-slate-600">{role.description}</p>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <label className="text-xs font-semibold text-slate-600 mb-1 block">
                          {role.id === 'parent' ? 'Mobile Number / Email' : 
                           role.id === 'transport' ? 'Mobile Number / Username' :
                           role.id === 'accountant' ? 'Accountant ID / Username' :
                           role.id === 'admin' ? 'Admin ID / Username' :
                           role.id === 'teacher' ? 'Teacher ID / Username' :
                           'Student ID / Username'}
                        </label>
                        <div className="h-9 bg-slate-50 border border-slate-200 rounded-lg"></div>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-slate-600 mb-1 block">Password</label>
                        <div className="h-9 bg-slate-50 border border-slate-200 rounded-lg"></div>
                      </div>
                      <div className="text-xs text-blue-600 hover:underline cursor-pointer">
                        Forgot Password?
                      </div>
                      <button 
                        className={`w-full py-2.5 rounded-lg bg-gradient-to-r ${role.color} ${role.hoverColor} text-white font-bold transition-all duration-300 hover:shadow-lg`}
                      >
                        LOGIN
                      </button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Workflow Summary */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12"
        >
          <Card className="p-8 shadow-xl bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white">
            <h3 className="text-center text-xl font-bold mb-6">WORKFLOW SUMMARY</h3>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {workflowSteps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg mb-2">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-medium text-center max-w-[100px]">{step.label}</span>
                  </motion.div>
                  {index < workflowSteps.length - 1 && (
                    <div className="mx-2 text-2xl text-white/50">→</div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white py-6 mt-12"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <BookOpen className="h-5 w-5" />
            <span className="font-bold">DIGITAL SCHOOL • SMARTER EDUCATION • BETTER FUTURE</span>
            <GraduationCap className="h-5 w-5" />
          </div>
          <p className="text-sm text-slate-300">Secure • Smart • Reliable School Management System</p>
        </div>
      </motion.footer>
    </div>
  );
}
