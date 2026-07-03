import React from 'react';
import Banner from '../utilityComponents/banner/Banner';
import JobList from '../utilityComponents/joblist/JobList';
import JobCategory from '../utilityComponents/jobscategory/JobCategory';
import Appliedjobs from '../appliedjobs/Appliedjobs';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>JobHub|Home</title>
            </Helmet>
            <Banner></Banner>
            <JobList></JobList>
            <Appliedjobs></Appliedjobs>
        </div>
    );
};

export default Home;