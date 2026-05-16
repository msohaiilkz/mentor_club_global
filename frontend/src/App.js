import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import Solutions from "@/pages/Solutions";
import SolutionDetail from "@/pages/SolutionDetail";
import HealthcareInfrastructure from "@/pages/solutions/HealthcareInfrastructure";
import InsuranceInfrastructure from "@/pages/solutions/InsuranceInfrastructure";
import FintechInfrastructure from "@/pages/solutions/FintechInfrastructure";
import AIInfrastructure from "@/pages/solutions/AIInfrastructure";
import CompanyOperatingInfrastructure from "@/pages/solutions/CompanyOperatingInfrastructure";
import Dexa from "@/pages/DexaNew";
import Subsidiaries from "@/pages/SubsidiariesNew";
import About from "@/pages/About";
import Team from "@/pages/TeamNew";
import Contact from "@/pages/Contact";

import TestMobileFlow from "@/pages/TestMobileFlow";
import Culture from "./pages/Culture";
import { BackToTop } from "@/components/shared/BackToTop";

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
          <Route path="/dexa" element={<Dexa />} />
          <Route path="/subsidiaries" element={<Subsidiaries />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test-mobile-flow" element={<TestMobileFlow />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
