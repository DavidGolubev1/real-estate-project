import "./HouseCard"
import './Products.css'
import data from './data.json';
import { useState, useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";
function Products() {
    let [sortedJason, setSortedJason] = useState([]);
    let [favoritesArray, setFavoritesArray] = useState([])
    let [mainFiltering, setMainFiltering] = useState("");
    let [houseStatusFilter, setHouseStatusFilter] = useState("");
    let [houseTypeFilter, setHouseTypeFilter] = useState("");
    let [housebedroomFilter, setBedroomFilter] = useState("");
    let [housePriceFilter, setHousePriceFilter] = useState("");

    useEffect(() => {
        const houseStatus = document.getElementById("products-house-status-inner-filter");
        const houseType = document.getElementById("products-house-type-inner-filter");
        const bedRoomsNumber = document.getElementById("products-bedrooms-number-inner-filter");
        const housePricing = document.getElementById("products-pricing-inner-filter");
        if (mainFiltering === "house-status") {
            houseStatus.style.display = "block";
            houseType.style.display = "none";
            bedRoomsNumber.style.display = "none";
            housePricing.style.display = "none";
        } else if (mainFiltering === "house-type") {
            houseStatus.style.display = "none";
            houseType.style.display = "block";
            bedRoomsNumber.style.display = "none";
            housePricing.style.display = "none";
        } else if (mainFiltering === "bedrooms-number") {
            houseStatus.style.display = "none";
            houseType.style.display = "none";
            bedRoomsNumber.style.display = "block";
            housePricing.style.display = "none";
        } else if (mainFiltering === "price") {
            houseStatus.style.display = "none";
            houseType.style.display = "none";
            bedRoomsNumber.style.display = "none";
            housePricing.style.display = "block";
        } else if (mainFiltering === "favorites") {
            setSortedJason(data.results.filter())
        } else {
            setSortedJason(data.results)
            houseStatus.style.display = "none";
            houseType.style.display = "none";
            bedRoomsNumber.style.display = "none";
            housePricing.style.display = "none";
        };
    }, [mainFiltering]);

    useEffect(() => {
        if (houseStatusFilter === "for-sale") {
            setSortedJason(data.results.filter(item => item.homeStatus === "FOR_SALE"));
        } else if (houseStatusFilter === "for-rent") {
            setSortedJason(data.results.filter(item => item.homeStatus === "FOR_RENT"));
        } else {
            setSortedJason(data.results)
        }
    }, [houseStatusFilter]);

    useEffect(() => {
        if (houseTypeFilter === "single-family") {
            setSortedJason(data.results.filter(item => item.homeType === "SINGLE_FAMILY"));
        } else if (houseTypeFilter === "multi-family") {
            setSortedJason(data.results.filter(item => item.homeType === "MULTI_FAMILY"));
        } else if (houseTypeFilter === "lot") {
            setSortedJason(data.results.filter(item => item.homeType === "LOT"));
        } else if (houseTypeFilter === "town-house") {
            setSortedJason(data.results.filter(item => item.homeType === "TOWNHOUSE"));
        } else if (houseTypeFilter === "condo") {
            setSortedJason(data.results.filter(item => item.homeType === "CONDO"));
        } else {
            setSortedJason(data.results)
        }
    }, [houseTypeFilter]);

    useEffect(() => {
        if (housebedroomFilter === "1") {
            setSortedJason(data.results.filter(item => item.bedrooms === 1))
        } else if (housebedroomFilter === "2") {
            setSortedJason(data.results.filter(item => item.bedrooms === 2))
        } else if (housebedroomFilter === "3") {
            setSortedJason(data.results.filter(item => item.bedrooms >= 3))
        } else {
            setSortedJason(data.results)
        };
    }, [housebedroomFilter]);

    useEffect(() => {
        if (housePriceFilter === "under-200") {
            setSortedJason(data.results.filter(item => item.price <= 200000))
        } else if (housePriceFilter === "under-300") {
            setSortedJason(data.results.filter(item => item.price <= 300000))
        } else if (housePriceFilter === "from-cheep-to-expensive") {
            setSortedJason(data.results.slice().sort((a, b) => a.price - b.price))
        } else if (housePriceFilter === "from-expensive-to-cheep") {
            setSortedJason(data.results.slice().sort((a, b) => b.price - a.price))
        } else {
            setSortedJason(data.results)
        }
    }, [housePriceFilter]);


    function addToLS(cardsId) {
        localStorage.setItem(JSON.stringify(cardsId), JSON.stringify("hello-world"))
    return
    }

    function removeFromLS(cardsId) {
        localStorage.removeItem(JSON.stringify(cardsId))
    return
    }


    return (
        <div className='products-page' >
            <h1>Ready to find your new home?</h1>
            <p>scroll through hundreds of potentional house and choose the one that suits you most, we`re waiting to make your dreams come true!</p>
            <div id='products-filter-search'> filter by-
                <select onChange={() => { setMainFiltering(event.target.value) }} id="main-filter">
                    <option value="show-all">show all</option>
                    <option value="house-status">House status</option>
                    <option value="house-type">House type</option>
                    <option value="bedrooms-number">Number of bedrooms</option>
                    <option value="price">Price</option>
                    <option value="favorites">Favorites</option>
                </select>
                <div className='filters' id='products-house-status-inner-filter'>
                    choose desired house status-
                    <select onChange={() => { setHouseStatusFilter(event.target.value) }} id="house-status-filter">
                        <option value="show-all">show all</option>
                        <option value="for-sale">For sale</option>
                        <option value="for-rent">For rent</option>
                    </select>
                </div>
                <div className='filters' id='products-house-type-inner-filter'>
                    choose desired house type-
                    <select onChange={() => { setHouseTypeFilter(event.target.value) }} id="house-type-filter">
                        <option value="show-all">show all</option>
                        <option value="single-family">single family</option>
                        <option value="multi-family">multi family</option>
                        <option value="lot">lot</option>
                        <option value="town-house">town house</option>
                        <option value="condo">condo</option>
                    </select>
                </div>
                <div className='filters' id='products-bedrooms-number-inner-filter'>
                    choose desired room number-
                    <select onChange={() => { setBedroomFilter(event.target.value) }} id="bedrooms-number-filter">
                        <option value="show-all">show all</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3+</option>
                    </select>
                </div>
                <div className='filters' id='products-pricing-inner-filter'>
                    choose desired pricing method-
                    <select onChange={() => { setHousePriceFilter(event.target.value) }} id="pricing-filter">
                        <option value="show-all">show all</option>
                        <option value="under-200">under 200,000$</option>
                        <option value="under-300">under 300,000$</option>
                        <option value="from-cheep-to-expensive">cheep to expensive</option>
                        <option value="from-expensive-to-cheep">expensive to cheep</option>
                    </select>
                </div>

            </div>
            {sortedJason.map((item, index) => {
                let { imgSrc, country, city, bedrooms, bathrooms, price, zpid } = item;
                return (
                    <div id={`new-card-link-${index}`} key={index} className="products-new-card-container">
                        <Link className="linkers" to={"./HouseCard"}>
                            <div className="products-grid-container">
                                <div className='products-house-image'><img src={imgSrc} alt="" /></div>
                                <div className='products-country'>Country: {country}</div>
                                <div className='products-city'>City: {city}</div>
                                <div className='products-bedrooms'>Bedrooms: {bedrooms}</div>
                                <div className='products-bathrooms'>Bathrooms: {bathrooms}</div>
                                <div className='products-price'>Price: {price}$</div>
                            </div>
                        </Link>
                        <button onClick={() => { localStorage.getItem(zpid) == null ? (addToLS(zpid), style = { Color: "red" }) : (removeFromLS(zpid), style = { color: "grey" }) }}
                            className={`product-favorite-heart ${index}`}>♥</button>
                    </div>
                )
            })}
            <Outlet />
        </div>
    );
};
export default Products;
// localStorage.getItem==null?addToLS(zpid):removeFromLS(zpid)