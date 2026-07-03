import React from "react";
import { Link } from "react-router-dom";

const Appliedjoblistdisplay = ({ appliedjob }) => {
  const {id, job_title, logo, location } = appliedjob;
  return (
    <div>
      <div className="flex justify-between">
        <div className="p-4 my-4 bg-purple-100 border-2 border-pink-100 rounded-2xl">
          <h1>Job Title: {job_title}</h1>
          <img src={logo} alt="" />
          <h1>Location: {location}</h1>
        </div>
        <div>
            <Link to={`/jobdetails/${id}`}><button className="btn btn-primary">Show Details</button></Link>
            
        </div>
      </div>
    </div>
  );
};

export default Appliedjoblistdisplay;
