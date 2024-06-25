import React from 'react';
import { Link, useStaticQuery, graphql, Script } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import Header from "../../components/header"
import Footer from "../components/layout"
import SEO from "../components/seo"

const BlogArticle = () => {
  return (
    <div>
        <SEO 
        title="The Best Surf Camps of France | Errant Surf Travel Magazine " 
        description="Your source for high quality surf holidays in France."
        />

    <Header/>

    <div className="container mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white overflow-hidden">
        <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: 'url("https://wp.surfawhile.com/wp-content/uploads/2023/01/austin-neill-uHD0uyp79Dg-unsplash-1-scaled.jpg")' }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 p-8">
            <h1 className="text-white text-4xl font-bold">Surfing Holiday in France: The Ultimate Guide for 2024</h1>
          </div>
        </div>

        <div className="breadcrumbs">
            <Link to="/">Home</Link> / Surfing Holidays in France
        </div>
        
        <div className="p-8">
        <h2 className="text-4xl my-2">Surf Holidays in France</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
          France has long been the most popular destination for a surfing holiday among travelers from all over the world This is due in part to the fantastic waves found along the Atlantic Ocean, especially in the southwest of France. Additionally, the proximity of the airport of Bordeaux is a significant reason for the large number of surf camps in France.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
          France offers an abundance of fantastic surf spots suitable for surfers of various levels. The incredible waves have led to the establishment of numerous surf camps in popular surf towns like Moliets and Mimizan. Thanks to the ever-growing popularity of surfing, a variety of surf camps have emerged, each with its unique character. From camps targeting a young crowd with lively parties, to luxurious glamping concepts perfect for a romantic surfing holiday with your partner, and family camps specifically designed for families.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Below is our selection of the best surf camps in France, updated for 2024. If you have specific questions, feel free to contact us through our contact page.
          </p>

          <h2 className="text-4xl my-2">The Best Surf Camps in France</h2>
          
          <h3 className="text-3xl my-2">Dreamsea Surf Camp Moliets</h3>
          <StaticImage src="https://www.surfawhile.com/_gatsby/file/c318c3e717e46fe23d84b4f5781db89d/NIC1579.jpg?u=https%3A%2F%2Fwp.surfawhile.com%2Fwp-content%2Fuploads%2F2022%2F12%2FNIC1579.jpg"/>

          <p className="text-gray-700 text-lg leading-relaxed my-4">
          Are you looking for a stylish surf camp that focuses on quality? Then the Dreamsea Surf Camp in Moliets is the perfect option for you! This internationally oriented surf camp in the lively Moliets is one of France's absolute hotspots during the summer. You stay in stylish tipi tents with made-up beds, which you share with other (solo) travelers or your friends. During your stay, meals, the use of surf equipment, and many activities are included in the price. You can optionally add surf lessons and/or yoga to your booking. This surf camp is very popular among solo travelers or groups of friends.          
          </p>

          <h3 className="text-3xl my-2">Dreamsea Glamping Moliets</h3>
          <StaticImage src="https://www.surfawhile.com/_gatsby/image/f20a20cf02687b7fcaeb92a7ee99dabd/538bbe1427eb7514d4f6e7cdacce2380/Photo-15-04-2019-21-09-19-scaled.jpg?u=https%3A%2F%2Fwp.surfawhile.com%2Fwp-content%2Fuploads%2F2024%2F01%2FPhoto-15-04-2019-21-09-19-scaled.jpg&a=w%3D2048%26h%3D1366%26fm%3Djpg%26q%3D90&cd=2024-01-09T15%3A21%3A32"/>

          <p className="text-gray-700 text-lg leading-relaxed my-4">
          The Dreamsea Glamping in Moliets is the more luxurious variant of the Dreamsea Surf Camp mentioned above. The Dreamsea Surf Camp consists of shared tents, while the Dreamsea Glamping features private tents. The Dreamsea Glamping has its own restaurant area and a yoga deck. The great thing about staying at the glamping is that you can participate in all the activities of the surf camp while still having the option to retreat to the glamping area. You stay in stylish private glamping tents, and meals and the use of surf equipment are included. Here, too, you can add surf lessons and/or yoga to your booking. The Dreamsea Glamping is popular among families, couples, and others seeking more privacy.          
          </p>

          <h3 className="text-3xl my-2">Star Surf Camp Moliets</h3>
          <StaticImage src="https://www.surfawhile.com/_gatsby/file/3d27f5cdbf9975522258d700df9dbfef/MP18099.jpg?u=https%3A%2F%2Fwp.surfawhile.com%2Fwp-content%2Fuploads%2F2022%2F12%2FMP18099.jpg"/>

          <p className="text-gray-700 text-lg leading-relaxed my-4">
          Star Surf Camp in Moliets is one of the classics on the French coast. This internationally oriented surf camp is one of the largest in Europe, attracting people from all over the continent. The surf camp offers various types of accommodation, from budget options to comfortable bell tents. Most meals are always included during your stay, and once a week, there's a wine and cheese night. You can add surf lessons and/or a surf rental pack to your booking and participate in relaxing yoga sessions. This surf camp is known for its strong focus on (live) music performances. It is visited by internationally oriented solo travelers and groups of friends.          
          </p>

          <h3 className="text-3xl my-2">Star Surf Camp Moliets Deluxe</h3>
          {/* <StaticImage src="Het Star Surf Camp Deluxe is het meer comfortabele broertje van Star Surf Camp in Moliets. Dit surfkamp richt zich op meer kwalitatieve privé accommodatie, en biedt accommodaties van hoge(re) kwaliteit. Het surfcamp heeft een zeer sterke focus op surf & yoga en je kunt genieten van gezonde maaltijden in een wat rustigere omgeving vergeleken met het Star Surf Camp. Groot voordeel is dat je wel gewoon deel kunt nemen aan de activiteiten die worden georganiseerd in het surf camp gedeelte, zoals de livemuziek optredens. 6 x ontbijt, 6 x lunch en 4 x diner en een wine & cheese night is altijd inbegrepen tijdens jouw verblijf, evenals een groot aantal activiteiten. Surfles, surf rental en yoga kan optioneel worden bijgeboekt. Dit surfkamp is populair onder internationaal georiënteerde koppels, gezinnen en groepjes vriendinnen of vrienden die op zoek zijn naar iets meer privacy en comfort."/> */}

          <p className="text-gray-700 text-lg leading-relaxed my-4">
          Star Surf Camp Deluxe is the more comfortable sibling of Star Surf Camp in Moliets. This surf camp focuses on more quality private accommodation and offers high(er) quality lodging. The camp has a strong focus on surf & yoga, and you can enjoy healthy meals in a quieter environment compared to the main Star Surf Camp. The big advantage is that you can still participate in the activities organized at the main camp, like live music performances. Six breakfasts, six lunches, four dinners, and a wine & cheese night are always included during your stay, along with many activities. Surf lessons, surf rental, and yoga can be optionally added. This surf camp is popular among internationally oriented couples, families, and groups of friends looking for more privacy and comfort. 
          </p>

          <h3 className="text-3xl my-2">SURFinn Vieux Boucau</h3>
          <StaticImage src="https://www.surfawhile.com/_gatsby/image/9818d92f53194a047ad6289adbf53901/538bbe1427eb7514d4f6e7cdacce2380/VB_front-scaled.jpg?u=https%3A%2F%2Fwp.surfawhile.com%2Fwp-content%2Fuploads%2F2022%2F12%2FVB_front-scaled.jpg&a=w%3D2048%26h%3D1366%26fm%3Djpg%26q%3D90&cd=2022-12-28T15%3A14%3A42"/>

          <p className="text-gray-700 text-lg leading-relaxed my-4">
          Are you looking for a surfing holiday in France but prefer staying in a comfortable bed & breakfast? Look no further than SURFinn Vieux Boucau. This delightful surf bed & breakfast in the charming town of Vieux Boucau offers various types of rooms suitable for different kinds of travelers. The surf bed & breakfast features a lovely garden with a swimming pool to relax after a good surf session. Breakfast is always included, and you can enjoy delicious evening meals several times a week. You can add surf lessons and/or surf rental to your booking. The beach of Vieux Boucau is within walking distance of the SURFinn.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed my-4">
          France offers a wide variety of surf camps suitable for surfers of all levels. Whether you're a first-time surfer or an experienced surfer looking for perfect tubes, France has it all. There are also accommodations that perfectly match the needs of different groups, such as solo travelers, couples, groups of friends, or families. So, grab your board and go on a surfing holiday in France.
          </p>

        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default BlogArticle;