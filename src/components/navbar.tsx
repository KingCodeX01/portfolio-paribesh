import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="info_container border-b-2">
      <div className="flex items-center justify-between pt-6 pb-6 h-auto ">
        <div className="flex">
          {/* <Image
          src="/images/Ntech_logo.png"
          width={100}
          height={100}
          alt="Main_logo"
        /> */}
          {/* Logo */}
          <div className="text-2xl font-semibold">{"Blog"}</div>
        </div>

        {/* Desktop Menu */}
        <div className="max-md:hidden">
          <ul className="flex items-center justify-center space-x-4 font-semibold">
            <li>
              <a href="/" className="loader">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="loader">
                About Us
              </a>
            </li>
            <li>
              <a href="/" className="loader">
                Services
              </a>
            </li>
            <li>
              <a href="/" className="loader">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/" className="loader">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="w-28 grid gap-1 lg:grid-cols-2 max-md:hidden">
          <a
            href="/Login"
            className="w-full border-none p-2 text-sm bg-black hover:bg-gray-500 font-semibold hover:ease-in text-white rounded flex items-center justify-center gap-4"
          >
            Login
          </a>

          <a
            href={"/Signup"}
            className="w-full border-none p-2 bg-black text-sm hover:bg-gray-500 font-semibold hover:ease-in text-white rounded flex items-center justify-center gap-4"
          >
            Signup
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <div>
            <button onClick={toggleMenu}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={toggleMenu}
            ></div>
          )}

          {/* Mobile Menu Side Bar */}
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="p-6">
              {/* Mobile Menu Side Bar */}
              <button
                className="absolute top-4 right-4 p-2 focus:outline-none"
                onClick={toggleMenu}
                aria-label="Close Menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <ul className="flex flex-col space-y-4 mt-8 font-semibold">
                <li>
                  <a href="/" className="loader ">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/" className="loader ">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/" className="loader ">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/" className="loader ">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="/" className="loader ">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/" className="loader ">
                    Login
                  </a>
                </li>

                <li>
                  <a href="/" className="loader ">
                    signup
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
