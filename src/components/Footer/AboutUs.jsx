import React from 'react';

export function AboutUs() {
    return (
        <div className="container py-4 gradient-background1">
            <div className="lg:flex lg:items-center lg:justify-between mb-8">
                <div className="lg:w-1/2 lg:mx-auto text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4 zoom text-white">About Us</h2>
                    <img src="/aboutus.jpg" alt="Church Image" className="w-full lg:max-w-xs rounded-full mx-auto mb-4 neon-teal" />
                    <p className="text-lg gradient-background2 rounded-lg text-white">
                        MESSAGE FROM PASTOR CEDRIC AND PASTOR LOUISE OLIVIER
                        <br /><br />
                        Welcome to a Church that is determined to stay on the cutting edge of worship, prayer and practical Bible teaching.
                        <br /><br />
                        We experience a real presence of God and a wonderful sense of family – we love doing life together. All are invited to join us and encounter a fresh approach to church – God touches hearts and lives and people are changed for the better.
                        <br /><br />
                        We love God with a passion, serve Him wholeheartedly and believe in fulfilling His purposes with excellence. We know Jesus is the answer and His church has the solution to all of life’s questions and problems.
                        <br /><br />
                        Whenever you are in the area please feel free to join us.
                    </p>
                    <p className="text-lg font-bold text-white">
                        Cedric and Louise
                    </p>
                </div>
            </div>

            {/* Second Section */}
            <div className="lg:flex lg:items-center lg:justify-between mb-8 gradient-background2">
                <div className="lg:flex-1 lg:mb-0 mb-8">
                    <h2 className="text-3xl font-bold mb-4 text-white text-center">Our Beliefs</h2>
                    <ul className="list-disc pl-6 mb-8 text-white">
                        <li className="text-lg mb-2">We believe the Bible is the inspired, infallible and authoritative Word of God. (2 Tim 3:16)</li>
                        <li className="text-lg mb-2">We believe there is one God, eternally existing in three persons: God the Father, God the Son, and God the Holy Spirit. (1 Peter 3:18/11Cor 13:14)</li>
                        <li className="text-lg mb-2">We believe that Jesus Christ was begotten by The Holy Spirit, born of the virgin Mary and is true God and true man. (Matt 1: 8 – 23)</li>
                        <li className="text-lg mb-2">We believe that the Lord Jesus Christ died as a substitute for us and that the only means of being cleansed from sin and being saved is through repentance and faith in the redemptive work of Jesus. (Acts 2: 38 – 39)</li>
                        <li className="text-lg mb-2">We believe in the bodily resurrection of Jesus Christ, His ascension into Heaven and His present life as our High Priest. (Heb 4: 15 – 16)</li>
                        <li className="text-lg mb-2">We believe in the baptism of the Holy Spirit, empowering and equipping believers for service with the accompanying supernatural gifts of the Holy Spirit. (1 Cor 12: 4 – 11)</li>
                        <li className="text-lg mb-2">We believe in the God-given fivefold ministry of the apostle, prophet, evangelist, pastor, and teacher, for the equipping of the saints. (Eph 4: 11 – 12)</li>
                        <li className="text-lg mb-2">We believe in the resurrection of both the just and the unjust, the eternal blessedness of the redeemed, and the eternal banishment of those who have rejected the offer of salvation. (Heb 9:27)</li>
                        <li className="text-lg mb-2">We believe that the one true Church is the whole company of those who have been redeemed by Jesus Christ. (1 Cor 12:13)</li>
                        <li className="text-lg mb-2">We believe that the Lord Jesus Christ appointed two ordinances: The Lord’s supper (1 Cor 11:23 – 26) Baptism by immersion in water (Matt 28:19)</li>
                        <li className="text-lg mb-2">We believe that divine healing and deliverance from bondage forms an integral part of the gospel. (Acts 5:16)</li>
                    </ul>
                </div>
                <div className="lg:flex-1 lg:ml-4">
                    <img src="/aboutus3.jpg" alt="Our Beliefs Image" className="w-full lg:max-w-lg rounded-lg mx-auto mb-4" />
                </div>
            </div>

            {/* Third Section */}
            <div className="lg:flex lg:items-center lg:justify-between mb-8">
                <div className="lg:w-1/2 lg:mx-auto mb-8 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-white">Our Leadership Team</h2>
                    <img src="/aboutus4.jpg" alt="Leadership Team Image" className="w-full lg:max-w-full rounded-lg mx-auto mb-4 zoom neon-teal" />
                    <div className="text-lg mb-8 bg-teal-600 rounded-lg hover:bg-teal-200 ">
                        <h3 className="font-bold mb-2">Pastors:</h3>
                        <p className="mb-2">Cedric Olivier</p>
                        <p className="mb-4">Louise Olivier</p>
                        <h3 className="font-bold mb-2">Leadership:</h3>
                        <p className="mb-2">Adrian Munsamy</p>
                        <p className="mb-2">Charles Frankel</p>
                        <p>Susan Greer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
