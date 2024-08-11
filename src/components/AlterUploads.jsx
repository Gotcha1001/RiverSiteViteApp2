import React, { useEffect, useState } from 'react';
import { collection, query, orderBy, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseconfig/firebase';
import { useNavigate } from 'react-router-dom';
import { Timestamp } from 'firebase/firestore';
import Pagination from './Pagination'; // Import Pagination component
import Spinner from './Spinner';

export default function AlterUploads() {
    const [videos, setVideos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [videosPerPage] = useState(5);
    const [editingVideo, setEditingVideo] = useState(null);
    const [formValues, setFormValues] = useState({ title: '', sermonBy: '', videoUrl: '', content: '', date: '' });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const q = query(collection(db, 'facebook-video'), orderBy('date', 'desc'));
                const querySnapshot = await getDocs(q);
                const videoList = querySnapshot.docs.map(doc => {
                    const videoData = doc.data();
                    const date = videoData.date ? new Date(videoData.date.seconds * 1000) : null;
                    return {
                        id: doc.id,
                        ...videoData,
                        date: date ? `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}` : null
                    };
                });
                setVideos(videoList);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching videos:', err);
                setError('Failed to load videos.');
                setLoading(false);
            }
        };

        fetchVideos();
    }, []);

    const handleEdit = (video) => {
        try {
            setEditingVideo(video.id);

            let dateISO = '';
            if (video.date) {
                const date = new Date(video.date.seconds * 1000); // Convert Firestore Timestamp to JavaScript Date
                if (!isNaN(date)) {
                    // Format date as needed (e.g., YYYY-MM-DD for input[type="date"])
                    dateISO = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
                }
            }

            setFormValues({
                title: video.title || '',
                sermonBy: video.sermonBy || '',
                videoUrl: video.videoUrl || '',
                content: video.content || '',
                date: dateISO
            });

            setIsModalOpen(true);
        } catch (err) {
            console.error('Error in handleEdit:', err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const [year, month, day] = formValues.date.split('-').map(Number);
            const date = new Date(year, month - 1, day);

            await updateDoc(doc(db, 'facebook-video', editingVideo), {
                ...formValues,
                date: Timestamp.fromDate(date) // Convert Date object to Firestore Timestamp
            });

            setEditingVideo(null);
            setIsModalOpen(false);
            // Update videos state to reflect the edited video
            setVideos(videos.map(video => (video.id === editingVideo ? { ...video, ...formValues, date: date.toISOString() } : video)));
            navigate('/facebook-live');
        } catch (err) {
            console.error('Error updating video:', err);
        }
    };

    const handleDelete = async (videoId) => {
        try {
            await deleteDoc(doc(db, 'facebook-video', videoId));
            setVideos(videos.filter(video => video.id !== videoId));
        } catch (err) {
            console.error('Error deleting video:', err);
        }
    };

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    // Pagination logic
    const indexOfLastVideo = currentPage * videosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(videos.length / videosPerPage)));
    const prevPage = () => setCurrentPage(prevPage => Math.max(prevPage - 1, 1));

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-black to-white p-4">
            <h1 className="text-4xl font-bold text-white my-8">Alter Uploads</h1>
            <div className="w-full max-w-2xl mt-8 bg-white p-6 rounded-lg shadow-md">
                {currentVideos.map(video => (
                    <div key={video.id} className="mb-4 p-4 border-b border-gray-300 last:border-b-0">
                        <h2 className="text-xl font-bold">{video.title}</h2>
                        <p className="text-gray-700">Sermon By: {video.sermonBy}</p>
                        <p className="text-gray-700">Content: {video.content}</p>
                        <p className="text-gray-700">Date: {video.date}</p>
                        <button
                            className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300 mr-2"
                            onClick={() => handleEdit(video)}
                        >
                            Edit
                        </button>
                        <button
                            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
                            onClick={() => handleDelete(video.id)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
                <Pagination
                    videosPerPage={videosPerPage}
                    totalVideos={videos.length}
                    paginate={paginate}
                    currentPage={currentPage}
                    nextPage={nextPage}
                    prevPage={prevPage}
                />
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg mx-auto">
                        <h2 className="text-2xl font-bold mb-4">Edit Video</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2">Title:</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formValues.title}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2">Sermon By:</label>
                                <input
                                    type="text"
                                    name="sermonBy"
                                    value={formValues.sermonBy}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2">Video URL:</label>
                                <input
                                    type="text"
                                    name="videoUrl"
                                    value={formValues.videoUrl}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2">Content:</label>
                                <textarea
                                    name="content"
                                    value={formValues.content}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 whitespace-pre-wrap"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2">Date:</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formValues.date}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="px-4 py-2 mr-4 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-300"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                                >
                                    Update Video
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
