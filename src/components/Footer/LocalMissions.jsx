// LocalMissions.jsx

import React from 'react';


const LocalMissions = () => {
    return (
        <div className="container py-4">
            <h2 className="text-3xl font-bold mb-4 text-center">Local Missions</h2>
            <h3 className="text-xl font-bold mb-2 text-center">Banana City</h3>
            <p className="text-lg mb-4 text-center">
                Riverside established a Christian pre-school in the area that caters for approximately 40 children – it is one of the “Safe & Sound” schools all over South Africa.
            </p>
            <div className="text-center">
                <img src="https://images.pexels.com/photos/5945848/pexels-photo-5945848.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Banana City" className="mx-auto rounded-lg shadow-lg" style={{ maxWidth: '100%', maxHeight: 'auto' }} />
            </div>
        </div>
    );
}

export default LocalMissions;
