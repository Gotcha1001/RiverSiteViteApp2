import React from 'react';

export function GrowthTrack() {
    return (
        <div className="container py-4">
            <div className="lg:flex lg:items-start lg:justify-between mb-8 gradient-background2 rounded-lg p-3">
                {/* Left Column */}
                <div className="lg:w-1/2 lg:pr-4 mb-8">
                    <h2 className="text-3xl font-bold mb-4 text-white">Growth Track</h2>
                    <p className="mb-4 text-white">
                        WELCOME TO GROWTH TRACK<br />
                        God has an incredible purpose for your life, and the Growth Track is designed to help you connect with that purpose. The Riverside church Growth Track guides you to discover your redemptive purpose and live the life God created for you. The Growth Track is made up of four steps that equip you to...
                    </p>
                    <img src="/5GrowthTrackpage.jpg" alt="Growth Track" className="rounded-lg mt-4" />
                </div>

                {/* Right Column */}
                <div className="lg:w-1/2">
                    <img src="/6.GrowthTrackpage.jpg" alt="Growth Track Full" className="rounded-lg w-full h-full object-cover" />
                </div>
            </div>

            {/* Full Width Image */}
            <div className="w-full zoom">
                <img src="/growthtrack7.jpg" alt="Full Width Growth Track" className="rounded-lg w-full object-cover" />
            </div>
        </div>
    );
}
