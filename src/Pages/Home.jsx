import data from './data.json';
import "./home.css";
import { useState } from 'react';
import video from "./hero-section-video.mp4"
import { Link } from 'react-router-dom';
function Home() {
    const [carousleSteps, setCarousleSteps] = useState(1);
    const carousleItems = document.getElementsByClassName("home-page-products-grid-container");
    function spinRight() {
        setCarousleSteps(carousleSteps + 1);
        for (let i = 0; i < carousleItems.length; i++) {
            carousleItems[i].style.transform = `translate(${-5800 - (295 * carousleSteps)}px)`
        }
    }
    function spinLeft() {
        setCarousleSteps(carousleSteps - 1);
        for (let i = 0; i < carousleItems.length; i++) {
            carousleItems[i].style.transform = `translate(${-5800 - (295 * (carousleSteps - 1))}px)`
        }
    }

    return (
        <div id='home-page-container'>
            <div id="home-page-hero-section">
                <video src={video} width={"600"} height={"300"} loop autoPlay />
                <div id='home-page-over-video'>
                    <div id='home-page-over-video-name'>Evergreen Estates</div>
                    <div id='home-page-over-video-slogen'>Where houses become homes</div>
                </div>
            </div>
            <div id="home-page-intradction">
                <h1>"Let us help you find the hosue of your dreams!" </h1>
                <h3>Welcome to Evergreen Estates, your trusted partner in the world of real estate. We are a dedicated team of professionals passionate about helping you find your dream property. With our extensive knowledge of the local market, personalized approach, and commitment to excellence, we strive to make the process of buying or selling a home a seamless and rewarding experience. Whether you're searching for a cozy apartment, a charming suburban house, or a luxurious waterfront estate, we have the expertise to guide you every step of the way. At Evergreen Estates, we believe that finding the perfect home is more than just a transaction – it's about creating a foundation for your future and turning your dreams into reality. Explore our listings, consult with our experienced agents, and let us unlock the possibilities of the real estate world for you. Your dream home awaits!</h3>
            </div>
            <div id='home-page-see-store'>
                <h1>A taste of our currently available estates-</h1>
                <div >
                    <button onClick={() => { spinLeft() }} id='home-page-left-button'><img id='carousle-left-button-img' src="data:image/png;base64,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" alt="" /></button>
                    <button onClick={() => { spinRight() }} id='home-page-right-button' ><img id='carousle-right-button-img' src="data:image/png;base64,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" alt="" /></button>
                    <Link id="home-page-shop-example" className='linkers' to={"/Products"}>
                        {data.results.map((item, index) => {
                            const { imgSrc, country, city, bedrooms, bathrooms, price } = item;
                            return (
                                <div id={`new-card`} className='home-carousle'>
                                    <div id={`new-card-${index}`} key={index} className="home-page-products-grid-container">
                                        <div className='home-page-products-house-image'><img src={imgSrc} alt="" /></div>
                                        <div className='home-page-products-country'>Country: {country}</div>
                                        <div className='home-page-products-city'>City: {city}</div>
                                        <div className='home-page-products-bedrooms'>Bedrooms: {bedrooms}</div>
                                        <div className='home-page-products-bathrooms'>Bathrooms: {bathrooms}</div>
                                        <div className='home-page-products-price'>Price: {price}$</div>
                                    </div>
                                </div>
                            )
                        })}
                    </Link>
                </div>
                <a id='home-page-link-to-store' href="http://localhost:5175/Products">Click on me to see the store!</a>
            </div>
            <div id="home-page-recommendations">
                <h1>Recommendations form our previous customers-</h1>
                <p className='home-page-customer-recommendation'>"I stumbled upon this website while searching for my dream home, and I was amazed by the wide selection of properties available. The user-friendly interface made it easy for me to navigate and find exactly what I was looking for. Highly recommended!" <span className='recommendations-authors'>-Bruce Wayne , USA ,Gotham</span></p>
                <p className='home-page-customer-recommendation'>"I had a fantastic experience using this website to find a new home. The detailed listings and comprehensive search filters helped me narrow down my options quickly. The beautiful property images and detailed descriptions provided all the information I needed. A must-visit for anyone in search of their perfect home!"<span className='recommendations-authors'>-Clark Kent , Krypton </span></p>
                <p className='home-page-customer-recommendation'>"I would highly recommend this website to anyone in need of a reliable real estate platform. The team behind it has done a great job curating a diverse range of properties. The intuitive search functionality and informative property details made the whole process a breeze. I found my dream home in no time!" <span className='recommendations-authors'>-Harvey Dent, USA , Brooklyn</span> </p>
                <p className='home-page-customer-recommendation'>"As a first-time homebuyer, I was initially overwhelmed by the process, but this website made it so much easier for me. The step-by-step guidance and helpful resources provided valuable insights. The responsive customer support team promptly addressed all my queries. I couldn't be happier with my experience!" <span className='recommendations-authors'>-Peter Parker, USA ,New York</span></p>
                <p className='home-page-customer-recommendation'>"I can't thank this website enough for helping me find my dream property. The extensive database of listings and the ability to save favorites for later made my search incredibly convenient. The site's design is visually appealing and user-friendly. I would definitely recommend it to anyone in the market for a new home." <span className='recommendations-authors'>-James Gordon , USA , Huston</span></p>
            </div>
        </div>
    );
};
export default Home;