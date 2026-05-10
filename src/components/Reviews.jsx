const reviews = [
  {
    name: 'Sarah M.',
    text: 'Called on a Monday about a termite concern and they were at my house Tuesday morning. Thorough inspection, clear explanation, fair price. Exactly what you want from a pest company.',
    rating: 5,
  },
  {
    name: 'David R.',
    text: 'Been using them for quarterly service for over a year. No more palmetto bugs in the house. The technician is always on time and professional.',
    rating: 5,
  },
  {
    name: 'Lisa T.',
    text: 'They treated our yard for fire ants and mosquitoes before our daughter\'s outdoor birthday party. Worked perfectly. Will absolutely use them again.',
    rating: 5,
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-brass">
          <path d="M10 1l2.39 6.17H19l-5.3 4.08 2 6.42L10 13.77l-5.7 3.9 2-6.42L1 7.17h6.61L10 1z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-steel-deep" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-6">
        <p className="iron-label mb-4">What Clients Say</p>
        <h2 id="reviews-heading" className="iron-display text-bone text-3xl md:text-5xl mb-16">
          5-Star Reviews<br />From Tallahassee
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-steel-mid border border-white/5 p-8"
            >
              <Stars count={review.rating} />
              <p className="font-body text-concrete text-sm leading-relaxed mt-5 mb-6">
                "{review.text}"
              </p>
              <p className="font-sans text-xs uppercase tracking-[0.18em] text-brass">{review.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="font-body text-concrete text-sm">
            5.0 average from 38 reviews on Google
          </p>
        </div>
      </div>
    </section>
  )
}
