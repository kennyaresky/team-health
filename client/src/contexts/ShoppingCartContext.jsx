import { useState, createContext } from "react"

export const shoppingContext = createContext()
export default function ShoppingCartContext({children}) {
const [shoppingCart, setShoppingCart] = useState([])
return(
  <shoppingContext.Provider value={{shoppingCart, setShoppingCart}}>{children}</shoppingContext.Provider>
)
}