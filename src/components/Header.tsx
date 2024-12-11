import React from 'react';
import { Menu, X, Palette } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Palette className="h-6 w-6 text-purple-600" />
            <span className="text-xl font-bold">DesignCraft</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-purple-600 transition-colors">Home</a>
            <a href="#about" className="hover:text-purple-600 transition-colors">About</a>
            <a href="#services" className="hover:text-purple-600 transition-colors">Services</a>
            <a href="#projects" className="hover:text-purple-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-purple-600 transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t">
            <div className="flex flex-col space-y-4 px-6 py-4">
              <a href="#home" className="hover:text-purple-600 transition-colors">Home</a>
              <a href="#about" className="hover:text-purple-600 transition-colors">About</a>
              <a href="#services" className="hover:text-purple-600 transition-colors">Services</a>
              <a href="#projects" className="hover:text-purple-600 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-purple-600 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}