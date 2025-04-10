
import React from 'react';
import { CloudSun, Thermometer, Droplets, Wind, MapPin } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Weather = () => {
  return (
    <>
      <PageHeader
        title="Weather Updates & Forecasts"
        description="Access location-based weather forecasts with agricultural insights and farming recommendations."
      />
      
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-10">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg overflow-hidden shadow-lg text-white mb-8">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin size={16} />
                      <span>Lucknow, Uttar Pradesh</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">32°C</h2>
                    <p className="text-lg">Partly Cloudy</p>
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center gap-1">
                        <Thermometer size={16} />
                        <span>H: 34° L: 28°</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Droplets size={16} />
                        <span>68%</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Wind size={16} />
                        <span>12 km/h</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <CloudSun size={96} />
                  </div>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-4 flex justify-between overflow-x-auto">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="flex flex-col items-center min-w-[80px]">
                    <span className="text-sm">{i === 0 ? 'Today' : `Day ${i+1}`}</span>
                    <CloudSun size={24} className="my-2" />
                    <span>{Math.round(28 + Math.random() * 6)}°</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 mb-8 dark:bg-yellow-900/30 dark:border-yellow-800/50">
              <h3 className="font-medium flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-700 dark:text-yellow-500">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                Weather Alert
              </h3>
              <p className="mt-2 text-yellow-800 dark:text-yellow-200">
                Heavy rainfall expected in your region over the next 48 hours. Consider postponing any planned pesticide applications.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Agricultural Weather Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Crop-Specific Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="border-b pb-3">
                      <div className="font-medium">Rice (धान)</div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Expected heavy rain good for transplanting. Prepare nursery beds and postpone fertilizer application for 48 hours.</p>
                    </li>
                    <li className="border-b pb-3">
                      <div className="font-medium">Wheat (गेहूं)</div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Maintain field moisture. Upcoming cold front favorable for growth. Watch for yellow rust in the coming weeks.</p>
                    </li>
                    <li>
                      <div className="font-medium">Sugarcane (गन्ना)</div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">High humidity may increase disease pressure. Monitor for early red rot symptoms and ensure proper drainage.</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">5-Day Farming Forecast</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between py-1">
                      <span>Irrigation Needs</span>
                      <span className="text-green-600 font-medium dark:text-green-400">Low</span>
                    </li>
                    <li className="flex items-center justify-between py-1">
                      <span>Pest Pressure</span>
                      <span className="text-yellow-600 font-medium dark:text-yellow-400">Moderate</span>
                    </li>
                    <li className="flex items-center justify-between py-1">
                      <span>Disease Risk</span>
                      <span className="text-red-600 font-medium dark:text-red-400">High</span>
                    </li>
                    <li className="flex items-center justify-between py-1">
                      <span>Spraying Conditions</span>
                      <span className="text-red-600 font-medium dark:text-red-400">Poor</span>
                    </li>
                    <li className="flex items-center justify-between py-1">
                      <span>Harvest Conditions</span>
                      <span className="text-yellow-600 font-medium dark:text-yellow-400">Fair</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 dark:bg-gray-700">
              <h2 className="text-xl font-semibold mb-4">Seasonal Outlook</h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                Based on long-term forecasts and historical data, here's what you can expect for the upcoming growing season.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow dark:bg-gray-800">
                  <h3 className="font-medium mb-2">Rainfall</h3>
                  <p className="text-sm text-gray-600 mb-2 dark:text-gray-400">10-15% above normal precipitation expected</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow dark:bg-gray-800">
                  <h3 className="font-medium mb-2">Temperature</h3>
                  <p className="text-sm text-gray-600 mb-2 dark:text-gray-400">2-3°C higher than seasonal average</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                    <div className="bg-orange-500 h-2 rounded-full w-2/3"></div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow dark:bg-gray-800">
                  <h3 className="font-medium mb-2">Drought Risk</h3>
                  <p className="text-sm text-gray-600 mb-2 dark:text-gray-400">Low risk for the next 3 months</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                    <div className="bg-green-500 h-2 rounded-full w-1/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Hyperlocal Weather Technology</h2>
              <p className="text-gray-700 mb-4 dark:text-gray-300">
                Our weather system combines data from multiple sources including the Indian Meteorological Department, local weather stations, and satellite imagery to provide you with the most accurate hyperlocal weather specific to your fields.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-farm-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">GPS-based local weather forecasts accurate to within 500 meters</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-farm-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">AI-enhanced forecasts that learn from historical accuracy</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-farm-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Critical weather alerts delivered via SMS, even without internet</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-farm-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Crop-specific recommendations based on weather conditions</p>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1516410529446-2c777cb7366d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Weather forecast on a tablet" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Weather;
