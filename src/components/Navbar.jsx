import React, { useEffect, useContext, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("/");
  const { cart } = useContext(CartContext);

  useEffect(() => {
    const pathToLinkMap = {
      "/": "Accueil",
      "/products": "Nos Produits",
      "/aboutUs": "À propos de nous",
      "/contact": "Contact",
    };
    setActiveLink(pathToLinkMap[location.pathname] || "Accueil");
  }, [location]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className="flex shadow-md py-4 px-4 sm:px-10 bg-gray-900 font-sans min-h-[75px] tracking-wide relative z-50">
        <div className="flex flex-wrap items-center gap-4 w-full">
          {/* Logo */}
          <Link to="/">
            <img src="/logoInchoo.png" alt="logo" className="w-36" />
          </Link>

          {/* Collapsible Menu */}
          <div
            id="collapseMenu"
            className={`lg:ml-16 lg:block ${
              menuOpen ? "block" : "hidden"
            } max-lg:fixed max-lg:bg-gray-900 max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50`}
          >
            {/* Close Button */}
            <button
              id="toggleClose"
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-[#d1b262] p-3"
              onClick={handleToggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 fill-white"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>

            {/* Menu Items */}
            <ul className="lg:flex lg:gap-x-4 max-lg:space-y-3">
              <li className="max-lg:border-b max-lg:pb-4 px-3 lg:hidden">
                <Link to="/">
                  <img src="/logoInchoo.png" alt="logo" className="w-36" />
                </Link>
              </li>
              {[
                { path: "/", label: "Accueil" },
                { path: "/products", label: "Nos Produits" },
                { path: "/aboutUs", label: "À propos de nous" },
                { path: "/contact", label: "Contact" },
              ].map((item) => (
                <li
                  key={item.path}
                  className="max-lg:border-b max-lg:py-3 px-3"
                >
                  <Link
                    to={item.path}
                    className={`block font-semibold text-base ${
                      activeLink === item.label
                        ? "text-[#d1b262]"
                        : "text-white hover:text-[#d1b262]"
                    }`}
                    onClick={() => setActiveLink(item.label)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sign-Up Button and Open Menu Button */}
          <div className="flex ml-auto">
            <div className=" flex space-x-5 items-center">
              <Link to="/myorders">
                <span class="relative hover:text-[#d1b262]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    class="cursor-pointer fill-[#fffafa] inline hover:fill-[#d1b262]"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                      data-original="#000000"
                    ></path>
                  </svg>
                  <span class="absolute left-auto -ml-1 top-0 rounded-full bg-[#d1b262] px-1 py-0 text-xs text-white">
                    {totalItems}
                  </span>
                </span>
              </Link>
              {/* <Link
                className="flex text-white items-center hover:text-[#d1b262]"
                to="/login"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white hover:text-[#d1b262]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link> */}
            </div>
          </div>

          {/* Open Button */}
          <button
            id="toggleOpen"
            className="ml-6 lg:hidden text-white"
            onClick={handleToggle}
          >
            <svg
              className="w-7 h-7 text-white"
              fill="white"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
