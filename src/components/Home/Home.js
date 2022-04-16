import React from 'react';
import banner from '../../images/banner/weddingbanner.jpg';

const Home = () => {
    return (
        <div>
            <img src={banner} alt="" />
            <div>
               <h2> Most relavent services</h2>
            </div>
        </div>
    );
};

export default Home;