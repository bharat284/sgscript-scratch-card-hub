
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';

// Feature Card Component
const FeatureCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="bg-card-gradient backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

// Stat Card Component
const StatCard = ({ number, label }: { number: string; label: string }) => (
  <div className="bg-brand-dark-purple p-4 rounded-lg flex flex-col items-center justify-center">
    <p className="text-2xl font-bold text-primary">{number}</p>
    <p className="text-sm text-muted-foreground">{label}</p>
  </div>
);

// Testimonial Card Component
const TestimonialCard = ({
  name,
  company,
  testimonial,
  imgSrc,
}: {
  name: string;
  company: string;
  testimonial: string;
  imgSrc: string;
}) => (
  <div className="bg-card-gradient backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 rounded-full bg-brand-purple flex items-center justify-center mr-4">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={name}
            className="w-full h-full rounded-full object-cover"
          />
        ) : (
          <span className="text-lg font-bold">{name[0]}</span>
        )}
      </div>
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-xs text-muted-foreground">{company}</p>
      </div>
    </div>
    <p className="text-sm">{testimonial}</p>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-dark-purple">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px]">
          <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-rotate-slow"></div>
          <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">QUALITY PRODUCTS</span>
              <br />
              <span className="text-gradient">FOR QUALITY LIFE.</span>
            </h1>
            <p className="text-lg mb-8 text-muted-foreground">
              Elevate your trading experience with our premium tools and services
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="rounded-full px-8">
                  Get Started
                </Button>
              </Link>
              <Link to="/products">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gradient-to-b from-brand-dark-purple to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4">About Our Products</h2>
              <p className="mb-6 text-muted-foreground">
                Tektias makes tech products that matter. We focus on creating premium
                trading tools that help you achieve your financial goals with precision
                and confidence.
              </p>
              <p className="mb-6 text-muted-foreground">
                Our flagship product, SGSCRIPT, provides advanced trading indicators
                that will transform how you analyze markets and make trading decisions.
              </p>
              <Link to="/about">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="h-64 md:h-96 bg-card-gradient rounded-xl flex items-center justify-center animate-float">
                <div className="glowing-ring p-8 rounded-full">
                  <div className="text-4xl font-bold text-gradient">SGSCRIPT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              title="Only the Highest Quality"
              description="Our indicators are built with precision and reliability in mind, providing you with the best trading tools available."
            />
            <FeatureCard
              title="Easy on the Budget"
              description="Affordable pricing without compromising on quality. Our subscription plans are designed to fit various budgets."
            />
            <FeatureCard
              title="Does the Job Right"
              description="SGSCRIPT delivers accurate signals and insights that help you make informed trading decisions consistently."
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-background to-brand-dark-purple">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">What We've Done</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard number="10,403" label="Trades analyzed" />
            <StatCard number="927" label="Customers served" />
            <StatCard number="658" label="Products deployed" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-brand-dark-purple to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Hear From Our Clients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              name="Dempsey and Delta"
              company="Trading Firm"
              testimonial="Testimonials are great because they provide social proof and stress it's a great decision to try your services."
              imgSrc=""
            />
            <TestimonialCard
              name="Noah Schumacher"
              company="Individual Trader"
              testimonial="Testimonials are great because they provide social proof and stress it's a great decision to try your services."
              imgSrc=""
            />
            <TestimonialCard
              name="Stipple Unlimited"
              company="Investment Group"
              testimonial="Testimonials are great because they provide social proof and stress it's a great decision to try your services."
              imgSrc=""
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="mb-8 max-w-lg mx-auto text-muted-foreground">
            Get started with SGSCRIPT today and transform your trading experience.
          </p>
          <Link to="/signup">
            <Button size="lg" className="rounded-full px-8">
              Sign Up Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-bold mb-2">PHONE</h3>
              <p className="text-muted-foreground">+01 234 567 890</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-2">EMAIL</h3>
              <p className="text-muted-foreground">hello@tektias.com</p>
            </div>
            <div className="text-center md:text-right">
              <h3 className="font-bold mb-2">SOCIAL</h3>
              <div className="flex justify-center md:justify-end space-x-4">
                <a href="#" className="hover:text-primary">
                  FB
                </a>
                <a href="#" className="hover:text-primary">
                  TW
                </a>
                <a href="#" className="hover:text-primary">
                  IG
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} TEKTIAS. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
