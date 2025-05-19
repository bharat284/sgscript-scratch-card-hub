
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

// Price Card Component
const PriceCard = ({ country }: { country: string }) => {
  const isPriceInRupees = country === 'in';
  
  return (
    <div className="glass-premium p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all max-w-md mx-auto">
      <h3 className="text-xl font-bold mb-2 text-gradient">SGSCRIPT</h3>
      <div className="flex items-end mb-6">
        <span className="text-4xl font-bold">
          {isPriceInRupees ? '₹10' : '$10'}
        </span>
        <span className="text-muted-foreground ml-1 mb-1">/month</span>
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
          <span>AI-powered trading indicators</span>
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
  <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
    <AccordionItem value="item-1" className="border-white/10">
      <AccordionTrigger className="text-left">What is SGSCRIPT?</AccordionTrigger>
      <AccordionContent>
        SGSCRIPT is a cutting-edge, AI-powered platform that provides automated, tailored indicators to help traders make informed buy and sell decisions with high accuracy—ranging from 70% to 80%.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2" className="border-white/10">
      <AccordionTrigger className="text-left">How accurate are the trading indicators?</AccordionTrigger>
      <AccordionContent>
        Our AI-powered indicators have shown accuracy rates of 70-80% in identifying profitable trading opportunities across various market conditions.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3" className="border-white/10">
      <AccordionTrigger className="text-left">Can I use SGSCRIPT with TradingView?</AccordionTrigger>
      <AccordionContent>
        Yes! SGSCRIPT is fully integrated with TradingView. You can easily connect our indicators directly to your TradingView charts for seamless analysis.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-4" className="border-white/10">
      <AccordionTrigger className="text-left">Is my data secure with SGSCRIPT?</AccordionTrigger>
      <AccordionContent>
        Absolutely. Our system is built on a secure, decentralized architecture that ensures complete privacy and protection of user data. We employ industry-standard encryption protocols to safeguard your information.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-5" className="border-white/10">
      <AccordionTrigger className="text-left">Can I cancel my subscription anytime?</AccordionTrigger>
      <AccordionContent>
        Yes, you can cancel your subscription at any time. We offer a hassle-free cancellation process with no hidden fees or long-term commitments.
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
    
    <div className="text-center glass-premium rounded-xl p-6 border border-white/10">
      <span className="text-3xl font-bold block mb-1">30-day</span>
      <span className="text-xl">money-back guarantee</span>
    </div>
  </div>
);

const Index = () => {
  const { language } = useLanguage();
  const { country } = useCountry();

  const translations = {
    en: {
      heroTitle: 'Boost your trading strategy with AI powered indicators',
      heroSubtitle: 'Elevate your trading experience with our premium tools and services',
      getStarted: 'Get Started',
      learnMore: 'Learn More',
      aboutTitle: 'About Our Products',
      aboutText1: 'SGSCRIPT makes tech products that matter. We focus on creating premium trading tools that help you achieve your financial goals with precision and confidence.',
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
      frequentQuestions: 'Frequently Asked Questions',
    },
    hi: {
      heroTitle: 'एआई संकेतकों के साथ अपनी ट्रेडिंग रणनीति को बढ़ावा दें',
      heroSubtitle: 'हमारे प्रीमियम टूल्स और सेवाओं के साथ अपने ट्रेडिंग अनुभव को बढ़ाएं',
      getStarted: 'शुरू करें',
      learnMore: 'और जानें',
      aboutTitle: 'हमारे उत्पादों के बारे में',
      aboutText1: 'SGSCRIPT ऐसे टेक प्रोडक्ट्स बनाता है जो मायने रखते हैं। हम प्रीमियम ट्रेडिंग टूल्स बनाने पर ध्यान केंद्रित करते हैं जो आपको सटीकता और आत्मविश्वास के साथ अपने वित्तीय लक्ष्यों को प्राप्त करने में मदद करते हैं।',
      aboutText2: 'हमारा फ्लैगशिप प्रोडक्ट, SGSCRIPT, उन्नत ट्रेडिंग इंडिकेटर्स प्रदान करता है जो बाजारों का विश्लेषण करने और ट्रेडिंग निर्णय लेने के तरीके को बदल देगा।',
      whyChooseUs: 'हमें क्यों चुनें',
      feature1Title: 'केवल उच्चतम गुणवत्ता',
      feature1Desc: 'हमारे इंडिकेटर्स सटीकता और विश्वसनीयता को ध्यान में रखकर बनाए गए हैं, जो आपको उपलब्ध सर्वश्रेष्ठ ट्रेडिंग टूल्स प्रदान करते हैं।',
      feature2Title: 'बजट पर आसान',
      feature2Desc: 'गुणवत्ता से समझौता किए बिना किफायती मूल्य निर्धारण। हमारी सदस्यता योजनाएं विभिन्न बजट के अनुकूल बनाई गई हैं।',
      feature3Title: 'काम सही तरीके से करता है',
      feature3Desc: 'SGSCRIPT सटीक संकेत और अंतर्दृष्टि प्रदान करता है जो आपको लगातार सूचित ट्रेडिंग निर्णय लेने में मदद करते हैं।',
      whatWeveDone: 'हमने क्या किया है',
      hearFromClients: 'हमारे ग्राहकों से सुनें',
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
      aboutTitle: 'ہمارے پروڈکٹس کے بارے میں',
      aboutText1: 'SGSCRIPT ایسے ٹیک پروڈکٹس بناتا ہے جو اہمیت رکھتے ہیں۔ ہم پریمیم ٹریڈنگ ٹولز بنانے پر توجہ مرکوز کرتے ہیں جو آپ کو اپنے مالی اہداف کو درستگی اور اعتماد کے ساتھ حاصل کرنے میں مدد کرتے ہیں۔',
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
      frequentQuestions: 'اکثر پوچھے گئے سوالات',
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
      productsDeployed: 'المنتجات التي تم نشرها',
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
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
        title="State of the art trading tools"
        description="Automate complicated price action, get easy signals, and detect reversals by smart money. Our world class toolkits are the best way to level up your TradingView charts."
        buttonText="Level Up Your Charts"
        buttonLink="/products"
        imageOnRight={true}
      />

      <FeatureSection
        subtitle="Screeners & Alerts"
        title="Easily find high probability setups"
        description="Use professional-grade screeners & alerts with our most exclusive trading algorithms. Filter out market chaos and find trade setups on stocks, crypto, & forex markets."
        buttonText="Unlock Access"
        buttonLink="/products"
        imageOnRight={false}
      />

      <FeatureSection
        subtitle="Next-Gen Backtesting"
        title="An AI agent to build winning strategies"
        description="Ask our AI agent to find the best trading strategies and do the work for you. Plug our backtesting software into any platform to automate your trades like a pro."
        buttonText="Get Access Now"
        buttonLink="/signup"
        imageOnRight={true}
      />

      {/* Pricing Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Pricing</h2>
          <PriceCard country={country} />
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
              Disclaimer: Trading involves significant risk and is not suitable for everyone. The information provided is for educational purposes only and is not investment advice. Past performance is not indicative of future results. Users are responsible for their trading decisions. SGSCRIPT does not guarantee specific results and is not liable for any losses incurred.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
