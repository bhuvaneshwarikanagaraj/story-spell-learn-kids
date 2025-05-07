
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-kids-blue-100 to-kids-violet-100 p-6">
      <div className="text-center bg-white rounded-xl shadow-xl p-8 max-w-md">
        <div className="text-6xl font-bold mb-4 gradient-text">404</div>
        <h1 className="text-2xl font-bold mb-4 text-kids-violet-500">Oh no! Page not found</h1>
        <p className="text-gray-700 mb-6">
          We couldn't find the page you were looking for. Perhaps you took a wrong turn in your learning adventure?
        </p>
        <Button className="bg-kids-blue-400 hover:bg-kids-blue-500 flex items-center space-x-2">
          <ArrowLeft className="h-5 w-5" />
          <a href="/">Return to Homepage</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
