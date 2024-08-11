import React from 'react';

const RiverSideKids = () => {
    return (
        <div className="container mx-auto py-8">
            <div className="flex flex-wrap">
                {/* Left Section */}
                <div className="w-full lg:w-2/3 px-4 mb-8">
                    <div className="gradient-background rounded-lg p-6">
                        <h2 className="text-3xl font-bold mb-2 text-white">Riverside Kids</h2>
                        <h3 className="text-xl font-semibold mb-4 text-white">We want your kids to Love Church</h3>
                        <p className="mb-4 text-white">
                            That’s why we are committed to creating safe and fun environments where your children are taught about the Bible and the love of Jesus through relevant, age-appropriate kids services. Our ultimate hope is to see a generation of children come to know God at an early age.
                        </p>
                        <p className="mb-4 text-white">
                            Children learn the Bible through age-appropriate activities like stories, crafts, and Bible action songs that reinforce Bible truths. They are also given the opportunity to build meaningful relationships with their friends and teachers. Our services are designed to present the love of Jesus to our kids in a way that is exciting and makes sense to them. Every week they get to play games, experience dynamic worship, work on a Bible story, learn an interesting object lesson, receive prayer, and make friends.
                        </p>
                    </div>
                </div>

                {/* Right Section - Image */}
                <div className="w-full lg:w-1/3 px-4 mb-8 flex justify-center items-center ">
                    <img src="/riversidekids1.jpg" alt="Riverside Kids" className="w-full h-auto rounded-lg" />
                </div>
            </div>

            {/* Second Section */}
            <div className="text-center mb-8 gradient-background2">
                <h2 className="text-3xl font-bold mb-4 text-white">At Riverside Kids, We Value...</h2>
                <img src="/riversidekids2.jpg" alt="Riverside Kids Values" className="mx-auto mb-4 rounded-lg" />
            </div>

            {/* Third Section - Centered Image */}
            <div className="text-center zoom ">
                <img src="/riversidekids3.jpg" alt="Centered Image" className="mx-auto mb-8 rounded-lg " />
            </div>
        </div>
    );
}

export default RiverSideKids;
