// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Worship from './components/Worship';
import PrayerRequestsPage from './pages/prayer-requests';
import AlterUploadsPage from './pages/alter-uploads';
import Login from './components/Login';
import Register from './components/Register';
import AddPost from './components/AddPost';
import SubmitPrayerRequestPage from './pages/submit-prayer-requests';
import ContactUsPage from './components/ContactUs';
import DailyPostsPage from './pages/daily-posts';
import Services from './components/Services';
import FacebookLive from './components/FacebookLive';
import UpdatePrayerRequests from './components/UpdatePrayerRequests';
import UpdateDailyPostPage from './pages/update-daily-post'; // Import the UpdateDailyPostPage component
import UploadVideoForm from './components/UploadVideoForm'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/worship" element={<Worship />} />
        <Route path="/prayer-request" element={<PrayerRequestsPage />} />
        <Route path="/alter-uploads" element={<AlterUploadsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/submit-prayer-requests" element={<SubmitPrayerRequestPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/daily-posts" element={<DailyPostsPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/facebook-live" element={<FacebookLive />} />
        <Route path="/update-prayer-requests" element={<UpdatePrayerRequests />} />
        <Route path="/update-daily-post" element={<UpdateDailyPostPage />} /> {/* Add route for UpdateDailyPostPage */}
        <Route path="/upload-video" element={<UploadVideoForm />} />
      </Routes>
    </Router>
  );
}

export default App;


