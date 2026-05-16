import { useState } from "react";
import { ScrollReveal } from "../components/shared/ScrollReveal";
import { partnerTypes } from "../data/content";
import { CheckCircle2 } from "lucide-react";

const initialForm = {
  fullName: "",
  organization: "",
  email: "",
  phone: "",
  country: "",
  partnerType: "",
  solutionInterest: "",
  message: "",
  preferredContact: "email"
};

const solutionOptions = [
  "Healthcare Infrastructure",
  "Insurance Infrastructure",
  "Fintech Infrastructure",
  "AI Infrastructure",
  "Company Operating Infrastructure",
  "Multiple Solutions"
];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = "Full name is required.";
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email.";
    if (!form.organization.trim()) errs.organization = "Organization is required.";
    if (!form.partnerType) errs.partnerType = "Select a partner type.";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 bg-transparent border text-[#11111F] text-base placeholder:text-[#11111F]/30 focus:border-[#0048FF] transition-colors ${
      errors[field] ? "border-red-500" : "border-[#11111F]/15"
    }`;

  if (submitted) {
    return (
      <main data-testid="contact-page">
        <section className="min-h-screen flex items-center justify-center bg-white pt-20">
          <div className="text-center max-w-lg px-6">
            <ScrollReveal>
              <div className="w-16 h-16 bg-[#0048FF] flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#11111F] tracking-tight mb-4" data-testid="contact-success-message">
                Thank You
              </h2>
              <p className="body-text">
                Thank you. The Mentor Global team will review your inquiry and respond within 1 to 2 business days.
              </p>
            </ScrollReveal>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main data-testid="contact-page">
      {/* Hero */}
      <section className="bg-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-[1720px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <p className="eyebrow mb-4">Contact</p>
            <h1 className="text-[38px] sm:text-[35px] md:text-[48px] lg:text-[54px] xl:text-[54px] font-bold text-[#11111F] tracking-tighter leading-[1.05] max-w-5xl">
              Connect With the Infrastructure Layer of Health Fintech
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Form */}
      <section className="bg-white pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-[#11111F]/10">
            {/* Partner categories */}
            <div className="lg:col-span-4 p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-[#11111F]/10">
              <ScrollReveal>
                <p className="text-base uppercase tracking-[0.2em] font-bold text-[#11111F]/40 mb-6">
                  Partner Categories
                </p>
                <div className="space-y-3">
                  {partnerTypes.map((type) => (
                    <p key={type} className="text-lg text-[#666666] flex items-start gap-3">
                      <span className="text-[#0048FF] mt-0.5 text-sm">&#9632;</span>
                      {type}
                    </p>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-8 p-8 md:p-10">
              <ScrollReveal>
                <form onSubmit={handleSubmit} noValidate data-testid="contact-form" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-base font-bold text-[#11111F]/60 uppercase tracking-wider mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        className={inputClass("fullName")}
                        placeholder="Enter your full name"
                        data-testid="contact-fullname"
                      />
                      {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                    </div>
                    <div>
                      <label className="block text-base font-bold text-[#11111F]/60 uppercase tracking-wider mb-2">Organization *</label>
                      <input
                        type="text"
                        name="organization"
                        value={form.organization}
                        onChange={handleChange}
                        className={inputClass("organization")}
                        placeholder="Company or organization"
                        data-testid="contact-organization"
                      />
                      {errors.organization && <p className="text-xs text-red-500 mt-1">{errors.organization}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-base font-bold text-[#11111F]/60 uppercase tracking-wider mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass("email")}
                        placeholder="you@company.com"
                        data-testid="contact-email"
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-base font-bold text-[#11111F]/60 uppercase tracking-wider mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className={inputClass("phone")}
                        placeholder="+1 (555) 000-0000"
                        data-testid="contact-phone"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-base font-bold text-[#11111F]/60 uppercase tracking-wider mb-2">Country</label>
                      <input
                        type="text"
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        className={inputClass("country")}
                        placeholder="Country"
                        data-testid="contact-country"
                      />
                    </div>
                    <div>
                      <label className="block text-base font-bold text-[#11111F]/60 uppercase tracking-wider mb-2">Partner Type *</label>
                      <select
                        name="partnerType"
                        value={form.partnerType}
                        onChange={handleChange}
                        className={inputClass("partnerType")}
                        data-testid="contact-partner-type"
                      >
                        <option value="">Select partner type</option>
                        {partnerTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      {errors.partnerType && <p className="text-xs text-red-500 mt-1">{errors.partnerType}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-base font-bold text-[#11111F]/60 uppercase tracking-wider mb-2">Solution Interest</label>
                    <select
                      name="solutionInterest"
                      value={form.solutionInterest}
                      onChange={handleChange}
                      className={inputClass("solutionInterest")}
                      data-testid="contact-solution-interest"
                    >
                      <option value="">Select solution interest</option>
                      {solutionOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-base font-bold text-[#11111F]/60 uppercase tracking-wider mb-2">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      className={inputClass("message")}
                      placeholder="Tell us about your needs..."
                      data-testid="contact-message"
                    />
                  </div>

                  <div>
                    <label className="block text-base font-bold text-[#11111F]/60 uppercase tracking-wider mb-3">Preferred Contact Method</label>
                    <div className="flex flex-wrap gap-4 sm:gap-6">
                      {["email", "phone", "either"].map((method) => (
                        <label key={method} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value={method}
                            checked={form.preferredContact === method}
                            onChange={handleChange}
                            className="accent-[#0048FF]"
                            data-testid={`contact-preferred-${method}`}
                          />
                          <span className="text-base text-[#666666] capitalize">{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    data-testid="contact-submit-button"
                    className="w-full md:w-auto px-10 py-4 bg-[#0048FF] text-white font-semibold text-base hover:bg-[#0030CC] transition-colors"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
