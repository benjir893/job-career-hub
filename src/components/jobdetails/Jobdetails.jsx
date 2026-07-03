import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollar, AiOutlineMail } from "react-icons/ai";
import { MdOutlineSubtitles } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { ImAddressBook } from "react-icons/im";
import { ToastContainer, toast } from 'react-toastify';
import { setAppliedJobs } from "../localstorage/localStorage";

const Jobdetails = () => {
  const { id } = useParams();
  const jobs = useLoaderData();
  const job = jobs.find((job) => job.id === Number(id));
  const { logo, job_title, company_name, job_description, job_responsibility, educational_requirements, experiences, salary, phone, email, address } = job;
  const handltoastify=()=>{
        setAppliedJobs(id)
        toast('You have applied Successfully')
  }
  return (
    <div>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3 p-4">
          <h2><span className="text-xl">job Description:</span> {job_description}</h2>
          <img src={logo} alt="" />
          <h2><span className="text-xl">job Responsibility:</span>{job_responsibility}</h2>
          <h2><span className="text-xl">Education Requirements: </span>{educational_requirements}</h2>
          <h2><span className="text-xl">Experience: </span>{experiences}</h2>
        </div>
        <div className="col-span-1 bg-purple-200 p-4 mt-2 mb-4 rounded-2xl">
            <h1 className="font-bold">Job Details</h1>
            <div className="p-2 text-gray-500 text-xl">
                <hr/>
            </div>
            <h2 className="flex gap-1"><AiOutlineDollar className="bg-purple-100 text-2xl p-1 mt-1" /><span>Salary: {salary} (per month )</span></h2>
            <h2 className="flex gap-1"><MdOutlineSubtitles className="bg-purple-100 text-2xl p-1 mt-1" /><span className="text-sm">Job Title: {job_title}</span></h2>
            <h1 className="font-semibold p-2">Contact Information</h1> 
            <div className="p-2 text-gray-500 text-xl">
                <hr/>
            </div>
            <h1 className="flex gap-2"><MdOutlinePhone className="bg-purple-100 text-2xl p-1 mt-1" /><span>Phone: </span>{phone}</h1>
            <h1 className="flex gap-2"><AiOutlineMail className="bg-purple-100 text-2xl p-1 mt-1" /><span>Email: </span>{email}</h1>
            <h1 className="flex gap-2"><ImAddressBook className="bg-purple-100 text-2xl p-1 mt-1" /><span>Address:{address} </span></h1>
            <div>
                <button onClick={handltoastify} className="btn btn-primary w-full mt-4">Apply Now</button>
                <ToastContainer />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Jobdetails;
