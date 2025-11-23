import { useState } from 'react';
import { getIcon, IconName } from '../../utils/iconMap';
import contactData from '../../data/contact.json';

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

  const SendIcon = getIcon('Send');
  const DownloadIcon = getIcon('Download');
  const MessageSquareIcon = getIcon('MessageSquare');

  return (
    <div className="h-full overflow-auto px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-[var(--color-dark)] mb-4">{contactData.title}</h2>
          <p className="text-[var(--color-gray)] max-w-2xl mx-auto">
            {contactData.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Contact Info & Social */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactData.contactInfo.map((info, index) => {
                const Icon = getIcon(info.icon as IconName);
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
                <MessageSquareIcon size={20} />
                Connect With Me
              </h4>
              <div className="space-y-3">
                {contactData.socialLinks.map((social, index) => {
                  const Icon = getIcon(social.icon as IconName);
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
              <DownloadIcon size={20} />
              <span>Download Resume / CV</span>
            </button>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white border border-[var(--color-border)] rounded-2xl p-8">
            <h3 className="text-[var(--color-dark)] mb-6 flex items-center gap-2">
              <SendIcon size={24} />
              {contactData.form.title}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-[var(--color-dark)] mb-2 text-sm">
                    {contactData.form.fields.name.label}
                  </label>
                  <input
                    type={contactData.form.fields.name.type}
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required={contactData.form.fields.name.required}
                    className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                    placeholder={contactData.form.fields.name.placeholder}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[var(--color-dark)] mb-2 text-sm">
                    {contactData.form.fields.email.label}
                  </label>
                  <input
                    type={contactData.form.fields.email.type}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required={contactData.form.fields.email.required}
                    className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                    placeholder={contactData.form.fields.email.placeholder}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-[var(--color-dark)] mb-2 text-sm">
                  {contactData.form.fields.subject.label}
                </label>
                <input
                  type={contactData.form.fields.subject.type}
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required={contactData.form.fields.subject.required}
                  className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                  placeholder={contactData.form.fields.subject.placeholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[var(--color-dark)] mb-2 text-sm">
                  {contactData.form.fields.message.label}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required={contactData.form.fields.message.required}
                  rows={contactData.form.fields.message.rows}
                  className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all resize-none"
                  placeholder={contactData.form.fields.message.placeholder}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full px-6 py-4 bg-[var(--color-primary)] text-white rounded-xl hover:bg-[var(--color-primary-dark)] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitted ? (
                  <>
                    <span>{contactData.form.submitButton.successText}</span>
                  </>
                ) : (
                  <>
                    <SendIcon size={20} />
                    <span>{contactData.form.submitButton.text}</span>
                  </>
                )}
              </button>

              <p className="text-xs text-[var(--color-gray)] text-center">
                {contactData.form.note}
              </p>
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {contactData.additionalInfo.map((info, index) => (
            <div key={index} className={`bg-gradient-to-br ${info.color} border ${info.borderColor} rounded-2xl p-6 text-center`}>
              <div className="text-3xl mb-2">{info.emoji}</div>
              <h4 className="text-[var(--color-dark)] mb-1">{info.title}</h4>
              <p className="text-sm text-[var(--color-gray)]">{info.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

