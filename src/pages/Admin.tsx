import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/context/AuthContext';
import { useCountry } from '@/components/CountrySelect';
import Navbar from '@/components/Navbar';

// Mock data
const mockUsers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 234 567 8901',
    tradingviewId: 'johndoe_tv',
    subscription: 'Active',
    subscriptionEnd: '2023-12-31',
    referralCount: 12,
    referredBy: null,
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
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    phone: '+1 234 567 8903',
    tradingviewId: 'bobjohnson_tv',
    subscription: 'Active',
    subscriptionEnd: '2023-11-15',
    referralCount: 25,
    referredBy: 'Jane Smith',
  },
];

const Admin = () => {
  const [users, setUsers] = useState(mockUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { user } = useAuth();
  const { country } = useCountry();

  // In a real app, you would check for admin role
  const isAdmin = true; // user?.role === 'admin';

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

  const totalReferrals = users.reduce((sum, user) => sum + user.referralCount, 0);
  const averageReferrals = Math.round(totalReferrals / users.length);
  const clubMembers = users.filter(user => user.referralCount >= 25).length;

  return (
    <div className="min-h-screen flex flex-col bg-brand-dark-purple">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

        <Tabs defaultValue="users">
          <TabsList className="mb-8">
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
            <TabsTrigger value="rewards">Rewards</TabsTrigger>
            <TabsTrigger value="referrals">Referral Details</TabsTrigger>
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
                      <TableHead>TradingView ID</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>{user.tradingviewId}</TableCell>
                        <TableCell>
                          <span
                            className={`inline-block px-2 py-1 text-xs rounded ${
                              user.subscription === 'Active'
                                ? 'bg-green-500/20 text-green-500'
                                : 'bg-yellow-500/20 text-yellow-500'
                            }`}
                          >
                            {user.subscription}
                          </span>
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
                    ))}
                  </TableBody>
                </Table>
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
                    <TableRow>
                      <TableCell className="font-medium">John Doe</TableCell>
                      <TableCell>SGSCRIPT</TableCell>
                      <TableCell>2023-10-15</TableCell>
                      <TableCell>2023-12-31</TableCell>
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
                    <TableRow>
                      <TableCell className="font-medium">Bob Johnson</TableCell>
                      <TableCell>SGSCRIPT</TableCell>
                      <TableCell>2023-09-20</TableCell>
                      <TableCell>2023-11-15</TableCell>
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
