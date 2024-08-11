import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseconfig/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";


export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for burger menu


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
        setIsMenuOpen(false); // Close the menu when a link is clicked
    };

    const logout = async () => {
        try {
            await signOut(auth);
            navigate("/"); // Redirect to the home page after logout
        } catch (error) {
            console.error(error);
        }
    };


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
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
                <div className="flex items-center justify-center flex-col md:flex-row">
                    <Link to="/" className="mb-1 md:mb-0 zoom horizontal-spin navbar-logo" onClick={playClickSound}>
                        <img
                            src="/NavbarLogo.png"
                            alt="Main Image"
                            className="navbar-logo"
                        />
                    </Link>

                    {/* Burger Menu Button in its own div, centered */}
                    <div className="flex justify-center mt-2 md:mt-0 ml-3">
                        <button
                            className="block md:hidden"
                            onClick={toggleMenu}
                        >
                            <svg
                                className="w-8 h-8 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu Items */}
            <div
                className={`flex-col md:flex md:flex-row md:items-center md:space-x-4 ${isMenuOpen ? 'block' : 'hidden'} md:block`}
            >
                <ul className="navbar-links flex items-center">
                    <li>
                        <NavLink to="/worship" onClick={playClickSound} className={({ isActive }) =>
                            isActive ? "active-link" : ""
                        }>
                            Our Worship
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/daily-posts"
                            onClick={playClickSound}
                            className={({ isActive }) =>
                                `neon-sky p-1 rounded-md ${isActive ? "active-link" : ""}`
                            }
                        >
                            Daily Posts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/givings" onClick={playClickSound} className={({ isActive }) =>
                            isActive ? "active-link" : ""
                        }>
                            Giving
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" onClick={playClickSound} className={({ isActive }) =>
                            isActive ? "active-link" : ""
                        }>
                            Service Times
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact-us" onClick={playClickSound} className={({ isActive }) =>
                            isActive ? "active-link" : ""
                        }>
                            Contact Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/facebook-live" onClick={playClickSound} className={({ isActive }) =>
                            isActive ? "active-link" : ""
                        }>
                            Shared Videos
                        </NavLink>
                    </li>

                    {user && user.email === adminEmail && (
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
                                        <NavLink
                                            to="/upload-video"
                                            className={({ isActive }) =>
                                                isActive ? "active-link block px-4 py-2" : "block px-4 py-2"
                                            }
                                            onClick={playClickSound}
                                        >
                                            Upload Video
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/alter-uploads"
                                            className={({ isActive }) =>
                                                isActive ? "active-link block px-4 py-2" : "block px-4 py-2"
                                            }
                                            onClick={playClickSound}
                                        >
                                            Alter Video
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/add-post"
                                            className={({ isActive }) =>
                                                isActive ? "active-link block px-4 py-2" : "block px-4 py-2"
                                            }
                                            onClick={playClickSound}
                                        >
                                            Create Daily Post
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/update-daily-post"
                                            className={({ isActive }) =>
                                                isActive ? "active-link block px-4 py-2" : "block px-4 py-2"
                                            }
                                            onClick={playClickSound}
                                        >
                                            Update Daily Post
                                        </NavLink>
                                    </li>
                                </ul>
                            )}
                        </li>
                    )}

                    {user ? (
                        <>
                            <li className="welcome-item mx-4 bg-teal-500 rounded p-1 text-center hover:bg-teal-700 text-white">
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
                                <NavLink to="/login" onClick={playClickSound} className={({ isActive }) =>
                                    isActive ? "active-link" : ""
                                }>
                                    Login
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/register" onClick={playClickSound} className={({ isActive }) =>
                                    isActive ? "active-link" : ""
                                }>
                                    Register
                                </NavLink>
                            </li>
                        </>
                    )}

                    {/* Adding Facebook and YouTube icons */}
                    <li className="ml-4 navbar-social-icon facebook zoom">
                        <a href="https://www.facebook.com/Riversidechurchwestville1" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </li>
                    <li className="ml-4 navbar-social-icon youtube zoom">
                        <a href="https://www.youtube.com/channel/UCt9cUcS2QRvknkcwcFEVtWw" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}    