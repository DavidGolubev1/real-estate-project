import data from './data.json';
import "./home.css";
import video from "./hero-section-video.mp4"
function Home() {

    const carousleItems = document.getElementsByClassName("home-page-products-grid-container");
    function spinRight() {
        for (let i = 0; i < carousleItems.length; i++) {
            carousleItems[i].style.transform = "translateX(10vw)"
            console.log("you pressed right");
        }
    }

    function spinLeft() {
        for (let i = 0; i < carousleItems.length; i++) {
            carousleItems[i].style.transform = "translateX(-10vw)"
            console.log("you pressed left");
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
                <div id="home-page-shop-example">
                    <button onClick="spinLeft()" id='home-page-left-button'>left</button>
                    <button onClick="spinRight()" id='home-page-right-button'>right</button>
                    {data.results.map((item, index) => {
                        const { imgSrc, country, city, bedrooms, bathrooms, price } = item;
                        return (
                            <div id={`new-card-${index}`} className='home-carousle' key={index}>
                                <div className="home-page-products-grid-container">
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
            <div id="gallery">

            </div>

        </div>
    );
};
export default Home;