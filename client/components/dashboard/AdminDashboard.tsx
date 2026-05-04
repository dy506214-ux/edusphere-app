'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { useAuth } from '@/contexts/auth-context';
import {
  // Academic
  CalendarCheck,
  BookOpen,
  Video,
  ClipboardList,
  FileQuestion,
  FileText,
  BarChart3,
  UserCheck,
  CalendarDays,
  // Communication
  Bell,
  MessageSquare,
  MessagesSquare,
  // Profile
  User,
  Lock,
  Settings,
  // Other
  Library,
  Download,
  CreditCard,
  Star,
  Trophy,
  Award,
  // KPI / misc
  AlertCircle,
  Clock,
  TrendingUp,
  ArrowRight,
  GraduationCap,
  Layers,
  Wifi,
  CheckCircle2,
  BookMarked,
  Newspaper,
  PenLine,
  Medal,
  Wallet,
  FolderOpen,
  Activity,
} from 'lucide-react';

// â”€â”€â”€ Types â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

interface AdminDashboardProps {
  stats?: any;
  recentActivities?: any[];
  upcomingExams?: any[];
  studentProfile?: any;
}

// â”€â”€â”€ Animation variants â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.35, ease: 'easeOut' },
  }),
};

const tabContent = {
  hidden: { opacity: 0, x: 12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.28, ease: 'easeOut' } },
  exit: { opacity: 0, x: -12, transition: { duration: 0.18 } },
};

// â”€â”€â”€ Feature card sub-component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  badge?: string;
  badgeVariant?: 'default' | 'secondary' | 'destructive' | 'outline';
  gradient?: string;
  index?: number;
}

function FeatureCard({
  icon,
  title,
  description,
  href,
  badge,
  badgeVariant = 'secondary',
  gradient = 'from-blue-50 to-indigo-50',
  index = 0,
}: FeatureCardProps) {
  return (
    <motion.div custom={index} variants={fadeUp} initial="hidden" animate="visible">
      <Link href={href} className="block group">
        <Card className="h-full border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden">
          <CardContent className="p-5">
            <div className="flex items-start gap-4">
              <div className={`rounded-xl bg-gradient-to-br ${gradient} p-3 shrink-0 group-hover:scale-105 transition-transform duration-200`}>
                {icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-slate-800 text-sm leading-tight">{title}</h3>
                  {badge && (
                    <Badge variant={badgeVariant} className="text-xs shrink-0">
                      {badge}
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-purple-500 group-hover:translate-x-1 transition-all duration-200 shrink-0 mt-0.5" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

// â”€â”€â”€ KPI card sub-component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

interface KpiCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  sub?: string;
  gradient: string;
  iconBg: string;
  progress?: number;
  index?: number;
}

function KpiCard({ icon, label, value, sub, gradient, iconBg, progress, index = 0 }: KpiCardProps) {
  return (
    <motion.div custom={index} variants={fadeUp} initial="hidden" animate="visible">
      <Card className={`border-0 bg-gradient-to-br ${gradient} shadow-sm hover:shadow-md transition-shadow duration-200`}>
        <CardContent className="p-5">
          <div className="flex items-center justify-between mb-3">
            <div className={`rounded-xl ${iconBg} p-2.5`}>{icon}</div>
            {sub && <span className="text-xs text-slate-500 font-medium">{sub}</span>}
          </div>
          <div className="text-2xl font-bold text-slate-800 mb-0.5">{value}</div>
          <div className="text-xs text-slate-500 font-medium">{label}</div>
          {progress !== undefined && (
            <div className="mt-3">
              <Progress value={progress} className="h-1.5" />
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

// â”€â”€â”€ Main Component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export function AdminDashboard({
  stats,
  recentActivities = [],
  upcomingExams = [],
  studentProfile,
}: AdminDashboardProps) {
  const { user } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  const firstName = studentProfile?.firstName || user?.firstName || 'Student';
  const lastName = studentProfile?.lastName || user?.lastName || '';
  const fullName = `${firstName} ${lastName}`.trim();
  const className = studentProfile?.className || stats?.className || 'N/A';
  const rollNo = studentProfile?.rollNo || stats?.rollNo || 'â€”';

  const attendancePct = stats?.attendancePercentage ?? 87;
  const pendingFees = stats?.pendingFees ?? 0;
  const booksDue = stats?.booksDue ?? 0;
  const nextExam = stats?.nextExam ?? upcomingExams?.[0] ?? null;
  const today = new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="space-y-6">
      {/* â”€â”€ Welcome Header â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 via-purple-500 to-violet-600 p-6 text-white shadow-lg"
      >
        {/* decorative circles */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10" />
        <div className="pointer-events-none absolute -bottom-8 right-24 h-32 w-32 rounded-full bg-white/5" />

        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <GraduationCap className="h-5 w-5 text-purple-200" />
              <span className="text-purple-200 text-sm font-medium">Admin Portal</span>
            </div>
            <h1 className="text-2xl font-bold">Welcome back, {firstName}! ðŸ‘‹</h1>
            <p className="text-blue-100 text-sm mt-1">{today}</p>
            <div className="flex items-center gap-3 mt-3">
              {className !== 'N/A' && (
                <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  Class: {className}
                </Badge>
              )}
              {rollNo !== 'â€”' && (
                <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  Roll No: {rollNo}
                </Badge>
              )}
            </div>
          </div>
          <div className="flex gap-2 shrink-0">
            <Button
              variant="outline"
              size="sm"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              onClick={() => router.push('/dashboard/profile')}
            >
              <User className="h-4 w-4 mr-1.5" />
              My Profile
            </Button>
            <Button
              size="sm"
              className="bg-white text-purple-600 hover:bg-purple-50"
              onClick={() => router.push('/dashboard/academic/timetable')}
            >
              <CalendarDays className="h-4 w-4 mr-1.5" />
              Timetable
            </Button>
          </div>
        </div>
      </motion.div>

      {/* â”€â”€ Tabs â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-5">
        <TabsList className="flex flex-wrap h-auto gap-1 bg-slate-100 p-1 rounded-xl">
          {[
            { value: 'overview', label: 'Overview' },
            { value: 'academic', label: 'Academic' },
            { value: 'communication', label: 'Communication' },
            { value: 'profile', label: 'Profile & Account' },
            { value: 'other', label: 'Other Features' },
          ].map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="rounded-lg text-sm data-[state=active]:bg-white data-[state=active]:text-purple-600 data-[state=active]:shadow-sm px-4 py-2"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* â”€â”€ OVERVIEW TAB â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <TabsContent value="overview" asChild>
          <AnimatePresence mode="wait">
            <motion.div key="overview" variants={tabContent} initial="hidden" animate="visible" exit="exit" className="space-y-6">
              {/* KPI Cards */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <KpiCard
                  index={0}
                  icon={<CalendarCheck className="h-5 w-5 text-purple-600" />}
                  label="Attendance This Month"
                  value={`${attendancePct}%`}
                  sub={attendancePct >= 75 ? 'âœ“ Good' : 'âš  Low'}
                  gradient="from-purple-50 to-purple-100"
                  iconBg="bg-purple-100"
                  progress={attendancePct}
                />
                <KpiCard
                  index={1}
                  icon={<AlertCircle className="h-5 w-5 text-orange-600" />}
                  label="Pending Fees"
                  value={pendingFees > 0 ? `â‚¹${pendingFees.toLocaleString()}` : 'Nil'}
                  sub={pendingFees > 0 ? 'Due' : 'Cleared'}
                  gradient="from-orange-50 to-amber-50"
                  iconBg="bg-orange-100"
                />
                <KpiCard
                  index={2}
                  icon={<BookMarked className="h-5 w-5 text-pink-600" />}
                  label="Library Books Due"
                  value={booksDue}
                  sub={booksDue > 0 ? 'Return soon' : 'All clear'}
                  gradient="from-pink-50 to-rose-50"
                  iconBg="bg-pink-100"
                />
                <KpiCard
                  index={3}
                  icon={<Clock className="h-5 w-5 text-purple-600" />}
                  label="Next Exam"
                  value={nextExam ? nextExam.name ?? 'Upcoming' : 'None'}
                  sub={
                    nextExam
                      ? new Date(nextExam.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })
                      : 'No exams scheduled'
                  }
                  gradient="from-purple-50 to-violet-50"
                  iconBg="bg-purple-100"
                />
              </div>

              {/* Quick Actions */}
              <div>
                <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Quick Actions</h2>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    { label: 'View Timetable', href: '/dashboard/academic/timetable', icon: <CalendarDays className="h-4 w-4" />, color: 'bg-purple-500 hover:bg-purple-600' },
                    { label: 'My Assignments', href: '/dashboard/assignments', icon: <ClipboardList className="h-4 w-4" />, color: 'bg-indigo-500 hover:bg-indigo-600' },
                    { label: 'Exam Schedule', href: '/dashboard/exams', icon: <FileText className="h-4 w-4" />, color: 'bg-violet-500 hover:bg-violet-600' },
                    { label: 'Attendance', href: '/dashboard/attendance/student', icon: <UserCheck className="h-4 w-4" />, color: 'bg-teal-500 hover:bg-teal-600' },
                  ].map((action, i) => (
                    <motion.div key={action.href} custom={i} variants={fadeUp} initial="hidden" animate="visible">
                      <Link href={action.href}>
                        <Button className={`w-full justify-start gap-2 text-white ${action.color} transition-colors`}>
                          {action.icon}
                          {action.label}
                        </Button>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Recent Activities + Upcoming Exams */}
              <div className="grid gap-4 lg:grid-cols-7">
                <Card className="lg:col-span-4">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Activity className="h-4 w-4 text-purple-500" />
                      Recent Activities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {recentActivities.length === 0 ? (
                      <div className="flex flex-col items-center justify-center py-8 text-slate-400">
                        <Activity className="h-8 w-8 mb-2 opacity-40" />
                        <p className="text-sm">No recent activities</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {recentActivities.slice(0, 6).map((activity: any, i: number) => (
                          <div key={activity.id ?? i} className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                            <div className="mt-0.5 h-2 w-2 rounded-full bg-blue-400 shrink-0" />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-slate-700 leading-snug">{activity.description}</p>
                              <p className="text-xs text-slate-400 mt-0.5">{activity.time}</p>
                            </div>
                            <Badge variant="secondary" className="text-xs shrink-0">{activity.type}</Badge>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card className="lg:col-span-3">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                      <FileText className="h-4 w-4 text-purple-500" />
                      Upcoming Exams
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {upcomingExams.length === 0 ? (
                      <div className="flex flex-col items-center justify-center py-8 text-slate-400">
                        <FileText className="h-8 w-8 mb-2 opacity-40" />
                        <p className="text-sm">No upcoming exams</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {upcomingExams.slice(0, 5).map((exam: any, i: number) => {
                          const daysLeft = Math.ceil(
                            (new Date(exam.date).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
                          );
                          return (
                            <div key={exam.id ?? i} className="flex items-center justify-between rounded-lg border border-slate-100 p-3 hover:border-purple-200 hover:bg-purple-50/30 transition-colors">
                              <div className="min-w-0">
                                <p className="font-medium text-sm text-slate-800 truncate">{exam.name}</p>
                                <p className="text-xs text-slate-400">{exam.subject ?? exam.class ?? ''}</p>
                              </div>
                              <div className="text-right shrink-0 ml-3">
                                <p className="text-sm font-bold text-slate-700">
                                  {new Date(exam.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                                </p>
                                <Badge
                                  variant={daysLeft <= 3 ? 'destructive' : daysLeft <= 7 ? 'default' : 'secondary'}
                                  className="text-xs mt-0.5"
                                >
                                  {daysLeft > 0 ? `${daysLeft}d left` : 'Today'}
                                </Badge>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                    <div className="mt-3 pt-3 border-t">
                      <Link href="/dashboard/exams">
                        <Button variant="ghost" size="sm" className="w-full text-purple-600 hover:text-purple-700 hover:bg-purple-50">
                          View All Exams <ArrowRight className="h-3.5 w-3.5 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </AnimatePresence>
        </TabsContent>

        {/* â”€â”€ ACADEMIC TAB â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <TabsContent value="academic" asChild>
          <AnimatePresence mode="wait">
            <motion.div key="academic" variants={tabContent} initial="hidden" animate="visible" exit="exit" className="space-y-6">
              <div>
                <h2 className="text-base font-semibold text-slate-700 mb-1">Academic Features</h2>
                <p className="text-sm text-slate-400 mb-4">Access all your academic resources and tools in one place.</p>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  <FeatureCard
                    index={0}
                    icon={<CalendarDays className="h-5 w-5 text-purple-600" />}
                    title="Class & Timetable"
                    description="View your weekly class schedule, room assignments, and subject timings."
                    href="/dashboard/academic/timetable"
                    gradient="from-purple-50 to-purple-100"
                  />
                  <FeatureCard
                    index={1}
                    icon={<Library className="h-5 w-5 text-indigo-600" />}
                    title="Study Materials / E-Library"
                    description="Access textbooks, notes, PDFs, and digital resources shared by teachers."
                    href="/dashboard/library"
                    badge="New"
                    badgeVariant="default"
                    gradient="from-indigo-50 to-indigo-100"
                  />
                  <FeatureCard
                    index={2}
                    icon={<Video className="h-5 w-5 text-violet-600" />}
                    title="Online Classes & Live Sessions"
                    description="Join live virtual classes, watch recorded sessions, and access online learning."
                    href="/dashboard/academic"
                    badge="Live"
                    badgeVariant="destructive"
                    gradient="from-violet-50 to-purple-100"
                  />
                  <FeatureCard
                    index={3}
                    icon={<ClipboardList className="h-5 w-5 text-emerald-600" />}
                    title="Assignments & Submissions"
                    description="View pending assignments, submit work, and track submission status."
                    href="/dashboard/assignments"
                    gradient="from-emerald-50 to-green-100"
                  />
                  <FeatureCard
                    index={4}
                    icon={<FileQuestion className="h-5 w-5 text-amber-600" />}
                    title="Quiz & Assessments"
                    description="Take online quizzes, practice tests, and view your assessment history."
                    href="/dashboard/exams"
                    gradient="from-amber-50 to-yellow-100"
                  />
                  <FeatureCard
                    index={5}
                    icon={<FileText className="h-5 w-5 text-rose-600" />}
                    title="Exam Schedule & Admit Card"
                    description="Check upcoming exam dates, download your admit card, and view hall tickets."
                    href="/dashboard/exams"
                    gradient="from-rose-50 to-pink-100"
                  />
                  <FeatureCard
                    index={6}
                    icon={<BarChart3 className="h-5 w-5 text-cyan-600" />}
                    title="Results & Grade Card"
                    description="View your exam results, grade cards, and academic performance reports."
                    href="/dashboard/exams/results"
                    gradient="from-cyan-50 to-sky-100"
                  />
                  <FeatureCard
                    index={7}
                    icon={<UserCheck className="h-5 w-5 text-teal-600" />}
                    title="Attendance & Leave Status"
                    description="Track your daily attendance, apply for leave, and view leave history."
                    href="/dashboard/attendance/student"
                    gradient="from-teal-50 to-emerald-100"
                  />
                  <FeatureCard
                    index={8}
                    icon={<CalendarCheck className="h-5 w-5 text-purple-700" />}
                    title="Academic Calendar"
                    description="View holidays, events, exam schedules, and important academic dates."
                    href="/dashboard/calendar"
                    gradient="from-blue-50 to-indigo-100"
                  />
                </div>
              </div>

              {/* Attendance Progress Section */}
              <Card className="border border-slate-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-purple-500" />
                    Attendance Overview
                  </CardTitle>
                  <CardDescription>Your attendance status for the current academic period</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600 font-medium">Overall Attendance</span>
                      <span className={`font-bold ${attendancePct >= 75 ? 'text-green-600' : 'text-red-500'}`}>
                        {attendancePct}%
                      </span>
                    </div>
                    <Progress value={attendancePct} className="h-2.5" />
                    <div className="flex items-center gap-2">
                      {attendancePct >= 75 ? (
                        <Badge className="bg-green-100 text-green-700 border-green-200">
                          <CheckCircle2 className="h-3 w-3 mr-1" /> Good Standing
                        </Badge>
                      ) : (
                        <Badge variant="destructive">
                          <AlertCircle className="h-3 w-3 mr-1" /> Below Minimum (75%)
                        </Badge>
                      )}
                      <Link href="/dashboard/attendance/student">
                        <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700 h-7 px-2">
                          View Details <ArrowRight className="h-3 w-3 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </TabsContent>

        {/* â”€â”€ COMMUNICATION TAB â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <TabsContent value="communication" asChild>
          <AnimatePresence mode="wait">
            <motion.div key="communication" variants={tabContent} initial="hidden" animate="visible" exit="exit" className="space-y-6">
              <div>
                <h2 className="text-base font-semibold text-slate-700 mb-1">Communication</h2>
                <p className="text-sm text-slate-400 mb-4">Stay connected with teachers, admin, and your peers.</p>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  <FeatureCard
                    index={0}
                    icon={<Newspaper className="h-5 w-5 text-purple-600" />}
                    title="Notice Board / Announcements"
                    description="Read important school announcements, circulars, and notices from administration."
                    href="/dashboard/announcements"
                    badge="New"
                    badgeVariant="default"
                    gradient="from-purple-50 to-purple-100"
                  />
                  <FeatureCard
                    index={1}
                    icon={<MessageSquare className="h-5 w-5 text-green-600" />}
                    title="Message to Teachers / Admin"
                    description="Send direct messages to your teachers or school administration for queries."
                    href="/dashboard/announcements"
                    gradient="from-green-50 to-emerald-100"
                  />
                  <FeatureCard
                    index={2}
                    icon={<MessagesSquare className="h-5 w-5 text-purple-600" />}
                    title="Discussion Forum"
                    description="Participate in subject discussions, ask questions, and collaborate with classmates."
                    href="/dashboard/academic"
                    gradient="from-purple-50 to-violet-100"
                  />
                </div>
              </div>

              {/* Recent Announcements Preview */}
              <Card className="border border-slate-200">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Bell className="h-4 w-4 text-purple-500" />
                      Recent Announcements
                    </CardTitle>
                    <Link href="/dashboard/announcements">
                      <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700 h-7 px-2 text-xs">
                        View All <ArrowRight className="h-3 w-3 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { title: 'Mid-term Exam Schedule Released', time: '2 hours ago', type: 'Exam', color: 'bg-red-100 text-red-700' },
                      { title: 'Holiday on account of National Day', time: '1 day ago', type: 'Holiday', color: 'bg-green-100 text-green-700' },
                      { title: 'Annual Sports Day Registration Open', time: '2 days ago', type: 'Event', color: 'bg-purple-100 text-purple-700' },
                      { title: 'Fee Payment Deadline Reminder', time: '3 days ago', type: 'Finance', color: 'bg-orange-100 text-orange-700' },
                    ].map((notice, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer">
                        <Badge className={`text-xs shrink-0 mt-0.5 ${notice.color} border-0`}>{notice.type}</Badge>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-slate-700 leading-snug">{notice.title}</p>
                          <p className="text-xs text-slate-400 mt-0.5">{notice.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Message */}
              <Card className="border border-slate-200 bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardContent className="p-5">
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl bg-purple-100 p-3 shrink-0">
                      <MessageSquare className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800">Need Help?</h3>
                      <p className="text-sm text-slate-500 mt-0.5">Send a message to your class teacher or school admin directly.</p>
                    </div>
                    <Link href="/dashboard/announcements">
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white shrink-0">
                        Send Message
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </TabsContent>

        {/* â”€â”€ PROFILE & ACCOUNT TAB â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <TabsContent value="profile" asChild>
          <AnimatePresence mode="wait">
            <motion.div key="profile" variants={tabContent} initial="hidden" animate="visible" exit="exit" className="space-y-6">
              <div>
                <h2 className="text-base font-semibold text-slate-700 mb-1">Profile & Account</h2>
                <p className="text-sm text-slate-400 mb-4">Manage your personal information, security, and preferences.</p>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  <FeatureCard
                    index={0}
                    icon={<User className="h-5 w-5 text-purple-600" />}
                    title="View / Update Profile"
                    description="Update your personal details, contact information, and profile photo."
                    href="/dashboard/profile"
                    gradient="from-purple-50 to-purple-100"
                  />
                  <FeatureCard
                    index={1}
                    icon={<Lock className="h-5 w-5 text-slate-600" />}
                    title="Change Password"
                    description="Update your account password to keep your account secure."
                    href="/dashboard/profile"
                    gradient="from-slate-50 to-slate-100"
                  />
                  <FeatureCard
                    index={2}
                    icon={<Bell className="h-5 w-5 text-amber-600" />}
                    title="Notification Preferences"
                    description="Customize which notifications you receive via email, SMS, or in-app alerts."
                    href="/dashboard/profile"
                    gradient="from-amber-50 to-yellow-100"
                  />
                </div>
              </div>

              {/* Profile Summary Card */}
              <Card className="border border-slate-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <User className="h-4 w-4 text-purple-500" />
                    Profile Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-5">
                    {/* Avatar */}
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white text-2xl font-bold shrink-0 shadow-md">
                      {firstName.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-slate-800">{fullName}</h3>
                      <p className="text-sm text-slate-500">{user?.email ?? 'student@school.edu'}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="secondary" className="text-xs">Student</Badge>
                        {className !== 'N/A' && (
                          <Badge variant="outline" className="text-xs">Class: {className}</Badge>
                        )}
                        {rollNo !== 'â€”' && (
                          <Badge variant="outline" className="text-xs">Roll: {rollNo}</Badge>
                        )}
                      </div>
                    </div>
                    <Link href="/dashboard/profile">
                      <Button variant="outline" size="sm" className="shrink-0">
                        <PenLine className="h-3.5 w-3.5 mr-1.5" />
                        Edit
                      </Button>
                    </Link>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {[
                      { label: 'Attendance', value: `${attendancePct}%`, icon: <CalendarCheck className="h-4 w-4 text-purple-500" /> },
                      { label: 'Pending Fees', value: pendingFees > 0 ? `â‚¹${pendingFees.toLocaleString()}` : 'Nil', icon: <Wallet className="h-4 w-4 text-orange-500" /> },
                      { label: 'Books Issued', value: booksDue, icon: <BookOpen className="h-4 w-4 text-pink-500" /> },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                        <div className="rounded-lg bg-white p-2 shadow-sm">{item.icon}</div>
                        <div>
                          <p className="text-xs text-slate-400">{item.label}</p>
                          <p className="text-sm font-bold text-slate-700">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Security Settings */}
              <Card className="border border-slate-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Settings className="h-4 w-4 text-slate-500" />
                    Account Settings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[
                      { label: 'Change Password', desc: 'Update your login password', icon: <Lock className="h-4 w-4 text-slate-500" />, href: '/dashboard/profile' },
                      { label: 'Email Notifications', desc: 'Manage email alert preferences', icon: <Bell className="h-4 w-4 text-amber-500" />, href: '/dashboard/profile' },
                      { label: 'Privacy Settings', desc: 'Control your data and visibility', icon: <Settings className="h-4 w-4 text-purple-500" />, href: '/dashboard/profile' },
                    ].map((item, i) => (
                      <Link key={i} href={item.href}>
                        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer group">
                          <div className="rounded-lg bg-slate-100 p-2 group-hover:bg-white transition-colors">{item.icon}</div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-slate-700">{item.label}</p>
                            <p className="text-xs text-slate-400">{item.desc}</p>
                          </div>
                          <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-purple-500 group-hover:translate-x-0.5 transition-all" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </TabsContent>

        {/* â”€â”€ OTHER FEATURES TAB â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <TabsContent value="other" asChild>
          <AnimatePresence mode="wait">
            <motion.div key="other" variants={tabContent} initial="hidden" animate="visible" exit="exit" className="space-y-6">
              <div>
                <h2 className="text-base font-semibold text-slate-700 mb-1">Other Features</h2>
                <p className="text-sm text-slate-400 mb-4">Explore additional services and resources available to you.</p>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  <FeatureCard
                    index={0}
                    icon={<Library className="h-5 w-5 text-indigo-600" />}
                    title="E-Library Access"
                    description="Browse the digital library, borrow e-books, and access online journals and resources."
                    href="/dashboard/library"
                    badge="Digital"
                    badgeVariant="secondary"
                    gradient="from-indigo-50 to-blue-100"
                  />
                  <FeatureCard
                    index={1}
                    icon={<Download className="h-5 w-5 text-slate-600" />}
                    title="Download Documents"
                    description="Download bonafide certificates, fee receipts, ID cards, and other official documents."
                    href="/dashboard/services"
                    gradient="from-slate-50 to-slate-100"
                  />
                  <FeatureCard
                    index={2}
                    icon={<CreditCard className="h-5 w-5 text-green-600" />}
                    title="Fee Payment"
                    description="View fee dues, pay online, and download payment receipts and fee statements."
                    href="/dashboard/fees"
                    badge="Pay Now"
                    badgeVariant={pendingFees > 0 ? 'destructive' : 'secondary'}
                    gradient="from-green-50 to-emerald-100"
                  />
                  <FeatureCard
                    index={3}
                    icon={<Star className="h-5 w-5 text-amber-600" />}
                    title="Feedback / Surveys"
                    description="Share your feedback on teaching quality, facilities, and school services."
                    href="/dashboard/services"
                    gradient="from-amber-50 to-yellow-100"
                  />
                  <FeatureCard
                    index={4}
                    icon={<Trophy className="h-5 w-5 text-orange-600" />}
                    title="Co-curricular Activities"
                    description="Explore clubs, sports, arts, and extracurricular programs available at school."
                    href="/dashboard/services"
                    gradient="from-orange-50 to-amber-100"
                  />
                  <FeatureCard
                    index={5}
                    icon={<Award className="h-5 w-5 text-rose-600" />}
                    title="Achievements & Certificates"
                    description="View your awards, certificates, merit badges, and academic achievements."
                    href="/dashboard/services"
                    gradient="from-rose-50 to-pink-100"
                  />
                </div>
              </div>

              {/* Fee Status Banner */}
              {pendingFees > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-4">
                        <div className="rounded-xl bg-orange-100 p-3 shrink-0">
                          <AlertCircle className="h-6 w-6 text-orange-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-orange-800">Fee Payment Pending</h3>
                          <p className="text-sm text-orange-600 mt-0.5">
                            You have an outstanding fee of <strong>â‚¹{pendingFees.toLocaleString()}</strong>. Please pay before the due date to avoid late charges.
                          </p>
                        </div>
                        <Link href="/dashboard/fees">
                          <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white shrink-0">
                            Pay Now
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Achievements Showcase */}
              <Card className="border border-slate-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Medal className="h-4 w-4 text-amber-500" />
                    Achievements & Highlights
                  </CardTitle>
                  <CardDescription>Your recent accomplishments and milestones</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {[
                      { icon: <Trophy className="h-6 w-6 text-amber-500" />, label: 'Top Performer', desc: 'Mathematics â€” Term 1', bg: 'from-amber-50 to-yellow-100' },
                      { icon: <Award className="h-6 w-6 text-purple-500" />, label: 'Perfect Attendance', desc: 'October 2024', bg: 'from-blue-50 to-indigo-100' },
                      { icon: <Star className="h-6 w-6 text-purple-500" />, label: 'Science Olympiad', desc: 'District Level â€” Silver', bg: 'from-purple-50 to-violet-100' },
                    ].map((item, i) => (
                      <div key={i} className={`rounded-xl bg-gradient-to-br ${item.bg} p-4 text-center`}>
                        <div className="flex justify-center mb-2">{item.icon}</div>
                        <p className="text-sm font-semibold text-slate-700">{item.label}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t">
                    <Link href="/dashboard/services">
                      <Button variant="ghost" size="sm" className="w-full text-purple-600 hover:text-purple-700 hover:bg-purple-50">
                        View All Achievements <ArrowRight className="h-3.5 w-3.5 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Downloads */}
              <Card className="border border-slate-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <FolderOpen className="h-4 w-4 text-slate-500" />
                    Quick Downloads
                  </CardTitle>
                  <CardDescription>Frequently downloaded documents</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {[
                      { label: 'Bonafide Certificate', icon: <FileText className="h-4 w-4 text-purple-500" /> },
                      { label: 'Fee Receipt', icon: <CreditCard className="h-4 w-4 text-green-500" /> },
                      { label: 'Admit Card', icon: <BookMarked className="h-4 w-4 text-purple-500" /> },
                      { label: 'Grade Card', icon: <BarChart3 className="h-4 w-4 text-orange-500" /> },
                    ].map((doc, i) => (
                      <Link key={i} href="/dashboard/services">
                        <div className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 hover:border-purple-200 hover:bg-purple-50/30 transition-colors cursor-pointer group">
                          <div className="rounded-lg bg-slate-100 p-2 group-hover:bg-white transition-colors">{doc.icon}</div>
                          <span className="text-sm font-medium text-slate-700 flex-1">{doc.label}</span>
                          <Download className="h-3.5 w-3.5 text-slate-300 group-hover:text-purple-500 transition-colors" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </TabsContent>

      </Tabs>
    </div>
  );
}

