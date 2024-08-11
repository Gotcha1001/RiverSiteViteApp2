import React from 'react';

export function Baptism() {
    return (
        <div className="container py-4">
            {/* First Section */}
            <div className="text-center mb-8 gradient-background2 rounded-lg">
                <h2 className="text-3xl font-bold mb-4 zoom text-white">Baptism</h2>
                <p className="mb-4 text-white">
                    Baptism is an important step of obedience that shows others we have personally trusted Jesus for our salvation. Jesus was baptized when He was on the earth, and we do this to follow His example. When Christians are baptized, they are submerged under water to identify with the death and burial of Jesus and raised out of the water to identify with His resurrection. We believe that water baptism is a public declaration of three important things: you are a follower of Jesus Christ, you are beginning a changed life in Christ, and you are part of a new family.
                </p>
                <p className="mb-4 text-white">
                    Those who are baptized are following Jesus’ example and obeying His command.
                </p>
                <blockquote className="text-lg font-medium mb-4 text-white">
                    “As soon as Jesus was baptized, he went up out of the water. At that moment heaven was opened, and he saw the Spirit of God descending like a dove and alighting on him. And a voice from heaven said, ‘This is my Son, whom I love; with him I am well pleased.’” —Matthew 3:16–17
                </blockquote>
                <blockquote className="text-lg font-medium text-white">
                    “Then Jesus came to them and said, ‘All authority in heaven and on earth has been given to me. Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you.’” —Matthew 28:18–20
                </blockquote>
            </div>

            {/* Second Section */}
            <div className="lg:flex lg:items-start lg:justify-between mb-8">
                {/* Left Section */}
                <div className="lg:w-1/2 lg:pr-4 mb-8">
                    <h2 className="text-3xl font-bold mb-4">Water baptism is a public declaration of three very important things:</h2>
                    <ul className="list-disc pl-4 mb-8">
                        <li className="mb-4">
                            <h3 className="text-xl font-semibold mb-2">You are a follower of Jesus Christ.</h3>
                            <blockquote className="text-lg font-medium">
                                “Those who accepted his message were baptized.” —Acts 2:41
                            </blockquote>
                        </li>
                        <li className="mb-4">
                            <h3 className="text-xl font-semibold mb-2">You are beginning a changed life in Christ.</h3>
                            <blockquote className="text-lg font-medium">
                                “We were buried with Him through baptism into death in order that, just as Christ was raised from the dead through the glory of the Father, we too may live a new life.” —Romans 6:4
                            </blockquote>
                        </li>
                        <li>
                            <h3 className="text-xl font-semibold mb-2">You are part of a new family.</h3>
                            <blockquote className="text-lg font-medium">
                                “So in Christ Jesus you are all children of God through faith, for all of you who were baptized into Christ have clothed yourselves with Christ.” —Galatians 3:26–27
                            </blockquote>
                        </li>
                    </ul>
                </div>

                {/* Right Section */}
                <div className="lg:w-1/2 lg:pl-4 mb-8">
                    <h2 className="text-3xl font-bold mb-4">Other questions</h2>
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-2">I have already been baptized. Should I be baptized again?</h3>
                        <p className="mb-4">
                            Your baptism should have signified you becoming a follower of Jesus, beginning a changed life, and uniting with a new family. If your baptism did not reflect this change of life, then you should be baptized again.
                        </p>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-2">Can my child be baptized?</h3>
                        <p className="mb-4">
                            We will baptize anyone over age 10 who understands what baptism symbolizes and wants to make that personal public declaration. We encourage parents to take the journey of salvation with their child to see the fruits of salvation. Also to meet the pastor to discuss your child’s baptism.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Can my infant be baptized?</h3>
                        <p className="mb-4">
                            Throughout the New Testament, the Bible teaches that baptism is a public expression of worship symbolizing the new life we have when we follow Jesus. In the Bible we see that Jesus’ parents dedicated him to the Lord (Luke 2:22–40), and he was later baptized as an adult (Matthew 3:16–17).
                        </p>
                        <p className="mb-4">
                            We understand that some churches practice “infant baptism”. This ceremony is intended to be a commitment between the parents and God on the behalf of the child. The parents promise to raise their child in the faith until the child is old enough to make his or her own personal confession of Christ. This custom began about 300 years after the Bible was completed and is different from the biblical examples of new believers being baptized to publicly profess their faith in Jesus.
                        </p>
                        <p className="mb-4">
                            So at Riverside church we provide opportunities for child dedication and believer’s baptism. To schedule a baby dedication, please contact the pastor for a chat.
                        </p>
                    </div>
                </div>
            </div>

            {/* Third Section */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">We run a baptismal class when needed</h2>
                <img src="/9BaptismPage.jpg" alt="Baptismal Class" className="mx-auto mb-4 rounded-lg shadow-lg zoom" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
        </div>
    );
}
