/* eslint-disable max-len */
import React from 'react';
import './App.css';

function App() {
return (
  <div className="flex justify-center p-24">
    <div>
      <div className="w-full text-xl text-gray-600 first-letter:text-4xl first-letter:text-blue-600 selection:bg-red-300 dark:md:hover:bg-green-300">
        <h1 className="text-2xl">Let's print this page</h1>
        <p className="text-slate-600 print:text-black print:text-justify">
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores exercitationem similique neque eius laudantium nam minus. Dolor adipisci odit placeat nihil sint, nobis, itaque, libero eius quaerat ex a tenetur.lorem23
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores exercitationem similique neque eius laudantium nam minus. Dolor adipisci odit placeat nihil sint, nobis, itaque, libero eius quaerat ex a tenetur.lorem23

        </p>
        <p className="text-slate-600 print:text-black  print:text-justify">
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores exercitationem similique neque eius laudantium nam minus. Dolor adipisci odit placeat nihil sint, nobis, itaque, libero eius quaerat ex a tenetur.lorem23
          .Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores exercitationem similique neque eius laudantium nam minus. Dolor adipisci odit placeat nihil sint, nobis, itaque, libero eius quaerat ex a tenetur.lorem23
        </p>
        <p className=" print:hidden">
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores exercitationem similique neque eius laudantium nam minus. Dolor adipisci odit placeat nihil sint, nobis, itaque, libero eius quaerat ex a tenetur.lorem23
          .Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores exercitationem similique neque eius laudantium nam minus. Dolor adipisci odit placeat nihil sint, nobis, itaque, libero eius quaerat ex a tenetur.lorem23
        </p>
        <div className="min-h-screen grid place-items-center px-8">
          <div className="w-full max-w-4xl mx-auto ">
            <div className="flex gap-8 p-8 w-screen overflow-x-scroll snap-x">
              <div className=" flex-shrink-0 w-80 h-40 bg-cyan-300 rounded-2xl snap-center" />
              <div className=" flex-shrink-0 w-80 h-40 bg-purple-300 rounded-2xl snap-center" />
              <div className=" flex-shrink-0 w-80 h-40 bg-pink-300 rounded-2xl snap-center" />
              <div className=" flex-shrink-0 w-80 h-40 bg-cyan-300 rounded-2xl snap-center" />
              <div className=" flex-shrink-0 w-80 h-40 bg-purple-300 rounded-2xl snap-center" />
              <div className=" flex-shrink-0 w-80 h-40 bg-pink-300 rounded-2xl snap-center" />
            </div>
            <iframe
              className="w-full h-96   rounded-md aspect-video"
              src="https://www.youtube.com/embed/GHriWlXHiwE"
              title="Youtube video player"
              allow="acceleromoter; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>

        </div>
        <div className="mt-10">
          <label htmlFor="email" className="after:content-['*'] after:ml-1 text[#977272a0">Email</label>
          <button className="bg-cyan-500 text-white px-4 py-2 rounded-full shadow-lg shadow-cyan-500/30" type="button">Subscribe</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg shadow-blue-500/30" type="button">Subscribe</button>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-full shadow-lg shadow-purple-500/30" type="button">Subscribe</button>

        </div>

        <p className="mt-6 text-right">
          <button
            type="button"
            onClick={() => window.print()}
            className="mt-10 m-2 bg-blue-500 text-white border-0 px-3 py-2 rounded-md"
          >
            Print
          </button>
        </p>
      </div>

    </div>
  </div>

);
}

export default App;
