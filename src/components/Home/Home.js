import React from 'react';
import banner from '../../images/banner/weddingbanner.jpg';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <div>
            <img src={banner} alt="" />
            </div>
            <div>
               <Services></Services>
            </div>
        </div>
    );
};

export default Home;