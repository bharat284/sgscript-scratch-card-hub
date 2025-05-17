
import React from 'react';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/components/LanguageSwitch';

const About = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-brand-dark-purple">
      <Navbar />
      <div className="container mx-auto px-4 py-16 flex-1">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-gradient">About Us</h1>
          
          {language === 'en' ? (
            <div className="prose prose-invert max-w-none">
              <p className="text-lg mb-6">
                SG Script is a cutting-edge, AI-powered platform that provides automated, 
                tailored indicators to help traders make informed buy and sell decisions 
                with high accuracy—ranging from 70% to 80%.
              </p>
              <p className="text-lg mb-6">
                Our system is built on a secure, decentralized architecture that ensures 
                complete privacy and protection of user data. What sets SG Script apart 
                is its intelligent backend, which continuously evolves through AI algorithms 
                to deliver timely and precise signals for successful trading.
              </p>
              <p className="text-lg mb-6">
                We are proudly integrated with and authorized by industry leaders such as 
                TradingView and Zerodha, making it easier than ever for users to execute 
                trades based on our indicators.
              </p>
              <p className="text-lg mb-6">
                Whether you're a beginner or a pro, SG Script offers one of the most reliable 
                and efficient ways to navigate the trading markets. Experience the power of 
                smart trading—experience SG Script.
              </p>
            </div>
          ) : (
            <div className="prose prose-invert max-w-none text-right" dir="rtl">
              <p className="text-lg mb-6">
                ایس جی اسکرپٹ ایک جدید، اے آئی پاورڈ پلیٹ فارم ہے جو آٹومیٹڈ، ٹیلرڈ انڈیکیٹرز فراہم کرتا ہے
                تاکہ تاجروں کو اعلی درستگی کے ساتھ خریداری اور فروخت کے فیصلوں میں مدد ملے — جس کی رینج 70٪ سے 80٪ تک ہے۔
              </p>
              <p className="text-lg mb-6">
                ہمارا سسٹم ایک محفوظ، غیر مرکزی آرکیٹیکچر پر بنایا گیا ہے جو صارف کے ڈیٹا کی مکمل رازداری اور تحفظ کو یقینی بناتا ہے۔
                جو ایس جی اسکرپٹ کو الگ کرتا ہے وہ اس کا ہوشیار بیک اینڈ ہے، جو مسلسل اے آئی الگورتھمز کے ذریعے ارتقاء پذیر ہے
                تاکہ کامیاب ٹریڈنگ کے لیے بروقت اور درست سگنلز فراہم کیے جاسکیں۔
              </p>
              <p className="text-lg mb-6">
                ہم فخر کے ساتھ انڈسٹری لیڈرز جیسے ٹریڈنگ ویو اور زیروڈھا کے ساتھ انٹیگریٹڈ اور ان کے ذریعے مجاز ہیں،
                جس سے صارفین کے لیے ہمارے انڈیکیٹرز کی بنیاد پر ٹریڈز کرنا پہلے سے کہیں زیادہ آسان ہوگیا ہے۔
              </p>
              <p className="text-lg mb-6">
                چاہے آپ مبتدی ہوں یا پروفیشنل، ایس جی اسکرپٹ ٹریڈنگ مارکیٹس میں نیویگیٹ کرنے کے لیے سب سے زیادہ قابل اعتماد
                اور موثر طریقوں میں سے ایک پیش کرتا ہے۔ اسمارٹ ٹریڈنگ کی طاقت کا تجربہ کریں — ایس جی اسکرپٹ کا تجربہ کریں۔
              </p>
            </div>
          )}
        </div>
      </div>
      
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

export default About;
