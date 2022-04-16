import React from 'react';
import photographer from '../../images/photography/photograper.png'
import './About.css';

const About = () => {
    return (
        <div className='container'>
            <div className='about-container'>
                <div>
                    <p>This is me</p>
                </div>
                <div>
                    <img src={photographer} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;