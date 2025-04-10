
import React from 'react';
import { Users, MessageSquare, Search, Filter } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';

const Community = () => {
  return (
    <>
      <PageHeader
        title="Community Groups"
        description="Connect with fellow farmers, ask questions, and share knowledge in crop or region-specific discussion groups."
      />
      
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8">Join the Discussion</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder for community groups */}
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-50 rounded-lg overflow-hidden border border-gray-100 shadow-sm dark:bg-gray-700 dark:border-gray-600">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-farm-green/10 h-10 w-10 rounded-full flex items-center justify-center">
                        <Users className="h-5 w-5 text-farm-green" />
                      </div>
                      <div>
                        <h3 className="font-semibold">
                          {["Rice Farmers", "Wheat Cultivation", "Maharashtra Farmers", "Organic Farming", "Punjab Farmers", "New Technologies"][i]}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {[423, 289, 512, 187, 356, 144][i]} members
                        </p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">Join</Button>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-600">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <MessageSquare size={14} />
                      <span>{[18, 27, 14, 32, 21, 9][i]} new posts today</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button>View All Communities</Button>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Create Your Own Community</h2>
            <p className="text-gray-600 mb-8 dark:text-gray-400">
              Start a discussion group focused on your specific crop, region, or farming practice.
            </p>
            <Button className="bg-farm-green hover:bg-farm-green-dark">
              Start a Community
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Community;
