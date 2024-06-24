import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore'; // Adjusted import
import { db } from '../firebaseconfig/firebase';

export default function UpdatePrayerRequests() {
    const [prayerRequests, setPrayerRequests] = useState([]);
    const [editingRequest, setEditingRequest] = useState(null);
    const [formValues, setFormValues] = useState({ title: '', content: '', picUrl: '' });
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5); // Number of posts per page

    useEffect(() => {
        const fetchPrayerRequests = async () => {
            const querySnapshot = await getDocs(collection(db, 'prayer-requests'));
            const requests = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            requests.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date
            setPrayerRequests(requests);
        };

        fetchPrayerRequests();
    }, []);


    const handleEdit = (request) => {
        setEditingRequest(request.id);
        setFormValues({ title: request.title, content: request.content, picUrl: request.picUrl });
    };

    const handleDelete = async (requestId) => {
        await deleteDoc(doc(db, 'prayer-requests', requestId));
        setPrayerRequests(prayerRequests.filter(request => request.id !== requestId));
    };

    const handleApprove = async (requestId) => {
        await updateDoc(doc(db, 'prayer-requests', requestId), { approved: true });
        setPrayerRequests(prayerRequests.map(request =>
            request.id === requestId ? { ...request, approved: true } : request
        ));
    };

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateDoc(doc(db, 'prayer-requests', editingRequest), formValues);
        setEditingRequest(null);
        const updatedRequests = [...prayerRequests];
        const index = updatedRequests.findIndex(request => request.id === editingRequest);
        if (index !== -1) {
            updatedRequests[index] = { id: editingRequest, ...formValues };
            updatedRequests.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date
            setPrayerRequests(updatedRequests);
        }
    };


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentRequests = prayerRequests.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(prayerRequests.length / postsPerPage)));
    const prevPage = () => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));

    return (
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-black to-white p-4">
            <h1 className="text-4xl font-bold text-white my-8">Update Prayer Requests</h1>
            {editingRequest ? (
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Edit Prayer Request</h2>
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
                        <label className="block text-gray-700 font-semibold mb-2">Content:</label>
                        <textarea
                            name="content"
                            value={formValues.content}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-40 resize-none"
                            style={{ whiteSpace: 'pre-line', wordBreak: 'break-word' }}
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Picture URL:</label>
                        <input
                            type="text"
                            name="picUrl"
                            value={formValues.picUrl}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Save Changes
                    </button>
                </form>
            ) : (
                <div className="w-full max-w-2xl mt-8">
                    {currentRequests.map(request => (
                        <div key={request.id} className="bg-white p-6 rounded-lg shadow-md mb-4">
                            <h2 className="text-xl font-bold">{request.title}</h2>
                            <p className="text-gray-700">{request.content}</p>
                            {request.picUrl && (
                                <div className="w-full h-80 mt-4">
                                    <img
                                        src={request.picUrl}
                                        alt={request.title}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            )}

                            <p className="text-gray-500 text-sm mt-2">Submitted by: {request.userName}</p>
                            <p className="text-gray-500 text-sm">Date: {new Date(request.date).toLocaleString()}</p>
                            <div className="flex space-x-4 mt-4">
                                <button
                                    className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300"
                                    onClick={() => handleEdit(request)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
                                    onClick={() => handleDelete(request.id)}
                                >
                                    Delete
                                </button>
                                {!request.approved && (
                                    <button
                                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
                                        onClick={() => handleApprove(request.id)}
                                    >
                                        Approve
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="flex justify-center mt-4">
                <button
                    onClick={prevPage}
                    className={`page-link mx-2 px-4 py-2 rounded shadow-md border border-teal-500 ${currentPage === 1 ? 'cursor-not-allowed text-gray-500' : 'text-teal-500 hover:text-white hover:bg-teal-500 transition transform hover:translate-y-1 hover:shadow-lg'}`}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <button
                    onClick={() => paginate(currentPage)}
                    className={`page-link px-4 py-2 rounded shadow-md border border-teal-500 ${currentPage === 1 ? 'bg-teal-500 text-white' : 'text-teal-500 hover:text-white hover:bg-teal-500 transition transform hover:translate-y-1 hover:shadow-lg'}`}
                >
                    {currentPage}
                </button>
                <button
                    onClick={nextPage}
                    className={`page-link mx-2 px-4 py-2 rounded shadow-md border border-teal-500 ${currentPage === Math.ceil(prayerRequests.length / postsPerPage) ? 'cursor-not-allowed text-gray-500' : 'text-teal-500 hover:text-white hover:bg-teal-500 transition transform hover:translate-y-1 hover:shadow-lg'}`}
                    disabled={currentPage === Math.ceil(prayerRequests.length / postsPerPage)}
                >
                    Next
                </button>
            </div>
        </div>
    );
}
