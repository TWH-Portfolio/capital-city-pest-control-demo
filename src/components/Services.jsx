const services = [
  {
    title: 'Termite Treatment',
    desc: 'Subterranean and drywood termite elimination. Pre-construction barriers and post-construction treatments for existing infestations.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="4" y="16" width="32" height="20" stroke="currentColor" strokeWidth="2" />
        <path d="M4 16L20 4L36 16" stroke="currentColor" strokeWidth="2" />
        <rect x="16" y="24" width="8" height="12" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'General Pest Control',
    desc: 'Quarterly and monthly service plans for roaches, palmetto bugs, ants, spiders, and silverfish. Interior and perimeter defense.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2" />
        <path d="M12 20h16M20 12v16" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Mosquito Control',
    desc: 'Yard barrier treatments and larvicide application. Monthly service during peak season keeps your outdoor space usable.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M20 4v32M12 12l16 16M28 12L12 28" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Rodent Control',
    desc: 'Rats and mice exclusion, trapping, and sanitation. We seal entry points and eliminate active populations.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="8" y="8" width="24" height="24" stroke="currentColor" strokeWidth="2" />
        <path d="M8 8l24 24M32 8L8 32" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Fire Ant Treatment',
    desc: 'Broadcast bait and mound treatment for fire ants. Protect your yard, pets, and family from painful stings.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M20 4l4 8h8l-6 6 2 8-8-4-8 4 2-8-6-6h8l4-8z" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Commercial Services',
    desc: 'Restaurants, offices, warehouses, and retail. Customized IPM programs that meet health department standards.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="6" y="12" width="28" height="24" stroke="currentColor" strokeWidth="2" />
        <rect x="12" y="4" width="16" height="8" stroke="currentColor" strokeWidth="2" />
        <path d="M6 20h28" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-steel-mid" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6">
        <p className="iron-label mb-4">What We Do</p>
        <h2 id="services-heading" className="iron-display text-bone text-3xl md:text-5xl mb-16">
          Pest Control<br />Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-steel-deep border border-white/5 p-8 hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[6px_6px_0_0_hsl(38_85%_55%)] transition-all duration-200"
            >
              <div className="text-brass mb-5">{service.icon}</div>
              <h3 className="font-display text-xl uppercase text-bone mb-3">{service.title}</h3>
              <p className="font-body text-concrete text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
