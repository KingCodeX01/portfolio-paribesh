import { useState, useEffect } from "react";
import Sidebar from "../components/core/sidebar";
import Navbar from "../components/core/navbar";
import { Background } from "../components/core/background";

const Home = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        const rect = navbar.getBoundingClientRect();
        setIsNavbarFixed(rect.top <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-screen flex">
      {/* Sidebar - Sticky on the Left */}
      <div className="z-[1] h-full sticky top-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="relative flex-1 flex flex-col">
        {/* Background Positioned Between Sidebar and Navbar */}
        <div className="absolute inset-0 -z-10">
          <Background />
        </div>

        {/* Navbar - Sticky at Bottom and Moves to Top on Scroll */}
        <div
          id="navbar"
          className={`w-full ${
            isNavbarFixed ? "fixed top-0 z-50 shadow-lg" : "absolute bottom-0"
          }`}
        >
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Home;
