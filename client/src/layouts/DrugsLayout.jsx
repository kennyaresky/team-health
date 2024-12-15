import { Outlet } from "react-router-dom"
import ShoppingCartContext from "../contexts/ShoppingCartContext"

export default function DrugsLayout() {
  
  return (
    <ShoppingCartContext>
   <Outlet /> 
  </ShoppingCartContext>
  )
}
