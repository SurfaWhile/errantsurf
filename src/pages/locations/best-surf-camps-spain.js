import React from 'react';
import { Link, useStaticQuery, graphql, Script } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import Header from "../../components/header"
import Footer from "../../components/layout"
import SEO from "../../components/seo"

const BlogArticle = () => {
    return (
      <div>
         <SEO 
          title="The Best Surf Camps of Spain | Errant Surf Travel Magazine " 
          description="Your source for high quality surf holidays in Spain."
          />
      <Header/>
  
      <div className="container mx-auto py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white overflow-hidden">
          <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: 'url("https://wp.surfawhile.com/wp-content/uploads/2023/01/austin-neill-uHD0uyp79Dg-unsplash-1-scaled.jpg")' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 p-8">
              <h1 className="text-white text-4xl font-bold">Surfing Holiday in Spain: The Ultimate Guide for 2024</h1>
            </div>
          </div>
  
          <div className="breadcrumbs">
              <Link to="/">Home</Link> / Surfing Holidays in Spain
          </div>
          
          <div className="p-8">
          <h2 className="text-4xl my-2">Surf Holidays in Spain</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Northern Spain has been one of our favorite regions for a surf vacation for years. A surf vacation in Spain is often a bit overshadowed by the options in neighboring countries like France and Portugal, but that is certainly not always justified! Northern Spain offers a great number of ingredients that make your surf vacation unforgettable.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
            <i>A small disclaimer: this article focuses on mainland Spain, and therefore not on the Canary Islands.</i>          
            </p>
  
            <h2 className="text-4xl my-2">WHY SPAIN IS AN EXCELLENT DESTINATION FOR YOUR NEXT SURF CAMP</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Compared to France, Spain has a number of very interesting advantages. The surf conditions in Spain, especially for beginner surfers, are excellent. Several surf spots in Spain are known to be among the very best for beginners. The main reason for this is that the coast of northern Spain consists of countless different bays. These bays ensure that the surf spots of northern Spain are somewhat more sheltered than the surf spots of, for example, France, where the surf spots are more 'open' in relation to the Atlantic Ocean. The surf spots of Zarautz, Loredo and Somo, Oyambre, and San Vicente de la Barquera are examples of excellent locations for your next surf camp.
            </p>
  
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Moreover, the north of Spain offers stunning natural beauty. For example, in the Spanish region of Cantabria, the landscape is dominated by the overwhelming mountains of the Picos de Europa, which are located directly behind the coast of Spain. This means that you can literally surf with the snowy peaks of the Picos de Europa in the background. The Picos de Europa and several related mountain ranges are extremely rugged areas where bears and wolves live, among other wildlife.
            </p>
  
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Additionally, Spanish gastronomy is of an exceptionally high level. The northern Spanish region of the Basque Country, for example, has the highest concentration of Michelin-starred restaurants. But in Spain, you don't necessarily have to dine in a Michelin-starred restaurant to enjoy high-quality food. In many restaurants or cafés in places like Zarautz or San Sebastian, you can expect excellent food. Another advantage: the price/quality ratio is excellent in Spain. The costs of both accommodation and dining are generally much lower than the prices in the south of France.          
            </p>
  
            <h2 className="text-4xl my-2">The Best Surf Camps in Spain</h2>
           
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Spain offers several excellent surf camps, each with its own unique character. An advantage of Spain is that it is possible to drive from the Netherlands or Belgium. For a limited number of surf accommodations, it is even possible to travel by bus during the summer months. Most surf camps in Spain are located in the two northern Spanish regions of the Basque Country and Cantabria.
            </p>
  
            <h3 className="text-3xl my-2">Dreamsea Surf Camp Cantabria</h3>
            <StaticImage src="https://wp.surfawhile.com/wp-content/uploads/2024/01/glamping-tent-g5.2-cantabria-2-scaled.jpg"/>
  
            <p className="text-gray-700 text-lg leading-relaxed my-4">
            Dreamsea Surf Camp in Cantabria is a unique experience. This internationally oriented surf camp is a luxury glamping concept located in a natural campsite in northern Spain, close to well-known surf spots Oyambre and San Vicente de la Barquera. You stay in shared or private glamping tents, and 3 meals a day are always included, as well as unlimited use of the surf equipment and many activities. You can optionally add surf lessons and yoga to the package. This surf camp caters to a wide audience and is popular among families, couples, groups of friends, and even solo travelers.
            <a href="https://www.surfawhile.com/surfvakanties/spanje/dreamsea-glamping-cantabrie/">Read more</a>. 
            </p>
  
  
            <h3 className="text-3xl my-2">Star Surf Camp Oyambre</h3>
            <StaticImage src="https://wp.surfawhile.com/wp-content/uploads/2023/01/20160822-TCP_9142.jpg"/>
  
            <p className="text-gray-700 text-lg leading-relaxed my-4">
            Are you looking for a great location for your next surf vacation? Look no further than Spain! Northern Spain offers many ingredients for a fantastic surf vacation. You can enjoy fantastic surf conditions for beginner surfers surrounded by great nature. The meals in the northern Spanish regions are of excellent quality, and the price/quality ratio is outstanding. In Spain, you will find several fantastic surf camps suitable for different target groups, so grab your board and go on a surf vacation in Spain!
            <a href="https://www.surfawhile.com/surfvakanties/spanje/star-surf-camp-oyambre/">Read more</a>.
            </p>
  
          </div>
        </div>
      </div>
      <Footer/>
      </div>
    );
  }
  
  export default BlogArticle;