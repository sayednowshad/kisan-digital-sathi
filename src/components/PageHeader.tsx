
import React from 'react';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  description: string;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  description, 
  className 
}) => {
  return (
    <div className={cn(
      "bg-gradient-to-r from-farm-green to-farm-green-light py-12 md:py-16",
      className
    )}>
      <div className="container-custom">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h1>
          <p className="text-white/90 text-lg md:text-xl">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
