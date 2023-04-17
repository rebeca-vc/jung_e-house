import "./style/Cart.css"
import { useState } from "react"

const Cart = ({ cart, updateCart }) => {
    const monsteraPrice = 8
    // const [cart, updateCart ] = useState(0) 
    const [ isOpen, setIsOpen ] = useState(false)
    
    return isOpen ? (
      <div className="jh-cart">
        <button className="button cart sm" onClick={() => setIsOpen(false)}>Close</button>
        <h2>Cart</h2>
        <div>
          Monstera: R${monsteraPrice}
          {/* <button className="button cart " onClick={() => updateCart(cart + 1)}>
            Add
          </button> */}
        </div>
        <h3>Total: R${monsteraPrice * cart}</h3>
        <button className="button cart sm" onClick={() => updateCart(0)}>Clear cart</button>
      </div>
    ) : (
      <div className="jh-cart-button">
        <button class="button open" onClick={() => setIsOpen(true)}>Open Cart</button>
      </div>
    )
    
  }
  
  export default Cart;

  
  
  // let monster = 44.91;
  // let ivy = 56.14;
  // let bunch = 84.21;
  // let total = monster + ivy + bunch;
  // return (<div className="jh-cart">
  //       <h2>Cart</h2>
  //       <ul>
  //         <li>Monstera: R$ {monster.toString().replace('.', ',')}</li>
  //         <li>Ivy: R$ {ivy.toString().replace('.', ',')}</li>
  //         <li>Bunch of flowers: R$ {bunch.toString().replace('.', ',')}</li>
  //       </ul>
  //     <p>Total: {total}</p>
  //     </div>);