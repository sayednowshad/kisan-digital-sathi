
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import Layout from "./layouts/Layout";

// Pages
import Home from "./pages/Home";
import Subsidies from "./pages/Subsidies";
import Translation from "./pages/Translation";
import Weather from "./pages/Weather";
import Marketplace from "./pages/Marketplace";
import Community from "./pages/Community";
import Market from "./pages/Market";
import CropSuggestions from "./pages/CropSuggestions";
import Profiles from "./pages/Profiles";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="subsidies" element={<Subsidies />} />
            <Route path="translation" element={<Translation />} />
            <Route path="weather" element={<Weather />} />
            <Route path="marketplace" element={<Marketplace />} />
            <Route path="community" element={<Community />} />
            <Route path="market" element={<Market />} />
            <Route path="crop-suggestions" element={<CropSuggestions />} />
            <Route path="profiles" element={<Profiles />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
