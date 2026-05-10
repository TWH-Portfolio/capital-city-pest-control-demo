export default function Footer() {
  return (
    <footer className="bg-steel-deep border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="font-display text-xl uppercase tracking-tight text-bone mb-2">
              Capital City<span className="text-brass"> Pest Control</span>
            </p>
            <p className="font-body text-concrete text-sm">
              3701 Houston Rd, Tallahassee, FL 32304
            </p>
            <a
              href="tel:+18506947056"
              className="font-body text-brass text-sm hover:text-bone transition-colors"
            >
              (850) 694-7056
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            <a href="#services" className="font-sans text-xs uppercase tracking-[0.18em] text-concrete hover:text-brass transition-colors">Services</a>
            <a href="#why-us" className="font-sans text-xs uppercase tracking-[0.18em] text-concrete hover:text-brass transition-colors">Why Us</a>
            <a href="#process" className="font-sans text-xs uppercase tracking-[0.18em] text-concrete hover:text-brass transition-colors">Process</a>
            <a href="#reviews" className="font-sans text-xs uppercase tracking-[0.18em] text-concrete hover:text-brass transition-colors">Reviews</a>
            <a href="#contact" className="font-sans text-xs uppercase tracking-[0.18em] text-concrete hover:text-brass transition-colors">Contact</a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-body text-concrete/60 text-xs">
            &copy; {new Date().getFullYear()} Capital City Pest Control. All rights reserved.
          </p>
          <a
            href="https://maps.google.com/?cid=6205523622205892728"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs uppercase tracking-[0.18em] text-concrete/60 hover:text-brass transition-colors"
          >
            Find Us on Google Maps
          </a>
        </div>
      </div>
    </footer>
  )
}
