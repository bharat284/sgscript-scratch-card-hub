
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/context/AuthContext';
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
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '+1 234 567 8902',
    tradingviewId: 'janesmith_tv',
    subscription: 'Inactive',
    subscriptionEnd: null,
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    phone: '+1 234 567 8903',
    tradingviewId: 'bobjohnson_tv',
    subscription: 'Active',
    subscriptionEnd: '2023-11-15',
  },
];

const Admin = () => {
  const [users, setUsers] = useState(mockUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { user } = useAuth();

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
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
