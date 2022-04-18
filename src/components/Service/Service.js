import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, id, picture, description, price } = service;

    return (

        <div>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={picture}/>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <h5>price: ${price}</h5>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>        
                    <Card.Footer>
                    <Link to={'/cheakout/' + id}><button className='rounded'>Show Details</button></Link>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Service;