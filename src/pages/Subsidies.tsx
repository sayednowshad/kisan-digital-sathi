
import React from 'react';
import { Search, Filter, Tag, MapPin, Calendar, Download } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const subsidies = [
  {
    id: 1,
    name: "प्रधानमंत्री फसल बीमा योजना (PMFBY)",
    description: "Comprehensive insurance coverage for crop failure due to natural calamities, pests & diseases",
    eligibility: "All farmers including sharecroppers and tenant farmers",
    lastDate: "30 July 2023",
    location: "All India",
    category: "Insurance",
    amount: "Premium Subsidy",
    status: "Active"
  },
  {
    id: 2,
    name: "प्रधानमंत्री किसान सम्मान निधि (PM-KISAN)",
    description: "Direct income support of ₹6,000 per year in three equal installments",
    eligibility: "Small and marginal farmer families with cultivable landholding",
    lastDate: "Ongoing",
    location: "All India",
    category: "Direct Benefit",
    amount: "₹6,000 per year",
    status: "Active"
  },
  {
    id: 3,
    name: "किसान क्रेडिट कार्ड (KCC)",
    description: "Short-term credit for cultivation, post-harvest expenses, and farm asset maintenance",
    eligibility: "All farmers, sharecroppers, and tenant farmers",
    lastDate: "Ongoing",
    location: "All India",
    category: "Credit",
    amount: "Based on land holding",
    status: "Active"
  },
  {
    id: 4,
    name: "राष्ट्रीय कृषि विकास योजना (RKVY)",
    description: "Funding for agriculture infrastructure development at the state level",
    eligibility: "State governments, FPOs, and farmer groups",
    lastDate: "31 August 2023",
    location: "All India",
    category: "Infrastructure",
    amount: "Project-based",
    status: "Active"
  }
];

const Subsidies = () => {
  return (
    <>
      <PageHeader
        title="Subsidy Trends & Schemes"
        description="Access real-time government schemes and track historical subsidies categorized by crop, location, and eligibility criteria."
      />
      
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-10">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 dark:bg-gray-700 dark:border-gray-600">
              <h2 className="text-xl font-semibold mb-4">Find Subsidies</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <div>
                  <div className="relative">
                    <Input 
                      placeholder="Search by keywords..." 
                      className="pl-10"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </div>
                <div>
                  <select className="w-full h-10 px-3 py-2 border border-input bg-background text-sm rounded-md">
                    <option value="">All Categories</option>
                    <option value="insurance">Insurance</option>
                    <option value="direct-benefit">Direct Benefit</option>
                    <option value="credit">Credit</option>
                    <option value="infrastructure">Infrastructure</option>
                  </select>
                </div>
                <div>
                  <select className="w-full h-10 px-3 py-2 border border-input bg-background text-sm rounded-md">
                    <option value="">All States</option>
                    <option value="an">All India</option>
                    <option value="ap">Andhra Pradesh</option>
                    <option value="ar">Arunachal Pradesh</option>
                    <option value="as">Assam</option>
                    <option value="br">Bihar</option>
                    <option value="ch">Chhattisgarh</option>
                    <option value="gj">Gujarat</option>
                    <option value="hr">Haryana</option>
                    <option value="hp">Himachal Pradesh</option>
                    <option value="jk">Jammu and Kashmir</option>
                    <option value="jh">Jharkhand</option>
                    <option value="ka">Karnataka</option>
                    <option value="kl">Kerala</option>
                    <option value="mp">Madhya Pradesh</option>
                    <option value="mh">Maharashtra</option>
                    <option value="mn">Manipur</option>
                    <option value="ml">Meghalaya</option>
                    <option value="mz">Mizoram</option>
                    <option value="nl">Nagaland</option>
                    <option value="or">Odisha</option>
                    <option value="pb">Punjab</option>
                    <option value="rj">Rajasthan</option>
                    <option value="sk">Sikkim</option>
                    <option value="tn">Tamil Nadu</option>
                    <option value="tg">Telangana</option>
                    <option value="tr">Tripura</option>
                    <option value="up">Uttar Pradesh</option>
                    <option value="ut">Uttarakhand</option>
                    <option value="wb">West Bengal</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="flex items-center gap-1">
                  <Filter size={14} />
                  Active
                  <button className="ml-1 text-gray-500 hover:text-gray-700">×</button>
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Tag size={14} />
                  All Categories
                  <button className="ml-1 text-gray-500 hover:text-gray-700">×</button>
                </Badge>
              </div>
              <div className="flex justify-end">
                <Button className="bg-farm-green hover:bg-farm-green-dark">
                  <Filter size={16} className="mr-2" />
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {subsidies.map((subsidy) => (
              <Card key={subsidy.id} className="card-hover">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{subsidy.name}</CardTitle>
                      <CardDescription className="mt-1">{subsidy.description}</CardDescription>
                    </div>
                    <Badge className={`${
                      subsidy.status === "Active" ? "bg-green-100 text-green-800" : 
                      subsidy.status === "Upcoming" ? "bg-blue-100 text-blue-800" : 
                      "bg-red-100 text-red-800"
                    }`}>
                      {subsidy.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Tag size={16} className="text-farm-green" />
                      <span className="font-medium">Category:</span> {subsidy.category}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-farm-green" />
                      <span className="font-medium">Location:</span> {subsidy.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-farm-green" />
                      <span className="font-medium">Last Date:</span> {subsidy.lastDate}
                    </div>
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-farm-green">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                      </svg>
                      <span className="font-medium">Amount:</span> {subsidy.amount}
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t flex justify-between items-center">
                    <div>
                      <span className="text-sm font-medium">Eligibility:</span>
                      <p className="text-sm text-gray-500">{subsidy.eligibility}</p>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Download size={14} />
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg p-6 dark:bg-gray-700">
            <h2 className="text-xl font-semibold mb-4">Recommended For You</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-start gap-3 dark:bg-gray-800 dark:border-gray-600">
                <div className="bg-farm-green/10 p-2 rounded-full">
                  <Filter size={20} className="text-farm-green" />
                </div>
                <div>
                  <h3 className="font-medium">Farm Machinery Subsidy</h3>
                  <p className="text-sm text-gray-500 mb-2">Based on your crop profile, you may qualify for machinery subsidies</p>
                  <Button variant="link" className="p-0 h-auto text-farm-green">Check Eligibility</Button>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-start gap-3 dark:bg-gray-800 dark:border-gray-600">
                <div className="bg-farm-green/10 p-2 rounded-full">
                  <Filter size={20} className="text-farm-green" />
                </div>
                <div>
                  <h3 className="font-medium">Micro Irrigation Scheme</h3>
                  <p className="text-sm text-gray-500 mb-2">Based on your location, you qualify for water conservation subsidies</p>
                  <Button variant="link" className="p-0 h-auto text-farm-green">Check Eligibility</Button>
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
              <h2 className="text-2xl font-bold mb-4">Understanding Subsidy Trends</h2>
              <p className="text-gray-700 mb-4 dark:text-gray-300">
                Our subsidy tracking system helps farmers navigate the complex landscape of government schemes. We analyze historical data to identify patterns and predict future trends, ensuring you don't miss out on valuable opportunities.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-farm-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Real-time alerts when new schemes are announced for your crops or region</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-farm-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Automatic eligibility checking based on your profile data</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-farm-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Assistance with application process and document preparation</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-farm-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Historical tracking of all subsidies you've applied for or received</p>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Farmer discussing subsidy schemes" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subsidies;
