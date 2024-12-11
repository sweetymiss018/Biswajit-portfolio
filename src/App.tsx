import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import TimelineProjects from "./components/TimelineProjects";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

function App() {

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate loading time (e.g., fetching data, initializing the app)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000); // 3 seconds delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {
        isLoading ? (
          <Loader/>
        ):(
          <div className="relative">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <TimelineProjects />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>
            &copy; {new Date().getFullYear()} DesignCraft. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            {/* Gmail */}
            <a
              href="mailto:your-email@gmail.com"
              className="text-gray-400 hover:text-red-500 transition duration-300 transform hover:scale-110"
              aria-label="Gmail"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M12 12.713L1.805 5.718v12.564h20.39V5.718z" />
                <path d="M1.805 5.718l10.195 6.284 10.195-6.284L12 12.713z" />
                <path d="M0 4.25C0 3.56.56 3 1.25 3h21.5c.69 0 1.25.56 1.25 1.25v15.5c0 .69-.56 1.25-1.25 1.25H1.25C.56 22 0 21.44 0 20.75V4.25zM1.25 4l10.752 6.646L22.75 4H1.25z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/invitesnextgen?igsh=ODl2bnBub2xsbm9s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.125 2a.875.875 0 1 1 0 1.75.875.875 0 0 1 0-1.75ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path d="M2.67 0C1.19 0 0 1.17 0 2.61c0 1.44 1.18 2.61 2.67 2.61h.03c1.48 0 2.66-1.17 2.66-2.61C5.36 1.17 4.18 0 2.67 0zM.11 8.46h5.14v15.53H.11V8.46zm7.22 0h4.91v2.12h.07c.68-1.29 2.35-2.65 4.84-2.65C22.8 7.93 24 10.41 24 14.05v9.94h-5.14v-9.18c0-2.19-.77-3.69-2.7-3.69-1.47 0-2.35 1-2.73 1.97-.14.34-.18.82-.18 1.29v9.61H7.33V8.46z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition duration-300 transform hover:scale-110"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.49v-9.294H9.692v-3.622h3.122V8.413c0-3.1 1.894-4.788 4.657-4.788 1.325 0 2.463.099 2.793.143v3.24h-1.915c-1.504 0-1.796.715-1.796 1.763v2.312h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
        )
      }
    </>
  );
}

export default App;
