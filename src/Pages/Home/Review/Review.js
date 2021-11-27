import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Review = ({ review }) => {
    const { name, description } = review;

    return (
        <div>
            <Col>
                <Card className="shadow" style={{ height: '500px' }}>

                    <Card.Body style={{ height: '230px' }} className="fw-bold">
                        <Card.Title className="text-secondary">{name}</Card.Title>
                        <p className="text-success">{description}</p>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Review;