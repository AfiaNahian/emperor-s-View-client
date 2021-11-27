import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/Banner/1.jpg';
import banner2 from '../../../images/Banner/2.jpg';
import banner3 from '../../../images/Banner/3.jpg'

const Banner = () => {
    return (
        <div className="container mb-5">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-white">We care for your vision and Fashion</h3>
                        <p className="text-white">Let's make you vision wonderful.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-white">We Provide you the best service</h3>
                        <p className="text-white">We will manage your preffered camera according to your taste.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-white">Our customers are our first priority</h3>
                        <p className="text-white">We have several designs of different types.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;