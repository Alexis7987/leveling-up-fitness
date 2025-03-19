
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Donation from "./pages/Donation";
import Shop from "./pages/Shop";
import Affiliate from "./pages/Affiliate";
import Navigation from "./components/Navigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/leveling-up-fitness">
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/affiliate" element={<Affiliate />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
