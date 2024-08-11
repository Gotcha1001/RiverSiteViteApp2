// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Worship from './components/Worship';
import PrayerRequestsPage from './components/PrayerRequests';
import AlterUploadsPage from './components/AlterUploads';
import Login from './components/Login';
import Register from './components/Register';
import AddPost from './components/AddPost';
import SubmitPrayerRequestPage from './components/SubmitPrayerRequests';
import ContactUsPage from './components/ContactUs';
import DailyPostsPage from './components/DailyPost';
import Services from './components/Services';
import FacebookLive from './components/FacebookLive';
import UpdatePrayerRequests from './components/UpdatePrayerRequests';
import UpdateDailyPostPage from './components/UpdateDailyPost';
import UploadVideoForm from './components/UploadVideoForm';
import Givings from './components/Givings';


import PaymentSuccess from './components/payment/PaymentSuccess'
import PaymentCancel from './components/payment/PaymentCancel';
import PaymentNotify from './components/payment/PaymentNotify';


import Footer from './components/Footer/Footer';
import { AboutUs } from './components/Footer/AboutUs';
import { Giving } from './components/Footer/Giving';
import { GrowthTrack } from './components/Footer/GrowthTrack';
import { LifeGroups } from './components/Footer/LifeGroups';
import { Baptism } from './components/Footer/Baptism';
import Ministries from './components/Footer/Ministires'; // Corrected import path
import RiverSideKids from './components/Footer/RiverSideKids';
import LocalMissions from './components/Footer/LocalMissions'; // Corrected import path
import AwayMissions from './components/Footer/AwayMissions';
import Fasting from './components/Footer/Fasting';
import Resources from './components/Footer/Resources';
import DataProtectionPolicy from './components/Footer/DataProtectionPolicy';
import PasswordReset from './components/PasswordReset';
// For making the routes scroll to the top
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Place ScrollToTop inside Router but outside Routes */}
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
        <Route path="/update-daily-post" element={<UpdateDailyPostPage />} />
        <Route path="/upload-video" element={<UploadVideoForm />} />
        <Route path="/givings" element={<Givings />} />


        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-cancel" element={<PaymentCancel />} />
        <Route path="/payment-notify" element={<PaymentNotify />} />
        <Route path="/reset-password" element={<PasswordReset />} />




        {/* Routes for Footer */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/giving" element={<Giving />} />
        <Route path="/growth-track" element={<GrowthTrack />} />
        <Route path="/life-groups" element={<LifeGroups />} />
        <Route path="/baptism" element={<Baptism />} />
        <Route path="/ministries" element={<Ministries />} />

        <Route path="/riverside-kids" element={<RiverSideKids />} />
        <Route path="/local-missions" element={<LocalMissions />} /> {/* Added route for Local Missions */}
        <Route path="/away-missions" element={<AwayMissions />} />
        <Route path="/fasting" element={<Fasting />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/data-protection-policy" element={<DataProtectionPolicy />} />


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
