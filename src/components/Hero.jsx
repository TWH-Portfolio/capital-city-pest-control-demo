export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-steel-deep via-steel-mid to-steel-deep" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(hsl(40 30% 92%) 1px, transparent 1px), linear-gradient(90deg, hsl(40 30% 92%) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center md:text-left md:flex md:items-center md:gap-16">
        <div className="md:flex-1 animate-fade-up">
          <p className="iron-label mb-6">Tallahassee, FL</p>
          <h1 id="hero-heading" className="iron-display text-bone text-5xl md:text-7xl lg:text-8xl mb-6">
            Protect<br />
            Your Home
          </h1>
          <p className="font-body text-concrete text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            Locally owned pest control trusted by Tallahassee families.
            Termites, mosquitoes, rodents, palmetto bugs. 5-star rated.
            Licensed and insured.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-brass text-steel-deep font-sans text-xs uppercase tracking-[0.18em] font-semibold hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[3px_3px_0_0_hsl(40_30%_92%)] transition-all"
            >
              Get a Free Inspection
            </a>
            <a
              href="tel:+18506947056"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/20 text-bone font-sans text-xs uppercase tracking-[0.18em] font-semibold hover:border-brass hover:text-brass transition-all"
            >
              (850) 694-7056
            </a>
          </div>
        </div>

        {/* Hero stat block */}
        <div className="hidden md:flex flex-col gap-8 md:flex-none animate-fade-up-2">
          <div className="border-l-2 border-brass pl-5">
            <p className="font-display text-4xl text-bone">5.0</p>
            <p className="font-sans text-xs uppercase tracking-[0.18em] text-concrete mt-1">Google Rating</p>
          </div>
          <div className="border-l-2 border-brass pl-5">
            <p className="font-display text-4xl text-bone">38+</p>
            <p className="font-sans text-xs uppercase tracking-[0.18em] text-concrete mt-1">5-Star Reviews</p>
          </div>
          <div className="border-l-2 border-brass pl-5">
            <p className="font-display text-4xl text-bone">100%</p>
            <p className="font-sans text-xs uppercase tracking-[0.18em] text-concrete mt-1">Satisfaction</p>
          </div>
        </div>
      </div>

      {/* Bottom brass rule */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-brass/30" />
    </section>
  )
}
