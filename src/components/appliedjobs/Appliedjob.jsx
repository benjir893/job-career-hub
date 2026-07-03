import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Appliedjob = ({job}) => {
    const{id, logo,job_title,company_name,remote_or_onsite,location,job_type,salary}=job
    return (
        <div>
            <Helmet>
                <title>JobHub|Appliedjob</title>
            </Helmet>
            <div className='p-10'>
                <img src={logo} alt="pic" />
                <h2>{job_title}</h2>
                <h2>{company_name}</h2>
                <div className='flex gap-2'>
                    <button className="btn btn-outline btn-primary">{remote_or_onsite}</button>
                    <button className="btn btn-outline btn-primary">{job_type}</button>
                </div>
                <div className='md:flex gap-2 my-4'>
                    <p className='flex gap-1'><CiLocationOn /> <span className='mr-2'>{location}</span></p>
                    <p className='flex gap-1'><AiOutlineDollar /> {salary}</p>
                </div>
                <Link to={`/jobdetails/${id}`}><button className="btn btn-primary">View Details</button></Link>
                <Link to={`/jobdetails/${id}`}><button className="btn btn-primary">View Details json</button></Link>
            </div>
        </div>
    );
};

export default Appliedjob;