import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
    const playClickSound = () => {
        const clickSound = new Audio("/click.mp3");
        clickSound.play();
    };

    return (
        <footer className="footer bg-gray-200 py-4">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
                <div className="mb-4 sm:mb-0 sm:mr-4 hover:bg-black p-2 rounded-lg text-center">
                    <h3 className="text-xl font-bold mb-2">OUR EMAIL</h3>
                    <a href="mailto:info@riversidechurch.org.za" className="text-blue-500 hover:underline mb-4 block">info@riversidechurch.org.za</a>
                </div>
                <ul className="footer-links flex flex-col sm:flex-row sm:justify-center text-center">
                    <li className="mb-4 sm:mb-0 ml-6">
                        <NavLink
                            to="/about-us"
                            onClick={playClickSound}
                            className={({ isActive }) =>
                                isActive ? "active-footer-link text-gray-900 block" : "text-gray-700 hover:text-gray-900 block"
                            }
                        >
                            About Us
                        </NavLink>

                    </li>
                    <li className="mb-4 sm:mb-0">
                        <NavLink
                            to="/baptism"
                            onClick={playClickSound}
                            className={({ isActive }) =>
                                isActive ? "active-footer-link text-gray-900 block" : "text-gray-700 hover:text-gray-900 block"
                            }
                        >
                            Baptism
                        </NavLink>

                    </li>
                    <li className="mb-4 sm:mb-0">
                        <NavLink
                            to="/fasting"
                            onClick={playClickSound}
                            className={({ isActive }) =>
                                isActive ? "active-footer-link text-gray-900 block" : "text-gray-700 hover:text-gray-900 block"
                            }
                        >
                            Fasting
                        </NavLink>

                    </li>
                    {/* <li className="mb-4 sm:mb-0 sm:ml-4">
                        <NavLink
                            to="/giving"
                            onClick={playClickSound}
                            className={({ isActive }) =>
                                isActive ? "active-footer-link text-gray-900 block" : "text-gray-700 hover:text-gray-900 block"
                            }
                        >
                            Giving
                        </NavLink>
                    </li> */}
                    <li className="mb-4 sm:mb-0 sm:ml-4">
                        <NavLink
                            to="/growth-track"
                            onClick={playClickSound}
                            className={({ isActive }) =>
                                isActive ? "active-footer-link text-gray-900 block" : "text-gray-700 hover:text-gray-900 block"
                            }
                        >
                            Growth Track
                        </NavLink>
                    </li>
                    <li className="mb-4 sm:mb-0 sm:ml-4">
                        <NavLink
                            to="/life-groups"
                            onClick={playClickSound}
                            className={({ isActive }) =>
                                isActive ? "active-footer-link text-gray-900 block" : "text-gray-700 hover:text-gray-900 block"
                            }
                        >
                            Life Groups
                        </NavLink>
                    </li>
                    <li className="mb-4 sm:mb-0 sm:ml-4">
                        <NavLink
                            to="/ministries"
                            onClick={playClickSound}
                            className={({ isActive }) =>
                                isActive ? "active-footer-link text-gray-900 block" : "text-gray-700 hover:text-gray-900 block"
                            }
                        >
                            Ministries
                        </NavLink>
                    </li>

                    <li className="mb-4 sm:mb-0 sm:ml-4">
                        <NavLink
                            to="/resources"
                            onClick={playClickSound}
                            className={({ isActive }) =>
                                isActive ? "active-footer-link text-gray-900 block" : "text-gray-700 hover:text-gray-900 block"
                            }
                        >
                            Resources
                        </NavLink>
                    </li>
                    <li className="mb-4 sm:mb-0 sm:ml-4">
                        <NavLink
                            to="/data-protection-policy"
                            onClick={playClickSound}
                            className={({ isActive }) =>
                                isActive ? "active-footer-link text-gray-900 block" : "text-gray-700 hover:text-gray-900 block"
                            }
                        >
                            Data Protection Policy
                        </NavLink>
                    </li>
                    <li className="mb-4 sm:mb-0 sm:ml-4 ">
                        <a href="https://aoggroup.org.za/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 block">
                            Assemblies of God
                        </a>
                    </li>


                </ul>
                <div className="social-icons mt-4 flex justify-center space-x-4 sm:justify-start sm:mt-0 sm:ml-8 lg:ml-16">
                    <a href="https://www.facebook.com/Riversidechurchwestville1" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-500 text-4xl m-4 wobble">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCt9cUcS2QRvknkcwcFEVtWw" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-400 text-4xl m-4 wobble">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>

                <div className="mt-8 sm:mt-0 sm:ml-8">
                    <div className="text-center sm:text-left mx-auto sm:mx-0 hover:bg-black p-2 rounded-md">
                        <h3 className="text-xl font-bold mb-2">CALL US</h3>
                        <p className='mb-3'>083 448 7334</p>
                        <p className='mb-3'>Visit us: 39 Stafford Road, Westville, 3629</p>
                    </div>
                </div>

            </div>
        </footer>
    );
}
