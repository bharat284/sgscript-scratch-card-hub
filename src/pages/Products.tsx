
import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useCurrency } from '@/context/CurrencyContext';
import { useLanguage } from '@/components/LanguageSwitch';
import { useCountry } from '@/components/CountrySelect';
import { Link } from 'react-router-dom';

const Products = () => {
  const { formatPrice } = useCurrency();
  const { language } = useLanguage();
  const { country } = useCountry();

  return (
    <div className="min-h-screen flex flex-col bg-brand-dark-purple">
      <Navbar />
      <div className="container mx-auto px-4 py-16 flex-1">
        <h1 className="text-4xl font-bold mb-12 text-center text-gradient">
          {language === 'en' ? 'Our Products' : 'ہماری مصنوعات'}
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <Card className="mb-12 overflow-hidden">
            <div className="bg-card-gradient h-2"></div>
            <CardHeader>
              <CardTitle className="text-2xl">SGSCRIPT.LIFE</CardTitle>
              <CardDescription>
                {language === 'en' 
                  ? 'Advanced AI-powered Trading Indicators' 
                  : 'جدید اے آئی پاورڈ ٹریڈنگ انڈیکیٹرز'
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-1/3">
                  <div className="aspect-square bg-card-gradient rounded-lg flex items-center justify-center">
                    <div className="text-2xl font-bold text-gradient">SGSCRIPT</div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl font-bold mb-2">
                    {language === 'en' ? 'Premium Trading Indicators' : 'پریمیم ٹریڈنگ انڈیکیٹرز'}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {language === 'en'
                      ? 'Our flagship product delivers AI-powered trading signals with 70-80% accuracy, helping traders make informed decisions quickly.'
                      : 'ہمارا فلیگشپ پروڈکٹ 70-80٪ درستگی کے ساتھ اے آئی پاورڈ ٹریڈنگ سگنلز فراہم کرتا ہے، جو تاجروں کو جلدی سے آگاہی سے بھرپور فیصلے کرنے میں مدد کرتا ہے۔'
                    }
                  </p>
                  <div className="flex items-center mb-6">
                    <div className="text-2xl font-bold mr-2">{formatPrice(10)}</div>
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                      {language === 'en' ? 'Monthly subscription' : 'ماہانہ سبسکرپشن'}
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mb-6 space-y-2">
                    <li>
                      {language === 'en'
                        ? 'Real-time trading signals with high accuracy'
                        : 'اعلی درستگی کے ساتھ ریئل ٹائم ٹریڈنگ سگنلز'
                      }
                    </li>
                    <li>
                      {language === 'en'
                        ? 'Seamless integration with TradingView and Zerodha'
                        : 'ٹریڈنگ ویو اور زیروڈھا کے ساتھ بے جوڑ انضمام'
                      }
                    </li>
                    <li>
                      {language === 'en'
                        ? 'Monthly scratch card rewards for all subscribers'
                        : 'تمام سبسکرائبرز کے لیے ماہانہ اسکریچ کارڈ انعامات'
                      }
                    </li>
                  </ul>
                  <Link to="/signup">
                    <Button>
                      {language === 'en' ? 'Get Started' : 'شروع کریں'}
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-background/5 p-6">
              <div className="text-sm text-muted-foreground">
                {language === 'en'
                  ? 'Join thousands of traders who have improved their trading performance with SGSCRIPT.LIFE'
                  : 'ہزاروں تاجروں میں شامل ہوں جنہوں نے SGSCRIPT.LIFE کے ساتھ اپنی ٹریڈنگ کارکردگی کو بہتر بنایا ہے'
                }
              </div>
            </CardFooter>
          </Card>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === 'en' ? 'AI Powered' : 'اے آئی پاور'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {language === 'en'
                    ? 'Machine learning algorithms that adapt and improve over time'
                    : 'مشین لرننگ الگورتھمز جو وقت کے ساتھ ساتھ اپنی ڈھالنا اور بہتر ہوتے ہیں'
                  }
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === 'en' ? 'Easy Integration' : 'آسان انضمام'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {language === 'en'
                    ? 'Works seamlessly with your existing trading platforms'
                    : 'آپ کے موجودہ ٹریڈنگ پلیٹ فارمز کے ساتھ بے نقص کام کرتا ہے'
                  }
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === 'en' ? 'Rewarding' : 'فائدہ مند'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {language === 'en'
                    ? 'Monthly scratch cards with chances to win up to ₹1000'
                    : 'ماہانہ اسکریچ کارڈز جن میں ₹1000 تک جیتنے کے مواقع ہیں'
                  }
                </p>
              </CardContent>
            </Card>
          </div>
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

export default Products;
