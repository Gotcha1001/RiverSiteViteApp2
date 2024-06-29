import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebaseconfig/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const [user, setUser] = useState(null);
    const [isDropdownOpenPrayer, setIsDropdownOpenPrayer] = useState(false);
    const [isDropdownOpenUpdate, setIsDropdownOpenUpdate] = useState(false);
    const dropdownRefPrayer = useRef(null);
    const dropdownRefUpdate = useRef(null);
    const adminEmail = "admin@example.com";
    const clickSoundRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        clickSoundRef.current = new Audio("/click.mp3");

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRefPrayer.current &&
                !dropdownRefPrayer.current.contains(event.target)
            ) {
                setIsDropdownOpenPrayer(false);
            }
            if (
                dropdownRefUpdate.current &&
                !dropdownRefUpdate.current.contains(event.target)
            ) {
                setIsDropdownOpenUpdate(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const playClickSound = () => {
        clickSoundRef.current.play();
    };

    const logout = async () => {
        try {
            await signOut(auth);
            navigate("/"); // Redirect to the home page after logout
        } catch (error) {
            console.error(error);
        }
    };

    const toggleDropdownPrayer = () => {
        setIsDropdownOpenPrayer(!isDropdownOpenPrayer);
    };

    const toggleDropdownUpdate = () => {
        setIsDropdownOpenUpdate(!isDropdownOpenUpdate);
    };

    return (
        <nav className="navbar">
            <div className="navbar-title mx-3">
                <Link to="/" onClick={playClickSound}>
                    River Side
                </Link>
            </div>
            <ul className="navbar-links flex items-center">
                {user ? (
                    <>
                        <li className="relative" ref={dropdownRefPrayer}>
                            <button onClick={toggleDropdownPrayer} className="worship-link">
                                Prayer Requests
                            </button>
                            {isDropdownOpenPrayer && (
                                <ul
                                    className="absolute bg-gray-800 text-white rounded mt-2 shadow-lg"
                                    onMouseEnter={() => setIsDropdownOpenPrayer(true)}
                                    onMouseLeave={() => setIsDropdownOpenPrayer(false)}
                                >
                                    <li>
                                        <Link
                                            to="/prayer-request"
                                            className="block px-4 py-2 hover:scale-105 transition-transform border-b border-gray-600"
                                            onClick={playClickSound}
                                        >
                                            View Prayer Requests
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/submit-prayer-requests"
                                            className="block px-4 py-2 hover:scale-105 transition-transform border-b border-gray-600"
                                            onClick={playClickSound}
                                        >
                                            Submit Prayer Request
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <Link to="/worship" onClick={playClickSound}>
                                Our Worship
                            </Link>
                        </li>
                        <li>
                            <Link to="/daily-posts" onClick={playClickSound}>
                                Daily Posts
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" onClick={playClickSound}>
                                Service Times
                            </Link>
                        </li>
                        {user.email === adminEmail && (
                            <li className="relative" ref={dropdownRefUpdate}>
                                <button onClick={toggleDropdownUpdate} className="upload-link">
                                    Update Site
                                </button>
                                {isDropdownOpenUpdate && (
                                    <ul
                                        className="absolute bg-gray-800 text-white rounded mt-2 shadow-lg"
                                        onMouseEnter={() => setIsDropdownOpenUpdate(true)}
                                        onMouseLeave={() => setIsDropdownOpenUpdate(false)}
                                    >
                                        <li>
                                            <Link
                                                to="/upload-video"
                                                className="block px-4 py-2 hover:scale-105 transition-transform border-b border-gray-600"
                                                onClick={playClickSound}
                                            >
                                                Upload Video
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/alter-uploads"
                                                className="block px-4 py-2 hover:scale-105 transition-transform border-b border-gray-600"
                                                onClick={playClickSound}
                                            >
                                                Alter Video
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/update-prayer-requests"
                                                className="block px-4 py-2 hover:scale-105 transition-transform border-b border-gray-600"
                                                onClick={playClickSound}
                                            >
                                                Alter Prayer Requests
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/add-post"
                                                className="block px-4 py-2 hover:scale-105 transition-transform border-b border-gray-600"
                                                onClick={playClickSound}
                                            >
                                                Create Daily Post
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/update-daily-post"
                                                className="block px-4 py-2 hover:scale-105 transition-transform border-b border-gray-600"
                                                onClick={playClickSound}
                                            >
                                                Update Daily Post
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        )}
                        <li>
                            <Link to="/contact-us" onClick={playClickSound}>
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/facebook-live" onClick={playClickSound}>
                                Facebook Live
                            </Link>
                        </li>
                        <li className="mx-4 bg-teal-500 rounded p-1 text-center hover:bg-teal-700 text-white">
                            Welcome, {user.email}
                        </li>
                        <li>
                            <button onClick={logout} className="logout-button">
                                Logout
                            </button>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/login" onClick={playClickSound}>
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link to="/register" onClick={playClickSound}>
                                Register
                            </Link>
                        </li>
                    </>
                )}
                {/* Adding Facebook and YouTube icons */}
                <li className="ml-4">
                    <a href="https://www.facebook.com/Riversidechurchwestville1" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-500 text-2xl">
                        <i className="fab fa-facebook"></i>
                    </a>
                </li>
                <li className="ml-4">
                    <a href="https://www.youtube.com/channel/UCt9cUcS2QRvknkcwcFEVtWw" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-400 text-2xl">
                        <i className="fab fa-youtube"></i>
                    </a>
                </li>
            </ul>
        </nav>
    );
}
