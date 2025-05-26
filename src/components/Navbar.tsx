
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useAuth } from '@/context/AuthContext';
import { LanguageSwitch } from '@/components/LanguageSwitch';

const Navbar = () => {
  const { user, logout } = useAuth();
  const isLoggedIn = !!user;
  
  const handleLogout = () => {
    logout();
    // Navigate to home or perform actual logout
  };

  return (
    <header className="w-full py-4 px-4 md:px-8 backdrop-blur-xl bg-black/5 border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gradient">SGSCRIPT</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-sm hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/products" className="text-sm hover:text-primary transition-colors">
            Products
          </Link>
          <Link to="/contact" className="text-sm hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <LanguageSwitch />
          {isLoggedIn ? (
            <>
              <Link to="/dashboard">
                <Button variant="outline" className="backdrop-blur-md bg-white/5 border border-white/10">Dashboard</Button>
              </Link>
              <Button variant="ghost" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" className="backdrop-blur-md bg-white/5 border border-white/10">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="backdrop-blur-md bg-primary/80 hover:bg-primary/90 text-white">Sign Up</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="backdrop-blur-xl bg-black/40 border-l border-white/10">
            <div className="flex flex-col space-y-6 mt-10">
              <Link to="/" className="text-lg">
                Home
              </Link>
              <Link to="/about" className="text-lg">
                About
              </Link>
              <Link to="/products" className="text-lg">
                Products
              </Link>
              <Link to="/contact" className="text-lg">
                Contact
              </Link>
              <div className="pt-4">
                <LanguageSwitch />
              </div>
              <div className="pt-4 flex flex-col space-y-4">
                {isLoggedIn ? (
                  <>
                    <Link to="/dashboard">
                      <Button className="w-full backdrop-blur-md bg-primary/80 hover:bg-primary/90">Dashboard</Button>
                    </Link>
                    <Button variant="outline" className="w-full backdrop-blur-md bg-white/5 border border-white/10" onClick={handleLogout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <Button variant="outline" className="w-full backdrop-blur-md bg-white/5 border border-white/10">Login</Button>
                    </Link>
                    <Link to="/signup">
                      <Button className="w-full backdrop-blur-md bg-primary/80 hover:bg-primary/90">Sign Up</Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
