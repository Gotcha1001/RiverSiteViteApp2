import React, { useState } from 'react';

export default function Resources() {
    const [flipped, setFlipped] = useState({ courses: false, kidsVibe: false });

    const handleFlip = (type) => {
        setFlipped((prevState) => ({ ...prevState, [type]: true }));
    };

    const handleReset = (type) => {
        setFlipped((prevState) => ({ ...prevState, [type]: false }));
    };

    return (
        <div className="container mx-auto p-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Resources</h1>
            <p className="text-lg mb-6">
                All Sunday Messages are available on our <a href="https://www.facebook.com/Riversidechurchwestville1" className="text-blue-600 underline">Facebook Live page</a>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center mb-6">
                <div className="w-full sm:w-1/2 p-4">
                    <h2 className="text-3xl font-bold mb-2">Courses</h2>
                    <div className="relative w-full h-96 perspective">
                        <div
                            className={`absolute inset-0 w-full h-full rounded shadow-lg transition-transform duration-700 transform ${flipped.courses ? 'rotate-y-180' : ''
                                }`}
                            onMouseEnter={() => handleFlip('courses')}
                            onMouseLeave={() => handleReset('courses')}
                        >
                            <img
                                src="https://riversidechurch.org.za/wp-content/uploads/2019/02/CS-Welcome-Slide.jpg"
                                alt="Courses"
                                className="w-full h-full object-cover rounded cursor-pointer"
                                style={{ maxHeight: '100%', maxWidth: '100%' }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">The Caring Seminar Part 1</h3>
                <p className="text-lg mb-2">Download the PDF:</p>
                <a
                    href="https://riversidechurch.org.za/wp-content/uploads/2019/02/CS_P1_pg1-6.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
                >
                    Download PDF
                </a>
            </div>

            <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">The Caring Seminar Part 2</h3>
                <p className="text-lg mb-2">Listen to the Audio:</p>
                <a
                    href="https://riversidechurch.org.za/wp-content/uploads/2019/02/The-Caring-Seminar-Part-2.mp3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
                >
                    Listen Audio
                </a>
            </div>

            <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">The Caring Seminar Part 3</h3>
                <p className="text-lg mb-2">Listen to the Audio:</p>
                <a
                    href="https://riversidechurch.org.za/wp-content/uploads/2019/03/The-Caring-Seminar-Part-3.mp3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
                >
                    Listen Audio
                </a>
            </div>

            <div>
                <h3 className="text-xl font-bold mb-2">The Caring Seminar Part 4</h3>
                <p className="text-lg mb-2">Listen to the Audio:</p>
                <a
                    href="https://riversidechurch.org.za/wp-content/uploads/2019/03/The-Caring-Seminar-Part-4.mp3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
                >
                    Listen Audio
                </a>
            </div>
        </div>
    );
}
