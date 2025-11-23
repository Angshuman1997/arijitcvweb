import { ImageWithFallback } from '../ImageFallBack/ImageWithFallback';
import { getIcon } from '../../utils/iconMap';
import projectsData from '../../data/projects.json';

export function ProjectsTab() {
  const CalendarIcon = getIcon('Calendar');
  const FileTextIcon = getIcon('FileText');
  const ExternalLinkIcon = getIcon('ExternalLink');

  return (
    <div className="h-full overflow-auto px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-[var(--color-dark)] mb-4">{projectsData.title}</h2>
          <p className="text-[var(--color-gray)] max-w-3xl">
            {projectsData.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {projectsData.projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-[var(--color-border)] rounded-2xl overflow-hidden hover:border-[var(--color-primary)] hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-48">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs text-[var(--color-primary)] border border-[var(--color-border)]">
                  {project.category}
                </div>
                <div className="absolute top-3 right-3 px-3 py-1 bg-[var(--color-dark)]/90 backdrop-blur-sm rounded-full text-xs text-white flex items-center gap-1.5">
                  <CalendarIcon size={12} />
                  {project.date}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-[var(--color-dark)]">{project.title}</h3>
                
                <p className="text-[var(--color-gray)] text-sm">{project.description}</p>

                <div>
                  <div className="text-xs text-[var(--color-gray)] mb-2 flex items-center gap-1.5">
                    <FileTextIcon size={12} />
                    Deliverables
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.deliverables.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="px-2.5 py-1 bg-[var(--color-light-gray)] text-[var(--color-gray)] rounded-md text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--color-border)]">
                  {project.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-3 py-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white rounded-full text-xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-[var(--color-primary)] hover:gap-3 transition-all duration-200 pt-2 text-sm">
                  <span>View Details</span>
                  <ExternalLinkIcon size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

