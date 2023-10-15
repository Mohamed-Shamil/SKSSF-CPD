  

import { useState } from "react";

const Nav = () => {
  const subwingsData = [
    { name: 'VIQAYA WING', link: '/subwings/viqaya' },
    { name: 'TREND', link: '/subwings/trend' },
    { name: 'CAMPUS WING', link: '/subwings/campus' },
    { name: 'IBAD', link: '/subwings/ibad' },
    { name: 'ISATHIQAMA', link: '/subwings/isathiqama' },
    { name: 'MANEESHA', link: '/subwings/maneesha' },
    { name: 'ORGANET', link: '/subwings/organet' },
    { name: 'SARGALAYA', link: '/subwings/sargalaya' },
    { name: 'MEDIA WING', link: '/subwings/media' },
    { name: 'TWALABA WING', link: '/subwings/twalaba' },
  ];
  const [isSubwingsOpen, setSubwingsOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the visibility of the subwings menu
  const toggleSubwings = () => {
    setSubwingsOpen(!isSubwingsOpen);
  };

  // Function to toggle the visibility of the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <a href="/" className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <img  className="h-16 mb-1 w-20" src="/Images/IC%20logo_page-0001.jpg" alt="" />
          <div className="flex flex-col justify-center">
            <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              SKSSF
            </h1>
            <h3 className="font-bold text-green-600">Chappanangadi</h3>
          </div>
        </a>

        <div
          onClick={toggleMobileMenu}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={isMobileMenuOpen ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            isMobileMenuOpen ? "top-20 " : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8 text-lg md:my-0 my-7">
            <a href={"/"} className="text-gray-800 hover:text-gray-400 duration-500">
              HOME
            </a>
          </li>
          <li className="md:ml-8 text-lg cursor-pointer md:my-0 my-7">
            <a
              className="text-gray-800 hover:text-gray-400 duration-500"
              onClick={toggleSubwings}
            >
              SUBWINGS
            </a>
            {isSubwingsOpen && (
              <div className={isMobileMenuOpen?`z-10 absolute top-1 left-40 bg-white divide-y divide-gray-100 rounded-lg shadow w-44`: `z-10 absolute top-16 bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}>
                <ul className="py-2 text-sm text-gray-700" role="menu">
                  {subwingsData.map((subwing) => (
                    <li key={subwing.link}>
                      <a
                        href={subwing.link}
                        className="block px-4 py-2 hover-bg-gray-100 cursor-pointer"
                      >
                        {subwing.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
          <li className="md:ml-8 text-lg md:my-0 my-7">
            <a href={"/about"} className="text-gray-800 hover:text-gray-400 duration-500">
              ABOUT
            </a>
          </li>
          <li className="md:ml-8 text-lg md:my-0 my-7">
            <a href={"/contact"} className="text-gray-800 hover:text-gray-400 duration-500">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
