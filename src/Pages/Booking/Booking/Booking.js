import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useParams, useHistory } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import './Booking.css'

const Booking = () => {
    const { user } = useAuth();
    const { serviceId } = useParams();
    const [service, setService] = useState([])
    // const [singleService, setSingle] = useState({})
    useEffect(() => {
        fetch(`https://nameless-springs-26061.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    const history = useHistory();
    const handleClick = () => {
        history.push('/Home');
    }
    const confirm = () => {

        const data = service;
        data.email = user.email;
        data.buyerName = user.displayName;
        console.log(data);
        fetch("https://nameless-springs-26061.herokuapp.com/order", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.email) {
                    alert('Successfully placed the order')
                }
            })

    }
    return (
        <div className="container">
            <h2 className="text-success fw-bold">Please Book your service</h2>
            <Row xs={1} md={2} lg={2} className="g-4">
                <Col>
                    <Card className="shadow" style={{ height: '500px' }}>
                        <div>
                            <Card.Img style={{ height: '200px' }} variant="top" src={service?.img} />
                        </div>
                        <div>
                            <Card.Body style={{ height: '230px' }} className="fw-bold">
                                <Card.Title className="text-secondary">{service?.name}</Card.Title>
                                <p className="text-success">{service?.description}</p>
                                <p className="text-danger">Days :{service?.price}</p>
                            </Card.Body>

                        </div>
                    </Card>
                </Col>
            </Row>
            <br />
            <button className="btn" onClick={confirm}>Comfirm Booking</button>
            <br />
            <button className="btn" onClick={handleClick}>See All services</button>
        </div>
    );
};
export default Booking;