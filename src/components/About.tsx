import React from 'react';
import { GraduationCap, Briefcase, MapPin } from 'lucide-react';
import img from '../assets/hero.png';

export default function About() {
  const skills = [
    "Canva Expert",
    "Figma Design",
    "Motion Graphics",
    "Social Media Marketing",
    "Video Editing",
    "Brand Strategy",
    "Wedding Card Design",
    "Digital Marketing"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="relative w-full h-full">
              <img
                src={img}
                alt="Profile"
                className="rounded-xl object-cover w-[60%] h-[60%] mx-auto shadow-[0px_4px_10px_-2px_rgba(255,105,180,0.8),0px_4px_20px_0px_rgba(128,0,128,0.8)]"
              />
            </div>
          </div>

          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>

            <div className="flex items-center space-x-3 text-gray-600">
              <MapPin className="w-5 h-5 text-purple-600" />
              <span>Nayagarh, Odisha, India</span>
            </div>

            <div className="flex items-center space-x-3 text-gray-600">
              <GraduationCap className="w-5 h-5 text-purple-600" />
              <span>MBA Graduate from Chandigarh University</span>
            </div>

            <div className="flex items-center space-x-3 text-gray-600">
              <Briefcase className="w-5 h-5 text-purple-600" />
              <span>Digital Marketing Professional</span>
            </div>

            <p className="text-gray-600 leading-relaxed">
              I am a passionate digital marketing professional with expertise in creating stunning visual content.
              My journey began in Nayagarh, Odisha, and led me to pursue my MBA at Chandigarh University,
              where I honed my business and marketing skills.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-medium hover:bg-purple-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
