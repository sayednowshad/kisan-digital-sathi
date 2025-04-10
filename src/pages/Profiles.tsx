
import React from 'react';
import { UserCircle } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';

const Profiles = () => {
  return (
    <>
      <PageHeader
        title="Farmer Profiles"
        description="Build your digital identity as a farmer, showcase your expertise, and connect with potential buyers and peers."
      />
      
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8">Featured Farmers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {/* This would have more sophisticated profile cards in the real implementation */}
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-gray-50 rounded-lg overflow-hidden border border-gray-100 shadow-sm dark:bg-gray-700 dark:border-gray-600">
                <div className="h-32 bg-gradient-to-r from-farm-green to-farm-green-light"></div>
                <div className="relative px-6 pb-6">
                  <div className="absolute -top-10 left-6 h-20 w-20 rounded-full border-4 border-white overflow-hidden bg-white dark:border-gray-700">
                    <UserCircle size={80} className="text-gray-300" />
                  </div>
                  <div className="pt-12">
                    <h3 className="font-semibold text-lg">
                      {["Rajesh Patel", "Anjali Sharma", "Sunil Kumar"][i]}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">
                      {["Wheat Farmer, Punjab", "Organic Vegetables, Karnataka", "Rice Cultivation, Andhra Pradesh"][i]}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-farm-green/10 text-farm-green px-2 py-1 rounded-full text-xs font-medium">
                        {["10+ Years Experience", "Certified Organic", "Award Winner"][i]}
                      </span>
                      <span className="bg-farm-green/10 text-farm-green px-2 py-1 rounded-full text-xs font-medium">
                        {["50 Acres", "15 Acres", "25 Acres"][i]}
                      </span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">View Profile</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-farm-green text-white rounded-lg p-6 md:p-8 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Create Your Farmer Profile</h2>
                <p className="mb-6">
                  Showcase your farming experience, land details, crops grown, and certifications. Connect with buyers who value quality and transparency.
                </p>
                <Button className="bg-white text-farm-green hover:bg-gray-100">
                  Create Profile
                </Button>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1592982537447-7440770faae7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Indian farmer" 
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl font-bold mb-4">Benefits of a Digital Farmer Profile</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Creating your digital identity helps build trust and open new opportunities in the agricultural marketplace.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
              <div className="h-12 w-12 rounded-full bg-farm-green/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-farm-green">
                  <path d="M20 7h-9"></path>
                  <path d="M14 17H5"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Direct Connections</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Connect directly with buyers, processors, and exporters who are looking for specific crops or farming practices.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
              <div className="h-12 w-12 rounded-full bg-farm-green/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-farm-green">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Build Trust</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Showcase your certifications, farming practices, and customer reviews to build credibility with potential buyers.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
              <div className="h-12 w-12 rounded-full bg-farm-green/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-farm-green">
                  <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"></path>
                  <circle cx="17" cy="7" r="5"></circle>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Premium Pricing</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Farmers with verified profiles often receive better prices for their products due to increased transparency and trust.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profiles;
