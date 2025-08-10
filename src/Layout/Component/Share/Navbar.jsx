import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { SlMenu } from "react-icons/sl";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollNavbar, setScrollNavbar] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handlerScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > scrollNavbar && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setScrollNavbar(currentScrollY);
    };

    window.addEventListener("scroll", handlerScroll);
    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  }, [scrollNavbar]);

  const menuItems = [
    { label: "home", href: "#home" },
    { label: "shop", href: "#shop" },
    // dropdown item
    { label: "about", href: "#about" },
    { label: "faq", href: "#faq" },
    // dropdown item (login/register, my order, wishlist)
    { label: "contact", href: "#contact" },
    
  ];

  return (
    <>
      <header
        className={`fixed lg:top-10 top-10 py-5 w-full z-10 shadow transition-transform duration-300 ${
          showNavbar
            ? "translate-y-0 bg-[var(--lightColor)]"
            : "-translate-y-35"
        }`}
      >
        <nav className="relative z-10">
          <div className="flex items-center container m-auto justify-between px-3">
            <div className="flex items-center ">
                {/* Logo */}
            <h1 className="font-bold text-[var(--primaryColor)] text-2xl">
              Omega Watch
            </h1>
            </div>

            {/* Desktop Menu */}
            <div className="lg:block hidden">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActive(item.label)}
                  className={`px-3 relative font-semibold uppercase text-[15px] text-[var(--deepColor)] ${
                    active === item.label ? "text-[var(--primaryColor)]" : ""
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute left-3 bg-[var(--primaryColor)] -bottom-1 w-7 h-0.5 ${
                      active === item.label ? "opacity-100" : "opacity-0"
                    }`}
                  ></span>
                </a>
              ))}
            </div>

            {/* Menu Button */}
            <div
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 cursor-pointer flex items-center"
            >
              <button className="text-2xl">
                <SlMenu />
              </button>
            </div>

          </div>
        </nav>

        {/* Simple Offcanvas Menu for Mobile */}

        <div>
          {open && (
            <div
              className="absolute lg:hidden border cursor-pointer blur- h-screen inset-0 z-10 bg-black/50"
              onClick={() => setOpen(false)}
            ></div>
          )}
        </div>

        <div
          className={`lg:hidden fixed top-0 left-0 h-screen w-72 bg-white z-30 transform transition-transform border-0  duration-300 ease-in-out ${
            open ? "translate-x-0" : "-translate-x-full"
          }  px-5 shadow-lg`}
        >
          <div className="flex mb-8  border-0 border-b-1 border-gray-300 justify-between py-6">
            {/* Logo */}
            <h1 className="font-bold text-[var(--primaryColor)] text-2xl">
              Web-Dev
            </h1>

            <button onClick={() => setOpen(false)} className="text-xl border cursor-pointer border-gray-200 p-1 rounded">
              <RxCross1 />
            </button>

          </div>


          <div className="space-y-4 ">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActive(item.label);
                  setOpen(false);
                }}
                className={`block font-semibold uppercase text-[15px] text-[var(--deepColor)] ${
                  active === item.label ? "text-[var(--primaryColor)]" : ""
                }`}
              >
                {item.label}
                <span
                  className={`block bg-[var(--primaryColor)] h-0.5 w-7 mt-1 ${
                    active === item.label ? "opacity-100" : "opacity-0"
                  }`}
                ></span>
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
