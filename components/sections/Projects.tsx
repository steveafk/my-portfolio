import { Project } from "@/lib/type";
import Card from "@/components/ui/Card";

const projects: Project[] = [
  {
    id: 1,
    title: "Tourists Website",
    description: "A travel and tourism website showcasing destinations, attractions, and travel guides for tourists.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format&fit=crop",
    liveUrl: "https://tourists-website.vercel.app/",
  },
  {
    id: 2,
    title: "Simple Game",
    description: "A fun browser-based game built with vanilla JavaScript, featuring interactive gameplay and score tracking.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop",
    liveUrl: "https://simple-game-two.vercel.app/",
  },
  {
    id: 3,
    title: "To-Do List App",
    description: "A clean and minimal task management app to help you organize, track, and complete your daily to-dos.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&auto=format&fit=crop",
    liveUrl: "https://to-do-list-gold-sigma.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0a0f1e] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Things I&apos;ve <span className="text-amber-400">built</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-xs md:text-right">
            A selection of projects I&apos;ve worked on, from side projects to client work.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}