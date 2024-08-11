// AwayMissions.jsx

import React from 'react';

const AwayMissions = () => {
    return (
        <div className="container py-4">
            <h2 className="text-3xl font-bold mb-4">Away Missions</h2>
            <h3 className="text-xl font-semibold mb-2">Lesotho Outreach</h3>
            <p className="text-lg mb-4">
                We are part of the Assemblies of God initiative in planting viable churches in this country. There are now 8 churches planted. We support the resident missionary family – The Van der Pol family (Arno, Adele, Rebecca (4), Reuben (1.5)) and the Mason’s (Brett, Rene, and their newborn daughter, Lily) – who live there with financial support and short-term mission visits. We also pray much into the work in this country.
            </p>
            {/* First Image */}
            <img src="/12MinistriesAwayMissionsPage.jpg" alt="Lesotho Outreach" className="w-full mb-8 rounded-lg shadow-lg" />



            {/* Second Image */}
            <img src="/13MinistriesAwayMissions2.jpg" alt="Missionary Families" className="w-full mb-8 rounded-lg shadow-lg" />
            {/* Text below the first image */}
            <p className="text-lg mb-4">
                The Van der Pol family (Arno, Adele, Rebecca (4), Reuben (1.5)) and the Mason’s (Brett and Rene, and their newborn daughter, Lily)
            </p>
        </div>
    );
}

export default AwayMissions;
