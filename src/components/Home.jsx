import React from 'react';
import { Carousel } from 'react-bootstrap';
import HomeImage from '/HomeImage.jpg';
import Pic2 from '/pic2.jpg';
import Pic4 from '/pic4.jpg';
import Pic6 from '/pic6.jpg';
import Pic7 from '/pic7.jpg';


// Rest of your component code remains the same


const Home = () => {
    return (
        <div className="home flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black to-white">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-semibold text-white mb-2 mt-3">Welcome to Riverside Home Page</h1>
                <h2 className="text-lg text-gray-300 mb-4">Life is loving</h2>
                <div className="relative  rounded-lg overflow-hidden p-3 sm:p-5 zoom">
                    <img src={HomeImage} alt="Home Image" style={{ borderRadius: '20px', objectFit: 'cover', width: '500px', height: '500px' }} />
                </div>
                <a href="https://www.facebook.com/Riversidechurchwestville1" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline block mt-4 text-lg">Visit us on Facebook</a>
            </div>

            <Carousel interval={1000} controls={false} indicators={false} style={{ maxWidth: '800px', margin: 'auto', marginTop: '15px', marginBottom: '50px' }}>
                <Carousel.Item>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={Pic2} alt="Image 2" style={{ borderRadius: '10px', objectFit: 'cover', width: '100%', height: '100%' }} />
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={Pic4} alt="Image 4" style={{ borderRadius: '10px', objectFit: 'cover', width: '100%', height: '100%' }} />
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={Pic6} alt="Image 6" style={{ borderRadius: '10px', objectFit: 'cover', width: '100%', height: '100%' }} />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={Pic7} alt="Image 7" style={{ borderRadius: '10px', objectFit: 'cover', width: '100%', height: '100%' }} />
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;
