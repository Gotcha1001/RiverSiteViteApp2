import React from 'react';

export function LifeGroups() {
    return (
        <div className="container py-4">
            {/* First Section */}
            <div className="lg:flex lg:items-center lg:justify-between mb-8">
                <div className="lg:w-1/2 lg:pr-4 mb-8">
                    <h2 className="text-3xl font-bold mb-4 gradient-background rounded-lg">Life Groups</h2>
                    <h3 className="text-xl font-semibold mb-4">Your LIFE is your GROUP</h3>
                    <h4 className="text-lg font-medium mb-4">
                        Life Groups have one, simple purpose: to bring people together.
                    </h4>
                    <p className="mb-4">
                        Life Groups provide a place to connect with others, share life experiences, and grow spiritually. We believe life is better when you live it together. By participating in a Life Group, you have the opportunity to reach out to others, while growing in your walk with God.
                    </p>
                    <p className="mb-4">
                        Being part of a Life Group means joining a community where you can share your life and faith journey. Our Life Groups meet regularly to study the Bible, pray for one another, and provide support in both good and challenging times.
                    </p>
                    <p className="mb-4">
                        Life Groups allow you to form lasting relationships and be part of a supportive network of friends who encourage and uplift you. Whether you are looking to grow in your faith, find a place to belong, or serve others, there is a Life Group for you.
                    </p>
                    <p className="mb-4">
                        What happens at a Life Group meeting? You’ve probably seen Life Groups meeting and not even realized it. A life group looks like friends at lunch, teams playing tennis, or people studying a book or topic of interest. At its core, a life group is a small gathering of people, and it is less about what you do and more about who you do it with. By participating in Life Groups, you can expect to connect with others through a common activity, engage in life-giving conversation, and request prayer.
                    </p>
                </div>

                <div className="lg:w-1/2 flex justify-center">
                    <img src="/8LifegroupsPage.jpg" alt="Life Groups" className="rounded-lg w-full h-full object-cover ml-4 lg:ml-0 filter brightness-90 hover:brightness-100" />
                </div>
            </div>

            {/* Second Section */}
            <div className="lg:flex lg:items-start lg:justify-between mb-8">
                <div className="lg:w-1/2 lg:pr-4 mb-8">
                    <h2 className="text-3xl font-bold mb-4 gradient-background rounded-lg">How often does a small group meet?</h2>
                    <p className="mb-4">
                        Our Life Groups meet once, twice, three times a month, or weekly. Life Groups are meant to bring meaning and community into the flow of your life, so even if you can’t attend every meeting, there is still great value in joining a group.
                    </p>
                    <h2 className="text-3xl font-bold mb-4">Where do Life Groups meet?</h2>
                    <p className="mb-4">
                        Life Groups meet wherever they want to: homes, restaurants, sports fields, etc.
                    </p>
                    <h2 className="text-3xl font-bold mb-4">How long does a typical Life Group stay together?</h2>
                    <p className="mb-4">
                        Most Life Groups meet for a term. This way, new people can join groups easily and regularly. Also, the term format allows you to try multiple groups each year. As relationships form, some groups choose to stay together for consecutive terms, but new members are always welcome.
                    </p>
                </div>

                <div className="lg:w-1/2">
                    <h2 className="text-3xl font-bold mb-4 gradient-background rounded-lg">Life Group Next Steps</h2>
                    <p className="mb-4">
                        Sometimes, total life change happens in an instant, but more often it happens gradually. As life group leaders, our primary role is to uncover the spiritual condition of group members and walk beside them leading them one step closer to God. What this looks like will be different for each person. Here are some practical examples to help you:
                    </p>
                    <ul className="list-disc pl-4">
                        <li>If a group member is not in a relationship with Christ, bring them to a church service where they can hear a clear presentation of the Gospel.</li>
                        <li>Encourage group members to be water baptized.</li>
                        <li>Invite group members to complete the Growth Track.</li>
                        <li>Connect group members to the Dream Team.</li>
                        <li>Introduce group members to the idea of daily prayer and Bible reading.</li>
                    </ul>
                    <p className="mt-4 ">
                        Our Life Groups will be most healthy when leaders take an active role in knowing each person in their group and intentionally helping them move one step closer to Christ.
                    </p>
                </div>
            </div>
        </div>
    );
}
