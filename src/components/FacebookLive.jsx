import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseconfig/firebase';
import VideoEmbed from './VideoEmbed';

const Pagination = ({ postsPerPage, totalPosts, currentPage, nextPage, prevPage }) => {
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
                        className={`page-link mx-2 px-4 py-2 rounded shadow-md border border-teal-500 ${currentPage === Math.ceil(totalPosts / postsPerPage) ? 'cursor-not-allowed text-gray-500' : 'text-teal-500 hover:text-white hover:bg-teal-500 transition transform hover:translate-y-1 hover:shadow-lg'}`}
                        disabled={currentPage === Math.ceil(totalPosts / postsPerPage)}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

const FacebookLive = () => {
    const [videos, setVideos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [videosPerPage] = useState(5); // Number of videos per page
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'facebook-video'));
                const videoList = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    let date;
                    if (data.date && data.date.toDate) {
                        date = data.date.toDate();
                    } else if (data.date) {
                        date = new Date(data.date * 1000);
                    }
                    return {
                        id: doc.id,
                        ...data,
                        date
                    };
                });

                // Sort videoList by date in descending order (most recent first)
                videoList.sort((a, b) => b.date - a.date);

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

    // Get current videos for pagination
    const indexOfLastVideo = currentPage * videosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(videos.length / videosPerPage)));
    const prevPage = () => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-black to-white p-4">
            <h1 className="text-4xl font-bold text-white mb-8">Facebook Recorded Services</h1>
            {currentVideos.map((video) => (
                <div
                    key={video.id}
                    className="card-content mb-8 bg-slate-950 p-4 rounded-lg mx-auto w-full lg:w-2/3"
                >
                    <h2 className="text-2xl font-bold text-white">{video.title}</h2>
                    <p className="text-lg text-gray-300 mb-1">Sermon By: {video.sermonBy}</p>
                    <p className="text-lg text-gray-300 mb-1">Date: {formatDate(video.date)}</p>
                    <VideoEmbed videoUrl={video.videoUrl} />
                    <p className="text-gray-300 mt-4">{video.content}</p>
                </div>
            ))}
            <Pagination
                postsPerPage={videosPerPage}
                totalPosts={videos.length}
                currentPage={currentPage}
                nextPage={nextPage}
                prevPage={prevPage}
            />
        </div>
    );
};

// Helper function to format date as "day, month, year"
const formatDate = (date) => {
    if (!date) return ''; // Handle case where date is null or undefined
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date instanceof Date ? date.toLocaleDateString(undefined, options) : ''; // Format Date object
};

export default FacebookLive;
