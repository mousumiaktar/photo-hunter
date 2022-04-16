import React from 'react';
import { Card } from 'react-bootstrap';
import './Service.css';

const Service = ({ service }) => {
    const { name, picture, description, price } = service;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description} <br />
                        <small>price: {price}</small>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Click Here</small>
                </Card.Footer>
            </Card>

        </div>
    );
};

export default Service;