import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "../components/shared/ScrollReveal";
import { subsidiaries } from "../data/content";

const countryFlags = {
  Singapore: "SG",
  Pakistan: "PK",
  "United Arab Emirates": "AE",
  "United States": "US"
};

export default function Subsidiaries() {
  return (
    <main data-testid="subsidiaries-page">
      {/* Hero */}
      <section className="bg-white pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <p className="eyebrow mb-4">Global Portfolio</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#11111F] tracking-tighter leading-[1.05]">
                  A Global Portfolio of Health Fintech Infrastructure Companies
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p className="mt-8 hero-desc">
                  Mentor Global is a structured group of companies designed to build, deploy, and scale infrastructure across regulated markets.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2} direction="left">
              <div className="overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1733195296321-b99d129b09cd?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=700"
                  alt="Global presence"
                  className="w-full h-auto object-cover aspect-[4/3]"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#0048FF]/[0.03] blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/10">
            <ScrollReveal>
              <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/10 h-full">
                <p className="eyebrow mb-6">Mentor Global Provides</p>
                <div className="space-y-3">
                  {["Strategy and capital allocation", "Global governance and compliance", "Technology architecture via Mentor Innovation", "Intelligence via DEXA", "Market entry and partnership coordination"].map((item) => (
                    <p key={item} className="text-sm text-[#8A8A93] flex items-start gap-3">
                      <span className="text-[#0048FF] mt-0.5">&#8212;</span> {item}
                    </p>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="p-8 md:p-12 h-full">
                <p className="eyebrow mb-6">Subsidiaries Provide</p>
                <div className="space-y-3">
                  {["Local market execution", "Regulatory compliance", "Customer relationships", "Operational delivery", "Market-specific adaptation"].map((item) => (
                    <p key={item} className="text-sm text-[#8A8A93] flex items-start gap-3">
                      <span className="text-[#0048FF] mt-0.5">&#8212;</span> {item}
                    </p>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Country Sections */}
      {subsidiaries.map((sub, idx) => (
        <section
          key={sub.country}
          data-testid={`subsidiary-${sub.country.toLowerCase().replace(/\s+/g, "-")}`}
          className={`${idx % 2 === 0 ? "bg-white" : "bg-[#11111F]"} py-24 md:py-32`}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl">{countryFlags[sub.country]}</span>
                <p className="eyebrow">{sub.country}</p>
              </div>
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 ${idx % 2 === 0 ? "text-[#11111F]" : "text-white"}`}>
                {sub.country}
              </h2>
              <p className={`text-base mb-12 ${idx % 2 === 0 ? "text-[#666666]" : "text-[#8A8A93]"}`}>
                {sub.role}
              </p>
            </ScrollReveal>

            <div className={`grid grid-cols-1 md:grid-cols-${Math.min(sub.companies.length, 3)} border ${idx % 2 === 0 ? "border-[#11111F]/10" : "border-white/10"}`}>
              {sub.companies.map((company, i) => (
                <ScrollReveal key={company.name} delay={i * 0.1}>
                  <div className={`p-8 md:p-10 h-full ${
                    i < sub.companies.length - 1
                      ? idx % 2 === 0
                        ? "border-b md:border-b-0 md:border-r border-[#11111F]/10"
                        : "border-b md:border-b-0 md:border-r border-white/10"
                      : ""
                  } ${idx % 2 === 0 ? "card-hover" : "card-hover-dark"}`}>
                    <h3 className={`text-xl font-bold mb-3 ${idx % 2 === 0 ? "text-[#11111F]" : "text-white"}`}>
                      {company.name}
                    </h3>
                    <p className={`text-sm leading-relaxed ${idx % 2 === 0 ? "text-[#666666]" : "text-[#8A8A93]"}`}>
                      {company.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Global Technology Clients */}
      <section className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 blue-glow-subtle" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <p className="eyebrow mb-4">Global Reach</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Global Technology Clients
            </h2>
            <p className="section-desc-dark max-w-2xl mx-auto">
              Technology clients across Asia, Middle East, Africa, and the US
            </p>
          </ScrollReveal>

          {/* Region indicators */}
          <ScrollReveal delay={0.2}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-white/10">
              {["Asia", "Middle East", "Africa", "United States"].map((region) => (
                <div key={region} className="bg-[#11111F] p-6 md:p-8">
                  <div className="w-3 h-3 bg-[#0048FF] mx-auto mb-3" />
                  <p className="text-sm font-medium text-white">{region}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-3xl mx-auto">
              Partner With the Mentor Global Ecosystem
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <Link
              to="/contact"
              data-testid="subsidiaries-partner-cta"
              className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-[#0048FF] text-white font-semibold hover:bg-[#0030CC] transition-colors"
            >
              Explore Partnership Opportunities <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
