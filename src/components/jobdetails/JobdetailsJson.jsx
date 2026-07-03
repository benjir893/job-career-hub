import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobdetailsJson = () => {
    const{id} = useParams()
    const[job, setjob] = useState([])
    useEffect(()=>{
        const url = "jobs.json";
        const loading_data=()=>{
            const fetch_data = fetch(url);
            const job_data = fetch_data.json()
            const data = job_data.find((job)=> job.id === Number(id))
            setjob(data)
        }
        loading_data()
    },[])

    return (
        <div>
            <h2>{id}</h2>
            <h2>{job.job_title}</h2>
        </div>
    );
};

export default JobdetailsJson;