
import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  className?: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  link,
  className,
}) => {
  return (
    <div className={cn(
      "bg-white rounded-lg shadow-md p-6 card-hover dark:bg-gray-800",
      className
    )}>
      <div className="flex flex-col items-center text-center">
        <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-farm-green bg-opacity-10">
          <Icon className="h-8 w-8 text-farm-green dark:text-farm-green-light" />
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 dark:text-gray-400">{description}</p>
        <Link 
          to={link}
          className="text-farm-green hover:text-farm-green-dark font-medium dark:text-farm-green-light"
        >
          Learn more →
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
