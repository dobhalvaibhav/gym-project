import Button from './ui/Button';

const programs = [
  {
    title: 'Strength Training',
    description:
      'Build raw power, mobility, and athletic resilience with structured strength cycles designed for sustainable progress.',
    features: ['Compound lifts with expert programming', 'Personalized load progression', 'Recovery work and mobility coaching'],
  },
  {
    title: 'HIIT & Conditioning',
    description:
      'Accelerate fat loss and conditioning with functional circuits, interval training, and metabolic finisher sessions.',
    features: ['High-output training sessions', 'Endurance and agility drills', 'Performance tracking every week'],
  },
  {
    title: 'Recovery & Mobility',
    description:
      'Support your training with dedicated recovery, soft-tissue work, and mobility sessions to keep you moving stronger.',
    features: ['Stretch flow sessions', 'Injury prevention protocols', 'Breath work and active recovery'],
  },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="mx-auto max-w-7xl px-6 py-24 md:px-8">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.32em] text-neon-blue">What We Offer</p>
        <h2 className="mt-4 text-5xl font-display uppercase leading-tight text-white md:text-6xl">Our Programs</h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {programs.map((program) => (
          <article
            key={program.title}
            className="rounded-none border border-[#1E1E2A] bg-[#111118] p-8"
          >
            <p className="text-sm uppercase tracking-[0.32em] text-neon-blue">{program.title}</p>
            <h3 className="mt-6 text-3xl font-display uppercase tracking-[0.18em] text-white">
              {program.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted">{program.description}</p>
            <ul className="mt-6 space-y-3 text-sm text-muted">
              {program.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-1 text-neon-green">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button variant="ghost" href="#pricing">
              Start Free Trial
            </Button>
          </article>
        ))}
      </div>
    </section>
  );
}
