import React, {  ChangeEvent, useEffect, useState } from 'react';
import { Link} from "gatsby"
import Header from "../components/header"
import Footer from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  
    // useEffect(() => { 
    //   console.log(document); 
    // }); 
  
    return (      

        <div className="App">

        <SEO 
        title="Errant Surf Travel Magazine" 
        description="Your source for high quality surf &amp; travel experiences."
        />
        <Header/>

        {/* Hero Section */}
        <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url("https://wp.surfawhile.com/wp-content/uploads/2023/01/austin-neill-uHD0uyp79Dg-unsplash-1-scaled.jpg")' }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center">  <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">Welcome to Errant Surf Travel Magazine</h1>
            <p className="text-white text-lg md:text-2xl mb-8">Your source for high quality surf &amp; travel</p>
            <a href="#content" className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700 transition duration-300">Explore Now</a>
           </div>
          </div>
        </div>
        <div id="content" className="container mx-auto">
            <h2 classNme="text-4xl">Surf Holiday Collections</h2>
        </div>
        {/* Image Grid */}
        <div className="container mx-auto py-10">
          {/* First Row: 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/travel/best-surf-camps-france">
            <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: 'url("http://localhost:8000/static/835853a1b6610f61756ba1241d58a662/d04fa/NIC1579.webp")' }}>
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <h3 className="text-white">Best Surf Camps France</h3>
              </div>
            </div>
            </Link>
            <Link to="/travel/best-surf-camps-spain">
            <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: 'url("https://wp.surfawhile.com/wp-content/uploads/2024/01/glamping-tent-g5.2-cantabria-2-scaled.jpg")' }}>
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
              <h3 className="text-white">Best Surf Camps Spain</h3>
              </div>
            </div>
            </Link>
          </div>
      

          {/* Second Row: 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <Link to="/travel/best-surf-camps-portugal">
            <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: 'url("https://www.surfawhile.com/_gatsby/file/390a756b0a108704b46dcb1ec878b724/IMG_0247-scaled.jpg?u=https%3A%2F%2Fwp.surfawhile.com%2Fwp-content%2Fuploads%2F2024%2F01%2FIMG_0247-scaled.jpg")' }}>
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
              <h3 className="text-white">Best Surf Camps Portugal</h3>
              </div>
            </div>
            </Link>
            <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: 'url("https://source.unsplash.com/600x400/?ocean")' }}>
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
              <h3 className="text-white">Best Surf Camps Morocco (coming soon)</h3>
              </div>
            </div>
            <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: 'url("https://source.unsplash.com/600x400/?sunset")' }}>
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
              <h3 className="text-white">Best Surf Camps Costa Rica (coming soon)</h3>
              </div>
            </div>
          </div>
        </div>

        <Footer/>
      </div>
      
    )
}