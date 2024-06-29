import React, { useState, useEffect } from 'react';
import { db, auth, Timestamp } from '../firebaseconfig/firebase'; // Import Timestamp
import { doc, updateDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

const PrayerRequestForm = ({ prayerRequest, onRequestUpdated, onCancel }) => {
    const [title, setTitle] = useState(prayerRequest.title);
    const [content, setContent] = useState(prayerRequest.content);
    const [picUrl, setPicUrl] = useState(prayerRequest.picUrl);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [userName, setUserName] = useState('');

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
            // Update date as a Timestamp
            const date = Timestamp.now();

            // Update existing document in Firestore
            const prayerRequestRef = doc(db, 'prayer-requests', prayerRequest.id);
            await updateDoc(prayerRequestRef, {
                userName,
                title,
                content,
                picUrl,
                date, // Update date as Timestamp
            });

            setError(null);

            // Notify parent component that the request has been updated
            onRequestUpdated();
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="prayer-request-form">
            <h2 className="text-2xl font-bold mb-4 text-white">Edit Prayer Request</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="mb-4">
                <label className="text-gray-700 font-semibold mb-2">Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label className="text-gray-700 font-semibold mb-2">Content:</label>
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
                <label className="text-gray-700 font-semibold mb-2">Picture URL:</label>
                <input
                    type="text"
                    value={picUrl}
                    onChange={(e) => setPicUrl(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            {/* Display Date */}
            <p className="text-gray-900 text-sm mb-2">Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <div className="flex justify-between">
                <button
                    type="button"
                    onClick={onCancel}
                    className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    disabled={loading}
                    className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                >
                    {loading ? 'Saving Changes...' : 'Save Changes'}
                </button>
            </div>
        </form>
    );
};

export default PrayerRequestForm;
