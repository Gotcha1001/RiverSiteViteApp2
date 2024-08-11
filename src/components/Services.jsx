import React from 'react';

export default function Services() {
    return (
        <div className="min-h-screen p-3 flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900 text-white">
            <h1 className="text-4xl font-bold text-white mb-8 zoom shadow-neon p-2 rounded-md">Service Times</h1>
            <div className="w-full max-w-lg bg-slate-950 shadow-lg rounded-lg p-8 transition-transform transform hover:scale-105">
                <div className="group mb-6">
                    <h4 className="text-3xl font-bold mb-4 text-center">
                        <span className="text-gray-300  rounded-md p-2">Sundays Church Service: 9am</span>
                    </h4>
                    <h4 className="text-3xl font-bold mb-2 text-center">
                        <span className="text-gray-300">Kids Vibe: 9am</span>
                    </h4>
                    <p className="text-lg text-gray-400 text-center">
                        3 to 12 years
                    </p>
                </div>
            </div>


            <h1 className="text-4xl font-bold text-white mb-4 mt-5 zoom">Life Groups</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-slate-700 p-4 rounded-lg text-center shadow-neon hover:shadow-xl transform hover:scale-105 relative">
                    <p className="font-bold">Louise Olivier: Ladies Meeting</p>
                    <p>Day/Time: Tuesdays at 9am</p>
                    <p>Place: Riverside Church 39 Stafford Road, Westville</p>
                </div>
                <div className="bg-slate-700 p-4 rounded-lg shadow-neon text-center hover:shadow-xl transform hover:scale-105">
                    <p className="font-bold">Susan Greer</p>
                    <p>Day/Time: Thursdays at 7pm</p>
                    <p>Place: Riverside Church 39 Stafford Road, Westville</p>
                </div>
                <div className="bg-slate-700 p-4 rounded-lg shadow-neon text-center hover:shadow-xl transform hover:scale-105">
                    <p className="font-bold">Charles Frankel</p>
                    <p>Day/Time: Mondays at 9am</p>
                    <p>Place: Dawncliffe Park 7 Queen Elizabeth Drive Dawncliffe</p>
                </div>
                <div className="bg-slate-700 p-4 rounded-lg text-center shadow-neon hover:shadow-xl transform hover:scale-105">
                    <p className="font-bold">Adrian Munsamy</p>
                    <p>Day/Time: Thursdays at 7pm</p>
                    <p>Place: 37 David McLean Drive Westville 3630</p>
                </div>
                <div className="bg-slate-700 p-4 rounded-lg text-center shadow-neon hover:shadow-xl transform hover:scale-105">
                    <p className="font-bold">Satish Harilal</p>
                    <p>Day/Time: Thursdays at 7pm</p>
                    <p>Place: 46 Kirriemuir Drive Atholl Heights</p>
                    <p>Email: satishhari2407@gmail.com</p>
                </div>
                <div className="bg-teal-500 p-4 rounded-lg text-center shadow-neon hover:shadow-xl transform hover:scale-105">
                    <p className="font-bold zoom">Join a Life Group today, we all need a thursday in our life</p>
                </div>
            </div>
        </div >
    );
}
