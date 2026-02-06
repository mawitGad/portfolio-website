import { getProjects, Project } from '@/lib/notion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

// Project Card Component
const ProjectCard = ({ project }: { project: Project }) => (
    <div className="bg-background-secondary border border-border-primary rounded-2xl overflow-hidden hover:border-accent-primary/50 transition-all duration-300 flex flex-col h-full group">

        {project.thumbnail && (
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
        )}

        <div className="p-6 flex flex-col flex-grow ">
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-primary transition-colors">
                    {project.title}
                </h3>
                {project.url && (
                    <Link
                        href={project.url}
                        target="_blank"
                        className="text-text-secondary hover:text-accent-primary transition-colors"
                        aria-label={`View ${project.title} live`}
                    >
                        <FiExternalLink className="w-5 h-5" />
                    </Link>
                )}
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
            </p>
        </div>

        <div className="mt-auto px-6 pb-6">
            <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                    <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-background-primary border border-border-primary rounded-full text-text-secondary"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

export const Projects = async () => {
    const projects = await getProjects();

    return (
        <section id="projects" className="py-24 bg-background-primary decoration-slice">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-4">
                        Featured <span className="text-accent-primary">Projects</span>
                    </h2>
                    <div className="h-1 bg-accent-primary w-24 mx-auto mb-6" />
                    <p className="text-text-secondary max-w-2xl mx-auto px-4">
                        A selection of my recent work, fetching dynamically from Notion.
                    </p>
                </div>

                {projects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-background-secondary rounded-2xl border border-border-primary opacity-70">
                        <p className="text-text-secondary">No projects found. Please check Notion database connection.</p>
                    </div>
                )}
            </div>
        </section>
    );
};
