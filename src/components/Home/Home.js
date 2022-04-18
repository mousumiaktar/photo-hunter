import React from 'react';
import banner from '../../images/banner/banner.png';
import Services from '../Services/Services';
import Singlepage from '../Singlepage/Singlepage';
import './Home.css';


const Home = () => {
    return (
        <div>
            <div className='img-container'>
            <img src={banner} alt="" />
            </div>
            <div>
                <Singlepage></Singlepage>
               <Services></Services>
            </div>
        </div>
    );
};

export default Home;