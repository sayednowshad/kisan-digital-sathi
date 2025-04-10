
import React from 'react';
import { LayoutDashboard } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  return (
    <>
      <PageHeader
        title="Personalized Dashboard"
        description="Your custom hub for weather updates, subsidy alerts, market insights, and AI-powered recommendations."
      />
      
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="mb-8 bg-gray-100 p-6 rounded-lg text-center dark:bg-gray-700">
            <h2 className="text-xl font-semibold mb-2">Sign in to access your personalized dashboard</h2>
            <p className="text-gray-600 mb-4 dark:text-gray-400">
              Create an account or sign in to view your customized farming insights and recommendations.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-farm-green hover:bg-farm-green-dark">Sign In</Button>
              <Button variant="outline">Create Account</Button>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-6">Dashboard Preview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 dark:bg-gray-800 dark:border-gray-700">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-farm-green">
                  <path d="M12 19V5"></path>
                  <path d="M5 12l7-7 7 7"></path>
                </svg>
                Market Insights
              </h3>
              <div className="h-40 bg-gray-50 rounded flex items-center justify-center mb-3 dark:bg-gray-700">
                <span className="text-gray-400 text-sm">Price chart will appear here</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Track price trends for your crops and get alerts when prices are favorable for selling.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 dark:bg-gray-800 dark:border-gray-700">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-farm-green">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                </svg>
                Weather Updates
              </h3>
              <div className="h-40 bg-gray-50 rounded flex items-center justify-center mb-3 dark:bg-gray-700">
                <span className="text-gray-400 text-sm">Weather forecast will appear here</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Hyperlocal weather forecasts with agricultural recommendations for your location.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 dark:bg-gray-800 dark:border-gray-700">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-farm-green">
                  <path d="M12 2v8"></path>
                  <path d="m16 6-4-4-4 4"></path>
                  <rect width="20" height="8" x="2" y="14" rx="2"></rect>
                </svg>
                Subsidy Alerts
              </h3>
              <div className="h-40 bg-gray-50 rounded flex items-center justify-center mb-3 dark:bg-gray-700">
                <span className="text-gray-400 text-sm">Subsidy notifications will appear here</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Get notified about new government schemes relevant to your crops and location.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 dark:bg-gray-800 dark:border-gray-700">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-farm-green">
                  <path d="M12 2v8"></path>
                  <path d="M12 18v4"></path>
                  <rect width="12" height="8" x="6" y="10" rx="1"></rect>
                </svg>
                Crop Calendar
              </h3>
              <div className="h-40 bg-gray-50 rounded flex items-center justify-center mb-3 dark:bg-gray-700">
                <span className="text-gray-400 text-sm">Crop schedule will appear here</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Personalized planting and harvesting schedule based on your crops and local conditions.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 dark:bg-gray-800 dark:border-gray-700">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-farm-green">
                  <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                  <path d="M13 5v14"></path>
                </svg>
                Resources & Learning
              </h3>
              <div className="h-40 bg-gray-50 rounded flex items-center justify-center mb-3 dark:bg-gray-700">
                <span className="text-gray-400 text-sm">Educational content will appear here</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Access farming tips, best practices, and educational videos in your preferred language.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Smart Farming at Your Fingertips</h2>
              <p className="text-gray-700 mb-4 dark:text-gray-300">
                The Digital Kisan Dashboard brings together all the information and insights you need to make better farming decisions. Access critical data anytime, anywhere.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-farm-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Personalized for your specific crops and location</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-farm-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Available in your regional language</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-farm-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Works offline with critical alerts via SMS</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-farm-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Uses AI to improve recommendations over time</p>
                </li>
              </ul>
              <div className="mt-6">
                <Button className="bg-farm-green hover:bg-farm-green-dark">Create Your Dashboard</Button>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1586282391129-76a6df230234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Farmer using mobile app" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
