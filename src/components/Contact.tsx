import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have a question or want to discuss a project? Fill out the form, and 
                we'll get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <ContactInfo 
                  icon={<Phone className="w-6 h-6" />}
                  title="Phone"
                  detail="+91 95894 84361"
                />
                <ContactInfo 
                  icon={<Mail className="w-6 h-6" />}
                  title="Email"
                  detail="patidardipesh58@gmail.com"
                />
                <ContactInfo 
                  icon={<MapPin className="w-6 h-6" />}
                  title="Address"
                  detail="Indore, Madhya Pradesh, India"
                />
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, title, detail }: {
  icon: React.ReactNode;
  title: string;
  detail: string;
}) => (
  <div className="flex items-start gap-4">
    <div className="text-indigo-600">{icon}</div>
    <div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-gray-600">{detail}</p>
    </div>
  </div>
);

export default Contact;