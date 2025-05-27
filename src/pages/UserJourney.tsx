
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, XCircle, Mail, Phone, UserCheck, ArrowRight, ArrowDown } from 'lucide-react';

const UserJourney = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">User Verification Journey</h1>
          <p className="text-gray-300 text-lg">Complete flow diagram for user verification system</p>
          <Badge variant="outline" className="mt-2 text-yellow-400 border-yellow-400">
            Development Reference Only
          </Badge>
        </div>

        {/* Flow Diagram */}
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
            ✓ Complete verification system already implemented
          </Badge>
          <p className="text-gray-400 text-sm mt-2">
            This page is for development reference only - not accessible to end users
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserJourney;
