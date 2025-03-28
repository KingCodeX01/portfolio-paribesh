import { useState, useEffect } from "react";

const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Do what you can, with what you have, where you are.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Believe you can and you're halfway there.",
  "Act as if what you do makes a difference. It does.",
  "It does not matter how slowly you go as long as you do not stop.",
];

const Navbar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#2C2D32] h-20 flex items-center justify-center">
      <p className="text-white text-xl text-center px-5 transition-opacity duration-500">
        {quotes[currentIndex]}
      </p>
    </div>
  );
};

export default Navbar;
