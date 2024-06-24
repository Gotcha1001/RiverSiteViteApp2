import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseconfig/firebase';
import { useNavigate } from 'react-router-dom';

export default function AlterUploads() {
    const [videos, setVideos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [videosPerPage] = useState(5);
    const [editingVideo, setEditingVideo] = useState(null);
    const [formValues, setFormValues] = useState({ title: '', sermonBy: '', videoUrl: '', content: '', date: '' });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchVideos = async () => {
            const querySnapshot = await getDocs(collection(db, 'facebook-video'));
            const videoList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setVideos(videoList);
        };

        fetchVideos();
    }, []);

    const handleEdit = (video) => {
        setEditingVideo(video.id);
        setFormValues({ ...video, date: new Date(video.date).toISOString().split('T')[0] });
        setIsModalOpen(true);
    };

    const handleDelete = async (videoId) => {
        await deleteDoc(doc(db, 'facebook-video', videoId));
        setVideos(videos.filter(video => video.id !== videoId));
    };

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateDoc(doc(db, 'facebook-video', editingVideo), {
            ...formValues,
            date: new Date(formValues.date).toISOString()
        });
        setEditingVideo(null);
        setIsModalOpen(false);
        setVideos(videos.map(video => (video.id === editingVideo ? { id: video.id, ...formValues } : video)));
        navigate('/facebook-live');
    };

    // Pagination logic
    const indexOfLastVideo = currentPage * videosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(videos.length / videosPerPage)));
    const prevPage = () => setCurrentPage(prevPage => Math.max(prevPage - 1, 1));

    return (
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-black to-white p-4">
            <h1 className="text-4xl font-bold text-white my-8">Alter Uploads</h1>
            <div className="w-full max-w-2xl mt-8 bg-white p-6 rounded-lg shadow-md">
                {currentVideos.map(video => (
                    <div key={video.id} className="mb-4 p-4 border-b border-gray-300 last:border-b-0">
                        <h2 className="text-xl font-bold">{video.title}</h2>
                        <p className="text-gray-700">Sermon By: {video.sermonBy}</p>
                        <p className="text-gray-700">Content: {video.content}</p>
                        <p className="text-gray-700">Date: {new Date(video.date).toLocaleDateString()}</p>
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
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

const Pagination = ({ videosPerPage, totalVideos, currentPage, nextPage, prevPage }) => {
    return (
        <nav>
            <ul className="flex justify-center mt-4">
                <li>
                    <button
                        onClick={prevPage}
                        className={`page-link mx-2 px-4 py-2 rounded shadow-md border border-teal-500 ${currentPage === 1 ? 'cursor-not-allowed text-gray-500' : 'text-teal-500 hover:text-white hover:bg-teal-500 transition transform hover:translate-y-1 hover:shadow-lg'}`}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                </li>
                <li className="mx-2">
                    <span className="page-link px-4 py-2 rounded shadow-md border border-teal-500 bg-teal-500 text-white">
                        {currentPage}
                    </span>
                </li>
                <li>
                    <button
                        onClick={nextPage}
                        className={`page-link mx-2 px-4 py-2 rounded shadow-md border border-teal-500 ${currentPage === Math.ceil(totalVideos / videosPerPage) ? 'cursor-not-allowed text-gray-500' : 'text-teal-500 hover:text-white hover:bg-teal-500 transition transform hover:translate-y-1 hover:shadow-lg'}`}
                        disabled={currentPage === Math.ceil(totalVideos / videosPerPage)}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};
