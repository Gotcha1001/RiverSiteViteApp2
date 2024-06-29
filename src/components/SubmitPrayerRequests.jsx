import React, { useState, useEffect } from 'react';
import { db, auth, Timestamp } from '../firebaseconfig/firebase'; // Import Timestamp
import { addDoc, collection } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const SubmitPrayerRequest = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [picUrl, setPicUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserName(user.displayName || user.email);
            } else {
                setUserName('');
            }
        });

        return () => unsubscribe();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Store date as a Timestamp
            const date = Timestamp.now();

            await addDoc(collection(db, 'prayer-requests'), {
                userName,
                title,
                content,
                picUrl,
                date, // Store date as Timestamp
                approved: false, // Ensure approved is set to false
            });

            setTitle('');
            setContent('');
            setPicUrl('');
            setError(null);

            alert('Prayer request submitted successfully');
            navigate('/'); // Redirect to home after successful submission
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-black h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit} className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-lg shadow-md w-full max-w-lg mx-auto text-white gradient-background">
                <h2 className="text-2xl font-bold mb-4">Submit a Prayer Request</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="mb-4">
                    <label className="block text-gray-200 font-semibold mb-2">Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-200 font-semibold mb-2">Content:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        placeholder="Enter your prayer request here..."
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-40 resize-none"
                        style={{ whiteSpace: 'pre-line', wordBreak: 'break-word' }}
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-200 font-semibold mb-2">Picture URL:</label>
                    <input
                        type="text"
                        value={picUrl}
                        onChange={(e) => setPicUrl(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex justify-between">
                    <button
                        type="button"
                        onClick={() => navigate('/')}
                        className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={loading}
                        className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SubmitPrayerRequest;
