import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getjobItem } from "../localstorage/localStorage";
import Appliedjoblistdisplay from "./appliedjoblistdisplay";
import { Helmet } from "react-helmet-async";
const AppliedJoblist = () => {
  const jobs = useLoaderData();
  const storedjobs = getjobItem();
  const[showAppliedjobs, setShowAppliedjobs]= useState([])

  const appliedjobs = jobs.filter((job) => storedjobs.includes(job.id));
  console.log(appliedjobs);
  useEffect(()=>{
    setShowAppliedjobs(appliedjobs)
  },[])
  
  const handleAppliedjobSorting=(sort)=>{
    if(sort === 'all'){
        setShowAppliedjobs(appliedjobs)
    }else if(sort === 'remote'){
        const remoteappliedjobs = showAppliedjobs.filter((jobs)=> jobs.remote_or_onsite === 'Remote')
        setShowAppliedjobs(remoteappliedjobs)
    }else if(sort === 'onsite'){
        const onsiteappliedjobs = appliedjobs.filter((jobs)=>jobs.remote_or_onsite ==='Onsite')
        setShowAppliedjobs(onsiteappliedjobs)
    }
  }

  return (
    <div>
      <Helmet>
        <title>JobHub|Appliedjoblist</title>
      </Helmet>
      <div className="flex justify-between my-10">
        <h2>Total Applied jobs = {appliedjobs.length}</h2>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={()=>handleAppliedjobSorting('all')}>
              <a>All</a>
            </li>
            <li onClick={()=>handleAppliedjobSorting('remote')}>
              <a>Remote</a>
            </li>
            <li onClick={()=>handleAppliedjobSorting('onsite')}>
              <a>Onsite</a>
            </li>
          </ul>
        </div>
      </div>
      {
        // appliedjobs.map((appliedjob)=><h2 key={appliedjob.id}> {appliedjob.job_title}</h2>)
        showAppliedjobs.map((appliedjob) => (
          <Appliedjoblistdisplay
            key={appliedjob.id}
            appliedjob={appliedjob}
          ></Appliedjoblistdisplay>
        ))
      }
    </div>
  );
};

export default AppliedJoblist;
