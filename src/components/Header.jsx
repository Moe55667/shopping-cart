import { Link } from "react-router-dom";
import "../style.css";
import useShop from "../shopContext";
import Cart from "../Pages/Cart";
import Products from "./Products";
import Product from "./Product";

const Header= (product)=>{
    const {products}=useShop();
  

    return (
        <div className="menu">
           <Link  className="Logo" to="/">Reactify</Link>
            <div className= "links">
                <Link to="/"> Home</Link>
                <Link to="/About"> About</Link>
                <Link to="/Contact"> Contact</Link>
                <Link to="/Cart"> Cart</Link>

            </div>
            
            <Link to="/Cart"><span className="cart"> {products.length}
                </span></Link>

        </div>
    );
};
export default Header;