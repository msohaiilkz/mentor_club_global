import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { navSolutions } from "../../data/content";
import logo from "../../assets/mentorclub.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 200);
  };

  const isDark =
    location.pathname === "/" ||
    location.pathname === "/dexa" ||
    location.pathname === "/solutions" ||
    location.pathname.startsWith("/solutions/") ||
    location.pathname === "/subsidiaries" ||
    location.pathname === "/about" ||
    location.pathname === "/team" ||
    location.pathname === "/test-mobile-flow";
  const navBg = scrolled
    ? isDark
      ? "bg-[#050508]/80 backdrop-blur-xl"
      : "bg-white/95 backdrop-blur-md"
    : isDark
      ? "bg-transparent"
      : "bg-white";
  const textColor =
    isDark && !scrolled
      ? "text-white"
      : scrolled && isDark
        ? "text-white"
        : "text-[#11111F]";
  const borderColor = scrolled
    ? isDark
      ? "border-white/5"
      : "border-[#11111F]/10"
    : "border-transparent";

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Solutions", path: "/solutions", hasDropdown: true },
    { label: "DEXA", path: "/dexa" },
    { label: "Subsidiaries", path: "/subsidiaries" },
    { label: "About", path: "/about" },
    { label: "Team", path: "/team" },
    // { label: "Contact", path: "/contact" },
    { label: "Culture", path: "/culture" },
  ];

  return (
    <nav
      data-testid="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg} border-b ${borderColor}`}
    >
      <div className="max-w-[1720px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            data-testid="navbar-logo"
            className="flex items-center shrink-0"
          >
            <img
              src={logo}
              alt="Mentor Global"
              className="h-10 md:h-14 w-auto object-contain brightness-[1.05] transition-all duration-300"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={link.hasDropdown ? handleMouseEnter : undefined}
                onMouseLeave={link.hasDropdown ? handleMouseLeave : undefined}
                ref={link.hasDropdown ? dropdownRef : undefined}
              >
                <Link
                  to={link.path}
                  data-testid={`nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  className={`px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1
                    ${
                      location.pathname === link.path ||
                      (link.hasDropdown &&
                        location.pathname.startsWith("/solutions"))
                        ? "text-[#0048FF]"
                        : `${textColor} hover:text-[#0048FF]`
                    }`}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>

                {/* Dropdown */}
                {link.hasDropdown && (
                  <div
                    className={`absolute top-full left-0 mt-0 w-80 bg-white border border-[#11111F]/10 shadow-lg transition-all duration-200 ${
                      dropdownOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                    data-testid="solutions-dropdown"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="py-2">
                      <Link
                        to="/solutions"
                        className="flex items-center justify-between px-5 py-3 text-sm font-semibold text-[#11111F] hover:bg-[#0048FF]/5 border-b border-[#11111F]/5"
                        data-testid="dropdown-all-solutions"
                      >
                        All Solutions <ArrowRight className="w-4 h-4" />
                      </Link>
                      {navSolutions.map((sol) => (
                        <Link
                          key={sol.slug}
                          to={sol.path}
                          data-testid={`dropdown-${sol.slug}`}
                          className={`block px-5 py-3 text-sm transition-colors hover:bg-[#0048FF]/5 ${
                            location.pathname === sol.path
                              ? "text-[#0048FF] font-medium"
                              : "text-[#11111F]/80"
                          }`}
                        >
                          {sol.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            data-testid="nav-partner-cta"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-[#0048FF] text-white text-sm font-semibold hover:bg-[#0030CC] transition-colors"
          >
            Partner With Us <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Mobile Toggle */}
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 ${textColor}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          data-testid="mobile-menu"
          className={`lg:hidden fixed inset-0 top-16 z-40 overflow-y-auto transition-colors duration-300 ${
            isDark ? "bg-[#050508] text-white" : "bg-white text-[#11111F]"
          }`}
        >
          <div className="px-6 py-8 flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.path}>
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className={`w-full flex items-center justify-between py-3 text-lg font-semibold border-b ${
                        isDark ? "border-white/5" : "border-[#11111F]/5"
                      }`}
                    >
                      {link.label}{" "}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {dropdownOpen && (
                      <div className="pl-4 py-2">
                        {navSolutions.map((sol) => (
                          <Link
                            key={sol.slug}
                            to={sol.path}
                            className={`block py-2.5 text-base transition-colors ${
                              isDark
                                ? "text-white/70 hover:text-[#0048FF]"
                                : "text-[#11111F]/70 hover:text-[#0048FF]"
                            }`}
                          >
                            {sol.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`block py-3 text-lg font-semibold border-b hover:text-[#0048FF] ${
                      isDark ? "border-white/5" : "border-[#11111F]/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="mt-6 flex items-center justify-center gap-2 py-3.5 bg-[#0048FF] text-white text-base font-semibold"
            >
              Partner With Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
