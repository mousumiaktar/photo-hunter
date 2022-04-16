import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    return (
        <div className='container'>
            <span><h2>Most relevant Services</h2></span>
            <CardGroup>
            <div className='services-container'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
            </CardGroup>
        </div>
    );
};

export default Services;