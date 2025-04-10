
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <>
      <PageHeader
        title="Contact & Support"
        description="Get help, share feedback, or connect with our team for any questions about Digital Kisan."
      />
      
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-6 dark:text-gray-400">
                Have questions or feedback? Our support team is here to help. Fill out the form and we'll get back to you as soon as possible.
              </p>
              
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">
                      Phone Number
                    </label>
                    <Input id="phone" placeholder="Your phone number" />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email address" />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What is this regarding?" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" rows={5} />
                </div>
                <Button className="w-full bg-farm-green hover:bg-farm-green-dark">
                  Send Message
                </Button>
              </form>
              
              <div className="mt-10">
                <h3 className="font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-500 hover:text-farm-green">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-farm-green">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-farm-green">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-farm-green">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 rounded-lg p-6 dark:bg-gray-700">
                <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-10 w-10 rounded-full bg-farm-green/10 flex items-center justify-center">
                        <Phone size={20} className="text-farm-green" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-gray-600 dark:text-gray-400">Customer Support: +91 98765 43210</p>
                      <p className="text-gray-600 dark:text-gray-400">Technical Help: +91 98765 12345</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-10 w-10 rounded-full bg-farm-green/10 flex items-center justify-center">
                        <Mail size={20} className="text-farm-green" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-600 dark:text-gray-400">Support: support@digitalkisan.in</p>
                      <p className="text-gray-600 dark:text-gray-400">Info: info@digitalkisan.in</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-10 w-10 rounded-full bg-farm-green/10 flex items-center justify-center">
                        <MapPin size={20} className="text-farm-green" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <address className="not-italic text-gray-600 dark:text-gray-400">
                        Kisan Bhawan, Agricultural Hub,<br />
                        New Delhi - 110001, India
                      </address>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-medium mb-3">Business Hours</h3>
                  <table className="w-full text-sm">
                    <tbody>
                      <tr>
                        <td className="py-1 text-gray-600 dark:text-gray-400">Monday - Friday:</td>
                        <td className="py-1">9:00 AM - 6:00 PM</td>
                      </tr>
                      <tr>
                        <td className="py-1 text-gray-600 dark:text-gray-400">Saturday:</td>
                        <td className="py-1">10:00 AM - 4:00 PM</td>
                      </tr>
                      <tr>
                        <td className="py-1 text-gray-600 dark:text-gray-400">Sunday:</td>
                        <td className="py-1">Closed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="mt-6 bg-gray-50 rounded-lg p-6 dark:bg-gray-700">
                <h3 className="text-lg font-semibold mb-4">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">How do I create an account?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Click on the "Sign Up" button in the top right corner and follow the registration process.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Is the app available offline?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Some features work offline, and critical alerts are sent via SMS.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">How accurate are the weather forecasts?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Our forecasts are hyperlocal and typically accurate within a 500-meter radius.
                    </p>
                  </div>
                </div>
                
                <Button variant="link" className="p-0 h-auto mt-4 text-farm-green">
                  View All FAQs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
