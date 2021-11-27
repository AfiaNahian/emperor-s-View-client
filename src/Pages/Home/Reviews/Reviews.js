import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Review from '../Review/Review';



const Reviews = () => {
    const [reviews, setReview] = useState([])
    useEffect(() => {
        fetch('https://nameless-springs-26061.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReview(data));
    }, [])
    return (
        <div id="services" className="container">
            <h2 className="fw-bold text-primary my-5">Our Customer Reviews</h2>

            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </Row>
        </div>
    );
};
export default Reviews;