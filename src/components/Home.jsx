import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { ReactTyped} from "react-typed";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-2xl bg-gradient-to-b from-black via-black to-gray-800 space-y-2 order-2"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <div className="text-4xl sm:text-7xl font-bold text-white ">
             <h2>I'm a Full Stack</h2>
             <ReactTyped 
             className="text-red-700" 
          strings={["Developer","Programmer","Coder"]}
          typeSpeed={10}
          backSpeed={20}
          loop={true}
        />
          </div> 
          <br/>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={200}
              className="group text-white w-fit px-4 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-300 to-blue-400 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-10 duration-200">
                <MdOutlineKeyboardArrowRight size={15} className="ml-1" />
              </span>
            </Link>
          </div>
          </div>

        <div className=" mx:w-1/2 ml-48 mt-25 order-1">
          <img
            src={HeroImage}
            smooth          
            alt="my profile"
            className="rounded-full"         
            
          />
        </div>
      </div>
      </div>
  );
};

export default Home;
