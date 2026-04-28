import { Project } from "@/lib/type";
import Button from "@/components/ui/button";

interface CardProps {
  project: Project;
}

export default function Card({ project }: CardProps) {
  const { title, description, technologies, imageUrl, githubUrl, liveUrl } =
    project;

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={`${title} preview`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>


      <div className="p-6 flex flex-col flex-1">

        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>


        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {description}
        </p>


        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-medium rounded-full border border-blue-600/30"
            >
              {tech}
            </span>
          ))}
        </div>


        <div className="flex gap-3 mt-auto">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">GitHub</Button>
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Live Demo</Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}