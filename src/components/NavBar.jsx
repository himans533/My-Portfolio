import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { useAuth0 } from "@auth0/auth0-react";
import pic from "../assets/photo.avif";


const NavBar = () => {
  const [nav, setNav] = useState(false);
  const { loginWithRedirect } = useAuth0();

  const { logout } = useAuth0();

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
    {
      id: 6,
      link:"blog",
    },

  ];

  return (
    
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <div className="flex space-x-2">
          <img src={pic} className="h-16 w-12 rounded-full" alt="" />
        <h1 className="font-semibold text-xl cursor-pointer">TalentShowcase 
          <span>l</span>
          <p className="text-sm">Web-Developer</p>
        </h1>
      </div>
      </div>
      <div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      

      </div>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-4 text-gray-500 md:hidden ml-40"
      >
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>
      <div className="text-gray text-xl ml-80  cursor-pointer capitalize font-medium ">
             <button onClick={() => loginWithRedirect()}>
              Log In</button>;
         
          </div>
      <div className="text-gray  text-xl cursor-pointer capitalize font-medium ">
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log Out
        </button>
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-2 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}

        </ul>
      )}


    </div>

  );
};

export default NavBar;
