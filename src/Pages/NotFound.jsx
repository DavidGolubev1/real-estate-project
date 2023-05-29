import "./NotFound.css"
import { Link } from "react-router-dom";
function NotFound(){
    return(
        <div id="not-found-page">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUrgL5za9ORl59GpGKLzrpPsuXa_zx_VUQ8w&usqp=CAU" alt="" />
        sorry, we could not find what you where looking for. 
        <Link to={"/Home"}> <button> Home page</button> </Link>
    </div>
    );
};
export default NotFound