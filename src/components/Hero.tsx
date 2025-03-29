import React from 'react';
import { ArrowRight, Code, Database, Palette, Megaphone, Sparkles, Globe, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-yellow-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute w-96 h-96 -bottom-48 -left-48 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      </div>
      
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      
      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 mb-4 mx-auto w-fit">
              <Sparkles className="w-4 h-4" />
              <span>Welcome to the Future of Digital Solutions</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80 drop-shadow-2xl">
            Patidar Digital Hub
          </h1>
          
          <p className="text-xl text-gray-200 mb-12 leading-relaxed">
            Transforming visions into digital reality. We craft cutting-edge solutions in
            <span className="text-indigo-300"> data management</span>,
            <span className="text-purple-300"> web development</span>,
            <span className="text-pink-300"> design</span>, and
            <span className="text-blue-300"> digital marketing</span>.
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center">
            <button className="group bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              Explore Services
              <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-white py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={<Database className="w-8 h-8" />}
              title="Data Entry"
              description="Professional data processing and management services"
            />
            <ServiceCard 
              icon={<Code className="w-8 h-8" />}
              title="Web Development"
              description="Custom websites and web applications"
            />
            <ServiceCard 
              icon={<Palette className="w-8 h-8" />}
              title="Graphic Design"
              description="Creative design solutions for your brand"
            />
            <ServiceCard 
              icon={<Megaphone className="w-8 h-8" />}
              title="Digital Marketing"
              description="Result-driven marketing strategies"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer backdrop-blur-sm bg-opacity-90">
      <div className="text-indigo-600 mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-600 transition-colors">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Hero;