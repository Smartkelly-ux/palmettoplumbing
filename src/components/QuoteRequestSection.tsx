import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { QuoteFormData } from '../types';

export const QuoteRequestSection: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    company: '',
    name: '',
    email: '',
    phone: '',
    projectType: 'NEW CONSTRUCTION',
    location: '',
    details: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof QuoteFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof QuoteFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid email required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.details.trim()) {
      newErrors.details = 'Project details required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <section
      id="quote-request"
      className="relative w-full bg-[#F0EFE9] border-b border-[#C9CDC8] py-14 sm:py-20 lg:py-28 px-6 lg:px-12 dossier-texture"
    >
      {/* Main Grid: LEFT / RIGHT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        {/* LEFT: START A PROJECT / Have a project coming up? Tell us what you're working on. */}
        <div className="lg:col-span-5 space-y-4 sm:space-y-6">
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold uppercase tracking-tight text-[#111512] leading-[0.98] sm:leading-[0.95] break-words">
            Start a <br />
            Project
          </h2>

          <div className="space-y-1.5 pt-1 sm:pt-2">
            <p className="text-lg sm:text-xl lg:text-2xl text-[#111512] font-semibold">
              Have a project coming up?
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-[#232824] leading-relaxed">
              Tell us what you're working on.
            </p>
          </div>
        </div>

        {/* RIGHT: INLINE FORM */}
        <div className="lg:col-span-7 bg-[#F8F7F2] border border-[#111512] p-5 sm:p-8 lg:p-12 shadow-[4px_4px_0px_#C9CDC8] sm:shadow-[6px_6px_0px_#C9CDC8]">
          {submitted ? (
            <div className="space-y-6 text-left py-6">
              <div className="inline-flex items-center gap-2 font-mono-data text-xs text-[#C98A3D] font-bold tracking-widest uppercase">
                <CheckCircle2 className="w-5 h-5 text-[#C98A3D]" />
                <span>REQUEST RECEIVED</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold uppercase text-[#111512]">
                Thank You
              </h3>

              <p className="text-base text-[#232824]">
                We have received your project details and will be in touch promptly.
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="bg-[#111512] text-[#F8F7F2] hover:bg-[#C98A3D] hover:text-[#111512] hover:border-[#C98A3D] border border-[#111512] font-mono-data text-xs tracking-widest uppercase py-3 px-6 transition-all duration-200"
              >
                SUBMIT ANOTHER
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* PROJECT / COMPANY */}
              <div>
                <label
                  htmlFor="company"
                  className="block font-mono-data text-xs uppercase tracking-wider text-[#111512] mb-1 font-semibold"
                >
                  PROJECT / COMPANY
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-white border border-[#C9CDC8] px-4 py-2.5 text-sm text-[#111512] focus:border-[#111512] focus:outline-none transition-colors"
                />
              </div>

              {/* NAME & EMAIL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-mono-data text-xs uppercase tracking-wider text-[#111512] mb-1 font-semibold"
                  >
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full bg-white border px-4 py-2.5 text-sm text-[#111512] focus:outline-none transition-colors ${
                      errors.name ? 'border-red-600' : 'border-[#C9CDC8] focus:border-[#111512]'
                    }`}
                  />
                  {errors.name && (
                    <p className="font-mono-data text-xs text-red-600 mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-mono-data text-xs uppercase tracking-wider text-[#111512] mb-1 font-semibold"
                  >
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full bg-white border px-4 py-2.5 text-sm text-[#111512] focus:outline-none transition-colors ${
                      errors.email ? 'border-red-600' : 'border-[#C9CDC8] focus:border-[#111512]'
                    }`}
                  />
                  {errors.email && (
                    <p className="font-mono-data text-xs text-red-600 mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* PHONE & PROJECT TYPE */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-mono-data text-xs uppercase tracking-wider text-[#111512] mb-1 font-semibold"
                  >
                    PHONE
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={`w-full bg-white border px-4 py-2.5 text-sm text-[#111512] focus:outline-none transition-colors ${
                      errors.phone ? 'border-red-600' : 'border-[#C9CDC8] focus:border-[#111512]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="font-mono-data text-xs text-red-600 mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="block font-mono-data text-xs uppercase tracking-wider text-[#111512] mb-1 font-semibold"
                  >
                    PROJECT TYPE
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#C9CDC8] px-4 py-2.5 text-sm text-[#111512] focus:border-[#111512] focus:outline-none transition-colors"
                  >
                    <option value="NEW CONSTRUCTION">NEW CONSTRUCTION</option>
                    <option value="REMODELING">REMODELING</option>
                    <option value="TENANT IMPROVEMENT">TENANT IMPROVEMENT</option>
                    <option value="COMMERCIAL PLUMBING">COMMERCIAL PLUMBING</option>
                    <option value="GAS PIPING">GAS PIPING</option>
                    <option value="OTHER">OTHER</option>
                  </select>
                </div>
              </div>

              {/* PROJECT LOCATION */}
              <div>
                <label
                  htmlFor="location"
                  className="block font-mono-data text-xs uppercase tracking-wider text-[#111512] mb-1 font-semibold"
                >
                  PROJECT LOCATION
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full bg-white border border-[#C9CDC8] px-4 py-2.5 text-sm text-[#111512] focus:border-[#111512] focus:outline-none transition-colors"
                />
              </div>

              {/* PROJECT DETAILS */}
              <div>
                <label
                  htmlFor="details"
                  className="block font-mono-data text-xs uppercase tracking-wider text-[#111512] mb-1 font-semibold"
                >
                  PROJECT DETAILS
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={3}
                  value={formData.details}
                  onChange={handleChange}
                  required
                  className={`w-full bg-white border px-4 py-2.5 text-sm text-[#111512] focus:outline-none transition-colors ${
                    errors.details ? 'border-red-600' : 'border-[#C9CDC8] focus:border-[#111512]'
                  }`}
                />
                {errors.details && (
                  <p className="font-mono-data text-xs text-red-600 mt-1">{errors.details}</p>
                )}
              </div>

              {/* BUTTON: REQUEST A QUOTE */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#111512] text-[#F8F7F2] hover:bg-[#C98A3D] hover:text-[#111512] hover:border-[#C98A3D] font-mono-data text-sm font-semibold uppercase tracking-widest py-4 px-6 flex items-center justify-center gap-3 transition-all duration-200 border border-[#111512] cursor-pointer disabled:opacity-50"
                >
                  <span>REQUEST A QUOTE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* CONTACT BELOW THE FORM: CALL (305) 821-3561 / VISIT 2655 W 78th St, Hialeah, FL 33016 */}
      <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-[#C9CDC8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 font-mono-data text-xs">
        <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
          <span className="text-[#68716B] uppercase tracking-wider text-[11px] sm:text-xs">CALL:</span>
          <a
            href="tel:3058213561"
            className="text-sm sm:text-base font-bold text-[#111512] hover:text-[#C98A3D] transition-colors"
          >
            (305) 821-3561
          </a>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
          <span className="text-[#68716B] uppercase tracking-wider text-[11px] sm:text-xs">VISIT:</span>
          <span className="text-xs sm:text-sm font-semibold text-[#111512] break-words">
            2655 W 78th St, Hialeah, FL 33016
          </span>
        </div>
      </div>
    </section>
  );
};

