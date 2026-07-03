import React, { useEffect, useState } from "react";
import Appliedjob from "./Appliedjob";

const Appliedjobs = () => {
  const [jobs, setjobs] = useState([]);
  const [showall, setShowall] = useState(false);
  useEffect(() => {
    const url = "jobs.json";
    const loading_data = async () => {
      const fetch_data = await fetch(url);
      const jobs_data = await fetch_data.json();
      setjobs(jobs_data);
    };
    loading_data();
  }, []);
  const handlshowAll = () => {
    setShowall(true);
  };
  const displayll = showall ? jobs : jobs.slice(0, 4)
  return (
    <div>
      <div className="grid md:grid-cols-2 justify-around">
        {displayll.map((job) => (
          <Appliedjob key={job.id} job={job}></Appliedjob>
        ))}
      </div>
      <div>
        {!showall && (
          <button
            onClick={handlshowAll}
            className="btn btn-primary"
          >
            Show All
          </button>
        )}
      </div>
    </div>
  );
};

export default Appliedjobs;
