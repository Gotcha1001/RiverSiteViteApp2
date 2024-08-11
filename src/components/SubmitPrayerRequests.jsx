import React, { useState, useEffect } from 'react';
import { db, auth, Timestamp } from '../firebaseconfig/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const SubmitPrayerRequest = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [userName, setUserName] = useState('');
    const [uploadProgress, setUploadProgress] = useState(0); // Track upload progress
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

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const date = Timestamp.now();

            if (image) {
                // Upload image to Firebase Storage
                const storage = getStorage();
                const storageRef = ref(storage, `prayer-requests/${image.name}`);
                const uploadTask = uploadBytesResumable(storageRef, image);

                uploadTask.on(
                    'state_changed',
                    (snapshot) => {
                        // Track upload progress
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        setUploadProgress(progress);
                    },
                    (error) => {
                        console.error('Upload failed', error);
                        setError('Failed to upload image.');
                        setLoading(false);
                    },
                    async () => {
                        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                        setImageUrl(downloadURL);
                        savePrayerRequest(date, downloadURL);
                    }
                );
            } else {
                // If no image selected, save prayer request without image URL
                savePrayerRequest(date, '');
            }
        } catch (err) {
            console.error('Error adding prayer request:', err);
            setError('Failed to add prayer request.');
            setLoading(false);
        }
    };

    const savePrayerRequest = async (date, imageUrl) => {
        try {
            // Add prayer request to Firestore
            await addDoc(collection(db, 'prayer-requests'), {
                userName,
                title,
                content,
                picUrl: imageUrl,
                date,
                approved: false,
            });

            setTitle('');
            setContent('');
            setImage(null);
            setImageUrl('');
            setError(null);

            alert('Prayer request submitted successfully, It wont be displayed untill its approved!');
            navigate('/');
        } catch (err) {
            console.error('Error adding prayer request:', err);
            setError('Failed to add prayer request.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="form-container p-6 bg-white shadow-md rounded-lg max-w-2xl mx-auto mt-10 mb-4 gradient-background">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800">Submit a Prayer Request</h2>
                    {error && <p className="text-red-500">{error}</p>}
                    <div>
                        <label className="block text-gray-700 mb-2">Title:</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2">Content:</label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                            placeholder="Enter your prayer request here..."
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-40 resize-none"
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2">Image:</label>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {uploadProgress > 0 && (
                            <progress value={uploadProgress} max="100" className="w-full mt-2"></progress>
                        )}
                    </div>
                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={() => navigate('/')}
                            className="py-2 px-5 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="py-2 px-5 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            {loading ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SubmitPrayerRequest;
