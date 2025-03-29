import React from 'react';
import { Twitter, Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';

const Social = () => {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Connect With Us</h2>
          <p className="text-xl text-gray-300">
            Follow Patidar Digital Hub on social media for the latest updates, insights, and inspiration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          <SocialCard
            icon={<Twitter className="w-8 h-8" />}
            platform="Twitter"
            handle="@patidardigital"
            followers="5K+"
            color="bg-blue-400"
          />
          <SocialCard
            icon={<Linkedin className="w-8 h-8" />}
            platform="LinkedIn"
            handle="Patidar Digital Hub"
            followers="10K+"
            color="bg-blue-600"
          />
          <SocialCard
            icon={<Instagram className="w-8 h-8" />}
            platform="Instagram"
            handle="@patidardigital"
            followers="15K+"
            color="bg-pink-600"
          />
          <SocialCard
            icon={<Facebook className="w-8 h-8" />}
            platform="Facebook"
            handle="Patidar Digital Hub"
            followers="20K+"
            color="bg-blue-800"
          />
          <SocialCard
            icon={<Youtube className="w-8 h-8" />}
            platform="YouTube"
            handle="Patidar Digital"
            followers="8K+"
            color="bg-red-600"
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-6">Join Our Newsletter</h3>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialCard = ({ icon, platform, handle, followers, color }: {
  icon: React.ReactNode;
  platform: string;
  handle: string;
  followers: string;
  color: string;
}) => (
  <div className={`${color} rounded-xl p-6 text-center hover:scale-105 transition cursor-pointer`}>
    <div className="mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{platform}</h3>
    <p className="text-gray-200 mb-2">{handle}</p>
    <p className="font-semibold">{followers} Followers</p>
  </div>
);

export default Social;