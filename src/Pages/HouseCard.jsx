import data from './data.json';
import './HouseCard.css';
function HouseCard() {
    console.log();
    return (
        <div>
            <div id="grid-container-container">
                <div id="grid-container">
                    <div id="location">State: {data.results[0].bedrooms} ,  city:  ,   (zipcode:  )</div>
                    <div id="rooms">rooms</div>
                    <div id="salling-status">sailing</div>
                    <div id="type">type</div>
                    <div id="price">price</div>
                    <p id="descreption">descreption</p>
                    <div id="house-image"><img src="https://photos.zillowstatic.com/fp/e484d2b63e64571b6eaff8cbb8dbce8c-p_e.jpg" alt="" /></div>
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