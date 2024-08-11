import React from 'react';
import { Link } from 'react-router-dom';

const Ministries = () => {
    const ministries = [
        {
            id: 1,
            title: 'Riverside Kids',
            content:
                "That’s why we are committed to creating safe and fun environments where your children are taught about the Bible and the love of Jesus through relevant, age-appropriate kids services. Our ultimate hope is to see a generation of children come to know God at an early age.",
            buttonLabel: 'Learn More',
            buttonLink: '/riverside-kids',
        },
        {
            id: 2,
            title: 'Riverside Teens',
            content:
                "Our teen program runs on Fridays from 7 – 8:30pm. At every Ignite meeting, you will experience powerful worship and a great message! We’d love to spend time with you and have some fun surprises! Also, feel free to invite as many friends as you like, you do not need to be a member of Riverside Church to attend! At our IGNITE meetings you will experience food, games, eating, fun, singing, bible ..& so much MORE",
        },
        {
            id: 3,
            title: 'Riverside Ladies',
            content:
                "Our ladies meet once a term for a special meeting geared around a theme, resulting in lots of Food, Fun and Interaction, to which friends can be invited. These meetings always have a God centered focus.",
        },
        {
            id: 4,
            title: 'Riverside Missions',
            content:
                "Our Heart is — Influencing Africa & beyond with the Gospel of Jesus Christ.",
            buttonLabel: 'Learn More',
            buttonLink: '/local-missions',
        },
        {
            id: 5,
            title: 'Away Missions',
            content:
                "Our Heart is — Influencing Africa & beyond with the Gospel of Jesus Christ.",
            buttonLabel: 'Learn More',
            buttonLink: '/away-missions',
        },
        {
            id: 6,
            title: 'Riverside Men',
            content:
                "We meet once a month for a breakfast (or otherwise announced) for fellowship & input from the Word of God. Great friends are formed here & all are encouraged to be great men of God in all the areas of our lives.",
        },
        // Add more ministries as needed
    ];

    const handleHover = (id) => {
        const element = document.getElementById(`ministry-content-${id}`);
        if (element) {
            element.classList.toggle('hidden');
            element.classList.toggle('block');
        }
    };

    return (
        <div className="container py-4 gradient-background2">
            <h2 className="text-3xl font-bold mb-8 text-center zoom">Ministries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ministries.map((ministry) => (
                    <div
                        key={ministry.id}
                        className="ministry-card bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
                        onMouseEnter={() => handleHover(ministry.id)}
                        onMouseLeave={() => handleHover(ministry.id)}
                    >
                        <h3 className="text-xl font-bold mb-4">{ministry.title}</h3>
                        <div
                            id={`ministry-content-${ministry.id}`}
                            className="hidden text-sm mb-4"
                        >
                            <p>{ministry.content}</p>
                            {ministry.buttonLabel && ministry.buttonLink && (
                                <Link
                                    to={ministry.buttonLink}
                                    className="inline-block mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                                >
                                    {ministry.buttonLabel}
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-8">
                <img src="https://media.istockphoto.com/id/1448698670/photo/teamwork-hands-heart-and-diversity-partnership-business-people-support-or-community-care.jpg?b=1&s=612x612&w=0&k=20&c=VLGsPf-V1Pv1QzNzbWXH1KNq8rQF6p8K07DG9VWJ8iI=" alt="Large Image" className="mx-auto rounded-lg shadow-lg" />
            </div>
        </div>
    );
}

export default Ministries;
