"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { Container, AnimatedSection } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
                Kontakt
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal-950 leading-tight mb-6">
                Låt oss prata
              </h1>
              <p className="font-body text-lg text-charcoal-600 leading-relaxed">
                Har du frågor, funderingar eller vill diskutera hur jag kan
                hjälpa din verksamhet? Hör av dig — jag svarar alltid personligen.
              </p>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Contact form & info */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                {submitted ? (
                  <div className="p-10 rounded-2xl gradient-warm border border-brand-100 text-center">
                    <div className="w-16 h-16 rounded-full bg-sage-100 text-sage-700 flex items-center justify-center mx-auto mb-6">
                      <Mail className="w-7 h-7" />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-charcoal-950 mb-3">
                      Tack för ditt meddelande
                    </h2>
                    <p className="font-body text-charcoal-600 max-w-md mx-auto">
                      Jag har tagit emot ditt meddelande och återkommer till dig
                      så snart som möjligt, normalt inom 1–2 arbetsdagar.
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
                          Telefon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
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
                        htmlFor="message"
                        className="block font-body text-sm font-medium text-charcoal-700 mb-2"
                      >
                        Meddelande *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-charcoal-200 font-body text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Berätta kort om vad du behöver hjälp med..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center px-8 py-4 bg-sage-700 text-white font-body text-base font-medium rounded-lg hover:bg-sage-800 transition-colors duration-200"
                    >
                      Skicka meddelande
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
                    <h3 className="font-display text-lg font-semibold text-charcoal-950 mb-4">
                      Kontaktinformation
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-sage-600 mt-0.5" />
                        <div>
                          <span className="block font-body text-sm text-charcoal-500">
                            E-post
                          </span>
                          <a
                            href={`mailto:${SITE_CONFIG.email}`}
                            className="font-body text-charcoal-900 hover:text-sage-700 transition-colors"
                          >
                            {SITE_CONFIG.email}
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-sage-600 mt-0.5" />
                        <div>
                          <span className="block font-body text-sm text-charcoal-500">
                            Plats
                          </span>
                          <span className="font-body text-charcoal-900">
                            {SITE_CONFIG.location}
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="p-8 rounded-2xl bg-sage-800 text-white">
                    <h3 className="font-display text-lg font-semibold mb-3">
                      Föredrar du att prata?
                    </h3>
                    <p className="font-body text-sage-200 text-sm leading-relaxed mb-6">
                      Boka ett kostnadsfritt samtal direkt så pratar vi om dina
                      behov och möjligheter.
                    </p>
                    <Link
                      href="/boka"
                      className="inline-flex items-center px-5 py-2.5 bg-white text-sage-800 font-body text-sm font-medium rounded-lg hover:bg-sage-50 transition-colors duration-200"
                    >
                      Boka samtal
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
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
