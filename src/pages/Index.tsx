
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/components/LanguageSwitch';
import { CountrySelect } from '@/components/CountrySelect';

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
  const { language } = useLanguage();

  const translations = {
    en: {
      heroTitle: 'QUALITY PRODUCTS FOR QUALITY LIFE.',
      heroSubtitle: 'Elevate your trading experience with our premium tools and services',
      getStarted: 'Get Started',
      learnMore: 'Learn More',
      aboutTitle: 'About Our Products',
      aboutText1: 'SGSCRIPT.LIFE makes tech products that matter. We focus on creating premium trading tools that help you achieve your financial goals with precision and confidence.',
      aboutText2: 'Our flagship product, SGSCRIPT, provides advanced trading indicators that will transform how you analyze markets and make trading decisions.',
      whyChooseUs: 'Why Choose Us',
      feature1Title: 'Only the Highest Quality',
      feature1Desc: 'Our indicators are built with precision and reliability in mind, providing you with the best trading tools available.',
      feature2Title: 'Easy on the Budget',
      feature2Desc: 'Affordable pricing without compromising on quality. Our subscription plans are designed to fit various budgets.',
      feature3Title: 'Does the Job Right',
      feature3Desc: 'SGSCRIPT delivers accurate signals and insights that help you make informed trading decisions consistently.',
      whatWeveDone: 'What We\'ve Done',
      hearFromClients: 'Hear From Our Clients',
      readyToWork: 'Ready to Work With Us?',
      readySubtext: 'Get started with SGSCRIPT today and transform your trading experience.',
      signUpNow: 'Sign Up Now',
      tradesAnalyzed: 'Trades analyzed',
      customersServed: 'Customers served',
      productsDeployed: 'Products deployed',
    },
    ur: {
      heroTitle: 'معیاری زندگی کے لیے معیاری پروڈکٹس۔',
      heroSubtitle: 'ہمارے پریمیم ٹولز اور سروسز کے ساتھ اپنے ٹریڈنگ کے تجربے کو بلند کریں',
      getStarted: 'شروع کریں',
      learnMore: 'مزید جانیں',
      aboutTitle: 'ہمارے پروڈکٹس کے بارے میں',
      aboutText1: 'SGSCRIPT.LIFE ایسے ٹیک پروڈکٹس بناتا ہے جو اہمیت رکھتے ہیں۔ ہم پریمیم ٹریڈنگ ٹولز بنانے پر توجہ مرکوز کرتے ہیں جو آپ کو اپنے مالی اہداف کو درستگی اور اعتماد کے ساتھ حاصل کرنے میں مدد کرتے ہیں۔',
      aboutText2: 'ہمارا فلیگشپ پروڈکٹ، SGSCRIPT، اعلی درجے کے ٹریڈنگ انڈیکیٹرز فراہم کرتا ہے جو آپ کے مارکیٹوں کے تجزیے اور ٹریڈنگ کے فیصلوں کو تبدیل کردیں گے۔',
      whyChooseUs: 'ہمیں کیوں چنیں',
      feature1Title: 'صرف اعلی ترین معیار',
      feature1Desc: 'ہمارے انڈیکیٹرز درستگی اور قابل اعتماد ہونے کو مدنظر رکھتے ہوئے بنائے گئے ہیں، آپ کو دستیاب بہترین ٹریڈنگ ٹولز فراہم کرتے ہیں۔',
      feature2Title: 'بجٹ پر آسان',
      feature2Desc: 'معیار سے سمجھوتا کیے بغیر سستی قیمتیں۔ ہمارے سبسکرپشن پلانز مختلف بجٹ کے مطابق ڈیزائن کیے گئے ہیں۔',
      feature3Title: 'کام درست طریقے سے کرتا ہے',
      feature3Desc: 'SGSCRIPT درست سگنلز اور بصیرتیں فراہم کرتا ہے جو آپ کو مسلسل آگاہی سے بھرپور ٹریڈنگ فیصلے کرنے میں مدد کرتے ہیں۔',
      whatWeveDone: 'ہم نے کیا کیا ہے',
      hearFromClients: 'ہمارے کلائنٹس سے سنیں',
      readyToWork: 'ہمارے ساتھ کام کرنے کے لیے تیار ہیں؟',
      readySubtext: 'آج ہی SGSCRIPT کے ساتھ شروعات کریں اور اپنے ٹریڈنگ کے تجربے کو تبدیل کریں۔',
      signUpNow: 'ابھی سائن اپ کریں',
      tradesAnalyzed: 'تجزیہ شدہ ٹریڈز',
      customersServed: 'خدمت کیے گئے کسٹمرز',
      productsDeployed: 'تعینات کیے گئے پروڈکٹس',
    }
  };

  const t = (key: keyof typeof translations.en): string => {
    return language === 'en' ? translations.en[key] : translations.ur[key];
  };

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
          <div className={`text-center max-w-3xl mx-auto ${language === 'ur' ? 'rtl' : ''}`}>
            <div className="mb-4 flex justify-center">
              <CountrySelect />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">{t('heroTitle')}</span>
            </h1>
            <p className="text-lg mb-8 text-muted-foreground">
              {t('heroSubtitle')}
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="rounded-full px-8">
                  {t('getStarted')}
                </Button>
              </Link>
              <Link to="/products">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  {t('learnMore')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gradient-to-b from-brand-dark-purple to-background">
        <div className="container mx-auto px-4">
          <div className={`grid md:grid-cols-2 gap-12 items-center ${language === 'ur' ? 'rtl' : ''}`}>
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4">{t('aboutTitle')}</h2>
              <p className="mb-6 text-muted-foreground">
                {t('aboutText1')}
              </p>
              <p className="mb-6 text-muted-foreground">
                {t('aboutText2')}
              </p>
              <Link to="/about">
                <Button variant="outline">{t('learnMore')}</Button>
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
          <h2 className="text-3xl font-bold mb-10 text-center">{t('whyChooseUs')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              title={t('feature1Title')}
              description={t('feature1Desc')}
            />
            <FeatureCard
              title={t('feature2Title')}
              description={t('feature2Desc')}
            />
            <FeatureCard
              title={t('feature3Title')}
              description={t('feature3Desc')}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-background to-brand-dark-purple">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">{t('whatWeveDone')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard number="10,403" label={t('tradesAnalyzed')} />
            <StatCard number="927" label={t('customersServed')} />
            <StatCard number="658" label={t('productsDeployed')} />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-brand-dark-purple to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">
            {t('hearFromClients')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              name="Dempsey and Delta"
              company="Trading Firm"
              testimonial="SGSCRIPT.LIFE has completely transformed our trading strategy. The accuracy of the signals is impressive and has greatly improved our success rate."
              imgSrc=""
            />
            <TestimonialCard
              name="Noah Schumacher"
              company="Individual Trader"
              testimonial="As someone new to trading, SGSCRIPT.LIFE has been a game changer. The indicators are easy to understand and have helped me make more confident decisions."
              imgSrc=""
            />
            <TestimonialCard
              name="Stipple Unlimited"
              company="Investment Group"
              testimonial="The AI-powered indicators from SGSCRIPT.LIFE have given us an edge in the market. Their monthly scratch card rewards are a nice bonus too!"
              imgSrc=""
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('readyToWork')}</h2>
          <p className="mb-8 max-w-lg mx-auto text-muted-foreground">
            {t('readySubtext')}
          </p>
          <Link to="/signup">
            <Button size="lg" className="rounded-full px-8">
              {t('signUpNow')}
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
              <p className="text-muted-foreground">+91-8179492299</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-2">EMAIL</h3>
              <p className="text-muted-foreground">info@sgservices.in</p>
            </div>
            <div className="text-center md:text-right">
              <h3 className="font-bold mb-2">ADDRESS</h3>
              <p className="text-muted-foreground">
                Sathesh Goud Services Pvt. Ltd.<br />
                #220, Level 2, Oval Building, Plot No.- 18, Ilabs,<br />
                Madhapur, Hyderabad, Shaikpet, Telangana, India, 500081
              </p>
            </div>
          </div>
          <div className="text-center mt-8 text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SGSCRIPT.LIFE. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
