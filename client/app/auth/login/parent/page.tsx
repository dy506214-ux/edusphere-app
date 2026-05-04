'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { UserCircle, ArrowLeft, Eye, EyeOff, Loader2, Bell, TrendingUp, MessageSquare } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth-context';
import { mockLogin } from '@/lib/mock-auth';

export default function ParentLoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      await login(username, password);
      router.push('/dashboard');
    } catch (err: any) {
      const mockUser = mockLogin(username, password);
      if (mockUser && mockUser.role === 'PARENT') {
        localStorage.setItem('user', JSON.stringify(mockUser));
        localStorage.setItem('token', 'mock-token-' + mockUser.id);
        router.push('/dashboard');
        router.refresh();
      } else {
        setError('Invalid credentials. Use: edusphereparent@gmail.com / parent123');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:block"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
              className="inline-block"
            >
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-3xl shadow-2xl">
                <UserCircle className="h-20 w-20 text-white" />
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-5xl font-bold text-slate-800 leading-tight"
            >
              Welcome Back,<br />
              <span className="text-orange-600">Parent!</span>
            </motion.h1>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-slate-600"
            >
              Track your child's performance and updates
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-4 pt-6"
            >
              {[
                { icon: TrendingUp, text: "Monitor Child's Progress" },
                { icon: Bell, text: 'Receive Real-time Updates' },
                { icon: MessageSquare, text: 'Communicate with Teachers' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-4 text-slate-700"
                >
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <item.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <span className="font-medium text-lg">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 shadow-2xl border-2 border-orange-100 bg-white/80 backdrop-blur-sm">
            <div className="mb-8">
              <button
                onClick={() => router.push('/auth/role-selection')}
                className="flex items-center gap-2 text-slate-600 hover:text-orange-600 transition-colors mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="text-sm font-medium">Back to Role Selection</span>
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-2xl">
                  <UserCircle className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-800">PARENT LOGIN</h2>
                  <p className="text-slate-600 mt-1">Track your child's performance and updates</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm"
                >
                  {error}
                </motion.div>
              )}

              <div className="space-y-2">
                <Label htmlFor="username" className="text-slate-700 font-semibold">
                  Mobile Number / Email
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter Mobile Number or Email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  disabled={isLoading}
                  className="h-12 border-2 border-slate-200 focus:border-orange-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-slate-700 font-semibold">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={isLoading}
                    className="h-12 border-2 border-slate-200 focus:border-orange-500 transition-colors pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-orange-600 transition-colors"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-slate-300" />
                  <span className="text-slate-600">Remember me</span>
                </label>
                <button
                  type="button"
                  className="text-orange-600 hover:text-orange-700 font-medium hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  'LOGIN'
                )}
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4">
                <p className="text-xs font-semibold text-orange-700 mb-2">🔐 Test Credentials:</p>
                <p className="text-xs text-orange-600 font-mono">
                  <span className="font-bold">Email:</span> edusphereparent@gmail.com<br />
                  <span className="font-bold">Password:</span> parent123
                </p>
              </div>
              <p className="text-center text-sm text-slate-600">
                Need help? Contact your{' '}
                <span className="text-orange-600 font-medium">school administrator</span>
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
