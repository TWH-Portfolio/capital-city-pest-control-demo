const reasons = [
  {
    stat: '5.0',
    label: 'Google Rating',
    desc: '38 five-star reviews from real Tallahassee homeowners.',
  },
  {
    stat: 'Local',
    label: 'Owned & Operated',
    desc: 'We live here, we work here, we know Florida pests.',
  },
  {
    stat: '100%',
    label: 'Licensed & Insured',
    desc: 'Full state licensing. General liability and worker\'s comp coverage.',
  },
  {
    stat: 'Safe',
    label: 'Family-Friendly',
    desc: 'EPA-registered products. Pet-safe and child-safe treatment options available.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-steel-deep" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-6">
        <p className="iron-label mb-4">Why Capital City</p>
        <h2 id="why-heading" className="iron-display text-bone text-3xl md:text-5xl mb-16">
          Tallahassee<br />Trusts Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {reasons.map((item) => (
            <div key={item.label} className="border-l-2 border-brass pl-6">
              <p className="font-display text-3xl md:text-4xl text-bone mb-1">{item.stat}</p>
              <p className="font-sans text-xs uppercase tracking-[0.18em] text-brass mb-3">{item.label}</p>
              <p className="font-body text-concrete text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-white/5">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            <p className="font-body text-concrete text-lg flex-1">
              Same-day and next-day service available for most residential treatments.
              We show up on time, explain what we find, and give you honest recommendations.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-brass text-steel-deep font-sans text-xs uppercase tracking-[0.18em] font-semibold hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[3px_3px_0_0_hsl(40_30%_92%)] transition-all flex-none"
            >
              Schedule Service
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
