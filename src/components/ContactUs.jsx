import React from 'react';
import Contact from './Contact';
import PayNowButton from '../components/payment/PayNowButton';

const ContactUs = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900 text-white">
            <div className="container mx-auto py-8 p-3">
                <h1 className="text-3xl font-bold text-center mb-8 zoom shadow-neon rounded-md p-2">Contact Page</h1>

                {/* Render the Contact component */}
                <Contact />

                {/* Heading above the map */}
                <h2 className="text-xl font-bold mb-4 text-center">VISITORS ALWAYS WELCOME</h2>
                <p className="text-center mb-8">39 Stafford Road, Westville, 3629</p>

                {/* Google Map */}
                <div className="my-8 rounded-lg overflow-hidden shadow-xl">
                    <iframe
                        className="w-full h-64 md:h-96 "
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d432.69226328978266!2d30.90946777074869!3d-29.81988375320584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef701cef542c8cb%3A0xae666abbb3029097!2sRiverside%20Church!5e0!3m2!1sen!2sza!4v1719852798917!5m2!1sen!2sza"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Riverside Church Location"
                    ></iframe>
                </div>

                {/* Details below the map */}
                <div className="text-center">
                    <h3 className="text-xl font-bold mb-2 shadow-neon rounded-lg">OUR EMAIL</h3>
                    <a href="mailto:info@riversidechurch.org.za" className="text-blue-500 hover:underline mb-4 block">info@riversidechurch.org.za</a>
                    <h3 className="text-xl font-bold mb-2">CALL US</h3>
                    <p className='mb-3'>083 448 7334</p>
                </div>

                {/* Contact information */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Pastor Cedric Olivier */}
                    <div className="bg-teal-500 p-4 shadow- rounded-lg text-center hover:shadow-xl transform hover:scale-105">
                        <p className="font-bold">Pastor Cedric Olivier</p>
                        <p>Phone Number: 0834487334</p>
                        <p>Email: cedric@riversidechurch.org.za</p>
                    </div>

                    {/* Riverside Church */}
                    <div className="bg-teal-500 p-4 rounded-lg text-center hover:shadow-xl transform hover:scale-105">
                        <p className="font-bold">Riverside Church</p>
                        <p>Email: info@riversidechurch.org.za</p>
                    </div>

                    {/* Pastor Louise Olivier */}
                    <div className="bg-teal-500 p-4 rounded-lg text-center hover:shadow-xl transform hover:scale-105">
                        <p className="font-bold">Pastor Louise Olivier</p>
                        <p>Phone Number: 0834149502</p>
                        <p>Email: cedwees@absamail.co.za</p>
                    </div>

                    {/* Church Leaders */}
                    <div className="bg-teal-500 p-4 rounded-lg text-center hover:shadow-xl transform hover:scale-105">
                        <p className="font-bold">Church Leaders</p>
                        <p>Adrian Munsamy</p>
                        <p>Phone Number: 0812406768</p>
                        <p>Email: cedric@riversidechurch.org.za</p>
                    </div>

                    <div className="bg-teal-500 p-4 rounded-lg text-center hover:shadow-xl transform hover:scale-105">
                        <p>Susan Greer</p>
                        <p>Phone Number: 0764078773</p>
                        <p>Email: susanlgreer@gmail.com</p>
                    </div>

                    <div className="bg-teal-500 p-4 rounded-lg text-center hover:shadow-xl transform hover:scale-105">
                        <p>Charles Frankel</p>
                        <p>Phone Number: 0828515700</p>
                        <p>Email: charlesf@revtech.co.za</p>
                    </div>
                </div>

                {/* Card for 'Link to our Account Directly with Payfast' */}
                {/* <div className="bg-gray-800 p-6 rounded-lg text-center mt-8">
                    <h2 className="text-xl font-bold mb-4">Link to our Account Directly with Payfast</h2>
                    <div className="flex justify-center">
                        <PayNowButton />
                    </div>
                </div> */}

                <div className="flex justify-center items-center mt-8 space-x-4 shadow-neon p-3">
                    <img src="/zapper1.jpg" alt="Image 1" className="w-1/2 max-w-sm rounded-md shadow-md" />

                </div>

                {/* Banking Details */}
                <div className="bg-slate-700 p-4 rounded-lg text-center shadow-neon mt-8 hover:shadow-xl transform hover:scale-105 zoom">
                    <h1 className="text-2xl font-bold mb-4 zoom">Banking Details</h1>
                    <p>Westville Assembly of God</p>
                    <p>Std Bank Westville</p>
                    <p>Acc no 053102800</p>
                    <p>Branch code 045426</p>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
