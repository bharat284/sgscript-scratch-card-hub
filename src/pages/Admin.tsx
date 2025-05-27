import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/context/AuthContext';
import { useCountry } from '@/components/CountrySelect';
import Navbar from '@/components/Navbar';

// Enhanced mock data with more diverse test users
const mockUsers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 234 567 8901',
    tradingviewId: 'johndoe_tv',
    subscription: 'Active',
    subscriptionEnd: '2024-12-31',
    referralCount: 12,
    referredBy: null,
    role: 'user',
    emailVerified: true,
    phoneVerified: true,
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '+1 234 567 8902',
    tradingviewId: 'janesmith_tv',
    subscription: 'Inactive',
    subscriptionEnd: null,
    referralCount: 8,
    referredBy: 'John Doe',
    role: 'user',
    emailVerified: false,
    phoneVerified: true,
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    phone: '+1 234 567 8903',
    tradingviewId: 'bobjohnson_tv',
    subscription: 'Active',
    subscriptionEnd: '2024-11-15',
    referralCount: 25,
    referredBy: 'Jane Smith',
    role: 'user',
    emailVerified: true,
    phoneVerified: false,
  },
  {
    id: '4',
    name: 'Alice Cooper',
    email: 'alice@example.com',
    phone: '+91 98765 43210',
    tradingviewId: 'alicecooper_tv',
    subscription: 'Active',
    subscriptionEnd: '2024-12-25',
    referralCount: 55,
    referredBy: null,
    role: 'user',
    emailVerified: true,
    phoneVerified: true,
  },
  {
    id: '5',
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    phone: '+44 20 7946 0958',
    tradingviewId: 'charliebrown_tv',
    subscription: 'Active',
    subscriptionEnd: '2025-01-30',
    referralCount: 105,
    referredBy: 'Alice Cooper',
    role: 'user',
    emailVerified: true,
    phoneVerified: true,
  },
  {
    id: '6',
    name: 'Diana Prince',
    email: 'diana@example.com',
    phone: '+1 555 123 4567',
    tradingviewId: 'dianaprince_tv',
    subscription: 'Expired',
    subscriptionEnd: '2024-01-15',
    referralCount: 3,
    referredBy: 'Bob Johnson',
    role: 'user',
    emailVerified: false,
    phoneVerified: false,
  },
  {
    id: '7',
    name: 'Admin User',
    email: 'admin@sgscript.com',
    phone: '+1 800 555 0199',
    tradingviewId: 'admin_tv',
    subscription: 'Lifetime',
    subscriptionEnd: null,
    referralCount: 0,
    referredBy: null,
    role: 'admin',
    emailVerified: true,
    phoneVerified: true,
  },
  {
    id: '8',
    name: 'Eva Martinez',
    email: 'eva@example.com',
    phone: '+34 911 123 456',
    tradingviewId: 'evamartinez_tv',
    subscription: 'Active',
    subscriptionEnd: '2024-10-20',
    referralCount: 75,
    referredBy: 'Charlie Brown',
    role: 'user',
    emailVerified: true,
    phoneVerified: true,
  },
  {
    id: '9',
    name: 'Frank Wilson',
    email: 'frank@example.com',
    phone: '+61 2 9876 5432',
    tradingviewId: null,
    subscription: 'Pending',
    subscriptionEnd: null,
    referralCount: 0,
    referredBy: 'Diana Prince',
    role: 'user',
    emailVerified: true,
    phoneVerified: false,
  },
  {
    id: '10',
    name: 'Grace Lee',
    email: 'grace@example.com',
    phone: '+82 2 1234 5678',
    tradingviewId: 'gracelee_tv',
    subscription: 'Active',
    subscriptionEnd: '2024-09-30',
    referralCount: 150,
    referredBy: null,
    role: 'vip',
    emailVerified: true,
    phoneVerified: true,
  },
];

const Admin = () => {
  const [users, setUsers] = useState(mockUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { user } = useAuth();
  const { country } = useCountry();

  // Check for admin role - in real app this would be from user context
  const isAdmin = user?.email === 'admin@sgscript.com' || user?.email === 'test@example.com';

  if (!isAdmin) {
    navigate('/');
    return null;
  }

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.tradingviewId?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getTierBadge = (referralCount) => {
    if (referralCount >= 100) return { name: 'Platinum', color: 'bg-purple-500/20 text-purple-400' };
    if (referralCount >= 50) return { name: 'Gold', color: 'bg-yellow-500/20 text-yellow-400' };
    if (referralCount >= 25) return { name: 'Silver', color: 'bg-gray-500/20 text-gray-400' };
    if (referralCount >= 5) return { name: 'Standard', color: 'bg-green-500/20 text-green-400' };
    return { name: 'None', color: 'bg-muted text-muted-foreground' };
  };

  const getRewardAmount = (referralCount) => {
    if (referralCount >= 100) return country === 'in' ? '₹1,00,000' : '$10,000';
    if (referralCount >= 50) return country === 'in' ? '₹50,000' : '$5,000';
    if (referralCount >= 25) return country === 'in' ? '₹10,000' : '$1,000';
    if (referralCount >= 5) return country === 'in' ? '₹1,000/month' : '$100/month';
    return 'None';
  };

  const getSubscriptionStatus = (subscription, subscriptionEnd) => {
    if (subscription === 'Lifetime') return { text: 'Lifetime', color: 'bg-purple-500/20 text-purple-500' };
    if (subscription === 'Active') return { text: 'Active', color: 'bg-green-500/20 text-green-500' };
    if (subscription === 'Expired') return { text: 'Expired', color: 'bg-red-500/20 text-red-500' };
    if (subscription === 'Pending') return { text: 'Pending', color: 'bg-orange-500/20 text-orange-500' };
    return { text: 'Inactive', color: 'bg-yellow-500/20 text-yellow-500' };
  };

  const getRoleBadge = (role) => {
    if (role === 'admin') return { text: 'Admin', color: 'bg-red-500/20 text-red-500' };
    if (role === 'vip') return { text: 'VIP', color: 'bg-purple-500/20 text-purple-500' };
    return { text: 'User', color: 'bg-blue-500/20 text-blue-500' };
  };

  const totalReferrals = users.reduce((sum, user) => sum + user.referralCount, 0);
  const averageReferrals = Math.round(totalReferrals / users.length);
  const clubMembers = users.filter(user => user.referralCount >= 25).length;
  const activeSubscriptions = users.filter(user => user.subscription === 'Active').length;
  const verifiedUsers = users.filter(user => user.emailVerified && user.phoneVerified).length;

  return (
    <div className="min-h-screen flex flex-col bg-brand-dark-purple">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <div className="flex gap-4 text-sm">
            <div className="bg-primary/10 px-3 py-1 rounded">
              <span className="text-muted-foreground">Total Users: </span>
              <span className="font-bold">{users.length}</span>
            </div>
            <div className="bg-green-500/10 px-3 py-1 rounded">
              <span className="text-muted-foreground">Active: </span>
              <span className="font-bold text-green-500">{activeSubscriptions}</span>
            </div>
            <div className="bg-blue-500/10 px-3 py-1 rounded">
              <span className="text-muted-foreground">Verified: </span>
              <span className="font-bold text-blue-500">{verifiedUsers}</span>
            </div>
          </div>
        </div>

        <Tabs defaultValue="users">
          <TabsList className="mb-8">
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
            <TabsTrigger value="rewards">Rewards</TabsTrigger>
            <TabsTrigger value="referrals">Referral Details</TabsTrigger>
            <TabsTrigger value="test-accounts">Test Accounts</TabsTrigger>
          </TabsList>

          <TabsContent value="users">
            <div className="bg-card rounded-lg border border-border p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">User Management</h2>
                <div className="w-1/3">
                  <Input
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>TradingView ID</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Verification</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.map((user) => {
                      const status = getSubscriptionStatus(user.subscription, user.subscriptionEnd);
                      const roleBadge = getRoleBadge(user.role);
                      return (
                        <TableRow key={user.id}>
                          <TableCell className="font-medium">{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.phone}</TableCell>
                          <TableCell>
                            <span className={`inline-block px-2 py-1 text-xs rounded ${roleBadge.color}`}>
                              {roleBadge.text}
                            </span>
                          </TableCell>
                          <TableCell>{user.tradingviewId || 'Not set'}</TableCell>
                          <TableCell>
                            <span className={`inline-block px-2 py-1 text-xs rounded ${status.color}`}>
                              {status.text}
                            </span>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-1">
                              <span className={`w-2 h-2 rounded-full ${user.emailVerified ? 'bg-green-500' : 'bg-red-500'}`} title={`Email ${user.emailVerified ? 'verified' : 'not verified'}`}></span>
                              <span className={`w-2 h-2 rounded-full ${user.phoneVerified ? 'bg-green-500' : 'bg-red-500'}`} title={`Phone ${user.phoneVerified ? 'verified' : 'not verified'}`}></span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button variant="ghost" size="sm">
                                View
                              </Button>
                              <Button variant="outline" size="sm">
                                Edit
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="test-accounts">
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="text-2xl font-semibold mb-6">Test Accounts</h2>
              
              <div className="mb-6 p-4 bg-blue-500/10 rounded-lg">
                <h3 className="font-medium mb-2">Available Test Accounts:</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Use these accounts to test different user scenarios and admin functionality.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="border border-red-500/20 bg-red-500/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-400">Admin Account</h4>
                  <p className="text-sm">Email: admin@sgscript.com</p>
                  <p className="text-sm">Password: admin123</p>
                  <p className="text-xs text-muted-foreground mt-2">Full admin access to all features</p>
                </div>

                <div className="border border-green-500/20 bg-green-500/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-400">Test User (Verified)</h4>
                  <p className="text-sm">Email: test@example.com</p>
                  <p className="text-sm">Password: password</p>
                  <p className="text-xs text-muted-foreground mt-2">Regular user with verified email/phone</p>
                </div>

                <div className="border border-purple-500/20 bg-purple-500/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-400">VIP User</h4>
                  <p className="text-sm">Email: grace@example.com</p>
                  <p className="text-sm">Password: vip123</p>
                  <p className="text-xs text-muted-foreground mt-2">VIP user with 150 referrals</p>
                </div>

                <div className="border border-yellow-500/20 bg-yellow-500/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-400">Unverified User</h4>
                  <p className="text-sm">Email: jane@example.com</p>
                  <p className="text-sm">Password: jane123</p>
                  <p className="text-xs text-muted-foreground mt-2">User with unverified email</p>
                </div>

                <div className="border border-orange-500/20 bg-orange-500/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-400">Pending User</h4>
                  <p className="text-sm">Email: frank@example.com</p>
                  <p className="text-sm">Password: frank123</p>
                  <p className="text-xs text-muted-foreground mt-2">New user with pending subscription</p>
                </div>

                <div className="border border-gray-500/20 bg-gray-500/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-400">Expired User</h4>
                  <p className="text-sm">Email: diana@example.com</p>
                  <p className="text-sm">Password: diana123</p>
                  <p className="text-xs text-muted-foreground mt-2">User with expired subscription</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-2">Testing Scenarios:</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Test email/phone verification flow with unverified users</li>
                  <li>• Test referral system with different tier users</li>
                  <li>• Test subscription management with various statuses</li>
                  <li>• Test admin privileges with admin account</li>
                  <li>• Test reward system with high-referral users</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="subscriptions">
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="text-2xl font-semibold mb-6">Subscription Management</h2>
              
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Product</TableHead>
                      <TableHead>Start Date</TableHead>
                      <TableHead>End Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.filter(user => user.subscription === 'Active').map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>SGSCRIPT</TableCell>
                        <TableCell>2023-10-15</TableCell>
                        <TableCell>{user.subscriptionEnd}</TableCell>
                        <TableCell>
                          <span className="inline-block px-2 py-1 text-xs rounded bg-green-500/20 text-green-500">
                            Active
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              Extend
                            </Button>
                            <Button variant="outline" size="sm">
                              Revoke
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="rewards">
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="text-2xl font-semibold mb-6">Scratch Card Rewards</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Current Month Winners</h3>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>User</TableHead>
                        <TableHead>Prize</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Payment Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">John Doe</TableCell>
                        <TableCell>₹500</TableCell>
                        <TableCell>2023-10-31</TableCell>
                        <TableCell>
                          <span className="inline-block px-2 py-1 text-xs rounded bg-yellow-500/20 text-yellow-500">
                            Pending
                          </span>
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            Mark as Paid
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Jane Smith</TableCell>
                        <TableCell>₹1000</TableCell>
                        <TableCell>2023-10-31</TableCell>
                        <TableCell>
                          <span className="inline-block px-2 py-1 text-xs rounded bg-green-500/20 text-green-500">
                            Paid
                          </span>
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm" disabled>
                            Paid
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Generate New Rewards</h3>
                <div className="bg-primary/10 p-4 rounded-md mb-4">
                  <p className="text-sm">
                    Generate new scratch card rewards for the next month. This action will:
                  </p>
                  <ul className="list-disc list-inside mt-2 text-sm">
                    <li>Create new scratch cards for all active subscribers</li>
                    <li>Randomly assign prize values (₹1, ₹2, ₹3)</li>
                    <li>Select two random users for special prizes (₹500, ₹1000)</li>
                  </ul>
                </div>
                <Button>Generate Rewards for Next Month</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="referrals">
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="text-2xl font-semibold mb-6">Referral Management</h2>
              
              {/* Referral Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-muted-foreground">Total Referrals</h3>
                  <p className="text-2xl font-bold">{totalReferrals}</p>
                </div>
                <div className="bg-green-500/10 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-muted-foreground">Average per User</h3>
                  <p className="text-2xl font-bold">{averageReferrals}</p>
                </div>
                <div className="bg-yellow-500/10 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-muted-foreground">Club Members</h3>
                  <p className="text-2xl font-bold">{clubMembers}</p>
                </div>
                <div className="bg-purple-500/10 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-muted-foreground">Standard Members</h3>
                  <p className="text-2xl font-bold">{users.filter(user => user.referralCount >= 5 && user.referralCount < 25).length}</p>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">User Referral Details</h3>
                <div className="w-1/3">
                  <Input
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Referral Count</TableHead>
                      <TableHead>Tier</TableHead>
                      <TableHead>Reward Eligibility</TableHead>
                      <TableHead>Referred By</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.map((user) => {
                      const tier = getTierBadge(user.referralCount);
                      return (
                        <TableRow key={user.id}>
                          <TableCell className="font-medium">{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>
                            <span className="font-bold text-primary">{user.referralCount}</span>
                          </TableCell>
                          <TableCell>
                            <span className={`inline-block px-2 py-1 text-xs rounded ${tier.color}`}>
                              {tier.name}
                            </span>
                          </TableCell>
                          <TableCell className="font-medium">
                            {getRewardAmount(user.referralCount)}
                          </TableCell>
                          <TableCell>
                            {user.referredBy || <span className="text-muted-foreground">Direct signup</span>}
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button variant="ghost" size="sm">
                                View Tree
                              </Button>
                              <Button variant="outline" size="sm">
                                Adjust
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>

              {/* Tier Distribution */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Tier Distribution</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 rounded-lg border border-green-400/20 bg-green-400/5">
                    <h4 className="font-medium text-green-400">Standard (5-24)</h4>
                    <p className="text-2xl font-bold">{users.filter(u => u.referralCount >= 5 && u.referralCount < 25).length}</p>
                    <p className="text-sm text-muted-foreground">Monthly rewards</p>
                  </div>
                  <div className="p-4 rounded-lg border border-gray-400/20 bg-gray-400/5">
                    <h4 className="font-medium text-gray-400">Silver (25-49)</h4>
                    <p className="text-2xl font-bold">{users.filter(u => u.referralCount >= 25 && u.referralCount < 50).length}</p>
                    <p className="text-sm text-muted-foreground">Annual club rewards</p>
                  </div>
                  <div className="p-4 rounded-lg border border-yellow-400/20 bg-yellow-400/5">
                    <h4 className="font-medium text-yellow-400">Gold (50-99)</h4>
                    <p className="text-2xl font-bold">{users.filter(u => u.referralCount >= 50 && u.referralCount < 100).length}</p>
                    <p className="text-sm text-muted-foreground">Annual club rewards</p>
                  </div>
                  <div className="p-4 rounded-lg border border-purple-400/20 bg-purple-400/5">
                    <h4 className="font-medium text-purple-400">Platinum (100+)</h4>
                    <p className="text-2xl font-bold">{users.filter(u => u.referralCount >= 100).length}</p>
                    <p className="text-sm text-muted-foreground">Annual club rewards</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
