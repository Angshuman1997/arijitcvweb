import skillsData from '../../data/skills.json';

export function SkillsTab() {
  return (
    <div className="h-full overflow-auto px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-[var(--color-dark)] mb-4">{skillsData.title}</h2>
          <p className="text-[var(--color-gray)] max-w-3xl">
            {skillsData.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillsData.skillCategories.map((category, categoryIndex) => (
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
          {skillsData.additionalSkills.map((skill, index) => (
            <div key={index} className={`bg-gradient-to-br ${skill.color} border ${skill.borderColor} rounded-2xl p-6`}>
              <div className="text-4xl mb-2">{skill.emoji}</div>
              <h4 className="text-[var(--color-dark)] mb-2">{skill.title}</h4>
              <p className="text-sm text-[var(--color-gray)]">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

