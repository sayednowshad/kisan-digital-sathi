
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  Languages, 
  CloudSun, 
  Store, 
  Users, 
  BarChart2,
  Sprout,
  UserCircle,
  LayoutDashboard,
  Phone
} from 'lucide-react';

const Home = () => {
  // Feature data
  const features = [
    {
      icon: TrendingUp,
      title: 'Subsidy Trends',
      description: 'Access real-time government schemes sorted by crop type, location, and eligibility.',
      link: '/subsidies'
    },
    {
      icon: Languages,
      title: 'Translation Support',
      description: 'Use our platform in regional languages including Hindi, Tamil, Telugu, Marathi, and more.',
      link: '/translation'
    },
    {
      icon: CloudSun,
      title: 'Weather Updates',
      description: 'Get live weather updates based on your location with farming recommendations.',
      link: '/weather'
    },
    {
      icon: Store,
      title: 'Farmer Marketplace',
      description: 'List crops for sale directly to consumers with your own pricing and inventory.',
      link: '/marketplace'
    },
    {
      icon: Users,
      title: 'Community Groups',
      description: 'Join discussions with fellow farmers categorized by crop or region.',
      link: '/community'
    },
    {
      icon: BarChart2,
      title: 'Market Trends',
      description: 'Access live mandi prices, crop demand forecasting, and historical trends.',
      link: '/market'
    },
    {
      icon: Sprout,
      title: 'AI Crop Suggestions',
      description: 'Get ML-powered recommendations on what to grow based on your soil, climate, and market.',
      link: '/crop-suggestions'
    },
    {
      icon: UserCircle,
      title: 'Farmer Profiles',
      description: 'Create your digital identity showing your experience, land, crops, and reputation.',
      link: '/profiles'
    },
    {
      icon: LayoutDashboard,
      title: 'Dashboard',
      description: 'Access your personalized hub with region-specific alerts and insights.',
      link: '/dashboard'
    }
  ];

  return (
    <>
      <Hero />

      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Digital Solutions for Modern Indian Farmers
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Digital Kisan brings together cutting-edge technology, real-time data, and AI-powered insights to transform the way Indian farmers work, sell, and grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                link={feature.link}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Why Choose Digital Kisan?
              </h2>
              <ul className="space-y-4">
                <li className="flex">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-farm-green bg-opacity-20 flex items-center justify-center mr-3">
                    <span className="h-3 w-3 bg-farm-green rounded-full"></span>
                  </span>
                  <div>
                    <h3 className="font-semibold">Multilingual Support</h3>
                    <p className="text-gray-600 dark:text-gray-400">Access in Hindi, Tamil, Telugu, Marathi, Kannada, and Bengali</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-farm-green bg-opacity-20 flex items-center justify-center mr-3">
                    <span className="h-3 w-3 bg-farm-green rounded-full"></span>
                  </span>
                  <div>
                    <h3 className="font-semibold">Regional Market Data</h3>
                    <p className="text-gray-600 dark:text-gray-400">Real-time mandi prices and market trends for your area</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-farm-green bg-opacity-20 flex items-center justify-center mr-3">
                    <span className="h-3 w-3 bg-farm-green rounded-full"></span>
                  </span>
                  <div>
                    <h3 className="font-semibold">Direct Sales Channel</h3>
                    <p className="text-gray-600 dark:text-gray-400">Sell your crops directly to consumers or local shops</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-farm-green bg-opacity-20 flex items-center justify-center mr-3">
                    <span className="h-3 w-3 bg-farm-green rounded-full"></span>
                  </span>
                  <div>
                    <h3 className="font-semibold">AI-Powered Guidance</h3>
                    <p className="text-gray-600 dark:text-gray-400">Smart recommendations for crops, subsidies, and selling time</p>
                  </div>
                </li>
              </ul>
              <div className="mt-6">
                <Button asChild className="bg-farm-green hover:bg-farm-green-dark">
                  <Link to="/dashboard">
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Indian farmer using mobile technology" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-farm-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Transform Your Farming Experience?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of Indian farmers already using Digital Kisan to improve yields, access markets, and increase profits.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg" className="bg-white text-farm-green hover:bg-gray-100">
              <Link to="/dashboard">
                Create Account
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-farm-green">
              <Link to="/contact">
                Contact Support
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
