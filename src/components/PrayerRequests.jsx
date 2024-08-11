import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseconfig/firebase';
import Pagination from './Pagination'; // Import Pagination component
import Spinner from './Spinner';

const PrayerRequests = () => {
    const [prayerRequests, setPrayerRequests] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [requestsPerPage] = useState(5);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPrayerRequests = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'prayer-requests'));
                const requestsData = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    return {
                        id: doc.id,
                        ...data,
                        date: data.date.toDate(), // Convert Firestore Timestamp to Date
                    };
                });
                // Filter to show only approved requests
                const approvedRequests = requestsData.filter(request => request.isApproved);
                // Sort requests by date in descending order (latest first)
                approvedRequests.sort((a, b) => b.date - a.date);
                setPrayerRequests(approvedRequests);
            } catch (err) {
                console.error('Error fetching prayer requests:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchPrayerRequests();
    }, []);

    // Logic to get current requests for the current page
    const indexOfLastRequest = currentPage * requestsPerPage;
    const indexOfFirstRequest = indexOfLastRequest - requestsPerPage;
    const currentRequests = prayerRequests.slice(indexOfFirstRequest, indexOfLastRequest);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(prayerRequests.length / requestsPerPage)));
    const prevPage = () => setCurrentPage(prevPage => Math.max(prevPage - 1, 1));

    useEffect(() => {
        console.log("Scrolling to top due to page change:", currentPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);

    if (loading) {
        return <Spinner />;
    }

    return (
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-black to-white p-4">
            <h1 className="text-4xl font-bold text-white my-8 zoom">Prayer Requests</h1>
            <div className="prayer-requests-list w-full max-w-2xl mt-8 flex flex-col items-center">
                {currentRequests.map(request => (
                    <div key={request.id} className="prayer-request-item mb-4 p-6 bg-slate-900 rounded-lg shadow-lg transition transform hover:scale-105">
                        <h2 className="text-2xl font-bold mb-2 text-white">Title: {request.title}</h2>
                        <p className="text-gray-100 mb-4">Content: {request.content}</p>
                        {request.picUrl && (
                            <div className="w-full h-80 mb-4 rounded overflow-hidden">
                                <img
                                    src={request.picUrl}
                                    alt={request.title}
                                    className="object-contain w-full h-full transition transform hover:scale-110"
                                />
                            </div>
                        )}
                        <p className="text-gray-900 text-sm mb-2">Submitted by: {request.userName}</p>
                        <p className="text-gray-900 text-sm">Date: {new Date(request.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                ))}
                <Pagination
                    requestsPerPage={requestsPerPage}
                    totalRequests={prayerRequests.length}
                    paginate={paginate}
                    currentPage={currentPage}
                    nextPage={nextPage}
                    prevPage={prevPage}
                />
            </div>
        </div>
    );
};

export default PrayerRequests;
