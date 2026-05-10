import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-steel-mid" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: info */}
          <div>
            <p className="iron-label mb-4">Get Started</p>
            <h2 id="contact-heading" className="iron-display text-bone text-3xl md:text-5xl mb-8">
              Free<br />Inspection
            </h2>
            <p className="font-body text-concrete text-lg leading-relaxed mb-10">
              Tell us about your pest concern and we will reach out to schedule
              a free inspection. Most appointments available within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="border-l-2 border-brass pl-5">
                <p className="font-sans text-xs uppercase tracking-[0.18em] text-brass mb-1">Phone</p>
                <a href="tel:+18506947056" className="font-body text-bone text-lg hover:text-brass transition-colors">
                  (850) 694-7056
                </a>
              </div>
              <div className="border-l-2 border-brass pl-5">
                <p className="font-sans text-xs uppercase tracking-[0.18em] text-brass mb-1">Service Area</p>
                <p className="font-body text-bone">Tallahassee and Leon County, FL</p>
              </div>
              <div className="border-l-2 border-brass pl-5">
                <p className="font-sans text-xs uppercase tracking-[0.18em] text-brass mb-1">Address</p>
                <p className="font-body text-bone">3701 Houston Rd, Tallahassee, FL 32304</p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-steel-deep border border-white/5 p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 border-2 border-brass flex items-center justify-center mb-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-brass">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-display text-2xl uppercase text-bone mb-3">Request Received</p>
                <p className="font-body text-concrete text-sm">We will be in touch within 24 hours to schedule your free inspection.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="font-sans text-xs uppercase tracking-[0.18em] text-concrete block mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full bg-steel-mid border border-white/10 px-4 py-3 text-bone font-body text-sm focus:border-brass focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="font-sans text-xs uppercase tracking-[0.18em] text-concrete block mb-2">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    className="w-full bg-steel-mid border border-white/10 px-4 py-3 text-bone font-body text-sm focus:border-brass focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-sans text-xs uppercase tracking-[0.18em] text-concrete block mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full bg-steel-mid border border-white/10 px-4 py-3 text-bone font-body text-sm focus:border-brass focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="pest" className="font-sans text-xs uppercase tracking-[0.18em] text-concrete block mb-2">
                    Pest Concern
                  </label>
                  <select
                    id="pest"
                    className="w-full bg-steel-mid border border-white/10 px-4 py-3 text-bone font-body text-sm focus:border-brass focus:outline-none transition-colors"
                  >
                    <option value="">Select a pest type</option>
                    <option value="termites">Termites</option>
                    <option value="roaches">Roaches / Palmetto Bugs</option>
                    <option value="ants">Ants / Fire Ants</option>
                    <option value="mosquitoes">Mosquitoes</option>
                    <option value="rodents">Rodents</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="font-sans text-xs uppercase tracking-[0.18em] text-concrete block mb-2">
                    Details (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows="3"
                    className="w-full bg-steel-mid border border-white/10 px-4 py-3 text-bone font-body text-sm focus:border-brass focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <input type="text" name="website" tabIndex="-1" autoComplete="off" />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 bg-brass text-steel-deep font-sans text-xs uppercase tracking-[0.18em] font-semibold hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[3px_3px_0_0_hsl(40_30%_92%)] transition-all"
                >
                  Request Free Inspection
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
