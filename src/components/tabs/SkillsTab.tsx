export function SkillsTab() {
  const skillCategories = [
    {
      title: 'CAD Software',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'AutoCAD', level: 90 },
        { name: 'SolidWorks', level: 85 },
        { name: 'CATIA V5', level: 75 },
        { name: 'Fusion 360', level: 80 },
        { name: 'Inventor', level: 70 },
        { name: 'Creo Parametric', level: 65 },
      ],
    },
    {
      title: 'Technical Skills',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Technical Drafting', level: 90 },
        { name: 'GD&T Standards', level: 85 },
        { name: '3D Modeling', level: 88 },
        { name: 'Assembly Design', level: 82 },
        { name: 'Sheet Metal Design', level: 78 },
        { name: 'Weldment Design', level: 75 },
      ],
    },
    {
      title: 'Analysis & Rendering',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'FEA (ANSYS)', level: 65 },
        { name: 'KeyShot Rendering', level: 75 },
        { name: 'Motion Analysis', level: 70 },
        { name: 'Tolerance Analysis', level: 80 },
        { name: 'Design Validation', level: 75 },
        { name: 'CFD Basics', level: 60 },
      ],
    },
    {
      title: 'Additional Tools',
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'Adobe Illustrator', level: 70 },
        { name: 'Microsoft Office', level: 85 },
        { name: 'PLM Software', level: 60 },
        { name: 'PDF Editing Tools', level: 80 },
        { name: 'Version Control', level: 65 },
        { name: 'Project Management', level: 70 },
      ],
    },
  ];

  return (
    <div className="h-full overflow-auto px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-[var(--color-dark)] mb-4">Skills & Expertise</h2>
          <p className="text-[var(--color-gray)] max-w-3xl">
            Comprehensive skill set developed through academic projects, certifications, internships, 
            and continuous learning in CAD software and engineering tools.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-3 h-8 bg-gradient-to-b ${category.color} rounded-full`}></div>
                <h3 className="text-[var(--color-dark)]">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-[var(--color-dark)]">{skill.name}</span>
                      <span className="font-mono text-sm text-[var(--color-primary)]">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-[var(--color-light-gray)] rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-6">
            <div className="text-4xl mb-2">📐</div>
            <h4 className="text-[var(--color-dark)] mb-2">Design Standards</h4>
            <p className="text-sm text-[var(--color-gray)]">ASME Y14.5, ISO Standards, DIN</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6">
            <div className="text-4xl mb-2">🔧</div>
            <h4 className="text-[var(--color-dark)] mb-2">Manufacturing Knowledge</h4>
            <p className="text-sm text-[var(--color-gray)]">CNC, Machining, Casting, Welding</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-6">
            <div className="text-4xl mb-2">💻</div>
            <h4 className="text-[var(--color-dark)] mb-2">Industry Software</h4>
            <p className="text-sm text-[var(--color-gray)]">PDM, PLM, ERP Integration</p>
          </div>
        </div>
      </div>
    </div>
  );
}

