import React from "react";
import profilepic from "../../../assets/user.png";

const Banner = () => {
  return (
    <div>
      <section className="md:grid grid-cols-2">
        <div className="text-left py-10 px-10">
          <div className="py-10">
            <h1 className="text-5xl text-black font-semibold">
              One Step <br /> Closer To Your
            </h1>
            <h1 className="text-5xl font-semibold text-purple-800">
              Dream Job
            </h1>
          </div>
          <p className=" py-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore.
          </p>
          <button className="btn btn-active btn-secondary bg-purple-500 rounded-sm">
            Get Started
          </button>
        </div>
        <div>
          <img src={profilepic} alt="pic" />
        </div>
      </section>
      
    </div>
  );
};

export default Banner;
