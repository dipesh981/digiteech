import React from 'react';
import { Briefcase, Clock, MapPin, DollarSign, Users, Award, Zap, Star } from 'lucide-react';

const jobs = [
  {
    title: "CEO & Founder",
    department: "Leadership",
    location: "Indore, MP",
    type: "Full-time",
    positions: "1 (Dipesh Patidar)",
    status: "Filled",
    priority: "high",
    description: "Leading the vision and growth of Patidar Digital Hub."
  },
  {
    title: "Project Manager",
    department: "Management",
    location: "Indore, MP",
    type: "Full-time",
    positions: "1",
    status: "Urgent",
    priority: "high",
    description: "Oversee project execution and team coordination for digital initiatives."
  },
  {
    title: "Data Entry Operators",
    department: "Operations",
    location: "Indore, MP",
    type: "Full-time",
    positions: "20+",
    status: "Urgent",
    priority: "high",
    description: "Accurate and efficient data processing and management."
  },
  {
    title: "Web Developers",
    department: "Engineering",
    location: "Indore, MP",
    type: "Full-time",
    positions: "2-3",
    status: "Urgent",
    priority: "high",
    description: "Create and maintain cutting-edge web applications."
  },
  {
    title: "Graphic Designers",
    department: "Creative",
    location: "Indore, MP",
    type: "Full-time",
    positions: "2-3",
    status: "Urgent",
    priority: "high",
    description: "Design engaging visual content and brand materials."
  },
  {
    title: "Video Editors",
    department: "Creative",
    location: "Indore, MP",
    type: "Full-time",
    positions: "1-2",
    status: "Urgent",
    priority: "medium",
    description: "Create compelling video content for digital platforms."
  },
  {
    title: "Ad Managers",
    department: "Marketing",
    location: "Indore, MP",
    type: "Full-time",
    positions: "1-2",
    status: "Urgent",
    priority: "medium",
    description: "Manage and optimize digital advertising campaigns."
  },
  {
    title: "SEO & Content Writers",
    department: "Marketing",
    location: "Indore, MP",
    type: "Full-time",
    positions: "1-2",
    status: "Urgent",
    priority: "medium",
    description: "Create SEO-optimized content and improve digital presence."
  },
  {
    title: "Customer Support",
    department: "Operations",
    location: "Indore, MP",
    type: "Full-time",
    positions: "1-2",
    status: "Urgent",
    priority: "medium",
    description: "Provide excellent customer service and support."
  },
  {
    title: "Accountant",
    department: "Finance",
    location: "Indore, MP",
    type: "Full-time",
    positions: "1",
    status: "Urgent",
    priority: "high",
    description: "Manage financial operations and reporting."
  }
];

const Careers = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-indigo-50 px-4 py-2 rounded-full text-indigo-600 font-semibold mb-4">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span>Urgent Hiring</span>
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-6">Join Our Growing Team</h2>
          <p className="text-xl text-gray-600">
            We're expanding rapidly and looking for talented individuals to help shape the future of digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {jobs.map((job, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${
                job.status === "Urgent" ? "border-red-500" : "border-green-500"
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">{job.title}</h3>
                  <p className="text-gray-600 mb-2">{job.department}</p>
                  {job.status === "Urgent" ? (
                    <span className="inline-flex items-center gap-1 bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                      <Star className="w-4 h-4" /> Urgent Hiring
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                      <Users className="w-4 h-4" /> Position Filled
                    </span>
                  )}
                </div>
                {job.status === "Urgent" && (
                  <button className="bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2">
                    Apply Now
                    <Award className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              <p className="text-gray-600 mb-6">{job.description}</p>
              
              <div className="flex flex-wrap gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  {job.location}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-400" />
                  {job.type}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gray-400" />
                  {job.positions} positions
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mt-16">
          <div className="bg-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Don't see your perfect role?</h3>
            <p className="text-gray-600 mb-6">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2 mx-auto">
              Send Resume
              <Briefcase className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;