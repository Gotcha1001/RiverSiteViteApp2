import React from 'react';
import PayNowButton from '../payment/PayNowButton';

export function Giving() {
    return (
        <div className="container py-4">
            <div className="lg:flex lg:items-start lg:justify-between mb-8">
                {/* Left Column */}
                <div className="lg:w-1/2 lg:pr-4 mb-8 gradient-background2 p-4 rounded-lg">
                    <h2 className="text-3xl font-bold mb-4 text-center lg:text-left text-white">Giving</h2>
                    <p className="mb-4 text-white">
                        MAKING AN IMPACT WITH YOUR INCOME<br />
                        TAKING THE STEP OF FAITH – “By tithing to God through your church where you get spiritually fed (store house)” Malachi 3:10<br />
                        Want to join us in our mission of reaching people with the life-giving message of Jesus? Your generosity enables us to help more and more people to experience a life-changing relationship with Him. We are truly grateful for your giving and hope the convenience and simplicity of online giving will be helpful to you.<br />
                        Financial giving can be divided into three categories: tithes, offerings and missions. The Bible teaches us that we worship the Lord with our tithe (which is HIS), ten percent of our income contributed to His church on a regular basis. When we feel called to give over and above our tithe, we do so as an offering or sow into our missions.
                    </p>
                </div>

                {/* Right Column */}
                <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-lg mt-8 lg:mt-0 lg:ml-8 lg:self-center">
                    <p className="mb-4">
                        <span className="font-bold">“Remember this:</span> Whoever sows sparingly will also reap sparingly, and whoever sows generously will also reap generously. Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.”<br />
                        <span className="font-bold">2 Corinthians 9:6-7</span>
                    </p>
                </div>
            </div>

            {/* Card for 'Link to our Account Directly with Payfast' */}
            {/* <div className="bg-slate-500 p-6 rounded-lg text-center mt-8">
                <h2 className="text-xl font-bold mb-4">Link to our Account Directly with Payfast</h2>
                <div className="flex justify-center">
                    <PayNowButton />
                </div>
            </div> */}

            {/* Second Part */}
            <div className="text-center mt-16">
                <h2 className="text-3xl font-bold mb-4 bg-teal-500 rounded-md">OFFERING</h2>
                <div className="flex justify-center items-center mt-8 space-x-4">
                    <img src="/zapper1.jpg" alt="Image 1" className="w-1/2 max-w-sm rounded-md shadow-md" />

                </div>
                <p className="mb-4">
                    This is an opportunity to give to God during the service. Offerings are taken up at our Sunday meetings, where you may utilize cash, Snapscan and Yoco.
                </p>
                <p className="mb-4 font-bold ">EFT – ELECTRONIC FUNDS TRANSFER</p>
                <p className="mb-4 bg-slate-950 rounded-md text-white zoom">
                    You are welcome to use the EFT method.<br />
                    Riverside Family Church<br />
                    Standard Bank Westville<br />
                    Account no.: 053102800<br />
                    Branch code: 045426
                </p>
            </div>
        </div>
    );
}
