import React from 'react';
import { Users, Award, Building2, Globe2, CheckCircle2, Zap, Target, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-indigo-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-indigo-50 px-4 py-2 rounded-full text-indigo-600 font-semibold mb-4">
            <div className="flex items-center gap-2">
              <Rocket className="w-5 h-5" />
              <span>About Patidar Digital Hub</span>
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Transforming Digital Dreams into Reality
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Led by <span className="font-semibold text-indigo-600">Dipesh Patidar</span>, 
            we've revolutionized digital presence for countless businesses across India, 
            delivering exceptional growth and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <StatCard 
            icon={<Users className="w-8 h-8" />}
            number="200+" 
            label="Happy Clients"
            color="bg-blue-50 text-blue-600"
          />
          <StatCard 
            icon={<Award className="w-8 h-8" />}
            number="50+" 
            label="Projects Completed"
            color="bg-purple-50 text-purple-600"
          />
          <StatCard 
            icon={<Building2 className="w-8 h-8" />}
            number="5+" 
            label="Years Experience"
            color="bg-indigo-50 text-indigo-600"
          />
          <StatCard 
            icon={<Globe2 className="w-8 h-8" />}
            number="10+" 
            label="Cities Served"
            color="bg-pink-50 text-pink-600"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl transform rotate-3 scale-105 opacity-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Team Meeting" 
              className="rounded-2xl shadow-2xl relative transform hover:-translate-y-2 transition-transform duration-300"
            />
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-gray-800">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Patidar Digital Hub, we're dedicated to empowering businesses with 
                cutting-edge digital solutions that drive growth, enhance efficiency, 
                and create lasting impact in the digital landscape.
              </p>
            </div>

            <div className="space-y-6">
              <ValuePoint 
                icon={<Target className="w-6 h-6" />}
                title="Innovation First" 
                description="Pushing boundaries with cutting-edge technologies"
              />
              <ValuePoint 
                icon={<Zap className="w-6 h-6" />}
                title="Client Success" 
                description="Your growth is our primary measure of success"
              />
              <ValuePoint 
                icon={<CheckCircle2 className="w-6 h-6" />}
                title="Local Excellence" 
                description="Delivering world-class solutions to businesses in Indore and beyond"
              />
            </div>

            <button className="bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group">
              Learn More About Us
              <Arrow className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ icon, number, label, color }: { 
  icon: React.ReactNode; 
  number: string; 
  label: string;
  color: string;
}) => (
  <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className={`${color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
      {icon}
    </div>
    <h3 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
      {number}
    </h3>
    <p className="text-gray-600">{label}</p>
  </div>
);

const ValuePoint = ({ icon, title, description }: { 
  icon: React.ReactNode;
  title: string; 
  description: string; 
}) => (
  <div className="flex items-start gap-4 group">
    <div className="bg-indigo-50 p-3 rounded-lg text-indigo-600 transform group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div>
      <h4 className="text-xl font-semibold mb-2 text-gray-800">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Arrow = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default About;