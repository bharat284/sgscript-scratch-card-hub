import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, XCircle, Mail, Phone, UserCheck, ArrowRight, ArrowDown, Users, Shield, Eye, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

const UserJourney = () => {
  const mockUsers = [
    {
      email: 'test@example.com',
      password: 'password',
      role: 'user',
      name: 'Test User',
      status: 'Fully Verified',
      subscription: 'Active (30 days)',
      features: ['Basic dashboard', 'Email & phone verified', 'Referral system']
    },
    {
      email: 'admin@sgscript.com',
      password: 'admin123',
      role: 'admin',
      name: 'Admin User',
      status: 'Fully Verified',
      subscription: 'Unlimited',
      features: ['Admin panel', 'User management', 'All features']
    },
    {
      email: 'grace@example.com',
      password: 'vip123',
      role: 'vip',
      name: 'Grace Lee',
      status: 'Fully Verified',
      subscription: 'Expired',
      features: ['VIP dashboard', '150 referrals', 'Premium features']
    },
    {
      email: 'jane@example.com',
      password: 'jane123',
      role: 'user',
      name: 'Jane Smith',
      status: 'Email Unverified',
      subscription: 'None',
      features: ['Basic access', 'Phone verified only', '8 referrals']
    },
    {
      email: 'frank@example.com',
      password: 'frank123',
      role: 'user',
      name: 'Frank Wilson',
      status: 'Phone Unverified',
      subscription: 'None',
      features: ['Basic access', 'Email verified only', 'No referrals']
    },
    {
      email: 'diana@example.com',
      password: 'diana123',
      role: 'user',
      name: 'Diana Prince',
      status: 'Completely Unverified',
      subscription: 'Expired',
      features: ['Limited access', 'Needs verification', '3 referrals']
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Complete Application Flow & User Journey</h1>
          <p className="text-gray-300 text-lg">Full system architecture and user verification workflow</p>
          <Badge variant="outline" className="mt-2 text-yellow-400 border-yellow-400">
            Development Reference & Testing Guide
          </Badge>
        </div>

        {/* Test User Credentials */}
        <Card className="bg-black/20 border-white/10 backdrop-blur-md mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Users className="text-blue-400" size={24} />
              Test User Credentials
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockUsers.map((user, index) => (
                <div key={index} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={
                      user.role === 'admin' ? 'bg-red-500/20 text-red-400 border-red-400' :
                      user.role === 'vip' ? 'bg-purple-500/20 text-purple-400 border-purple-400' :
                      'bg-blue-500/20 text-blue-400 border-blue-400'
                    }>
                      {user.role.toUpperCase()}
                    </Badge>
                    <Badge variant="outline" className={
                      user.status === 'Fully Verified' ? 'text-green-400 border-green-400' :
                      user.status.includes('Unverified') ? 'text-yellow-400 border-yellow-400' :
                      'text-red-400 border-red-400'
                    }>
                      {user.status}
                    </Badge>
                  </div>
                  
                  <h4 className="text-white font-semibold mb-2">{user.name}</h4>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Email:</span>
                      <div className="flex items-center gap-1">
                        <code className="text-blue-300 text-xs">{user.email}</code>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-6 w-6 p-0"
                          onClick={() => copyToClipboard(user.email)}
                        >
                          <Copy size={12} />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Password:</span>
                      <div className="flex items-center gap-1">
                        <code className="text-green-300 text-xs">{user.password}</code>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-6 w-6 p-0"
                          onClick={() => copyToClipboard(user.password)}
                        >
                          <Copy size={12} />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Subscription:</span>
                      <span className="text-gray-400 text-xs">{user.subscription}</span>
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <p className="text-gray-400 text-xs mb-1">Test Features:</p>
                    <ul className="text-xs text-gray-300 space-y-1">
                      {user.features.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Complete Application Flow */}
        <Card className="bg-black/20 border-white/10 backdrop-blur-md mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Shield className="text-purple-400" size={24} />
              Complete Application Flow Diagram
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              
              {/* Landing & Authentication Flow */}
              <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-600">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">A</div>
                  Landing & Authentication Flow
                </h3>
                <div className="grid md:grid-cols-4 gap-4 text-sm">
                  <div className="text-center">
                    <div className="bg-blue-500/20 p-3 rounded border border-blue-400 mb-2">
                      <strong className="text-blue-300">/ (Index)</strong>
                      <p className="text-gray-300 text-xs mt-1">Landing page with hero section</p>
                    </div>
                    <ArrowRight className="mx-auto text-blue-400" size={16} />
                  </div>
                  <div className="text-center">
                    <div className="bg-green-500/20 p-3 rounded border border-green-400 mb-2">
                      <strong className="text-green-300">/signup</strong>
                      <p className="text-gray-300 text-xs mt-1">Registration form with validation</p>
                    </div>
                    <ArrowRight className="mx-auto text-green-400" size={16} />
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-500/20 p-3 rounded border border-purple-400 mb-2">
                      <strong className="text-purple-300">/login</strong>
                      <p className="text-gray-300 text-xs mt-1">Authentication with test accounts</p>
                    </div>
                    <ArrowRight className="mx-auto text-purple-400" size={16} />
                  </div>
                  <div className="text-center">
                    <div className="bg-yellow-500/20 p-3 rounded border border-yellow-400 mb-2">
                      <strong className="text-yellow-300">/dashboard</strong>
                      <p className="text-gray-300 text-xs mt-1">Main application interface</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Application Pages */}
              <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-600">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold">B</div>
                  Core Application Pages
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="space-y-3">
                    <div className="bg-blue-500/20 p-3 rounded border border-blue-400">
                      <strong className="text-blue-300">/profile</strong>
                      <p className="text-gray-300 text-xs">User settings & verification hub</p>
                    </div>
                    <div className="bg-purple-500/20 p-3 rounded border border-purple-400">
                      <strong className="text-purple-300">/tradingview-setup</strong>
                      <p className="text-gray-300 text-xs">TradingView integration setup</p>
                    </div>
                    <div className="bg-green-500/20 p-3 rounded border border-green-400">
                      <strong className="text-green-300">/referrals</strong>
                      <p className="text-gray-300 text-xs">Referral system & tracking</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-red-500/20 p-3 rounded border border-red-400">
                      <strong className="text-red-300">/admin</strong>
                      <p className="text-gray-300 text-xs">Admin panel (admin role only)</p>
                    </div>
                    <div className="bg-cyan-500/20 p-3 rounded border border-cyan-400">
                      <strong className="text-cyan-300">/about</strong>
                      <p className="text-gray-300 text-xs">Company information</p>
                    </div>
                    <div className="bg-orange-500/20 p-3 rounded border border-orange-400">
                      <strong className="text-orange-300">/products</strong>
                      <p className="text-gray-300 text-xs">Product showcase</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-pink-500/20 p-3 rounded border border-pink-400">
                      <strong className="text-pink-300">/contact</strong>
                      <p className="text-gray-300 text-xs">Contact form & information</p>
                    </div>
                    <div className="bg-indigo-500/20 p-3 rounded border border-indigo-400">
                      <strong className="text-indigo-300">/forgot-password</strong>
                      <p className="text-gray-300 text-xs">Password recovery flow</p>
                    </div>
                    <div className="bg-gray-500/20 p-3 rounded border border-gray-400">
                      <strong className="text-gray-300">/user-journey</strong>
                      <p className="text-gray-300 text-xs">This development reference page</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* User Roles & Permissions */}
              <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-600">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold">C</div>
                  User Roles & Access Control
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-red-500/20 p-4 rounded border border-red-400">
                    <h4 className="text-red-300 font-semibold mb-2 flex items-center gap-2">
                      <Shield size={16} />
                      Admin Role
                    </h4>
                    <ul className="text-gray-300 space-y-1 text-xs">
                      <li>• Full system access</li>
                      <li>• User management panel</li>
                      <li>• Analytics & reporting</li>
                      <li>• System configuration</li>
                      <li>• All verification statuses</li>
                    </ul>
                  </div>
                  <div className="bg-purple-500/20 p-4 rounded border border-purple-400">
                    <h4 className="text-purple-300 font-semibold mb-2 flex items-center gap-2">
                      <UserCheck size={16} />
                      VIP Role
                    </h4>
                    <ul className="text-gray-300 space-y-1 text-xs">
                      <li>• Premium dashboard features</li>
                      <li>• Advanced referral tracking</li>
                      <li>• Priority support access</li>
                      <li>• Extended subscription benefits</li>
                      <li>• Enhanced TradingView integration</li>
                    </ul>
                  </div>
                  <div className="bg-blue-500/20 p-4 rounded border border-blue-400">
                    <h4 className="text-blue-300 font-semibold mb-2 flex items-center gap-2">
                      <Users size={16} />
                      User Role
                    </h4>
                    <ul className="text-gray-300 space-y-1 text-xs">
                      <li>• Standard dashboard access</li>
                      <li>• Basic profile management</li>
                      <li>• Email/phone verification</li>
                      <li>• Referral system participation</li>
                      <li>• TradingView setup (basic)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Verification Journey */}
        <div className="grid gap-6 mb-12">
          
          {/* Step 1: Registration */}
          <Card className="bg-black/20 border-white/10 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                User Registration
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Page: /signup</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• User fills registration form</li>
                    <li>• Email, phone, name, password required</li>
                    <li>• Form validation occurs</li>
                    <li>• Account created with unverified status</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Data Stored:</h4>
                  <div className="bg-gray-800 p-2 rounded text-xs font-mono">
                    emailVerified: false<br/>
                    phoneVerified: false
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <ArrowDown className="text-blue-400" size={24} />
              </div>
            </CardContent>
          </Card>

          {/* Step 2: Login & Redirect */}
          <Card className="bg-black/20 border-white/10 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                Login & Dashboard Access
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Page: /login → /dashboard</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• User logs in successfully</li>
                    <li>• Redirected to dashboard</li>
                    <li>• Can access basic features</li>
                    <li>• Verification prompts may appear</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Status Check:</h4>
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-yellow-400 border-yellow-400">
                      Email: Not Verified
                    </Badge>
                    <Badge variant="outline" className="text-yellow-400 border-yellow-400">
                      Phone: Not Verified
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <ArrowDown className="text-green-400" size={24} />
              </div>
            </CardContent>
          </Card>

          {/* Step 3: Profile Verification */}
          <Card className="bg-black/20 border-white/10 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                Verification Process
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Email Verification */}
                <div className="border border-blue-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <Mail size={16} className="text-blue-400" />
                    Email Verification
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-gray-800 p-2 rounded">
                      <strong>Page:</strong> /profile → Verification Tab
                    </div>
                    <div className="space-y-1">
                      <div>1. User clicks "Send OTP" button</div>
                      <div>2. System sends verification email</div>
                      <div>3. User receives 6-digit OTP code</div>
                      <div>4. User enters OTP in form</div>
                      <div>5. System validates OTP</div>
                      <div>6. Email status updates to verified</div>
                    </div>
                  </div>
                </div>

                {/* Phone Verification */}
                <div className="border border-green-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <Phone size={16} className="text-green-400" />
                    Phone Verification
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-gray-800 p-2 rounded">
                      <strong>Page:</strong> /profile → Verification Tab
                    </div>
                    <div className="space-y-1">
                      <div>1. User clicks "Send OTP" button</div>
                      <div>2. System sends SMS with OTP</div>
                      <div>3. User receives 6-digit OTP code</div>
                      <div>4. User enters OTP in form</div>
                      <div>5. System validates OTP</div>
                      <div>6. Phone status updates to verified</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <ArrowDown className="text-purple-400" size={24} />
              </div>
            </CardContent>
          </Card>

          {/* Step 4: Verified Status */}
          <Card className="bg-black/20 border-white/10 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-sm font-bold">4</div>
                Fully Verified User
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Benefits:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Access to all platform features</li>
                    <li>• Higher trust score</li>
                    <li>• Secure account recovery options</li>
                    <li>• Priority customer support</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Status Display:</h4>
                  <div className="space-y-2">
                    <Badge className="bg-green-500/20 text-green-400 border-green-400">
                      <CheckCircle size={14} className="mr-1" />
                      Email Verified
                    </Badge>
                    <Badge className="bg-green-500/20 text-green-400 border-green-400">
                      <CheckCircle size={14} className="mr-1" />
                      Phone Verified
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Technical Implementation Details */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Current Implementation */}
          <Card className="bg-black/20 border-white/10 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-white">Current Implementation</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Authentication Context:</h4>
                <div className="bg-gray-800 p-3 rounded text-xs font-mono">
                  src/context/AuthContext.tsx
                </div>
                <p className="text-sm mt-2">Contains mock verification functions that simulate real API calls</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">Profile Page:</h4>
                <div className="bg-gray-800 p-3 rounded text-xs font-mono">
                  src/pages/Profile.tsx
                </div>
                <p className="text-sm mt-2">Verification tab with OTP input forms and status display</p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">Phone Input Component:</h4>
                <div className="bg-gray-800 p-3 rounded text-xs font-mono">
                  src/components/PhoneInput.tsx
                </div>
                <p className="text-sm mt-2">Country code selector with phone number validation</p>
              </div>
            </CardContent>
          </Card>

          {/* Production Setup */}
          <Card className="bg-black/20 border-white/10 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-white">Production Setup Needed</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              
              <div>
                <h4 className="font-semibold text-white mb-2">Email Service Options:</h4>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Supabase Auth:</strong> Built-in email verification</li>
                  <li>• <strong>EmailJS:</strong> Frontend-only solution</li>
                  <li>• <strong>Google SMTP:</strong> Requires backend setup</li>
                  <li>• <strong>SendGrid/Mailgun:</strong> Professional email APIs</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">SMS Service Options:</h4>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Twilio:</strong> Popular SMS API service</li>
                  <li>• <strong>AWS SNS:</strong> Amazon's SMS service</li>
                  <li>• <strong>Firebase:</strong> Google's SMS verification</li>
                  <li>• <strong>MSG91:</strong> India-focused SMS service</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">Recommended Setup:</h4>
                <div className="bg-blue-900/30 p-3 rounded border border-blue-500/30">
                  <p className="text-sm">
                    <strong>Supabase Integration:</strong> Connect your project to Supabase for complete backend functionality including email verification, SMS, and database management.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pages Reference */}
        <Card className="bg-black/20 border-white/10 backdrop-blur-md mt-6">
          <CardHeader>
            <CardTitle className="text-white">Pages & Components Reference</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-white mb-2">User-Facing Pages:</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• <code>/signup</code> - Registration form</li>
                  <li>• <code>/login</code> - Authentication</li>
                  <li>• <code>/profile</code> - Verification interface</li>
                  <li>• <code>/dashboard</code> - Main app interface</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Key Components:</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• <code>PhoneInput</code> - Country code selector</li>
                  <li>• <code>AuthContext</code> - Authentication state</li>
                  <li>• <code>Navbar</code> - Navigation with user status</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Status Indicators:</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Green badges for verified</li>
                  <li>• Yellow badges for unverified</li>
                  <li>• Profile tab shows detailed status</li>
                  <li>• OTP input forms when needed</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <Badge variant="outline" className="text-green-400 border-green-400">
            ✓ Complete application flow & verification system implemented
          </Badge>
          <p className="text-gray-400 text-sm mt-2">
            Use the test credentials above to explore all features and user scenarios
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserJourney;
