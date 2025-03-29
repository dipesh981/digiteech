import React from 'react';
import { Building2, Shield, Briefcase, HandshakeIcon, ArrowUpRight } from 'lucide-react';

const partners = [
  {
    name: "ZEETECH",
    type: "Technology Partner",
    icon: <Building2 className="w-12 h-12" />,
    description: "Strategic technology collaboration for innovative digital solutions",
    color: "from-blue-500 to-cyan-400"
  },
  {
    name: "ANGEL ONE",
    type: "Financial Partner",
    icon: <Shield className="w-12 h-12" />,
    description: "Trusted partner for financial technology integration",
    color: "from-orange-500 to-red-400"
  },
  {
    name: "AXIS BANK",
    type: "Banking Partner",
    icon: <Briefcase className="w-12 h-12" />,
    description: "Official banking partner for secure financial operations",
    color: "from-purple-500 to-indigo-400"
  }
];

const Partners = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 font-semibold mb-4">
            <div className="flex items-center gap-2">
              <HandshakeIcon className="w-5 h-5" />
              <span>Strategic Partnerships</span>
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-6">Our Trusted Partners</h2>
          <p className="text-xl text-gray-300">
            Collaborating with industry leaders to deliver exceptional digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="relative">
                <div className="text-white mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {partner.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{partner.name}</h3>
                <p className="text-gray-400 mb-2">{partner.type}</p>
                <p className="text-gray-300 mb-6">{partner.description}</p>
                
                <button className="flex items-center gap-2 text-white/80 hover:text-white group/btn">
                  Learn More 
                  <ArrowUpRight className="w-4 h-4 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mt-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Become a Partner</h3>
            <p className="text-gray-300 mb-6">
              Join our network of industry leaders and innovate together for a digital future
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors flex items-center gap-2 mx-auto">
              Partner With Us
              <HandshakeIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;