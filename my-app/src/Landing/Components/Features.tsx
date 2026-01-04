import { Sparkles } from 'lucide-react';

const features = [
  "In-Depth Analytics",
  "Personal Record Tracking",
  "Customizable Routines",
  "Community Leaderboards",
  "Exercise Library",
  "Mobile-Friendly Design"
];

export const Features = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-bold text-center tracking-tighter text-white mb-16">
          Everything You Need to Succeed
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 text-lg max-w-4xl mx-auto">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-indigo-400 flex-shrink-0" />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};