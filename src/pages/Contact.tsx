
import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/components/LanguageSwitch';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const { language } = useLanguage();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: language === 'en' ? "Message Sent" : "پیغام بھیج دیا گیا",
      description: language === 'en' 
        ? "We'll get back to you as soon as possible." 
        : "ہم جلد ہی آپ سے رابطہ کریں گے۔"
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-dark-purple">
      <Navbar />
      <div className="container mx-auto px-4 py-16 flex-1">
        <h1 className="text-4xl font-bold mb-12 text-center text-gradient">
          {language === 'en' ? 'Contact Us' : 'ہم سے رابطہ کریں'}
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>
                  {language === 'en' ? 'Get In Touch' : 'رابطہ کریں'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      {language === 'en' ? 'Name' : 'نام'}
                    </label>
                    <Input 
                      id="name" 
                      placeholder={language === 'en' ? "Your name" : "آپ کا نام"} 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      {language === 'en' ? 'Email' : 'ای میل'}
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder={language === 'en' ? "Your email" : "آپ کی ای میل"} 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      {language === 'en' ? 'Message' : 'پیغام'}
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder={language === 'en' ? "Your message" : "آپ کا پیغام"} 
                      rows={5} 
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    {language === 'en' ? 'Send Message' : 'پیغام بھیجیں'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>
                  {language === 'en' ? 'Contact Information' : 'رابطے کی معلومات'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-card-gradient p-3 rounded-full">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">
                        {language === 'en' ? 'Phone' : 'فون'}
                      </h3>
                      <p className="text-muted-foreground">+91-8179492299</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-card-gradient p-3 rounded-full">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">
                        {language === 'en' ? 'Email' : 'ای میل'}
                      </h3>
                      <p className="text-muted-foreground">info@sgservices.in</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-card-gradient p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">
                        {language === 'en' ? 'Address' : 'پتہ'}
                      </h3>
                      <p className="text-muted-foreground">
                        Sathesh Goud Services Pvt. Ltd.<br />
                        #220, Level 2, Oval Building, Plot No.- 18, Ilabs,<br />
                        Madhapur, Hyderabad, Shaikpet, Telangana, India, 500081
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === 'en' ? 'Business Hours' : 'کاروباری اوقات'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>
                      {language === 'en' ? 'Monday - Friday' : 'پیر - جمعہ'}
                    </span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>
                      {language === 'en' ? 'Saturday' : 'ہفتہ'}
                    </span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>
                      {language === 'en' ? 'Sunday' : 'اتوار'}
                    </span>
                    <span className="text-muted-foreground">
                      {language === 'en' ? 'Closed' : 'بند'}
                    </span>
                  </div>
                </div>
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

export default Contact;
