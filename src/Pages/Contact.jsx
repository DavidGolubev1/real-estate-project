import "./contact.css"
import info from './Agents.json'
import { useEffect, useState } from "react";
function Contact() {
    let [chosenAgent, setChosenAgent] = useState("all");
    let [filtered, setFiltered] = useState([]);
    useEffect(() => {
        let agentsFiltered;
        if (chosenAgent === "all") {
            agentsFiltered = info.agents;
            setFiltered(agentsFiltered);
        } else {
            agentsFiltered = info.agents.filter((agent) => {
                return agent.area_of_intrest === chosenAgent;
            });
            setFiltered(agentsFiltered);
        }
    }, [chosenAgent]);



    return (
        <div id="contact-page">
            <h1>Found somthing you like?</h1>
            <h3>Our agents are always here for you. Just choose your desiered area and contact the relevent agent, we are waiting!</h3>
            <select onClick={() => { setChosenAgent(event.target.value)}} id="contact-select-an-area">
                <option value="all">All agents</option>
                <option value="Houston">Houston</option>
                <option value="Webster">Webster</option>
                <option value="Humble">Humble</option>
                <option value="Kingwood">Kingwood</option>
                <option value="Porter">Porter</option>
                <option value="Huffman">Huffman</option>
            </select>


            {filtered.map((item, index) => {
                const { first_name, second_name, phone, area_of_intrest, description, img_src } = item
                return (
                    <div id="contact-grid-container-container">
                        <div id="contact-grid-agent-container">
                            <div id="contact-grid-image"><img src={img_src} alt="" /></div>
                            <div id="contact-grid-name">My name: {first_name} {second_name}. </div>
                            <div id="contact-grid-phone">Phone: {phone}.</div>
                            <div id="contact-grid-area">Area of intrest: {area_of_intrest}.</div>
                            <div id="contact-grid-description">About me: {description}.</div>
                        </div>
                    </div>
                )
            })}
            <div id="contact-part-of-our-team">

            </div>
        </div>
    );
};
export default Contact;