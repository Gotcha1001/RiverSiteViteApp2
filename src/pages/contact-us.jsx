// pages/contact-us.jsx

import React from 'react';
import { Route } from 'react-router-dom';
import ContactUs from '../components/ContactUs'; // Import the ContactUs component

const ContactUsPage = () => {
    return (
        <Route path="/contact-us" element={<ContactUs />} />
    );
};

export default ContactUsPage;
