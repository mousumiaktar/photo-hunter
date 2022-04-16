import React from 'react';
import photographer from '../../images/photography/photographer2.png';
import './About.css';

const About = () => {
    return (
        <div className='container'>
            <div className='about-container'>
                <div className='mt-5'>
                    <h1>About me</h1>
                    <p>Hi, I'm Mousumi Aktar Mou from Dinajpur, Bangladesh. I'm thirsty to learn web-developing. I want to bea a web-developer from core of my heart as it's my adorable dream. It is not easy to be a web-developer but by working hard everything is possible to a dream hunter.</p>
                </div>
                <div>
                    <img src={photographer} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;