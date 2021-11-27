import React from 'react';
import Banner from '../Banner/Banner';
import FAQ from '../FAQ/FAQ';
import HomeService from '../HomeService/HomeService';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <h1 className="fw-bold py-5">Welcome to our shop</h1>
            <Banner></Banner>
            <HomeService></HomeService>
            <Reviews></Reviews>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;