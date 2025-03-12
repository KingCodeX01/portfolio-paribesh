import { useState } from "react";

const Sidebar = () => {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const copyToClipboard = () => {
    const websiteURL = window.location.href; // Get the current page URL
    navigator.clipboard.writeText(websiteURL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div className="w-22 bg-[#2C2D32] h-[100vh] max-lg:w-full max-lg:h-20 max-lg:flex max-lg:items-center max-lg:justify-between max-lg:px-4">
      <div className="w-full h-full flex flex-col max-lg:flex-row max-lg:items-center gap-4 max-lg:justify-between relative">
        {/* Profile Image */}
        <div className="p-2 max-lg:p-0">
          <img
            src="/images/paribesh-profile.png"
            alt="paribesh-profile-picture"
            className="border-none w-16 h-16 rounded-full object-cover max-lg:w-12 max-lg:h-12"
          />
        </div>

        {/* Social Links */}
        <div className="mt-2 flex flex-col items-center justify-center p-2 max-lg:relative max-lg:bottom-auto max-lg:left-auto max-lg:flex-row max-lg:space-x-4 max-md:hidden">
          <ul className="flex flex-col space-y-2 max-lg:flex-row max-lg:space-x-4 max-lg:space-y-0">
            <li className="w-18 border-gray-600 border pr-2 pl-2 pt-1 pb-1 transition-all delay-300 ease-out hover:rounded-full hover:text-white">
              <a
                href="https://www.facebook.com/paribesh.newar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li className="w-18 border-gray-600 border pr-2 pl-2 pt-1 pb-1 transition-all delay-300 ease-out hover:rounded-full hover:text-white">
              <a
                href="https://www.instagram.com/paribesh_shrestha01/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-square-instagram"></i>
              </a>
            </li>
            <li className="w-18 border-gray-600 border pr-2 pl-2 pt-1 pb-1 transition-all delay-300 ease-out hover:rounded-full hover:text-white">
              <a
                href="https://www.linkedin.com/in/paribesh-shrestha-092483259/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li className="w-18 border-gray-600 border pr-2 pl-2 pt-1 pb-1 transition-all delay-300 ease-out hover:rounded-full hover:text-white">
              <a href="/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-reddit"></i>
              </a>
            </li>
          </ul>
        </div>

        {/* Menu Button */}
        <div className="absoulte bottom-20 p-2 flex items-center justify-center w-full max-lg:w-auto">
          <button
            className="flex flex-col hover:text-yellow-400 ease-linear delay-100 transition-colors"
            onClick={() => setIsOpen(true)} // Open sidebar
          >
            <i className="fa-solid fa-bars text-5xl max-md:text-3xl"></i>
            <p className="max-lg:hidden text-sm">MENU</p>
          </button>
        </div>

        {/* Sidebar */}
        <div
          className={`z-[9999] fixed top-0 left-0 h-screen w-2/5 bg-gray-900 text-white shadow-lg transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={() => setIsOpen(false)} // Close sidebar
          >
            &times;
          </button>

          {/* Sidebar Menu Items */}
          <ul className="mt-16 space-y-4 text-lg">
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Home</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">About</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Projects</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Blog</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Overlay (Click outside to close) */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        {/* Share Button */}
        <div className="absolute bottom-0 w-full flex items-center justify-center max-lg:relative max-lg:w-auto max-md:hidden">
          <button
            onClick={copyToClipboard}
            className="bg-yellow-400 w-full p-6 text-white text-2xl max-lg:w-auto max-lg:px-4 max-lg:py-2"
          >
            <i className="fa-solid fa-share-nodes"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
