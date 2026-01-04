// @ts-ignore
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-20 px-4 text-center">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-white">Ready to Start Your Journey?</h2>
      <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
        Join GainGame today and take the first step towards consistent progress.
      </p>
      <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600 text-white">
        Start Gaining
      </Button>
    </section>
  );
};
