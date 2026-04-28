const skills = [
  "TypeScript", "React", "Next.js", "Node.js", "Javascript",
  "Tailwind CSS", "PostgreSQL", "REST APIs",
  "Figma", "Docker",
];

const experiences = [
  {
    year: "2026 – Present",
    role: "Frontend Developer",
    place: "Freelance",
    desc: "Building responsive web apps for clients across various industries.",
  },
  {
    year: "2026 – 2027",
    role: "BS Computer Science",
    place: "Central Philippine University",
    desc: "Studied computer science, data structures, and web development fundamentals.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#0d1425] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-16 leading-tight">
          A little about <span className="text-amber-400">me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I&apos;m a passionate developer based in the Philippines, focused on building digital products that are not just functional, but genuinely enjoyable to use.
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              When I&apos;m not coding, you&apos;ll find me exploring new frameworks, contributing to open-source projects, or sketching UI ideas on paper.
            </p>
            <div className="flex flex-col gap-6">
              {experiences.map((exp) => (
                <div key={exp.year} className="relative pl-5 border-l-2 border-amber-400/30 hover:border-amber-400 transition-colors duration-300">
                  <span className="text-amber-400 text-xs font-mono">{exp.year}</span>
                  <h4 className="text-white font-semibold mt-0.5">{exp.role}</h4>
                  <p className="text-gray-500 text-sm">{exp.place}</p>
                  <p className="text-gray-600 text-sm mt-1">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Technologies I work with</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-sm font-medium hover:border-amber-400/50 hover:text-amber-400 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-6 mt-12">
              {[
                { value: "3+", label: "Projects Built" },
                { value: "2+", label: "Years Coding" },
                { value: "2", label: "Happy Clients" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-black text-amber-400">{stat.value}</div>
                  <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}