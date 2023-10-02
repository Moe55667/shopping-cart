import CartProducts from "../components/CartProducts";
import Payment from "../components/Payment";


const Cart = ({SetCart})=>{
   
    return(
        

        <div className="cart-container">
            <CartProducts/>
            <Payment/>

     


        </div>
    )

}
export default Cart;