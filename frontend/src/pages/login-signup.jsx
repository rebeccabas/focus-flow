import React, { useState } from 'react';
import './loginpage.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function LoginForm() {
    return (
        <>
            <form class="space-y-4 justify-center items-center" action="#">
                <div className='justify-center items-center'>
                    <div>
                        <label for="email" class="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"> <FaUser className='mt-1 mr-1' />Username</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>
                    <div>
                        <label for="password" class="flex mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-white">< FaLock className='mt-1 mr-1' />Password</label>
                        <input type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                            </div>
                        </div>
                        <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                    </div>
                    <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                    </p>
                </div>
            </form>
        </>
    )
}

function SignUp() {
    return (
        <>
            <form class="space-y-4  justify-center items-center" action="#">
                <div class='justify-center items-center'>
                <div>
                    <label for="email" class="flex mb-1 text-sm font-medium text-gray-900 dark:text-white"><MdEmail className='mt-1 mr-1' />Email</label>
                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>
                <div>
                    <label for="email" class="flex mt-2 mb-1 text-sm font-medium text-gray-900 dark:text-white"> <FaUser className='mt-1 mr-1' />Username</label>
                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>
                <div>
                    <label for="password" class="flex mt-2 mb-1 text-sm font-medium text-gray-900 dark:text-white">< FaLock className='mt-1 mr-1' />Password</label>
                    <input type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>
                <div>
                    <label for="password" class="flex mt-2 mb-1 text-sm font-medium text-gray-900 dark:text-white">< FaLock className='mt-1 mr-1' />Confirm Password</label>
                    <input type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-start">
                        <div class="flex items-center h-5 pt-2.5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                        </div>
                        <div class="ml-3 text-sm pt-2">
                                <label for="remember" class="text-gray-500 dark:text-gray-300">I agree with the terms and conditions.</label>
                            </div>
                    </div>
                </div>
                <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Signup</a>
                </p>
                </div>
            </form>
        </>
    )
}


const LoginPage = () => {
    const [activeTab, setActiveTab] = useState('login');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="min-h-screen flex-col items-center justify-center pt-20 gradient-container">
            <div className="flex justify-center mr-12 items-center mt-5 ">
                <button
                    className={`tab-button ${activeTab === 'login' ? 'active-tab' : ''}  text-white bg-black hover:bg-purple-700 m-2 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 ml-20`}
                    onClick={() => handleTabChange('login')}
                >
                    Login
                </button>
                <button
                    className={`tab-button ${activeTab === 'signup' ? 'active-tab' : ''}  text-white bg-black hover:bg-purple-700 m-2 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900`}
                    onClick={() => handleTabChange('signup')}
                >
                    Signup
                </button>
            </div>
            <div class="flex justify-center items-center">
            <div className="bg-white bg-opacity-20 py-10 flex justify-center items-center rounded-md shadow-lg w-1/4 h-auto">
                <div className="w-auto h-auto items-center">
                    {activeTab === 'login' ? (
                        <div className="w-auto">
                            <h2 className="text-xl font-bold mb-4">Welcome Back!</h2>
                            <div>
                                <LoginForm />
                            </div>
                        </div>
                    ) : (
                        <div className="w-auto">
                            <h2 className="text-xl font-bold mb-4">Get Started!</h2>
                            <SignUp />
                        </div>
                    )}
                </div>
            </div>
        </div>
        </div>
    );
};

export default LoginPage;
