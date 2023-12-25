import React from "react";

function LandingPage(){
    return(
        <>
        <div className="min-h-screen flex items-center justify-center gradient-container">
        <div className="flex m-20 w-1/2 h-fu bg-white bg-opacity-20 rounded-md shadow-lg  items-center">
          <div className="w-1/2 pr-4 p-8">
            <h1 className="text-4xl font-bold text-gray-700 mb-4 justify-center items-center">FOCUS-FLOW</h1>
            <p className="text-sm py-2">Get in the zone while studying, set a timer, get your beat and let your focus flow.</p>
            <div className='flex py-4'>
            <button type="button" class=" text-white bg-gray-700 hover:bg-black focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Login</button>
            <button type="button" class=" mx-3 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Sign up</button>
            </div>
          </div>
          <div className="w-1/2 p-10">
          <img src="https://i.pinimg.com/originals/6d/b6/63/6db6631e4079e6819e7ad9f50529ea6f.png" alt="image" class="w-full h-auto rounded-md"/>
          </div>
        </div>
      </div>
      </>
    )
}

export default LandingPage;