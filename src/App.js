import { Route, Router, Routes } from "react-router";
import Header from "./components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import { useState } from "react";


const App =()=>{
     const [ cart , SetCart] = useState(5); 


    return ( <div className="container">
         <Header cart = {cart}/>
 
 <Routes>
   <Route path="/" element={<Home/>} />
   <Route path="/About" element={<About/>} />
   <Route path="/Contact" element={<Contact/>} />
   <Route path="/Cart" element={<Cart SetCart={SetCart}/>} />

 </Routes>
 

    </div>
    
    );
    
};
export default App;