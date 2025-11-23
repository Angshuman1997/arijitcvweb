import { Mail, Phone, MapPin, Send, Linkedin, Github, Download, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export function ContactTab() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'caddesigner@email.com',
      link: 'mailto:caddesigner@email.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'City, State, Country',
      link: null,
    },
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', link: '#', username: '/caddesigner' },
    { icon: Github, label: 'GitHub', link: '#', username: '@caddesigner' },
    { icon: MessageSquare, label: 'WhatsApp', link: '#', username: '+1 555 123 4567' },
  ];

  return (
    <div className="h-full overflow-auto px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-[var(--color-dark)] mb-4">Get In Touch</h2>
          <p className="text-[var(--color-gray)] max-w-2xl mx-auto">
            I'm actively looking for CAD Designer/Draftsman positions. Feel free to reach out 
            if you'd like to discuss opportunities or collaborate on projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Contact Info & Social */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="bg-white border border-[var(--color-border)] rounded-2xl p-5 hover:border-[var(--color-primary)] transition-all duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-[var(--color-gray)] mb-1">{info.label}</div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-[var(--color-dark)] hover:text-[var(--color-primary)] transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-[var(--color-dark)]">{info.value}</div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-2xl p-6 text-white">
              <h4 className="mb-4 flex items-center gap-2">
                <MessageSquare size={20} />
                Connect With Me
              </h4>
              <div className="space-y-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-200"
                    >
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="text-sm opacity-90">{social.label}</div>
                        <div className="text-xs opacity-75">{social.username}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Download CV */}
            <button className="w-full bg-white border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-2xl p-5 hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200 flex items-center justify-center gap-3">
              <Download size={20} />
              <span>Download Resume / CV</span>
            </button>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white border border-[var(--color-border)] rounded-2xl p-8">
            <h3 className="text-[var(--color-dark)] mb-6 flex items-center gap-2">
              <Send size={24} />
              Send Me a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-[var(--color-dark)] mb-2 text-sm">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[var(--color-dark)] mb-2 text-sm">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-[var(--color-dark)] mb-2 text-sm">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                  placeholder="Job Opportunity / Collaboration"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[var(--color-dark)] mb-2 text-sm">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about the opportunity or project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full px-6 py-4 bg-[var(--color-primary)] text-white rounded-xl hover:bg-[var(--color-primary-dark)] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitted ? (
                  <>
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <p className="text-xs text-[var(--color-gray)] text-center">
                I'll get back to you within 24-48 hours
              </p>
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-2">⚡</div>
            <h4 className="text-[var(--color-dark)] mb-1">Quick Response</h4>
            <p className="text-sm text-[var(--color-gray)]">Usually within 24 hours</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-2">🌍</div>
            <h4 className="text-[var(--color-dark)] mb-1">Open to Relocate</h4>
            <p className="text-sm text-[var(--color-gray)]">Available for opportunities nationwide</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-2">💼</div>
            <h4 className="text-[var(--color-dark)] mb-1">Job Ready</h4>
            <p className="text-sm text-[var(--color-gray)]">Can join immediately</p>
          </div>
        </div>
      </div>
    </div>
  );
}

