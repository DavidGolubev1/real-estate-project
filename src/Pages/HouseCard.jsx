import data from './data.json';
import './HouseCard.css';
import { useLocation} from 'react-router-dom';
import { useEffect, useState } from 'react';
function HouseCard() {
    const location=useLocation()
    const {zipId}=location.state;
    const [specificItem,setSpecificItem]=useState(data.results);
    useEffect(()=>{
        setSpecificItem(data.results.filter(item=>item.zpid===zipId.zpid))
    },[setSpecificItem])
    return (
        <div>
            <div id="grid-container-container">
                <div id="grid-container">
                    <div id="location">Country:{specificItem[0].country}    ,     city: {specificItem[0].city}    ,     (zipcode: {specificItem[0].zipcode} )</div>
                    <div id="rooms"> <span>Bedrooms: {specificItem[0].bedrooms}</span> <span>Bathrooms: {specificItem[0].bathrooms}</span>  </div>
                    <div id="salling-status">Status: {specificItem[0].homeStatus.toLowerCase().replace(/_/ , " ")}</div>
                    <div id="type">House type: {specificItem[0].homeType.toLowerCase().replace(/_/ , " ")}</div>
                    <div id="price">Price: {specificItem[0].price} </div>
                    <p id="descreption">descreption: Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti minus perferendis cum eius deleniti, culpa est itaque accusamus architecto ratione, doloribus saepe deserunt alias laborum aspernatur cupiditate rem. Facilis, maxime.</p>
                    <div id="house-image"><img src={specificItem[0].imgSrc} alt="" /></div>
                    <div id='house-card-buttons'>
                        <a href="http://localhost:5175/Products"><button>Go back</button></a>
                        <a href="http://localhost:5175/Contact"><button>Contact an agent</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HouseCard;