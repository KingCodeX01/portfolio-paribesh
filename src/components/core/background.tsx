import { useState, useEffect } from "react";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";

export function Background() {
  const words = ["Web Developer", "Freelancer", "UI/UX Designer"];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = isDeleting ? 100 : 150; // Speed for typing and deleting

    const handleTyping = () => {
      const currentWord = words[index];
      if (!isDeleting) {
        // Typing effect
        setText((prev) => currentWord.substring(0, prev.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
        }
      } else {
        // Deleting effect
        setText((prev) => currentWord.substring(0, prev.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length); // Move to next word
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <BackgroundBeamsWithCollision>
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl lg:text-7xl font-bold text-black dark:text-white font-sans tracking-tight">
            Hello Everyone
          </h2>
          <div className="relative mx-auto inline-block w-max text-3xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
            I am Paribesh Shrestha
          </div>
          <div className="text-2xl md:text-4xl lg:text-5xl font-semibold mt-4 text-gray-800 dark:text-gray-200">
            {text}
            <span className="animate-blink">|</span> {/* Blinking Cursor */}
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
