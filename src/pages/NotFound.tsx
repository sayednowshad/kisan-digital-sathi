
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-bold text-farm-green mb-4 dark:text-farm-green-light">404</h1>
        <p className="text-2xl text-gray-700 mb-6 dark:text-gray-300">पृष्ठ नहीं मिला</p>
        <p className="text-lg text-gray-600 mb-8 dark:text-gray-400">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-farm-green hover:bg-farm-green-dark">
          <Link to="/">
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
