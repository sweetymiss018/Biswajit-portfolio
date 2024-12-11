import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Loader: React.FC = () => {
  const [text, setText] = useState<string>(""); // Holds the text being displayed
  const [showFinalMessage, setShowFinalMessage] = useState<boolean>(false);

  const welcomeText: string = "Welcome to NextGen Invites";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < welcomeText.length) {
        setText(welcomeText.slice(0, index + 1)); // Add one character at a time
        index++;
      } else {
        clearInterval(timer); // Stop typing effect
        setTimeout(() => setShowFinalMessage(true), 1000); // Show the final message
      }
    }, 200); // Slower typing speed
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div
        className="relative p-10 rounded-lg shadow-2xl animate-border-gradient border-4 border-transparent 
          bg-clip-border text-center"
      >
        {!showFinalMessage ? (
          <motion.div
            className="text-5xl md:text-7xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
                shadow-lg shadow-blue-500/50 animate-text"
            >
              {text}
            </span>
            <span className="text-blue-500 animate-pulse">|</span>
          </motion.div>
        ) : (
          <motion.div
            className="text-6xl md:text-8xl font-bold"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-500 to-blue-500
                shadow-xl shadow-green-500/50"
            >
              Welcome to <span className="text-pink-500">NextGen Invites</span>
            </span>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Loader;
