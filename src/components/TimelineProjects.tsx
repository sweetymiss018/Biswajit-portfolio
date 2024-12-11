import { Calendar, Video } from 'lucide-react';

export default function TimelineProjects() {
  const projects = [
    {
      date: "2024",
      title: "Royal Wedding Collection",
      category: "Wedding Cards",
      description: "Elegant wedding invitation suite with animated elements",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
      isAnimated: true
    },
    {
      date: "2023",
      title: "Summer Fashion Campaign",
      category: "Social Media",
      description: "Instagram and Facebook campaign for fashion brand",
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800",
      isAnimated: false
    },
    {
      date: "2023",
      title: "Product Launch Animation",
      category: "Motion Graphics",
      description: "Animated video for tech product launch",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800",
      isAnimated: true
    },
    {
      date: "2023",
      title: "Traditional Wedding Cards",
      category: "Wedding Cards",
      description: "Hand-crafted designs with modern touches",
      image: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=600",
      isAnimated: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Project Timeline</h2>
          <p className="text-gray-600">Journey through my creative work</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-purple-200 hidden lg:block"></div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={index} className={`relative ${index % 2 === 0 ? 'lg:ml-auto lg:pl-32' : 'lg:mr-auto lg:pr-32'} lg:w-1/2`}>
                {/* Date bubble */}
                <div className="flex items-center justify-start mb-4 lg:mb-0 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2">
                  <div className="bg-purple-600 text-white rounded-full mb-14 p-3 shadow-lg">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <span className="ml-3 mb-14 font-semibold text-purple-600">{project.date}</span>
                </div>

                {/* Project card */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative group">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    {project.isAnimated && (
                      <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full flex items-center space-x-1">
                        <Video className="w-4 h-4" />
                        <span className="text-sm">Animated</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-purple-600 font-medium">{project.category}</span>
                    <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
                    <p className="text-gray-600 mt-2">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}