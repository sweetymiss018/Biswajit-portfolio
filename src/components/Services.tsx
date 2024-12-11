import React from 'react';
import { Palette, Video, Layout, Instagram } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Graphic Design",
      description: "Creating stunning visuals using Canva and Figma for various marketing materials and brand assets."
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Wedding Cards",
      description: "Designing elegant and personalized wedding invitations that capture your special moment."
    },
    {
      icon: <Instagram className="w-8 h-8" />,
      title: "Social Media",
      description: "Crafting engaging social media templates and content that drives engagement."
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Motion Graphics",
      description: "Producing eye-catching animated videos and motion graphics for your brand."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Services</h2>
          <p className="text-gray-600">Bringing your vision to life through creative design solutions</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="text-purple-600 mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}