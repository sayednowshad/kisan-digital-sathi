
import React from 'react';
import { BarChart2, TrendingUp, TrendingDown } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';

const Market = () => {
  return (
    <>
      <PageHeader
        title="Market Trends & Prices"
        description="Track live mandi prices, crop demand forecasts, and historical trends to optimize your selling decisions."
      />
      
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8">Today's Market Prices</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden dark:bg-gray-800">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Crop</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Variety</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Market</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Price (₹/Qtl)</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Change</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                <tr>
                  <td className="py-3 px-4">Rice</td>
                  <td className="py-3 px-4">Basmati</td>
                  <td className="py-3 px-4">Amritsar</td>
                  <td className="py-3 px-4">3500</td>
                  <td className="py-3 px-4 flex items-center text-green-600"><TrendingUp size={16} className="mr-1" /> 2.5%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Wheat</td>
                  <td className="py-3 px-4">Sharbati</td>
                  <td className="py-3 px-4">Indore</td>
                  <td className="py-3 px-4">2200</td>
                  <td className="py-3 px-4 flex items-center text-red-600"><TrendingDown size={16} className="mr-1" /> 1.2%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Soybean</td>
                  <td className="py-3 px-4">Yellow</td>
                  <td className="py-3 px-4">Nagpur</td>
                  <td className="py-3 px-4">5800</td>
                  <td className="py-3 px-4 flex items-center text-green-600"><TrendingUp size={16} className="mr-1" /> 3.8%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Potato</td>
                  <td className="py-3 px-4">Chipsona</td>
                  <td className="py-3 px-4">Agra</td>
                  <td className="py-3 px-4">1200</td>
                  <td className="py-3 px-4 flex items-center text-green-600"><TrendingUp size={16} className="mr-1" /> 5.5%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Onion</td>
                  <td className="py-3 px-4">Red</td>
                  <td className="py-3 px-4">Nashik</td>
                  <td className="py-3 px-4">2700</td>
                  <td className="py-3 px-4 flex items-center text-red-600"><TrendingDown size={16} className="mr-1" /> 2.3%</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 text-center">
            <Button>View All Prices</Button>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Market Intelligence Features</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-farm-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Live Mandi Prices</h3>
                    <p className="text-gray-600 dark:text-gray-400">Real-time data from 1500+ agricultural markets across India</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-farm-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Price Predictions</h3>
                    <p className="text-gray-600 dark:text-gray-400">AI-based forecasts for crop prices over the next 3-6 months</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-farm-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Optimal Selling Time</h3>
                    <p className="text-gray-600 dark:text-gray-400">Recommendations on the best time to sell based on historical patterns</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-farm-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Demand Analysis</h3>
                    <p className="text-gray-600 dark:text-gray-400">Insights into regional and seasonal demand variations for your crops</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md dark:bg-gray-800">
              <h3 className="font-semibold mb-4">Price Trends: Wheat</h3>
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-md dark:bg-gray-700 flex items-center justify-center">
                <BarChart2 size={80} className="text-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Market;
