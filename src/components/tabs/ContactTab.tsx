import { useState } from 'react';
import { getIcon, IconName } from '../../utils/iconMap';
import contactData from '../../data/contact.json';
import '../../styles/ContactTab.css';

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
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-header">
          <h2 className="contact-title">{contactData.title}</h2>
          <p className="contact-description">
            {contactData.description}
          </p>
        </div>

        <div className="contact-main-grid">
          {/* Contact Info & Social */}
          <div className="contact-sidebar">
            {/* Contact Cards */}
            <div className="contact-info-cards">
              {contactData.contactInfo.map((info, index) => {
                const Icon = getIcon(info.icon as IconName);
                return (
                  <div key={index} className="contact-info-card">
                    <div className="contact-info-content">
                      <div className="contact-info-icon">
                        <Icon size={20} />
                      </div>
                      <div className="contact-info-details">
                        <div className="contact-info-label">{info.label}</div>
                        {info.link ? (
                          <a href={info.link} className="contact-info-link">
                            {info.value}
                          </a>
                        ) : (
                          <div className="contact-info-value">{info.value}</div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="social-connect">
              <h4 className="social-connect-title">
                <MessageSquareIcon size={20} />
                Connect With Me
              </h4>
              <div className="social-links">
                {contactData.socialLinks.map((social, index) => {
                  const Icon = getIcon(social.icon as IconName);
                  return (
                    <a key={index} href={social.link} className="social-link">
                      <div className="social-icon">
                        <Icon size={18} />
                      </div>
                      <div className="social-info">
                        <div className="social-label">{social.label}</div>
                        <div className="social-username">{social.username}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Download CV */}
            <button className="download-cv">
              <DownloadIcon size={20} />
              <span className="download-text">Download Resume / CV</span>
            </button>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h3 className="form-title">
              <SendIcon size={24} />
              {contactData.form.title}
            </h3>
            
            <form onSubmit={handleSubmit} className="contact-form-fields">
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name" className="field-label">
                    {contactData.form.fields.name.label}
                  </label>
                  <input
                    type={contactData.form.fields.name.type}
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required={contactData.form.fields.name.required}
                    className="field-input"
                    placeholder={contactData.form.fields.name.placeholder}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email" className="field-label">
                    {contactData.form.fields.email.label}
                  </label>
                  <input
                    type={contactData.form.fields.email.type}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required={contactData.form.fields.email.required}
                    className="field-input"
                    placeholder={contactData.form.fields.email.placeholder}
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="subject" className="field-label">
                  {contactData.form.fields.subject.label}
                </label>
                <input
                  type={contactData.form.fields.subject.type}
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required={contactData.form.fields.subject.required}
                  className="field-input"
                  placeholder={contactData.form.fields.subject.placeholder}
                />
              </div>

              <div className="form-field">
                <label htmlFor="message" className="field-label">
                  {contactData.form.fields.message.label}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required={contactData.form.fields.message.required}
                  rows={contactData.form.fields.message.rows}
                  className="field-textarea"
                  placeholder={contactData.form.fields.message.placeholder}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="submit-button"
              >
                {submitted ? (
                  <span className="submit-success-text">{contactData.form.submitButton.successText}</span>
                ) : (
                  <>
                    <SendIcon size={20} />
                    <span className="submit-text">{contactData.form.submitButton.text}</span>
                  </>
                )}
              </button>

              <p className="form-note">
                {contactData.form.note}
              </p>
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div className="additional-info">
          {contactData.additionalInfo.map((info, index) => (
            <div key={index} className={`info-card ${info.color} ${info.borderColor}`}>
              <div className="info-emoji">{info.emoji}</div>
              <h4 className="info-title">{info.title}</h4>
              <p className="info-description">{info.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

