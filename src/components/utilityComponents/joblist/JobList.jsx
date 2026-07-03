import React from 'react';
import JobCategory from '../jobscategory/JobCategory';
import FeaturedJobs from '../../featuredjobs/FeaturedJobs';

const JobList = () => {
    return (
        <div>
            <JobCategory></JobCategory>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default JobList;