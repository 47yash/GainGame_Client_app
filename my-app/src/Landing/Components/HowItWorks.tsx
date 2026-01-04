const steps = [
  {
    title: "Log Your Workouts",
    desc: "Easily record your exercises, sets, reps, and weight for every session.",
  },
  {
    title: "Visualize Your Progress",
    desc: "Interactive charts and stats show you how you're improving over time.",
  },
  {
    title: "Stay Consistent & Motivated",
    desc: "Set new personal records and watch your strength grow.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-bold text-center tracking-tighter text-white mb-16">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-col items-center text-center p-6 bg-white/5 rounded-lg border border-white/10">
              <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-xl font-bold text-white mb-6">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {step.title}
              </h3>
              <p className="text-gray-300">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};