
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = () => {
  const location = useLocation();
  
  // Get the path segments
  const pathSegments = location.pathname.split('/').filter(segment => segment);
  
  // Create breadcrumb items
  const breadcrumbItems = pathSegments.map((segment, index) => {
    const url = `/${pathSegments.slice(0, index + 1).join('/')}`;
    const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
    
    return { name, url };
  });
  
  if (pathSegments.length === 0) return null; // Don't show breadcrumbs on home page
  
  return (
    <div className="bg-gray-50 py-3 dark:bg-gray-800/50">
      <div className="container-custom">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-farm-green dark:text-gray-300 dark:hover:text-farm-green-light">
                <Home size={16} className="mr-2" />
                Home
              </Link>
            </li>
            
            {breadcrumbItems.map((item, index) => (
              <li key={item.url}>
                <div className="flex items-center">
                  <ChevronRight size={16} className="text-gray-400" />
                  {index === breadcrumbItems.length - 1 ? (
                    <span className="ml-1 md:ml-2 text-sm font-medium text-farm-green dark:text-farm-green-light">{item.name}</span>
                  ) : (
                    <Link to={item.url} className="ml-1 md:ml-2 text-sm font-medium text-gray-700 hover:text-farm-green dark:text-gray-300 dark:hover:text-farm-green-light">
                      {item.name}
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
