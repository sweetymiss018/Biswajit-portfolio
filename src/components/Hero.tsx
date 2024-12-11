import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in">
              Hi, I'm
              <span className="text-purple-600"> Biswajit Padhi</span>
            </h1>
            <p className="text-gray-600 text-lg animate-fade-in-delay">
              Transforming ideas into stunning visual experiences. Specializing in brand design,
              social media content, and motion graphics.
            </p>
            <div className="flex space-x-4 animate-fade-in-delay-2">
              <a
                href="#projects"
                className="bg-purple-600 text-white px-8 py-3 rounded-full flex items-center space-x-2 hover:bg-purple-700 transition-colors"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full hover:bg-purple-50 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="relative animate-fade-in-delay">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
              alt="Digital Marketing Workspace"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}