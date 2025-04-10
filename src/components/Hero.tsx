
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
      <div className="absolute inset-0 bg-farm-green bg-opacity-70"></div>
      <div className="relative container-custom min-h-[70vh] flex flex-col justify-center items-center text-center py-16 md:py-24">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
          किसान डिजिटल साथी
          <span className="block text-xl md:text-3xl mt-2 text-farm-wheat">
            Empowering Farmers, Digitally
          </span>
        </h1>
        <p className="text-lg md:text-xl text-white max-w-2xl mb-8 animate-fade-in">
          Bringing modern technology to Indian farmers, providing real-time insights, market access, and smart farming solutions in your local language.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in">
          <Button asChild size="lg" className="bg-white text-farm-green hover:bg-gray-100 hover:text-farm-green-dark">
            <Link to="/marketplace">
              Explore Features
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-farm-green">
            <Link to="/dashboard">
              Join Now
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
