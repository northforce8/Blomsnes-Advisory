"use client";

import { useState } from "react";
import { Calendar, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { Container, AnimatedSection } from "@/components/ui";

const serviceOptions = [
  "Strategisk Affärsutveckling",
  "Digital Transformation",
  "Coaching & Ledarskap",
  "Organisationsutveckling",
  "Workshop eller Föreläsning",
  "Annat / Osäker",
];

export default function BokaPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    preferredDate: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="section-padding gradient-sage">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-block font-body text-sm font-semibold tracking-widest uppercase text-sage-600 mb-4">
                Boka samtal
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal-950 leading-tight mb-6">
                Boka ett kostnadsfritt samtal
              </h1>
              <p className="font-body text-lg text-charcoal-600 leading-relaxed">
                Ta det första steget. Fyll i formuläret nedan så återkommer jag
                för att hitta en tid som passar dig. Samtalet är helt
                kostnadsfritt och tar cirka 30 minuter.
              </p>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Booking form */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <AnimatedSection>
                {submitted ? (
                  <div className="p-10 rounded-2xl gradient-warm border border-brand-100 text-center">
                    <div className="w-16 h-16 rounded-full bg-sage-100 text-sage-700 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-charcoal-950 mb-3">
                      Tack för din bokning
                    </h2>
                    <p className="font-body text-charcoal-600 max-w-md mx-auto">
                      Jag har tagit emot din förfrågan och återkommer till dig
                      inom 24 timmar med en bekräftad tid. Jag ser fram emot
                      vårt samtal.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block font-body text-sm font-medium text-charcoal-700 mb-2"
                        >
                          Namn *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-charcoal-200 font-body text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-200"
                          placeholder="Ditt namn"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block font-body text-sm font-medium text-charcoal-700 mb-2"
                        >
                          E-post *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-charcoal-200 font-body text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-200"
                          placeholder="din@email.se"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block font-body text-sm font-medium text-charcoal-700 mb-2"
                        >
                          Telefon *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-charcoal-200 font-body text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-200"
                          placeholder="070-000 00 00"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="block font-body text-sm font-medium text-charcoal-700 mb-2"
                        >
                          Företag
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-charcoal-200 font-body text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-200"
                          placeholder="Ditt företag"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="block font-body text-sm font-medium text-charcoal-700 mb-2"
                      >
                        Vad vill du prata om? *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-charcoal-200 font-body text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-200 bg-white"
                      >
                        <option value="">Välj ett område</option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="preferredDate"
                        className="block font-body text-sm font-medium text-charcoal-700 mb-2"
                      >
                        Önskat datum
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-charcoal-200 font-body text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block font-body text-sm font-medium text-charcoal-700 mb-2"
                      >
                        Berätta kort om din situation
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-charcoal-200 font-body text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Vad vill du uppnå? Vilka utmaningar ser du?"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center px-8 py-4 bg-sage-700 text-white font-body text-base font-medium rounded-lg hover:bg-sage-800 transition-colors duration-200"
                    >
                      Skicka förfrågan
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={200}>
                <div className="space-y-8">
                  <div className="p-8 rounded-2xl gradient-warm border border-brand-100">
                    <h3 className="font-display text-lg font-semibold text-charcoal-950 mb-6">
                      Så här fungerar det
                    </h3>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-sage-100 text-sage-700 flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-display text-base font-semibold text-charcoal-950">
                            Fyll i formuläret
                          </h4>
                          <p className="font-body text-sm text-charcoal-600 mt-1">
                            Berätta kort om dig och dina behov.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-sage-100 text-sage-700 flex items-center justify-center flex-shrink-0">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-display text-base font-semibold text-charcoal-950">
                            Jag återkommer
                          </h4>
                          <p className="font-body text-sm text-charcoal-600 mt-1">
                            Inom 24 timmar bekräftar jag en tid.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-sage-100 text-sage-700 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-display text-base font-semibold text-charcoal-950">
                            Vi pratas vid
                          </h4>
                          <p className="font-body text-sm text-charcoal-600 mt-1">
                            30 minuter helt kostnadsfritt. Digitalt eller på telefon.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
