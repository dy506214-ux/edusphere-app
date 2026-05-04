'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { mockLogin, MOCK_USERS } from '@/lib/mock-auth';
import { GraduationCap, Users, UserCheck, Shield, Calculator, Bus } from 'lucide-react';

export default function TestLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const user = mockLogin(email, password);
      if (user) {
        // Store user in auth context (you'll need to update auth-context to support mock)
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', 'mock-token-' + user.id);
        
        // Redirect to dashboard
        router.push('/dashboard');
        router.refresh();
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('Login failed');
    } finally {
      setLoading(false);
    }
  };

  const quickLogin = (userEmail: string, userPassword: string) => {
    setEmail(userEmail);
    setPassword(userPassword);
    
    const user = mockLogin(userEmail, userPassword);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', 'mock-token-' + user.id);
      router.push('/dashboard');
      router.refresh();
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'STUDENT': return <GraduationCap className="h-5 w-5" />;
      case 'TEACHER': return <Users className="h-5 w-5" />;
      case 'PARENT': return <UserCheck className="h-5 w-5" />;
      case 'ADMIN': return <Shield className="h-5 w-5" />;
      case 'ACCOUNTANT': return <Calculator className="h-5 w-5" />;
      case 'TRANSPORT_MANAGER': return <Bus className="h-5 w-5" />;
      default: return <Users className="h-5 w-5" />;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'STUDENT': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'TEACHER': return 'bg-green-100 text-green-700 border-green-200';
      case 'PARENT': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'ADMIN': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'ACCOUNTANT': return 'bg-teal-100 text-teal-700 border-teal-200';
      case 'TRANSPORT_MANAGER': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-slate-800">🎓 EduSphere Test Login</h1>
          <p className="text-slate-600">Quick login to test all dashboard panels</p>
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
            ⚠️ Mock Authentication - No Database Required
          </Badge>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Manual Login Form */}
          <Card>
            <CardHeader>
              <CardTitle>Manual Login</CardTitle>
              <CardDescription>Enter credentials to login</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="eduspherestudent@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="student123"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {error && (
                  <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
                    {error}
                  </div>
                )}
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'Logging in...' : 'Login'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Quick Login Buttons */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Login</CardTitle>
              <CardDescription>Click to login instantly</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {MOCK_USERS.map((user) => (
                  <Button
                    key={user.id}
                    variant="outline"
                    className={`w-full justify-start gap-3 h-auto py-3 ${getRoleColor(user.role)}`}
                    onClick={() => quickLogin(user.email, user.password)}
                  >
                    <div className="flex items-center gap-3 flex-1">
                      {getRoleIcon(user.role)}
                      <div className="text-left flex-1">
                        <div className="font-semibold">{user.firstName} {user.lastName}</div>
                        <div className="text-xs opacity-75">{user.email}</div>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {user.role.replace('_', ' ')}
                      </Badge>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Credentials Reference */}
        <Card>
          <CardHeader>
            <CardTitle>Test Credentials</CardTitle>
            <CardDescription>All available test accounts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {MOCK_USERS.map((user) => (
                <div key={user.id} className="p-4 rounded-lg border bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2">
                    {getRoleIcon(user.role)}
                    <span className="font-semibold text-sm">{user.role.replace('_', ' ')}</span>
                  </div>
                  <div className="text-xs space-y-1 text-slate-600">
                    <div><strong>Email:</strong> {user.email}</div>
                    <div><strong>Password:</strong> {user.password}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Info */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <div className="text-blue-600 mt-0.5">ℹ️</div>
              <div className="text-sm text-blue-800 space-y-2">
                <p><strong>How it works:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Click any "Quick Login" button to instantly login as that role</li>
                  <li>Or manually enter email and password</li>
                  <li>You'll be redirected to the dashboard with the correct role</li>
                  <li>Each role has a different colored dashboard theme</li>
                  <li>No database or backend required - perfect for testing!</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
