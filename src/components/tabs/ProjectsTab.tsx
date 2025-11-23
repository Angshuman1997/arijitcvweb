import { Calendar, ExternalLink, FileText } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function ProjectsTab() {
  const projects = [
    {
      title: 'Automated Gear Assembly',
      description: 'Designed a complete gear assembly with detailed part drawings and BOM. Included tolerance analysis and manufacturing specifications for production.',
      image: 'https://images.unsplash.com/photo-1747999918007-e3442cabb23a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDQUQlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzODc5NTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Academic Project',
      date: 'May 2024',
      tools: ['SolidWorks', 'AutoCAD', 'GD&T'],
      deliverables: ['3D Assembly', '2D Drawings', 'BOM', 'Tolerance Analysis'],
    },
    {
      title: 'Hydraulic Press Frame Design',
      description: 'Created detailed 3D model and 2D fabrication drawings for a 50-ton hydraulic press frame with FEA analysis for structural integrity verification.',
      image: 'https://images.unsplash.com/photo-1716698288651-b0b8698ea2f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjBkcmF3aW5nJTIwdG9vbHN8ZW58MXx8fHwxNzYzODc5NTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Internship',
      date: 'Jan 2024',
      tools: ['CATIA', 'ANSYS', 'AutoCAD'],
      deliverables: ['3D Model', 'Fabrication Drawings', 'FEA Report', 'Weldment Details'],
    },
    {
      title: 'Conveyor System Design',
      description: 'Developed complete conveyor system layout with detailed assembly drawings, component specifications, and motion analysis documentation.',
      image: 'https://images.unsplash.com/photo-1727522974614-b592018e49e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pY2FsJTIwZW5naW5lZXJpbmclMjBibHVlcHJpbnR8ZW58MXx8fHwxNzYzNzg4MDIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Academic Project',
      date: 'Nov 2023',
      tools: ['Fusion 360', 'AutoCAD', 'Inventor'],
      deliverables: ['System Layout', 'Assembly Drawings', 'Parts List', 'Motion Study'],
    },
    {
      title: 'Sheet Metal Enclosure',
      description: 'Designed sheet metal enclosure with bend allowances, flat patterns, and complete manufacturing drawings ready for production.',
      image: 'https://images.unsplash.com/photo-1747999918007-e3442cabb23a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDQUQlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzODc5NTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Freelance',
      date: 'Aug 2023',
      tools: ['SolidWorks', 'AutoCAD'],
      deliverables: ['3D Model', 'Flat Patterns', 'Manufacturing Drawings', 'DXF Files'],
    },
  ];

  return (
    <div className="h-full overflow-auto px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-[var(--color-dark)] mb-4">Projects Portfolio</h2>
          <p className="text-[var(--color-gray)] max-w-3xl">
            A selection of design projects showcasing CAD modeling, technical drafting, 
            and engineering documentation skills across various mechanical systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
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
                  <Calendar size={12} />
                  {project.date}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-[var(--color-dark)]">{project.title}</h3>
                
                <p className="text-[var(--color-gray)] text-sm">{project.description}</p>

                <div>
                  <div className="text-xs text-[var(--color-gray)] mb-2 flex items-center gap-1.5">
                    <FileText size={12} />
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
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

