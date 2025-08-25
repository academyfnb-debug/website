import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Certification from "./pages/Certification";
import ELearning from "./pages/ELearning";
import Courses from "./pages/Courses";
import LearningPaths from "./pages/LearningPaths";
import Enterprise from "./pages/Enterprise";
import About from "./pages/About";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import TrialLanding from "./pages/TrialLanding";
import TrialConfirm from "./pages/TrialConfirm";
import TrialThankYou from "./pages/TrialThankYou";
import { TrialProvider } from "./context/TrialContext";
import { TrialSignupModal } from "./components/TrialSignupModal";
import { FloatingTrialCta } from "./components/FloatingTrialCta";
import { QuickSignupProvider } from "./context/QuickSignupContext";
import { CourseQuickSignupModal } from "./components/CourseQuickSignupModal";
import { QuickSignupEventsBridge } from "./components/QuickSignupEventsBridge";
import { TrialEventsBridge } from "./components/TrialEventsBridge";
import CourseDetail from "./pages/CourseDetail";
import LearningPathDetail from "./pages/LearningPathDetail";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <TrialProvider>
          <QuickSignupProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:slug" element={<CourseDetail />} />
              <Route path="/learning-paths" element={<LearningPaths />} />
              <Route path="/learning-paths/:slug" element={<LearningPathDetail />} />
              <Route path="/certification" element={<Certification />} />
              <Route path="/e-learning" element={<ELearning />} />
              <Route path="/enterprise" element={<Enterprise />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/trial-1on1" element={<TrialLanding />} />
              <Route path="/trial-1on1/confirm" element={<TrialConfirm />} />
              <Route path="/trial-1on1/thank-you" element={<TrialThankYou />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <TrialSignupModal />
            <CourseQuickSignupModal />
            <QuickSignupEventsBridge />
            <TrialEventsBridge />
            <Footer />
            <FloatingTrialCta />
          </QuickSignupProvider>
        </TrialProvider>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
