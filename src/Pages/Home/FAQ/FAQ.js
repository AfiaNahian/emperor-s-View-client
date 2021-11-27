import React from 'react';
import { Accordion } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div id="FAQ">
            <section className="container py-3 my-5">
                <h1 className="fw-bold py-5">Frequently asked questions</h1>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is the cost of printing pictures? </Accordion.Header>
                        <Accordion.Body>
                            The main costs of printing your own pictures are the costs of the printer ink and of glossy photo paper. The major advantage of digital cameras is the ability to take multiple pictures at no extra cost and then printing only the best ones. Some traditional film developers (Walmart and Costco) have started offering printing of digital photos at about the same prices as their conventional film development. There are also online companies that can print out uploaded pictures and send them back to you by mail.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Will my printer be able to handle high-resolution digital photos?</Accordion.Header>
                        <Accordion.Body>
                            With a relatively new printer, the resolution should not be a concern. However, you should consider a "photo" printer since they are specifically made for printing pictures and are generally considered to produce better pictures. You will need glossy paper and a paper cutter to cut out the pictures (faster and much more accurate than scissors).
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>WHAT SHOULD I DO IF I NOTICE CONDENSATION OR WATER UNDER THE WATCH GLASS?</Accordion.Header>
                        <Accordion.Body>
                            Please contact an authorised specialist retailer immediately. They can dry out your camera on site and determine whether the moisture or water has already caused damage to the movement.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What is lens aperture?</Accordion.Header>
                        <Accordion.Body>
                            Lens aperture or the f-number is the ratio of the focal length of the lens to the diameter of the light rays passing through the aperture in the iris diaphragm. Smaller numbers represent bigger openings and allow more light to pass through. F-number settings are adjustable; lenses are marked with their maximum aperture (lowest f-number).
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </section>
        </div>
    );
};

export default FAQ;