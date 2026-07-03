import React, { useEffect, useState } from "react";
import Jobs from "../../jobs/Jobs";

const JobCategory = () => {
  const [jobcategories, setJobcategories] = useState([]);
  useEffect(() => {
    const url = "categories.json";
    const loading_data = async () => {
      const fetch_data = await fetch(url);
      const jobcat = await fetch_data.json();
      setJobcategories(jobcat);
    };
    loading_data();
  }, []);

  return (
    <div>
      <div className="text-center p-10">
        <h2 className="text-5xl font-semibold p-5">Job Category List</h2>
        <p>
          Apply for job any time from any where.Jobs are waiting for skilled
          people
        </p>
        <div className="flex py-10">
          {
            jobcategories.map((jobscat)=><Jobs key={jobscat.id} jobscat={jobscat}></Jobs>)
          }
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default JobCategory;
