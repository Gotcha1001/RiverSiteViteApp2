import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseconfig/firebase';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage, nextPage, prevPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

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
                {pageNumbers.map(number => (
                    <li key={number} className="mx-2">
                        <button
                            onClick={() => paginate(number)}
                            className={`page-link px-4 py-2 rounded shadow-md border border-teal-500 ${currentPage === number ? 'bg-teal-500 text-white' : 'text-teal-500 hover:text-white hover:bg-teal-500 transition transform hover:translate-y-1 hover:shadow-lg'}`}
                        >
                            {number}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        onClick={nextPage}
                        className={`page-link mx-2 px-4 py-2 rounded shadow-md border border-teal-500 ${currentPage === pageNumbers.length ? 'cursor-not-allowed text-gray-500' : 'text-teal-500 hover:text-white hover:bg-teal-500 transition transform hover:translate-y-1 hover:shadow-lg'}`}
                        disabled={currentPage === pageNumbers.length}
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
                const videoList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
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

    // Get current videos
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
                    className="card-content mb-8 bg-teal-500 p-4 rounded-lg mx-auto w-full lg:w-2/3"
                >
                    <h2 className="text-2xl font-bold text-white">{video.title}</h2>
                    <p className="text-lg text-gray-300 mb-1">Sermon By: {video.sermonBy}</p>
                    <p className="text-lg text-gray-300 mb-1">Date: {new Date(video.date).toLocaleDateString()}</p>
                    {video.embeddable ? (
                        <div className="video-container">
                            <FacebookVideo videoUrl={video.videoUrl} />
                        </div>
                    ) : (
                        <p className="text-red-500">
                            This video cannot be embedded. You can watch it{' '}
                            <a href={video.videoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                                here
                            </a>.
                        </p>
                    )}
                    <p className="text-gray-300 mt-4">{video.content}</p>
                </div>
            ))}
            <Pagination
                postsPerPage={videosPerPage}
                totalPosts={videos.length}
                paginate={paginate}
                currentPage={currentPage}
                nextPage={nextPage}
                prevPage={prevPage}
            />
        </div>
    );
};

const FacebookVideo = ({ videoUrl }) => {
    const embedUrl = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(videoUrl)}&show_text=false&width=734`;

    return (
        <div>
            <iframe
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 'none', overflow: 'hidden', borderRadius: '8px' }}
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
        </div>
    );
};

export default FacebookLive;
