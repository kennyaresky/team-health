import { useContext } from "react"
import ShoppingCartContext from "../contexts/ShoppingCartContext"
import { shoppingContext } from "../contexts/ShoppingCartContext"

export default function ShoppingCart() {
  const {shoppingCart, setShoppingCart} = useContext(shoppingContext)
  return (
    <div className="container">
    <h2>Shopping cart</h2>
    <div className="products">
        {shoppingCart.map(item => {
<div className="product">
  <h3>{item.name}</h3>
  <p>item.pharmacy</p>
<div className="quantity flex">
    Quantity:
    <button className="subtract mx-2  bg-green-primary rounded-[50%] w-[25px] h-[25px]" onClick={()=>setShoppingCart([...shoppingCart, item.quantity + 1])}>-</button>
    {quantity}
    <button className="ml-2 add bg-green-primary rounded-[50%] w-[25px] h-[25px]" onClick={()=>setShoppingCart([...shoppingCart, item.quantity + 1])}>+</button></div>
    </div>
        })}
    </div>
</div>
  )
}

// so what i plan on having here is a um state for the drugs that were bought
//it will be an array of objects with name pharmacy quantity and price
//i need to create state for the drugs in the shopping cart