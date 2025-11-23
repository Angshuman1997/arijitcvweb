import { Ruler, Layers, Zap, Target, Clock, Users } from 'lucide-react';

export function AboutTab() {
  const highlights = [
    {
      icon: Ruler,
      title: 'Precision Focused',
      description: 'Meticulous attention to detail in dimensions, tolerances, and specifications',
    },
    {
      icon: Layers,
      title: 'Multi-disciplinary',
      description: 'Experience across mechanical, structural, and industrial design projects',
    },
    {
      icon: Zap,
      title: 'Fast Learner',
      description: 'Quick adaptation to new software, tools, and industry standards',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on delivering accurate, manufacturable designs on time',
    },
    {
      icon: Clock,
      title: 'Time Management',
      description: 'Efficient workflow management and meeting project deadlines',
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Strong collaboration skills with engineers and manufacturing teams',
    },
  ];

  return (
    <div className="h-full overflow-auto px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-[var(--color-dark)] mb-6">About Me</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-[var(--color-gray)]">
                As a recent Mechanical Engineering graduate, I bring a strong foundation in CAD design 
                and technical drafting. My academic journey and internship experiences have equipped me 
                with hands-on expertise in creating detailed 2D drawings and sophisticated 3D models for 
                various mechanical components and assemblies.
              </p>
              <p className="text-[var(--color-gray)]">
                I'm proficient in industry-standard CAD software including AutoCAD, SolidWorks, and CATIA. 
                My skill set extends to GD&T (Geometric Dimensioning and Tolerancing), sheet metal design, 
                and assembly modeling. I'm committed to delivering accurate, manufacturable designs that 
                meet engineering specifications and quality standards.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-2xl p-8 text-white">
              <h3 className="mb-6">Core Competencies</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2.5 flex-shrink-0"></div>
                  <span>2D Technical Drawing & Detailing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2.5 flex-shrink-0"></div>
                  <span>3D Modeling & Surface Design</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2.5 flex-shrink-0"></div>
                  <span>Assembly Design & BOM Creation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2.5 flex-shrink-0"></div>
                  <span>GD&T Application & Tolerance Analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2.5 flex-shrink-0"></div>
                  <span>Sheet Metal & Weldment Design</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2.5 flex-shrink-0"></div>
                  <span>Engineering Documentation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white border border-[var(--color-border)] p-6 rounded-2xl hover:border-[var(--color-primary)] hover:shadow-lg transition-all duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-xl flex items-center justify-center mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h4 className="text-[var(--color-dark)] mb-2">{item.title}</h4>
                <p className="text-[var(--color-gray)] text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

