import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BackToTop } from "@/components/shared/BackToTop";

const Home = lazy(() => import("@/pages/Home"));
const Solutions = lazy(() => import("@/pages/Solutions"));
const SolutionDetail = lazy(() => import("@/pages/SolutionDetail"));
const HealthcareInfrastructure = lazy(() => import("@/pages/solutions/HealthcareInfrastructure"));
const InsuranceInfrastructure = lazy(() => import("@/pages/solutions/InsuranceInfrastructure"));
const FintechInfrastructure = lazy(() => import("@/pages/solutions/FintechInfrastructure"));
const AIInfrastructure = lazy(() => import("@/pages/solutions/AIInfrastructure"));
const CompanyOperatingInfrastructure = lazy(() => import("@/pages/solutions/CompanyOperatingInfrastructure"));
const DeXa = lazy(() => import("@/pages/DexaNew"));
const Subsidiaries = lazy(() => import("@/pages/SubsidiariesNew"));
const About = lazy(() => import("@/pages/About"));
const Team = lazy(() => import("@/pages/TeamNew"));
const Culture = lazy(() => import("@/pages/Culture"));
const Contact = lazy(() => import("@/pages/Contact"));
const TestMobileFlow = lazy(() => import("@/pages/TestMobileFlow"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BackToTop />
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-[#0a0a15]"><div className="w-10 h-10 border-4 border-[#0048FF]/20 border-t-[#0048FF] rounded-full animate-spin" /></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route
              path="/solutions/healthcare-infrastructure"
              element={<HealthcareInfrastructure />}
            />
            <Route
              path="/solutions/insurance-infrastructure"
              element={<InsuranceInfrastructure />}
            />
            <Route
              path="/solutions/fintech-infrastructure"
              element={<FintechInfrastructure />}
            />
            <Route
              path="/solutions/ai-infrastructure"
              element={<AIInfrastructure />}
            />
            <Route
              path="/solutions/company-operating-infrastructure"
              element={<CompanyOperatingInfrastructure />}
            />
            <Route path="/solutions/:slug" element={<SolutionDetail />} />
            <Route path="/DeXa" element={<DeXa />} />
            <Route path="/subsidiaries" element={<Subsidiaries />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/culture" element={<Culture />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/test-mobile-flow" element={<TestMobileFlow />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
