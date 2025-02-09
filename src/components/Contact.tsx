import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Replace this with your actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const inputClassName = "mt-1 block w-full rounded-md bg-gray-900 border border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200 px-4 py-2";
  const labelClassName = "block text-sm font-medium text-gray-300 mb-1";

  return (
    <main className="container mx-auto px-4 py-16 min-h-screen bg-gray-950">
      <section className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-white animate-fade-in">
          Contact Us
        </h1>
        <p className="text-xl text-gray-400 mb-12 text-center">
          Have questions? We'd love to hear from you.
        </p>

        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-900/50 border border-green-500 rounded-lg text-green-200 animate-fade-in">
            Thank you for your message! We'll get back to you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-200 animate-fade-in">
            Something went wrong. Please try again later.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8 bg-gray-900/50 p-8 rounded-xl shadow-xl backdrop-blur-sm">
          <div>
            <label htmlFor="name" className={labelClassName}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={inputClassName}
              required
              minLength={2}
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClassName}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClassName}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className={labelClassName}>
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={inputClassName}
              required
            >
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="support">Technical Support</option>
              <option value="billing">Billing Question</option>
              <option value="enterprise">Enterprise Sales</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className={labelClassName}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`${inputClassName} resize-y min-h-[100px]`}
              required
              minLength={10}
              placeholder="Your message here..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold 
              hover:bg-blue-700 transition-all duration-200 transform hover:scale-[1.02]
              disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
              focus:ring-offset-gray-900 shadow-lg hover:shadow-blue-500/20"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </section>
    </main>
  );
};

export default ContactPage;