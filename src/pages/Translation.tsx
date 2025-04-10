
import React, { useState } from 'react';
import { Languages, Globe, Check, ChevronDown } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
  { code: 'or', name: 'Oriya', nativeName: 'ଓଡ଼ିଆ' },
  { code: 'as', name: 'Assamese', nativeName: 'অসমীয়া' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
];

const features = [
  {
    title: "Real-time Translation",
    description: "Instantly translates content across the entire platform to your preferred language"
  },
  {
    title: "Voice Support",
    description: "Listen to content read aloud in your regional language for easier understanding"
  },
  {
    title: "Technical Terms Dictionary",
    description: "Specialized agricultural terms correctly translated into regional languages"
  },
  {
    title: "Language Preferences",
    description: "Set your default language once and access the site in your preferred language every time"
  }
];

const Translation = () => {
  const [selectedLanguage, setSelectedLanguage] = useState({ code: 'en', name: 'English', nativeName: 'English' });
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <PageHeader
        title="Translation Support"
        description="Access our platform in your regional language with automatic translation and voice support."
      />
      
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-8 dark:bg-gray-700 dark:border-gray-600">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold">Select Your Language</h2>
                  <p className="text-gray-500 dark:text-gray-400">Choose your preferred language for using Digital Kisan</p>
                </div>
                <div className="relative">
                  <Button 
                    variant="outline" 
                    className="w-full md:w-auto flex items-center justify-between gap-2"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <Globe size={16} />
                    <span>{selectedLanguage.nativeName} ({selectedLanguage.name})</span>
                    <ChevronDown size={16} />
                  </Button>
                  {dropdownOpen && (
                    <div className="absolute z-50 mt-1 w-60 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                      <div className="py-1 max-h-60 overflow-auto" role="menu" aria-orientation="vertical">
                        {languages.map((language) => (
                          <button
                            key={language.code}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 flex items-center justify-between"
                            onClick={() => {
                              setSelectedLanguage(language);
                              setDropdownOpen(false);
                            }}
                          >
                            <span>{language.nativeName} ({language.name})</span>
                            {selectedLanguage.code === language.code && (
                              <Check size={16} className="text-farm-green" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <Tabs defaultValue="about" className="mb-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="about">About Translation</TabsTrigger>
                <TabsTrigger value="features">Key Features</TabsTrigger>
                <TabsTrigger value="help">Help & Support</TabsTrigger>
              </TabsList>
              <TabsContent value="about" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Breaking Language Barriers in Agriculture</CardTitle>
                    <CardDescription>Our mission is to make agricultural technology accessible to every Indian farmer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p>
                        Digital Kisan is committed to breaking language barriers in agriculture by providing comprehensive translation support across 12 major Indian languages. Our platform automatically detects your preferred language and translates all content, from subsidy information to market prices, into a language you're comfortable with.
                      </p>
                      <p>
                        India's linguistic diversity shouldn't be a barrier to agricultural technology access. Whether you speak Hindi, Tamil, Telugu, Marathi, Kannada, Bengali, or other regional languages, our platform ensures you get the same quality information and features as English speakers.
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-6">
                        {languages.map((lang) => (
                          <div key={lang.code} className="text-center border rounded-lg p-3 bg-white dark:bg-gray-800">
                            <p className="font-medium">{lang.nativeName}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{lang.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="features" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Translation Features</CardTitle>
                    <CardDescription>Powerful tools to make Digital Kisan accessible in your language</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {features.map((feature, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="bg-farm-green/10 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                            <Languages className="h-6 w-6 text-farm-green" />
                          </div>
                          <div>
                            <h3 className="font-medium mb-2">{feature.title}</h3>
                            <p className="text-gray-600 text-sm dark:text-gray-400">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 bg-gray-50 p-4 rounded-lg border border-gray-100 dark:bg-gray-700 dark:border-gray-600">
                      <h3 className="font-medium mb-2">Voice Support in Regional Languages</h3>
                      <p className="text-sm text-gray-600 mb-4 dark:text-gray-400">
                        For users who prefer listening or have difficulty reading, our voice support reads content aloud in your chosen language.
                      </p>
                      <div className="flex items-center gap-4">
                        <Button className="bg-farm-green hover:bg-farm-green-dark flex gap-2 items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                          </svg>
                          Listen to Sample
                        </Button>
                        <select className="h-10 px-3 py-2 border border-input rounded-md text-sm" defaultValue="hi">
                          <option value="hi">हिंदी - Hindi</option>
                          <option value="ta">தமிழ் - Tamil</option>
                          <option value="te">తెలుగు - Telugu</option>
                          <option value="mr">मराठी - Marathi</option>
                          <option value="kn">ಕನ್ನಡ - Kannada</option>
                        </select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="help" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Translation Help & Support</CardTitle>
                    <CardDescription>Get assistance with language settings and translation features</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium mb-2">How to Change Your Language</h3>
                        <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                          <li>Click on the language selector in the top navigation bar</li>
                          <li>Choose your preferred language from the dropdown menu</li>
                          <li>The website will automatically refresh with all content in your selected language</li>
                          <li>Your preference will be saved for future visits</li>
                        </ol>
                      </div>
                      
                      <div>
                        <h3 className="font-medium mb-2">Reporting Translation Issues</h3>
                        <p className="text-gray-700 mb-4 dark:text-gray-300">
                          If you notice any incorrect translations or technical terms that don't make sense in your language, please help us improve by reporting the issue.
                        </p>
                        <Button className="bg-farm-green hover:bg-farm-green-dark">Report Translation Issue</Button>
                      </div>
                      
                      <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 dark:bg-amber-900/20 dark:border-amber-800/30">
                        <h3 className="font-medium mb-2 text-amber-800 dark:text-amber-500">Missing Your Language?</h3>
                        <p className="text-amber-700 mb-4 dark:text-amber-400">
                          We're constantly expanding our language support. If your preferred language is not available, please let us know.
                        </p>
                        <Button variant="outline" className="border-amber-200 text-amber-800 hover:bg-amber-100 dark:border-amber-800 dark:text-amber-400 dark:hover:bg-amber-900/40">
                          Request New Language
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-6">
                    <Button variant="link" className="text-farm-green p-0">View Translation FAQs</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="bg-farm-green text-white rounded-lg p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-bold mb-4">Join Our Translation Community</h2>
                  <p className="mb-4">
                    Help us improve translations for agricultural terms in regional languages. Join our community of language experts and farmers to make Digital Kisan more accessible.
                  </p>
                  <Button className="bg-white text-farm-green hover:bg-gray-100">
                    Become a Translator
                  </Button>
                </div>
                <div className="hidden md:flex items-center justify-center">
                  <Languages size={100} className="opacity-30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Translation;
