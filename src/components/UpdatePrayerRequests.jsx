import React, { useState, useEffect } from 'react';
import { db, Timestamp } from '../firebaseconfig/firebase';
import { collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';

export default function UpdatePrayerRequest() {
    const [prayerRequests, setPrayerRequests] = useState([]);
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

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
                // Sort requests by date in descending order (latest first)
                requestsData.sort((a, b) => b.date - a.date);
                setPrayerRequests(requestsData);
            } catch (err) {
                console.error('Error fetching prayer requests:', err);
            }
        };

        fetchPrayerRequests();
    }, []);

    const handleUpdateClick = (request) => {
        setSelectedRequest({
            ...request,
            date: request.date.toISOString().split('T')[0], // Format date for input[type="date"]
        });

        setIsDialogOpen(true);
    };

    const handleDeleteClick = async (requestId) => {
        try {
            await deleteDoc(doc(db, 'prayer-requests', requestId));
            setPrayerRequests(prayerRequests.filter(request => request.id !== requestId));
        } catch (err) {
            console.error('Error deleting prayer request:', err);
        }
    };

    const handleUpdate = async (event) => {
        event.preventDefault();
        const { id, date, content, userName, picUrl } = selectedRequest;

        try {
            const requestRef = doc(db, 'prayer-requests', id);
            await updateDoc(requestRef, {
                date: Timestamp.fromDate(new Date(date)), // Convert date string to Firestore Timestamp
                content,
                userName,
                picUrl, // Include picUrl in the update
            });
            setIsDialogOpen(false);
            window.location.reload(); // Refresh the page after update
        } catch (err) {
            console.error('Error updating prayer request:', err);
        }
    };

    const handleApprove = async (requestId) => {
        try {
            const requestRef = doc(db, 'prayer-requests', requestId);
            await updateDoc(requestRef, {
                isApproved: true
            });
            setPrayerRequests(prayerRequests.map(request => request.id === requestId ? { ...request, isApproved: true } : request));
        } catch (err) {
            console.error('Error approving prayer request:', err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSelectedRequest(prevRequest => ({
            ...prevRequest,
            [name]: value,
        }));
    };

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold my-8">Edit Prayer Request</h1>
            {prayerRequests.map(request => (
                <div key={request.id} className="p-4 border mb-4 rounded">
                    <h2 className="text-xl font-bold mb-2">{request.title}</h2>
                    <p className="mb-2"><strong>Content:</strong> {request.content}</p>
                    <p className="mb-2">
                        <strong>Date:</strong> {request.date.toLocaleDateString('en-GB')}
                    </p>
                    <p className="mb-2"><strong>User Name:</strong> {request.userName}</p>
                    {request.picUrl && <img src={request.picUrl} alt="Prayer Request" className="mb-2 rounded-lg max-w-full h-auto" />}
                    <div className="flex">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={() => handleUpdateClick(request)}>Edit</button>
                        <button className="bg-red-500 text-white px-4 py-2 rounded mr-2" onClick={() => handleDeleteClick(request.id)}>Delete</button>
                        {!request.isApproved && (
                            <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => handleApprove(request.id)}>Approve</button>
                        )}
                    </div>
                </div>
            ))}
            {isDialogOpen && selectedRequest && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
                        <h2 className="text-2xl font-bold mb-4">Edit Prayer Request</h2>
                        <form onSubmit={handleUpdate}>
                            <div className="mb-4">
                                <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Date:</label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={selectedRequest.date}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="content" className="block text-gray-700 font-bold mb-2">Content:</label>
                                <textarea
                                    id="content"
                                    name="content"
                                    value={selectedRequest.content}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="userName" className="block text-gray-700 font-bold mb-2">User Name:</label>
                                <input
                                    type="text"
                                    id="userName"
                                    name="userName"
                                    value={selectedRequest.userName}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="picUrl" className="block text-gray-700 font-bold mb-2">Picture URL:</label>
                                <input
                                    type="text"
                                    id="picUrl"
                                    name="picUrl"
                                    value={selectedRequest.picUrl || ''}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded mr-2" onClick={() => setIsDialogOpen(false)}>Cancel</button>
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
