import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div>
            <h3>Ooops!!</h3>
            <Link to={'/'}><button className="btn btn-outline btn-info">back</button></Link>
        </div>
    );
};

export default Errorpage;