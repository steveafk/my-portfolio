import Button from "@/components/ui/button";

export default function Hero() {
  return (
<section
  id="home"
  className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d1425]"
>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-amber-400 text-sm font-mono tracking-widest uppercase mb-6">
          Hello, world — I&apos;m
        </p>
        <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tight mb-4">
          Steve Kurt Bayona
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-400 font-light mb-6 tracking-wide">
          Frontend Developer
        </h2>
        <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
          I craft clean, performant web experiences that live at the intersection of thoughtful design and solid engineering.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects">
            <Button variant="primary" className="px-8 py-3 text-base">View My Work</Button>
          </a>
          <a href="#contact">
            <Button variant="outline" className="px-8 py-3 text-base">Get In Touch</Button>
          </a>
        </div>
      </div>
    </section>
  );
}