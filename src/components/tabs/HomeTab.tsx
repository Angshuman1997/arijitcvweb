import { Download, Mail, Linkedin, Github, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function HomeTab() {
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
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[var(--color-primary)] font-mono text-sm">Available for Opportunities</span>
          </div>
          
          <div>
            <h1 className="text-[var(--color-dark)]">
              Mechanical CAD
              <span className="block text-[var(--color-primary)]">Designer & Draftsman</span>
            </h1>
            <div className="mt-3 font-mono text-[var(--color-gray)]">Fresh Graduate | 2024</div>
          </div>
          
          <p className="text-[var(--color-gray)] max-w-xl">
            Precision-driven CAD Designer specializing in technical drafting, 3D modeling, 
            and engineering documentation. Proficient in AutoCAD, SolidWorks, and CATIA with 
            a strong foundation in GD&T and manufacturing processes.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-all duration-200 flex items-center gap-2 shadow-lg shadow-blue-500/30">
              <Mail size={20} />
              Get in Touch
              <ChevronRight size={16} />
            </button>
            <button className="px-6 py-3 border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200 flex items-center gap-2">
              <Download size={20} />
              Download CV
            </button>
          </div>

          <div className="flex gap-3 pt-2">
            <a href="#" className="w-11 h-11 rounded-lg bg-[var(--color-light-gray)] border border-[var(--color-border)] flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all duration-200">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-11 h-11 rounded-lg bg-[var(--color-light-gray)] border border-[var(--color-border)] flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all duration-200">
              <Github size={20} />
            </a>
            <a href="#" className="w-11 h-11 rounded-lg bg-[var(--color-light-gray)] border border-[var(--color-border)] flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all duration-200">
              <Mail size={20} />
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[var(--color-border)]">
            <div>
              <div className="text-3xl text-[var(--color-primary)] mb-1">5+</div>
              <div className="text-sm text-[var(--color-gray)]">CAD Software</div>
            </div>
            <div>
              <div className="text-3xl text-[var(--color-primary)] mb-1">10+</div>
              <div className="text-sm text-[var(--color-gray)]">Projects</div>
            </div>
            <div>
              <div className="text-3xl text-[var(--color-primary)] mb-1">3+</div>
              <div className="text-sm text-[var(--color-gray)]">Certifications</div>
            </div>
          </div>
        </div>

        <div className="relative lg:block hidden">
          <div className="absolute -inset-4 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-3xl opacity-20 blur-2xl"></div>
          <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1727522974614-b592018e49e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pY2FsJTIwZW5naW5lZXJpbmclMjBibHVlcHJpbnR8ZW58MXx8fHwxNzYzNzg4MDIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="CAD Design"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

