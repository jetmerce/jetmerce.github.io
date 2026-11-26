import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import RouteMetadata from "@/components/RouteMetadata";
import Index from "./pages/Index";
import Systems from "./pages/Systems";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import Audit from "./pages/Audit";
import FAQ from "./pages/FAQ";
import Process from "./pages/Process";
import LocalBusinesses from "./pages/LocalBusinesses";
import DigitalBusinesses from "./pages/DigitalBusinesses";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light" storageKey="jetmerce-theme">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <RouteMetadata />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/systems" element={<Systems />} />
            <Route path="/work" element={<Work />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/audit" element={<Audit />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/process" element={<Process />} />
            <Route path="/local-businesses" element={<LocalBusinesses />} />
            <Route path="/digital-businesses" element={<DigitalBusinesses />} />
            <Route path="/thank-you" element={<ThankYou />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
