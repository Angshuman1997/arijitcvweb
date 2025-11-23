import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

export function EducationTab() {
  const education = {
    degree: 'Bachelor of Engineering in Mechanical Engineering',
    university: 'University Name',
    location: 'City, State',
    duration: '2020 - 2024',
    grade: 'CGPA: 8.2/10',
    highlights: [
      'Specialized in CAD/CAM and Design Engineering',
      'Final Year Project: Design and Analysis of Industrial Robotic Arm',
      'Member of Robotics and Automation Club',
      'Participated in National Level Design Competitions',
    ],
  };

  const certifications = [
    {
      title: 'AutoCAD Certified Professional',
      issuer: 'Autodesk',
      date: '2024',
      credential: 'ACU-2024-xxxxx',
    },
    {
      title: 'SolidWorks Associate (CSWA)',
      issuer: 'Dassault Systèmes',
      date: '2023',
      credential: 'C-XXXXX-XXXX',
    },
    {
      title: 'GD&T Fundamentals',
      issuer: 'ASME',
      date: '2023',
      credential: 'ASME-GDT-2023',
    },
    {
      title: 'CATIA V5 Essentials',
      issuer: 'Dassault Systèmes',
      date: '2023',
      credential: 'CAT-V5-2023',
    },
    {
      title: 'Fusion 360 for Manufacturing',
      issuer: 'Autodesk',
      date: '2022',
      credential: 'F360-MFG-2022',
    },
  ];

  const coursework = [
    'Engineering Graphics & CAD',
    'Machine Design',
    'Manufacturing Technology',
    'Strength of Materials',
    'Engineering Materials & Metallurgy',
    'Metrology & Quality Control',
    'Computer Aided Manufacturing',
    'Product Design & Development',
    'Finite Element Analysis',
    'Industrial Engineering',
    'Mechanical Vibrations',
    'Fluid Mechanics & Hydraulics',
  ];

  const internships = [
    {
      company: 'Manufacturing Company Name',
      role: 'CAD Design Intern',
      duration: 'Dec 2023 - Feb 2024',
      achievements: [
        'Created 50+ technical drawings for production',
        'Assisted in design validation and tolerance stack-up analysis',
        'Collaborated with manufacturing team for DFM improvements',
      ],
    },
  ];

  return (
    <div className="h-full overflow-auto px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-[var(--color-dark)] mb-4">Education & Qualifications</h2>
          <p className="text-[var(--color-gray)] max-w-3xl">
            Strong academic foundation with specialized focus on CAD design, technical drafting, 
            and manufacturing processes.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          {/* Education */}
          <div className="lg:col-span-2 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-2xl p-8 text-white">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <div className="text-sm opacity-90">Primary Education</div>
                  <div className="font-mono text-sm opacity-75">{education.duration}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl mb-1">{education.grade}</div>
                <div className="text-xs opacity-75">Academic Performance</div>
              </div>
            </div>

            <h3 className="mb-2">{education.degree}</h3>
            <p className="mb-1 opacity-90">{education.university}</p>
            <p className="text-sm opacity-75 mb-6">{education.location}</p>

            <div className="space-y-3 pt-4 border-t border-white/20">
              {education.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="opacity-90">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Internship */}
          <div className="bg-white border border-[var(--color-border)] rounded-2xl p-6">
            <h4 className="text-[var(--color-dark)] mb-4 flex items-center gap-2">
              <Calendar size={20} />
              Internship
            </h4>
            {internships.map((internship, index) => (
              <div key={index} className="space-y-3">
                <div>
                  <div className="text-[var(--color-dark)] mb-1">{internship.role}</div>
                  <div className="text-sm text-[var(--color-gray)] mb-1">{internship.company}</div>
                  <div className="text-xs text-[var(--color-gray)] font-mono">{internship.duration}</div>
                </div>
                <div className="space-y-2">
                  {internship.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-[var(--color-primary)] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-[var(--color-gray)]">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Certifications */}
          <div className="bg-white border border-[var(--color-border)] rounded-2xl p-6">
            <div className="flex items-center gap-2 text-[var(--color-dark)] mb-6">
              <Award size={24} />
              <h3>Professional Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="border border-[var(--color-border)] rounded-xl p-4 hover:border-[var(--color-primary)] transition-colors duration-200"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-[var(--color-dark)]">{cert.title}</h4>
                    <span className="text-xs font-mono text-[var(--color-primary)] bg-blue-50 px-2 py-1 rounded">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-gray)] mb-1">{cert.issuer}</p>
                  <p className="text-xs text-[var(--color-gray)] font-mono">{cert.credential}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Relevant Coursework */}
          <div className="bg-white border border-[var(--color-border)] rounded-2xl p-6">
            <div className="flex items-center gap-2 text-[var(--color-dark)] mb-6">
              <BookOpen size={24} />
              <h3>Relevant Coursework</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {coursework.map((course, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 text-[var(--color-gray)] text-sm"
                >
                  <div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full mt-2 flex-shrink-0"></div>
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

