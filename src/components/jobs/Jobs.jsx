import React from "react";

const Jobs = ({ jobscat }) => {
  const { logo, category_name, availability } = jobscat;
  return (
    <div className="p-4 ">
      <div className="card bg-base-100 w-60 shadow-sm">
        <figure>
          <img className="rounded-2xl w-35"
            src={logo}
            alt="pic"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-xl card-title">{category_name}</h2>
          <p className="text-left text-gray-500">
            {availability}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
