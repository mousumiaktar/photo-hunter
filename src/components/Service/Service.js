import React from 'react';
import { Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Service.css';

const Service = ({ service }) => {
    const { name, picture, description, price } = service;
    const navigate = useNavigate();

    const [user] = useAuthState(auth);

    const handleButtonNavigate = () =>{
        if(user){
            navigate('/cheakout');
        }
        else{
            navigate('/login');
        }
        
    }

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
                    <button onClick={handleButtonNavigate}>Click here </button>
                </Card.Footer>
            </Card>

        </div>
    );
};

export default Service;