// @ts-ignore
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="py-28 md:py-36 text-center">
      <div className="container">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-tight">
          Track Your Progress, Amplify Your Gains
        </h1>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          The ultimate platform to visualize your achievements and stay motivated on your fitness journey.
        </p>
        <div className="mt-10 flex justify-center">
          <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600 text-white">
            Start Gaining
          </Button>
        </div>
      </div>
    </section>
  );
};