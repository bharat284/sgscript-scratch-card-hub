import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/components/LanguageSwitch';
import { useCountry } from '@/components/CountrySelect';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';

// Feature Section Component
const FeatureSection = ({
  subtitle,
  title,
  description,
  imageSrc,
  imageAlt,
  buttonText,
  buttonLink,
  imageOnRight = true,
}: {
  subtitle: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  buttonText: string;
  buttonLink: string;
  imageOnRight?: boolean;
}) => (
  <section className="py-16 relative overflow-hidden">
    <div className="container mx-auto px-4">
      <div className={`glass-section p-8 sm:p-12 grid md:grid-cols-2 gap-12 items-center ${imageOnRight ? '' : 'md:flex-row-reverse'}`}>
        <div className={imageOnRight ? 'order-2' : 'order-1'}>
          <div className="glass-premium h-64 md:h-96 rounded-xl flex items-center justify-center overflow-hidden">
            {imageSrc ? (
              <img src={imageSrc} alt={imageAlt || title} className="w-full h-full object-cover" />
            ) : (
              <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-black/40 to-black/10 p-4">
                <span className="text-lg font-medium text-white/70">Chart Visualization</span>
              </div>
            )}
          </div>
        </div>
        <div className={imageOnRight ? 'order-1' : 'order-2'}>
          <span className="text-sm font-medium text-primary mb-2 block">{subtitle}</span>
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
          <p className="mb-8 text-muted-foreground">
            {description}
          </p>
          <Link to={buttonLink}>
            <Button 
              className="glass-button rounded-full px-6 py-2"
              variant="outline"
            >
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

// Club Card Component
const ClubCard = ({ 
  tier, 
  badge, 
  referrals, 
  duration, 
  reward, 
  country 
}: {
  tier: string;
  badge: string;
  referrals: number;
  duration: string;
  reward: string;
  country: string;
}) => (
  <div className="glass-premium p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all">
    <div className="text-center mb-6">
      <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
        tier === 'Silver' ? 'bg-gray-400/20' : 
        tier === 'Gold' ? 'bg-yellow-400/20' : 
        'bg-purple-400/20'
      }`}>
        <span className={`text-2xl font-bold ${
          tier === 'Silver' ? 'text-gray-300' : 
          tier === 'Gold' ? 'text-yellow-400' : 
          'text-purple-400'
        }`}>
          {tier === 'Silver' ? 'S' : tier === 'Gold' ? 'G' : 'P'}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-2">{tier}</h3>
      <p className="text-sm text-muted-foreground">{badge}</p>
    </div>
    
    <div className="space-y-4 mb-6">
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Referrals Required</span>
        <span className="font-semibold">{referrals}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Duration</span>
        <span className="font-semibold">{duration}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Reward</span>
        <span className={`font-bold ${
          tier === 'Silver' ? 'text-gray-300' : 
          tier === 'Gold' ? 'text-yellow-400' : 
          'text-purple-400'
        }`}>
          {country === 'in' ? `₹${reward}` : `$${reward}`}
        </span>
      </div>
    </div>
    
    <div className="text-xs text-muted-foreground text-center">
      Reward delivered as annual scratch card
    </div>
  </div>
);

// Price Card Component
const PriceCard = ({ country }: { country: string }) => {
  const formatPrice = (basePrice: number): string => {
    if (country === 'in') {
      // Special pricing for India: $10 = ₹99
      return basePrice === 10 ? '₹99' : `₹${(basePrice * 8.3).toFixed(0)}`;
    }
    return `$${basePrice}`;
  };
  
  return (
    <div className="glass-premium p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all max-w-md mx-auto">
      <h3 className="text-xl font-bold mb-2 text-gradient">SGSCRIPT</h3>
      <div className="flex items-end mb-6">
        <span className="text-4xl font-bold">
          {formatPrice(10)}
        </span>
        <span className="text-muted-foreground ml-1 mb-1">/month</span>
      </div>
      
      <div className="mb-6 rounded-lg overflow-hidden">
        <img 
          src="/lovable-uploads/7a6186ab-f97b-48a8-8950-c7f437f87501.png" 
          alt="Trading training dashboard" 
          className="w-full h-auto"
        />
      </div>
      
      <ul className="space-y-4 mb-8">
        <li className="flex items-center">
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
            className="h-5 w-5 mr-2 text-primary"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>AI-powered Training training indicators</span>
        </li>
        <li className="flex items-center">
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
            className="h-5 w-5 mr-2 text-primary"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>Professional-grade screeners</span>
        </li>
        <li className="flex items-center">
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
            className="h-5 w-5 mr-2 text-primary"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>Advanced backtesting tools</span>
        </li>
        <li className="flex items-center">
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
            className="h-5 w-5 mr-2 text-primary"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>TradingView integration</span>
        </li>
        <li className="flex items-center">
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
            className="h-5 w-5 mr-2 text-primary"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>Real-time market insights</span>
        </li>
      </ul>
      
      <Link to="/signup">
        <Button className="w-full rounded-full bg-primary/80 hover:bg-primary/90">
          Get Started
        </Button>
      </Link>
    </div>
  );
};

// FAQ Accordion Component
const FAQ = () => (
  <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto glass-section p-6">
    <AccordionItem value="item-1" className="border-white/10">
      <AccordionTrigger className="text-left text-lg font-medium">How does it work?</AccordionTrigger>
      <AccordionContent>
        SGSCRIPT provides AI-powered indicators that integrate with your Training training platform, automatically analyzing market data to identify potential Training training opportunities based on our proprietary algorithms.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2" className="border-white/10">
      <AccordionTrigger className="text-left text-lg font-medium">Which plan should I choose?</AccordionTrigger>
      <AccordionContent>
        We currently offer a single comprehensive plan at $10/month (or ₹10/month for Indian users) that includes all our premium features and Training training indicators.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3" className="border-white/10">
      <AccordionTrigger className="text-left text-lg font-medium">What markets are supported?</AccordionTrigger>
      <AccordionContent>
        SGSCRIPT supports a wide range of markets including stocks, forex, cryptocurrencies, commodities, and futures, allowing you to apply our indicators across different asset classes.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-4" className="border-white/10">
      <AccordionTrigger className="text-left text-lg font-medium">Does it work on MetaTrader 4/5?</AccordionTrigger>
      <AccordionContent>
        Yes, our indicators are compatible with MetaTrader 4 and 5 platforms, as well as TradingView and many other popular Training training platforms.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-5" className="border-white/10">
      <AccordionTrigger className="text-left text-lg font-medium">Can I win every trade using this?</AccordionTrigger>
      <AccordionContent>
        While our indicators provide high-quality signals with 70-80% accuracy, no Training training system can guarantee 100% success. Market conditions and external factors will always influence outcomes.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-6" className="border-white/10">
      <AccordionTrigger className="text-left text-lg font-medium">How do discounts work?</AccordionTrigger>
      <AccordionContent>
        We occasionally offer promotional discounts to new and existing customers. Keep an eye on our website or subscribe to our newsletter to be informed about special offers.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-7" className="border-white/10">
      <AccordionTrigger className="text-left text-lg font-medium">Is this friendly for beginners?</AccordionTrigger>
      <AccordionContent>
        Absolutely! Our tools are designed with intuitive interfaces suitable for traders of all experience levels, and we provide comprehensive documentation and support to help beginners get started.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-8" className="border-white/10">
      <AccordionTrigger className="text-left text-lg font-medium">Can I change my plan anytime?</AccordionTrigger>
      <AccordionContent>
        Yes, you can upgrade, downgrade, or cancel your subscription at any time through your account dashboard with no hidden fees or long-term commitments.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

// Payment Security Section Component
const PaymentSecurity = () => (
  <div className="glass p-8 rounded-xl border border-white/10 max-w-3xl mx-auto">
    <h3 className="text-2xl font-bold mb-4 text-center">Safe and secure checkout</h3>
    <p className="text-muted-foreground mb-6 text-center">
      Cancel anytime in one click from within your account. A link to get instant access is prompted to you directly after signing up. Trade at your own risk.
    </p>
    
    <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
      <div className="flex items-center bg-white/10 p-2 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 mr-2">
          <rect width="20" height="14" x="2" y="5" rx="2" />
          <path d="M2 10h20" />
        </svg>
        <span>SECURE</span>
      </div>
      <div className="bg-white/10 p-2 rounded-md">Stripe</div>
      <div className="bg-white/10 p-2 rounded-md">Mastercard</div>
      <div className="bg-white/10 p-2 rounded-md">Visa</div>
      <div className="bg-white/10 p-2 rounded-md">American Express</div>
      <div className="bg-white/10 p-2 rounded-md">PayPal</div>
    </div>
  </div>
);

const Index = () => {
  const { language } = useLanguage();
  const { country } = useCountry();

  const translations = {
    en: {
      heroTitle: 'Boost your Training training strategy with AI powered indicators',
      heroSubtitle: 'Elevate your Training training experience with our premium tools and services',
      getStarted: 'Get Started',
      learnMore: 'Learn More',
      aboutTitle: 'About Our Products',
      aboutText1: 'SGSCRIPT makes tech products that matter. We focus on creating premium Training training tools that help you achieve your financial goals with precision and confidence.',
      aboutText2: 'Our flagship product, SGSCRIPT, provides advanced Training training indicators that will transform how you analyze markets and make Training training decisions.',
      whyChooseUs: 'Why Choose Us',
      feature1Title: 'Only the Highest Quality',
      feature1Desc: 'Our indicators are built with precision and reliability in mind, providing you with the best Training training tools available.',
      feature2Title: 'Easy on the Budget',
      feature2Desc: 'Affordable pricing without compromising on quality. Our subscription plans are designed to fit various budgets.',
      feature3Title: 'Does the Job Right',
      feature3Desc: 'SGSCRIPT delivers accurate signals and insights that help you make informed Training training decisions consistently.',
      whatWeveDone: 'What We\'ve Done',
      hearFromClients: 'Hear From Our Clients',
      readyToWork: 'Ready to Work With Us?',
      readySubtext: 'Get started with SGSCRIPT today and transform your Training training experience.',
      signUpNow: 'Sign Up Now',
      tradesAnalyzed: 'Trades analyzed',
      customersServed: 'Customers served',
      productsDeployed: 'Products deployed',
      frequentQuestions: 'Frequently Asked Questions',
    },
    hi: {
      heroTitle: 'एआई संकेतकों के साथ अपनी ट्रेडिंग रणनीति को बढ़ावा दें',
      heroSubtitle: 'हमारे प्रीमियम टूल्स और सेवाओं के साथ अपने ट्रेडिंग अनुभव को बढ़ाएं',
      getStarted: 'शुरू करें',
      learnMore: 'और जानें',
      aboutTitle: 'हमारे उत्पादों के बारे में',
      aboutText1: 'SGSCRIPT ऐसे टेक प्रोडक्ट्स बनाता है जो मायने रखते हैं। हम प्रीमियम ट्रेडिंग टूल्स बनाने पर ध्यान केंद्रित करते हैं जो आपको सटीकता और आत्मविश्वास के साथ अपने वित्तीय लक्ष्यों को प्राप्त करने में मदद करते हैं।',
      aboutText2: 'हमारा फ्लैगशिप प्रोडक्ट, SGSCRIPT, उन्नत ट्रेडिंग इंडिकेटर्स प्रदान करता है जो बाजारों का विश्लेषण करने और ट्रेडिंग के فیصلों को बदल देगा।',
      whyChooseUs: 'हमें क्यों चुनें',
      feature1Title: 'केवल उच्चतम गुणवत्ता',
      feature1Desc: 'हमारे इंडिकेटर्स सटीकता और विश्वसनीयता को ध्यान में रखकर बनाए गए हैं, जो आपको उपलब्ध सर्वश्रेष्ठ ट्रेडिंग टूल्स प्रदान करते हैं।',
      feature2Title: 'बजट पर आसान',
      feature2Desc: 'गुणवत्ता से समझौता किए बिना किफायती मूल्य निर्धारण। हमारी सदस्यता योजनाएं विभिन्न बजट के अनुकूल बनाई गई हैं।',
      feature3Title: 'काम सही तरीके से करता है',
      feature3Desc: 'SGSCRIPT सटीक संकेत और अंतर्दृष्टि प्रदान करता है जो आपको लगातार सूचित ट्रेडिंग निर्णय लेने में मदद करते हैं।',
      whatWeveDone: 'हमने क्या किया है',
      hearFromClients: 'हमारे क्लائنटस से सुनें',
      readyToWork: 'हमारे साथ काम करने के लिए तैयार हैं?',
      readySubtext: 'आज ही SGSCRIPT के साथ शुरुआत करें और अपने ट्रेडिंग अनुभव को बदलें।',
      signUpNow: 'अभी साइन अप करें',
      tradesAnalyzed: 'विश्लेषित ट्रेड्स',
      customersServed: 'सेवित ग्राहक',
      productsDeployed: 'तैनात उत्पाद',
      frequentQuestions: 'अक्सर पूछे जाने वाले प्रश्न',
    },
    ur: {
      heroTitle: 'اے آئی اشاریہ کے ساتھ اپنی ٹریڈنگ حکمت عملی کو فروغ دیں',
      heroSubtitle: 'ہمارے پریمیم ٹولز اور سروسز کے ساتھ اپنے ٹریڈنگ کے تجربے کو بلند کریں',
      getStarted: 'شروع کریں',
      learnMore: 'مزید جانیں',
      aboutTitle: 'ہمارे پروڈکٹس کے بارے میں',
      aboutText1: 'SGSCRIPT ایسے ٹیک پروڈکٹس بناتا ہے جو اہمیت رکھتے ہیں۔ ہم پریمیم ٹریڈنگ ٹولز بنانے پر توجہ مرکوز کرتے ہیں جو آپ کو اپنے مالی اہداف کو درستگی اور اعتماد کے ساتھ حاصل کرنे میں مدد کرتे ہیں۔',
      aboutText2: 'ہمارا فلیگشپ پروڈکٹ، SGSCRIPT، اعلی درجے کے ٹریڈنگ انڈیکیٹرز فراہم کرتا ہے جو آپ کے مارکیٹوں کے تجزیے اور ٹریڈنگ کے فیصلوں کو تبدیل کردیں گے۔',
      whyChooseUs: 'ہمیں کیوں چنیں',
      feature1Title: 'صرف اعلی ترین معیار',
      feature1Desc: 'ہمارे انڈیکیٹرز درستگی اور قابل اعتماد ہونے کو مدنظر رکھتے ہوئے بنائے گئے ہیں، آپ کو دستیاب بہترین ٹریڈنگ ٹولز فراہم کرتे ہیں۔',
      feature2Title: 'بجट پر آسان',
      feature2Desc: 'معیار سے سمجھوتا کیے بغیر سستی قیمتیں۔ ہمارे سبسکرپشن پلانز مختلف بجٹ کे مطابق ڈیزائن کیے گئے ہیں۔',
      feature3Title: 'کام درست طریقے سے कرتا ہے',
      feature3Desc: 'SGSCRIPT درست سگنلز اور بصیرتیں فراہم کرتا ہے جو آپ کو مسلسل آگاہی سے بھرپور ٹریڈنگ فیصلے کرنے میں مدد کرتे ہیں۔',
      whatWeveDone: 'ہم نے کیا کیا ہے',
      hearFromClients: 'ہمارे کلائنٹس सے سنیں',
      readyToWork: 'ہمارे सاتھ کام कرنے کे لیے تیار ہیں?',
      readySubtext: 'آج ہی SGSCRIPT के साथ شروعات کریں اور اپنे ٹریڈنگ کے تجربے کो تبدیل کریں۔',
      signUpNow: 'ابھی سائن اپ کریں',
      tradesAnalyzed: 'تجزیہ شدہ ٹریڈز',
      customersServed: 'خدمت کیے گئے کسٹمرز',
      productsDeployed: 'تعینات کیے گئے پروڈکٹس',
      frequentQuestions: 'اکثر پوچھے گئे سوالات',
    },
    ar: {
      heroTitle: 'عزز استراتيجية التداول الخاصة بك بمؤشرات مدعومة بالذكاء الاصطناعي',
      heroSubtitle: 'ارتق بتجربة التداول الخاصة بك مع أدواتنا وخدماتنا المتميزة',
      getStarted: 'ابدأ الآن',
      learnMore: 'اعرف المزيد',
      aboutTitle: 'عن منتجاتنا',
      aboutText1: 'يصنع SGSCRIPT منتجات تقنية مهمة. نحن نركز على إنشاء أدوات تداول متميزة تساعدك على تحقيق أهدافك المالية بدقة وثقة.',
      aboutText2: 'يوفر منتجنا الرئيسي، SGSCRIPT، مؤشرات تداول متقدمة ستغير طريقة تحليلك للأسواق واتخاذ قرارات التداول.',
      whyChooseUs: 'لماذا تختارنا',
      feature1Title: 'فقط أعلى جودة',
      feature1Desc: 'تم بناء مؤشراتنا مع مراعاة الدقة والموثوقية، مما يوفر لك أفضل أدوات التداول المتاحة.',
      feature2Title: 'سهل على الميزانية',
      feature2Desc: 'أسعار معقولة دون المساس بالجودة. تم تصميم خطط الاشتراك لدينا لتناسب الميزانيات المختلفة.',
      feature3Title: 'يؤدي العمل بشكل صحيح',
      feature3Desc: 'يقدم SGSCRIPT إشارات ورؤى دقيقة تساعدك على اتخاذ قرارات تداول مستنيرة باستمرار.',
      whatWeveDone: 'ما قمنا به',
      hearFromClients: 'اسمع من عملائنا',
      readyToWork: 'مستعد للعمل معنا؟',
      readySubtext: 'ابدأ مع SGSCRIPT اليوم وقم بتحويل تجربة التداول الخاصة بك.',
      signUpNow: 'سجل الآن',
      tradesAnalyzed: 'الصفقات التي تم تحليلها',
      customersServed: 'العملاء الذين تمت خدمتهم',
      productsDeployed: 'تعینات کیے گئے پروڈکٹس',
      frequentQuestions: 'الأسئلة المتكررة',
    }
  };

  const t = (key: keyof typeof translations.en): string => {
    return translations[language as keyof typeof translations][key] || translations.en[key];
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0e0e10] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {/* Hero Background Ring - moved above gradient */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="/lovable-uploads/df6af4d6-8fc9-421d-921c-b9a6c763a8c8.png" 
              alt="Gradient ring background" 
              className="w-full max-w-3xl h-auto opacity-60 animate-rotate-slow"
            />
          </div>
          {/* Lighter gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center max-w-3xl mx-auto ${language === 'ur' || language === 'ar' ? 'rtl' : ''}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">{t('heroTitle')}</span>
            </h1>
            <p className="text-lg mb-8 text-muted-foreground">
              {t('heroSubtitle')}
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="rounded-full px-8 glass-button">
                  {t('getStarted')}
                </Button>
              </Link>
              <Link to="/products">
                <Button size="lg" variant="outline" className="rounded-full px-8 backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10">
                  {t('learnMore')}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl animate-float opacity-50"></div>
        <div className="absolute bottom-20 -right-40 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl animate-float opacity-30" style={{ animationDelay: "1s" }}></div>
      </section>

      {/* Feature Sections */}
      <FeatureSection
        subtitle="Pro Toolkits"
        title="State of the art Training training tools"
        description="Automate complicated price action, get easy signals, and detect reversals by smart money. Our world class toolkits are the best way to level up your TradingView charts."
        buttonText="Level Up Your Charts"
        buttonLink="/products"
        imageOnRight={true}
        imageSrc="/lovable-uploads/8afd35d2-582f-46eb-8bde-1ca534172723.png"
        imageAlt="Training training chart with candlesticks"
      />

      <FeatureSection
        subtitle="Screeners & Alerts"
        title="Easily find high probability setups"
        description="Use professional-grade screeners & alerts with our most exclusive Training training algorithms. Filter out market chaos and find trade setups on stocks, crypto, & forex markets."
        buttonText="Unlock Access"
        buttonLink="/products"
        imageOnRight={false}
        imageSrc="/lovable-uploads/4bfcfa29-8d39-489d-ab77-2907e132b968.png"
        imageAlt="Training training chart analysis"
      />

      <FeatureSection
        subtitle="Next-Gen Backtesting"
        title="An AI agent to build winning strategies"
        description="Ask our AI agent to find the best Training training strategies and do the work for you. Plug our backtesting software into any platform to automate your trades like a pro."
        buttonText="Get Access Now"
        buttonLink="/signup"
        imageOnRight={true}
        imageSrc="/lovable-uploads/56d7c40a-054d-4c59-9aa0-7e191c68ff33.png"
        imageAlt="3D cube visualization"
      />

      {/* Crypto & Multi-Asset Support */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="glass-section p-8 sm:p-12 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-medium text-primary mb-2 block">Multi-Asset Training training</span>
              <h2 className="text-3xl font-bold mb-6">Support for all major markets</h2>
              <p className="mb-8 text-muted-foreground">
                Train with confidence across cryptocurrency, forex, stocks, and commodities markets. Our intelligent indicators work with TradingView, MetaTrader, and most other popular platforms.
              </p>
              <Link to="/products">
                <Button 
                  className="glass-button rounded-full px-6 py-2"
                  variant="outline"
                >
                  Explore Markets
                </Button>
              </Link>
            </div>
            <div>
              <div className="glass-premium h-64 md:h-96 rounded-xl flex items-center justify-center overflow-hidden">
                <img src="/lovable-uploads/4121a438-66d6-42e2-b48a-135238731245.png" alt="Crypto wallet and currency symbols" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Trading */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="glass-section p-8 sm:p-12 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="glass-premium h-64 md:h-96 rounded-xl flex items-center justify-center overflow-hidden">
                <img src="/lovable-uploads/8d4e71fa-4f71-45d4-86ca-339a2e783b7d.png" alt="Mobile Training training app" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <span className="text-sm font-medium text-primary mb-2 block">Train On The Go</span>
              <h2 className="text-3xl font-bold mb-6">Mobile-friendly Training training experience</h2>
              <p className="mb-8 text-muted-foreground">
                Access your Training training signals and insights anywhere, anytime. Our mobile-optimized platform ensures you never miss a profitable opportunity, even when you're on the move.
              </p>
              <Link to="/signup">
                <Button 
                  className="glass-button rounded-full px-6 py-2"
                  variant="outline"
                >
                  Start Mobile Training training
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Pricing</h2>
          <PriceCard country={country} />
        </div>
      </section>

      {/* Club Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">SGSCRIPT Club</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            Join our exclusive referral club and earn amazing rewards. Build your network and unlock premium benefits.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <ClubCard 
              tier="Silver"
              badge="Silver Badge"
              referrals={25}
              duration="4 months"
              reward={country === 'in' ? '10,000' : '1,000'}
              country={country}
            />
            <ClubCard 
              tier="Gold"
              badge="Gold Badge"
              referrals={50}
              duration="8 months"
              reward={country === 'in' ? '50,000' : '5,000'}
              country={country}
            />
            <ClubCard 
              tier="Platinum"
              badge="Platinum Badge"
              referrals={100}
              duration="1 year"
              reward={country === 'in' ? '1,00,000' : '10,000'}
              country={country}
            />
          </div>
        </div>
      </section>

      {/* Payment Security Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <PaymentSecurity />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">{t('frequentQuestions')}</h2>
          <FAQ />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 text-center">
          <div className="glass-section p-8 md:p-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">{t('readyToWork')}</h2>
            <p className="mb-8 max-w-lg mx-auto text-muted-foreground">
              {t('readySubtext')}
            </p>
            <Link to="/signup">
              <Button size="lg" className="rounded-full px-8 glass-button">
                {t('signUpNow')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 backdrop-blur-xl bg-black/20">
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
            &copy; {new Date().getFullYear()} SGSCRIPT. All rights reserved.
          </div>
          <div className="text-center mt-4 text-xs text-muted-foreground max-w-3xl mx-auto">
            <p className="italic">
              Disclaimer: Training training involves significant risk and is not suitable for everyone. The information provided is for educational purposes only and is not investment advice. Past performance is not indicative of future results. Users are responsible for their Training training decisions. SGSCRIPT does not guarantee specific results and is not liable for any losses incurred.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
