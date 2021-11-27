import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../../Service/Service';


const HomeService = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://nameless-springs-26061.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div id="services" className="container">
            <h2 className="fw-bold text-primary my-5">Our Provided Services</h2>

            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    services.slice(0, 6).map(service => <Service
                        key={service._id}
                        service={service}></Service>)
                }
            </Row>
        </div>
    );
};
export default HomeService;