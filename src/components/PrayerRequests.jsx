import React, { useState, useEffect, useCallback } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseconfig/firebase';

const PrayerRequests = () => {
    const [prayerRequests, setPrayerRequests] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const fetchPrayerRequests = useCallback(async () => {
        const querySnapshot = await getDocs(collection(db, 'prayer-requests'));
        const requests = querySnapshot.docs
            .map(doc => ({ id: doc.id, ...doc.data() }))
            .filter(request => request.approved)
            .sort((a, b) => b.date - a.date); // Sort by date in descending order
        setPrayerRequests(requests);
    }, []);


    useEffect(() => {
        fetchPrayerRequests();
    }, [fetchPrayerRequests]);

    const indexOfLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    const currentRequests = prayerRequests.slice(indexOfFirstPost, indexOfLastPost);



    const paginate = pageNumber => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(prayerRequests.length / itemsPerPage)));
    const prevPage = () => setCurrentPage(prevPage => Math.max(prevPage - 1, 1));

    return (
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-black to-white p-4">
            <h1 className="text-4xl font-bold text-white my-8">Prayer Requests</h1>
            <div className="prayer-requests-list w-full max-w-2xl mt-8">
                {currentRequests.map(request => (
                    <div key={request.id} className="prayer-request-item mb-4 p-6 bg-white rounded-lg shadow-lg transition transform hover:scale-105">
                        <h2 className="text-2xl font-bold mb-2">{request.title}</h2>
                        <p className="text-gray-700 mb-4">{request.content}</p>
                        {request.picUrl && (
                            <div className="w-full h-80 mb-4 rounded overflow-hidden"> {/* Adjusted height to h-80 */}
                                <img
                                    src={request.picUrl}
                                    alt={request.title}
                                    className="object-cover w-full h-full transition transform hover:scale-110"
                                    style={{
                                        '@media (minWidth: 1024px)': {
                                            width: '600px',
                                            height: '400px',
                                        },
                                    }}
                                />
                            </div>
                        )}
                        <p className="text-gray-500 text-sm mb-2">Submitted by: {request.userName}</p>
                        <p className="text-gray-500 text-sm">Date: {new Date(request.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                ))}
                <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={prayerRequests.length}
                    currentPage={currentPage}
                    paginate={paginate}
                    nextPage={nextPage}
                    prevPage={prevPage}
                />
            </div>
        </div>
    );
};

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage, nextPage, prevPage }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

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
                        className={`page-link mx-2 px-4 py-2 rounded shadow-md border border-teal-500 ${currentPage === totalPages ? 'cursor-not-allowed text-gray-500' : 'text-teal-500 hover:text-white hover:bg-teal-500 transition transform hover:translate-y-1 hover:shadow-lg'}`}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default PrayerRequests;
