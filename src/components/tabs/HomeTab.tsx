import { ImageWithFallback } from '../ImageFallBack/ImageWithFallback';
import { getIcon, IconName } from '../../utils/iconMap';
import homeData from '../../data/home.json';

export function HomeTab() {
  const PrimaryIcon = getIcon(homeData.buttons.primary.icon as IconName);
  const SecondaryIcon = getIcon(homeData.buttons.secondary.icon as IconName);
  const ChevronRightIcon = getIcon('ChevronRight');

  return (
    <div className="h-full flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, #2563eb 0px, #2563eb 1px, transparent 1px, transparent 30px),
                           repeating-linear-gradient(90deg, #2563eb 0px, #2563eb 1px, transparent 1px, transparent 30px)`,
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-light-gray)] rounded-full border border-[var(--color-border)]">
            <div className={`w-2 h-2 bg-${homeData.status.badgeColor} rounded-full animate-pulse`}></div>
            <span className="text-[var(--color-primary)] font-mono text-sm">{homeData.status.indicator}</span>
          </div>
          
          <div>
            <h1 className="text-[var(--color-dark)]">
              {homeData.title.line1}
              <span className="block text-[var(--color-primary)]">{homeData.title.line2}</span>
            </h1>
            <div className="mt-3 font-mono text-[var(--color-gray)]">{homeData.title.subtitle}</div>
          </div>
          
          <p className="text-[var(--color-gray)] max-w-xl">
            {homeData.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-all duration-200 flex items-center gap-2 shadow-lg shadow-blue-500/30">
              <PrimaryIcon size={20} />
              {homeData.buttons.primary.text}
              <ChevronRightIcon size={16} />
            </button>
            <button className="px-6 py-3 border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200 flex items-center gap-2">
              <SecondaryIcon size={20} />
              {homeData.buttons.secondary.text}
            </button>
          </div>

          <div className="flex gap-3 pt-2">
            {homeData.socialLinks.map((social, index) => {
              const SocialIcon = getIcon(social.icon as IconName);
              return (
                <a key={index} href={social.url} className="w-11 h-11 rounded-lg bg-[var(--color-light-gray)] border border-[var(--color-border)] flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all duration-200">
                  <SocialIcon size={20} />
                </a>
              );
            })}
          </div>

          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[var(--color-border)]">
            {homeData.stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl text-[var(--color-primary)] mb-1">{stat.value}</div>
                <div className="text-sm text-[var(--color-gray)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:block hidden">
          <div className="absolute -inset-4 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-3xl opacity-20 blur-2xl"></div>
          <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
            <ImageWithFallback
              src={homeData.image.src}
              alt={homeData.image.alt}
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

