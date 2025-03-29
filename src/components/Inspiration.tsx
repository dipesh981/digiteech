import React from 'react';
import { Star, Award, Heart } from 'lucide-react';

const creators = [
  {
    name: "Alex Chen",
    role: "Design Innovator",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    quote: "Design is not just what it looks like and feels like. Design is how it works.",
    achievement: "Forbes 30 Under 30"
  },
  {
    name: "Sarah Williams",
    role: "Tech Visionary",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    quote: "Innovation distinguishes between a leader and a follower.",
    achievement: "Tech Leader of the Year"
  },
  {
    name: "Michael Zhang",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    quote: "Creativity is intelligence having fun.",
    achievement: "Design Excellence Award"
  }
];

const Inspiration = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Inspired by the Best</h2>
          <p className="text-xl text-gray-300">
            Learn from the creative minds shaping the future of digital innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {creators.map((creator, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:transform hover:scale-105 transition duration-300">
              <div className="relative mb-8">
                <img
                  src={creator.image}
                  alt={creator.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover"
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-indigo-500 px-4 py-1 rounded-full">
                  <Star className="w-4 h-4 inline-block mr-1" />
                  <span className="text-sm">Featured</span>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{creator.name}</h3>
                <p className="text-indigo-300">{creator.role}</p>
              </div>
              
              <blockquote className="text-gray-300 text-center mb-6">
                "{creator.quote}"
              </blockquote>
              
              <div className="flex items-center justify-center gap-2 text-indigo-300">
                <Award className="w-5 h-5" />
                <span>{creator.achievement}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-white/10 backdrop-blur-sm px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition flex items-center gap-2 mx-auto">
            <Heart className="w-5 h-5" />
            Follow Our Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Inspiration;