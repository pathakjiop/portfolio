import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Prompt Generator AI",
    description:
      "A full-stack app that generates creative prompts using React and Express, helping creators brainstorm ideas.",
    image: "/projects/prompt-generator.png", // Replace with actual image
    tags: ["ReactJS", "NodeJS", "ExpressJS"],
    githubUrl: "https://github.com/pathakjiop/Prompt-AI",
  },
  {
    id: 2,
    title: "Ayurvedic Information System",
    description:
      "A platform for exploring natural remedies and Ayurvedic treatments. Finalist in the Google Solution Challenge.",
    image: "/projects/ayurveda-system.png",
    tags: ["ReactJS", "Python"],
    githubUrl: "https://github.com/pathakjiop/Ayurvedic-Information-System",
  },
  {
    id: 3,
    title: "Healthy Lifestyle Recommender",
    description:
      "A BMI calculator that uses Gemini API and a health survey to give users personalized wellness suggestions.",
    image: "/projects/healthy-lifestyle.png",
    tags: ["Python", "Gemini API"],
    githubUrl: "https://github.com/pathakjiop/Healthy-Lifestyle",
  }, 
  {
    id: 4,
    title: "Taskly",
    description:
      "A modern task manager with Kanban boards, list grouping, dark/light mode, subtasks, priorities, and a visual progress tracker.",
    image: "/projects/taskly.png", 
    tags: ["Vite", "React", "TailwindCSS"],
    githubUrl: "https://github.com/pathakjiop/Taskly",
  },

];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Some of the projects I've built, combining creativity, technology, and real-world problem solving.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
            key={key}
            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col justify-between"
          >
            <div>
              <div className="h-35 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
          
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
          
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
              </div>
            </div>
          
            <div className="px-6 pb-6 mt-auto">
              <a
                href={project.githubUrl}
                target="_blank"
                className="cosmic-button w-fit flex items-center gap-2 text-sm"
              >
                View Project <ArrowRight size={16} />
              </a>
            </div>
          </div>
          ))}
        </div>         
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/pathakjiop"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
