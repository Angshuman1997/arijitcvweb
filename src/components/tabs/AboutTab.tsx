import { getIcon, IconName } from '../../utils/iconMap';
import aboutData from '../../data/about.json';

export function AboutTab() {
  return (
    <div className="h-full overflow-auto px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-[var(--color-dark)] mb-6">{aboutData.title}</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {aboutData.description.map((paragraph, index) => (
                <p key={index} className="text-[var(--color-gray)]">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-2xl p-8 text-white">
              <h3 className="mb-6">{aboutData.coreCompetencies.title}</h3>
              <ul className="space-y-3">
                {aboutData.coreCompetencies.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutData.highlights.map((item, index) => {
            const Icon = getIcon(item.icon as IconName);
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

