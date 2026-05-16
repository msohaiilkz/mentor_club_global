import { Link } from "react-router-dom";
import { navSolutions, globalPresence } from "../../data/content";
import { ArrowRight } from "lucide-react";
import logo from "../../assets/mentorclub.png";

export default function Footer() {
  return (
    <footer data-testid="global-footer" className="bg-[#11111F] text-white">
      {/* CTA Bar */}
      {/* <div className="border-b border-white/10">
        <div className="max-w-[1720px] mx-auto px-6 md:px-12 py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="eyebrow text-[#0048FF] mb-4">Get Started</p>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight max-w-xl">
              Build on infrastructure designed for global health fintech
              systems.
            </h3>
          </div>
          <Link
            to="/contact"
            data-testid="footer-cta-button"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0048FF] text-white font-semibold hover:bg-[#0030CC] transition-colors shrink-0"
          >
            Partner With Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div> */}

      {/* Footer Grid */}
      <div className="max-w-[1720px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center"
              data-testid="footer-logo"
            >
              <img src={logo} alt="Mentor Global" className="h-8 md:h-10 w-auto object-contain" />
            </Link>
            <p className="mt-6 text-sm text-[#8A8A93] leading-relaxed">
              The Infrastructure Behind the Future of Health Fintech
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#8A8A93] mb-5">
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Home",
                "Solutions",
                "DEXA",
                "Subsidiaries",
                "About",
                "Team",
                "Contact",
              ].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-sm text-white/70 hover:text-[#0048FF] transition-colors"
                  data-testid={`footer-nav-${item.toLowerCase()}`}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#8A8A93] mb-5">
              Solutions
            </p>
            <div className="flex flex-col gap-3">
              {navSolutions.map((sol) => (
                <Link
                  key={sol.slug}
                  to={sol.path}
                  className="text-sm text-white/70 hover:text-[#0048FF] transition-colors"
                  data-testid={`footer-sol-${sol.slug}`}
                >
                  {sol.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Global Presence */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#8A8A93] mb-5">
              Global Presence
            </p>
            <div className="flex flex-col gap-3">
              {globalPresence.map((g) => (
                <div key={g.location}>
                  <p className="text-sm text-white/90 font-medium">
                    {g.location}
                  </p>
                  <p className="text-xs text-[#8A8A93]">{g.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1720px] mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#8A8A93]">
            &copy; {new Date().getFullYear()} Mentor Global. All rights
            reserved.
          </p>
          <p className="text-xs text-[#8A8A93]">
            The Infrastructure Behind the Future of Health Fintech
          </p>
        </div>
      </div>
    </footer>
  );
}
