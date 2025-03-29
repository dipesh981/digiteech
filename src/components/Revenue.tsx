import React from 'react';
import { TrendingUp, Users, BarChart, PieChart } from 'lucide-react';

const Revenue = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Client Success Stories</h2>
          <p className="text-xl opacity-90">
            Our clients have achieved remarkable growth and success through our partnership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <MetricCard
            icon={<TrendingUp />}
            metric="250%"
            label="Average ROI"
          />
          <MetricCard
            icon={<Users />}
            metric="2M+"
            label="Users Reached"
          />
          <MetricCard
            icon={<BarChart />}
            metric="85%"
            label="Revenue Growth"
          />
          <MetricCard
            icon={<PieChart />}
            metric="95%"
            label="Client Retention"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SuccessStory
            company="TechCorp Inc."
            metric="3x Revenue Growth"
            description="Achieved 300% revenue growth within 12 months through our digital transformation strategy."
          />
          <SuccessStory
            company="Global Solutions"
            metric="$2M Cost Savings"
            description="Implemented automation solutions resulting in significant operational cost reduction."
          />
          <SuccessStory
            company="Innovation Labs"
            metric="10x User Base"
            description="Expanded their user base from 10,000 to 100,000+ through targeted marketing campaigns."
          />
        </div>
      </div>
    </section>
  );
};

const MetricCard = ({ icon, metric, label }: {
  icon: React.ReactNode;
  metric: string;
  label: string;
}) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
    <div className="w-12 h-12 mx-auto mb-4 opacity-90">
      {icon}
    </div>
    <h3 className="text-3xl font-bold mb-2">{metric}</h3>
    <p className="opacity-90">{label}</p>
  </div>
);

const SuccessStory = ({ company, metric, description }: {
  company: string;
  metric: string;
  description: string;
}) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
    <h3 className="text-xl font-bold mb-2">{company}</h3>
    <p className="text-2xl font-bold text-indigo-300 mb-4">{metric}</p>
    <p className="opacity-90">{description}</p>
  </div>
);

export default Revenue;