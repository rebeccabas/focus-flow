
import React from 'react';

const Sidebar = () => {
    return (
        <div className="bg-white bg-opacity-20 px-8 py-7 rounded-md shadow-lg w-1/7 h-screen backdrop-blur-md">
            <h1 className="text-4xl font-bold mb-4 text-white">Focus-flow</h1>
            <ul>
                    <li className="mb-2">
                        <a href="/home" className="text-white text-xl font-bold hover:bg-gray-700 hover:text-gray-200 px-2 py-1 rounded transition-all">
                            Home
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="/todos" className="text-white text-xl font-bold hover:bg-gray-700 hover:text-gray-200 px-2 py-1 rounded transition-all">
                            To-Dos
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="/profile" className="text-white text-xl font-bold hover:bg-gray-700 hover:text-gray-200 px-2 py-1 rounded transition-all">
                            Profile
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="/chillpill" className="text-white text-xl font-bold hover:bg-gray-700 hover:text-gray-200 px-2 py-1 rounded transition-all">
                            Chill Pill
                        </a>
                    </li>
                <li>
                    <a href="/logout" className="text-white text-xl font-bold hover:bg-gray-700 hover:text-gray-200 px-2 py-1 rounded transition-all">
                        Logout
                    </a>
                </li>
            </ul>
        </div >
    );
};

const HomePage = () => {
    return (
        <div className="flex gradient-container">
            <Sidebar />
            <div className="flex-1 p-4">
                {/*main content goes here */}
                <h2 className="flex justify-center items-center text-2xl font-bold mb-4 text-white">Welcome to the Home Page</h2>
                {/* Add the content specific to the Home page */}
            </div>
        </div>
    );
};

export default HomePage;

