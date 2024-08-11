import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import HomeImage from '/aboutus.jpg'; // Adjust path as per your project structure
import Pic2 from '/pic2.jpg';
import Pic4 from '/pic4.jpg';
import Pic6 from '/pic6.jpg';
import Pic7 from '/pic7.jpg';
import { auth, db } from '../firebaseconfig/firebase'; // Importing Firebase config
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore';

const Home = () => {
    const adminEmail = "admin@example.com";

    const [backgroundMediaUrl, setBackgroundMediaUrl] = useState('https://images.pexels.com/photos/8236570/pexels-photo-8236570.jpeg?auto=compress&cs=tinysrgb&w=600');
    const [mainImageUrl, setMainImageUrl] = useState(HomeImage); // Default main image
    const [isVideoBackground, setIsVideoBackground] = useState(false); // Boolean to check if the background is a video
    const [showBackgroundDialog, setShowBackgroundDialog] = useState(false);
    const [showMainImageDialog, setShowMainImageDialog] = useState(false);
    const [newMediaUrl, setNewMediaUrl] = useState('');
    const [newMainImageUrl, setNewMainImageUrl] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setCurrentUser(user.email);
                setIsAdmin(user.email === adminEmail);
            } else {
                setCurrentUser(null);
                setIsAdmin(false);
            }
        });

        const fetchBackgroundMedia = async () => {
            try {
                const docRef = doc(collection(db, 'settings'), 'background');
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setBackgroundMediaUrl(data.backgroundMediaUrl || '');
                    setMainImageUrl(data.mainImageUrl || '');
                    setIsVideoBackground(data.isVideoBackground || false); // Check if background is a video
                } else {
                    setBackgroundMediaUrl('');
                    setMainImageUrl('');
                    setIsVideoBackground(false);
                }
            } catch (error) {
                console.error('Error fetching background media:', error);
            }
        };

        fetchBackgroundMedia();

        return unsubscribe;
    }, []);

    const handleBackgroundUrlSubmit = async () => {
        const isVideo = newMediaUrl.endsWith('.mp4');
        setBackgroundMediaUrl(newMediaUrl);
        setIsVideoBackground(isVideo);
        setShowBackgroundDialog(false);
        setNewMediaUrl('');

        const docRef = doc(collection(db, 'settings'), 'background');
        await updateDoc(docRef, { backgroundMediaUrl: newMediaUrl, isVideoBackground: isVideo });
    };

    const handleMainImageUrlSubmit = async () => {
        setMainImageUrl(newMainImageUrl);
        setShowMainImageDialog(false);
        setNewMainImageUrl('');

        const docRef = doc(collection(db, 'settings'), 'background');
        await updateDoc(docRef, { mainImageUrl: newMainImageUrl });
    };

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background Media */}
            {isVideoBackground ? (
                <video
                    className="absolute inset-0 w-full h-full object-cover -z-10"
                    src={backgroundMediaUrl}
                    autoPlay
                    loop
                    muted
                />
            ) : (
                <div
                    className="absolute inset-0 bg-cover bg-center -z-10"
                    style={{ backgroundImage: `url(${backgroundMediaUrl})` }}
                />
            )}

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
                {/* Conditional rendering of background image dialog for admin */}
                {isAdmin && (
                    <div className="w-full flex justify-center mt-4">
                        <button
                            className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg mt-4 mr-4"
                            onClick={() => setShowBackgroundDialog(true)}
                        >
                            Change Background Media
                        </button>
                        <button
                            className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg mt-4"
                            onClick={() => setShowMainImageDialog(true)}
                        >
                            Change Main Image
                        </button>
                    </div>
                )}

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-semibold text-gray-300 mb-2 mt-3 rounded-full p-3 gradient-background2 shadow-teal">
                        Welcome to Riverside Church Westville SA
                    </h1>
                    <div className="relative rounded-lg overflow-hidden p-3 sm:p-5 flex justify-center">
                        <img src='/HomeQuote.jpg' alt="Home Image" style={{ borderRadius: '0px', objectFit: 'contain', width: '350px', height: '300px' }} />
                    </div>

                    <div className="relative rounded-lg overflow-hidden p-3 sm:p-5 zoom">
                        <img src={mainImageUrl} alt="Main Image" style={{ borderRadius: '20px', objectFit: 'cover', width: '500px', height: '500px' }} />
                    </div>

                    <div className="flex justify-center space-x-4 mt-4">
                        <a href="https://www.facebook.com/Riversidechurchwestville1" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-500 text-3xl">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.youtube.com/channel/UCt9cUcS2QRvknkcwcFEVtWw" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-400 text-3xl">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                    <div className="mt-4 bg-teal-400 rounded-lg p-1">
                        <a href="https://gotcha1001.github.io/Random-Scripture/index.html" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-500 hover:text-blue-700">
                            Scripture Daily Reading
                        </a>
                    </div>
                    {/* Link to About Us */}
                    <div className="mt-4">
                        <Link to="/about-us" className="text-lg text-white hover:text-gray-300">
                            About Us
                        </Link>
                    </div>
                </div>

                {/* Carousel */}
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

                {/* Background Media Change Dialog */}
                {showBackgroundDialog && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
                            <h2 className="mb-4 text-xl font-bold">Change Background Media</h2>
                            <input
                                type="text"
                                value={newMediaUrl}
                                onChange={(e) => setNewMediaUrl(e.target.value)}
                                placeholder="Enter new background media URL"
                                className="mb-4 w-full rounded border border-gray-300 px-3 py-2"
                            />
                            <div className="flex justify-end space-x-2">
                                <button
                                    onClick={() => setShowBackgroundDialog(false)}
                                    className="bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleBackgroundUrlSubmit}
                                    className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Image Change Dialog */}
                {showMainImageDialog && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
                            <h2 className="mb-4 text-xl font-bold">Change Main Image</h2>
                            <input
                                type="text"
                                value={newMainImageUrl}
                                onChange={(e) => setNewMainImageUrl(e.target.value)}
                                placeholder="Enter new main image URL"
                                className="mb-4 w-full rounded border border-gray-300 px-3 py-2"
                            />
                            <div className="flex justify-end space-x-2">
                                <button
                                    onClick={() => setShowMainImageDialog(false)}
                                    className="bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleMainImageUrlSubmit}
                                    className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
