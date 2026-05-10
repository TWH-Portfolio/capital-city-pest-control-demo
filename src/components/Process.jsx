const steps = [
  {
    num: '01',
    title: 'Inspect',
    desc: 'Thorough inspection of your property. We identify pest type, entry points, and severity.',
  },
  {
    num: '02',
    title: 'Plan',
    desc: 'Custom treatment plan based on your specific situation. No one-size-fits-all solutions.',
  },
  {
    num: '03',
    title: 'Treat',
    desc: 'Targeted application using proven methods. Interior, exterior, or both as needed.',
  },
  {
    num: '04',
    title: 'Prevent',
    desc: 'Ongoing prevention and monitoring. Quarterly service keeps pests from returning.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-steel-mid" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-6">
        <p className="iron-label mb-4">How It Works</p>
        <h2 id="process-heading" className="iron-display text-bone text-3xl md:text-5xl mb-16">
          Four Steps to<br />A Pest-Free Home
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="relative">
              <p className="font-display text-6xl text-brass/20 mb-2">{step.num}</p>
              <h3 className="font-display text-2xl uppercase text-bone mb-3">{step.title}</h3>
              <p className="font-body text-concrete text-sm leading-relaxed">{step.desc}</p>
              {step.num !== '04' && (
                <div className="hidden lg:block absolute top-8 right-0 w-8 h-[2px] bg-brass/30 translate-x-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
