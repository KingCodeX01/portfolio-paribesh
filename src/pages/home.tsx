import { useState, useEffect } from "react";
import Sidebar from "../components/core/sidebar";
import Navbar from "../components/core/navbar";
import { Background } from "../components/core/background";
import Skills from "./skill";

const Home = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1024);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [scrollDirection, setScrollDirection] = useState("up");

  // Handle Scroll for Navbar Position
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
        setIsNavbarFixed(true);
      } else {
        setScrollDirection("up");
        setIsNavbarFixed(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Detect Screen Size Changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="w-full h-screen flex flex-col lg:flex-row overflow-hidden">
        {/* Sidebar - Sticky on Desktop, Top Navbar on Mobile */}
        <div
          className={`z-[1] ${
            isMobileView
              ? "w-full sticky top-0 bg-white shadow-md"
              : "h-screen fixed z-[9999] top-0"
          }`}
        >
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="relative flex-1 flex flex-col">
          {/* Background Positioned Correctly */}
          <div className="absolute inset-0 -z-10">
            <Background />
          </div>

          {/* Navbar - Sticky at Bottom (Desktop) / Moves on Scroll */}
          <div
            id="navbar"
            className={`w-full transition-all duration-300 ${
              isMobileView
                ? "relative"
                : scrollDirection === "down"
                ? "fixed top-0 z-50 shadow-lg"
                : "absolute bottom-0"
            }`}
          >
            <Navbar />
          </div>
        </div>
      </div>
      <div>
        <Skills />
      </div>
    </>
  );
};

export default Home;
