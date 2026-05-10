import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Services', id: 'services' },
  { label: 'Why Us', id: 'why-us' },
  { label: 'Process', id: 'process' },
  { label: 'Reviews', id: 'reviews' },
  { label: 'Contact', id: 'contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollTo(id) {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-steel-deep/95 backdrop-blur-sm border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between" aria-label="Main navigation">
        <a href="#" className="font-display text-xl uppercase tracking-tight text-bone">
          Capital City<span className="text-brass"> Pest</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className="font-sans text-xs uppercase tracking-[0.18em] text-concrete hover:text-brass transition-colors"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="tel:+18506947056"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brass text-steel-deep font-sans text-xs uppercase tracking-[0.18em] font-semibold hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[3px_3px_0_0_hsl(40_30%_92%)] transition-all"
            >
              (850) 694-7056
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-bone p-2"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-steel-deep/98 backdrop-blur-sm border-t border-white/5 px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className="font-sans text-sm uppercase tracking-[0.18em] text-concrete hover:text-brass transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="tel:+18506947056"
                className="inline-flex items-center gap-2 px-5 py-3 bg-brass text-steel-deep font-sans text-xs uppercase tracking-[0.18em] font-semibold w-full justify-center"
              >
                Call (850) 694-7056
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
