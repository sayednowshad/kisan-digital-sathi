
import React from 'react';
import { Sprout } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';

const CropSuggestions = () => {
  return (
    <>
      <PageHeader
        title="AI Crop Suggestions"
        description="Get intelligent recommendations on what crops to grow based on your soil conditions, climate, and market trends."
      />
      
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8">Smart Crop Recommendations</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            {/* This would be a more sophisticated component in the real implementation */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 dark:bg-gray-700 dark:border-gray-600">
              <h3 className="text-xl font-semibold mb-4">For Maximum Yield</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Sprout size={20} className="text-farm-green" />
                  </div>
                  <div>
                    <h4 className="font-medium">Green Gram (मूंग)</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Perfect match for your soil type and pH level. Expected yield: 12-15 quintals per acre.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Sprout size={20} className="text-farm-green" />
                  </div>
                  <div>
                    <h4 className="font-medium">Basmati Rice (बासमती चावल)</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Good water availability in your region supports high-yielding rice varieties.
                    </p>
                  </div>
                </div>
              </div>
              <Button className="mt-4 w-full bg-farm-green hover:bg-farm-green-dark">View Detailed Analysis</Button>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 dark:bg-gray-700 dark:border-gray-600">
              <h3 className="text-xl font-semibold mb-4">For Maximum Profit</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Sprout size={20} className="text-farm-green" />
                  </div>
                  <div>
                    <h4 className="font-medium">Turmeric (हल्दी)</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      High market demand with expected price of ₹7,500-₹9,000 per quintal this season.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Sprout size={20} className="text-farm-green" />
                  </div>
                  <div>
                    <h4 className="font-medium">Ginger (अदरक)</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Your soil conditions are ideal for ginger with low disease pressure in your area.
                    </p>
                  </div>
                </div>
              </div>
              <Button className="mt-4 w-full bg-farm-green hover:bg-farm-green-dark">View Detailed Analysis</Button>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 mb-10 dark:bg-gray-700 dark:border-gray-600">
            <h3 className="text-xl font-semibold mb-4">Update Your Farm Data</h3>
            <p className="text-gray-600 mb-4 dark:text-gray-400">
              For more accurate crop suggestions, please update your soil test results and farm location details.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">Soil Type</label>
                <select className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md">
                  <option value="">Select Soil Type</option>
                  <option value="clay">Clay</option>
                  <option value="sandy">Sandy</option>
                  <option value="loamy">Loamy</option>
                  <option value="black">Black Cotton</option>
                  <option value="silt">Silty</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">Total Land Area (Acres)</label>
                <input type="number" className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md" />
              </div>
            </div>
            <Button className="mt-4">Update Details</Button>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">How Our AI Makes Recommendations</h2>
              <p className="text-gray-700 mb-4 dark:text-gray-300">
                Our advanced artificial intelligence system analyzes multiple data points to recommend the most suitable crops for your specific farming conditions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-farm-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Soil Analysis</h3>
                    <p className="text-gray-600 dark:text-gray-400">Evaluates soil type, pH, nutrient content, and water retention capacity</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-farm-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Climate Data</h3>
                    <p className="text-gray-600 dark:text-gray-400">Uses historical weather patterns and predictive climate models</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-farm-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Market Analysis</h3>
                    <p className="text-gray-600 dark:text-gray-400">Considers current and projected market trends, prices, and demand</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-farm-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Resource Availability</h3>
                    <p className="text-gray-600 dark:text-gray-400">Factors in water availability, irrigation systems, and farming equipment</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1613543090387-3e73649195c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Farmer using tablet for crop analysis" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CropSuggestions;
