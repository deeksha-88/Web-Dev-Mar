import {BrowserRouter , Routes , Route } from "react-router-dom"
import { useState } from "react"

import Navbar from "./Navbar"
import Home from "./Home"
import Cart from "./Cart"


function App(){

    const [cart , setCart] = useState(0)

    return(
         <BrowserRouter>
         
         <Navbar cart={cart}  />
         
         
         <Routes>
             
             <Route  path="/" element={ <Home  cart={cart}  setCart={setCart} />  }  />

            <Route path="/cart"  element={ <Cart cart={cart} />    } />


         </Routes>
         
         
         </BrowserRouter>
    )
}

export default App