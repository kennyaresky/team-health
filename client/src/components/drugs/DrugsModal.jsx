import { useState, useContext } from "react"
import { shoppingContext } from "../../contexts/ShoppingCartContext"

export default function DrugsModal({selectedDrug, setIsModalOpen}) {
    const [quantity, setQuantity] = useState(0)
    const {shoppingCart, setShoppingCart} = useContext(shoppingContext)
  return (
    <div className="flex flex-col gap-2 items-center absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] trans bg-white shadow-sm text-xl p-4 rounded">
        <div className="drugname text-2xl">Name: {selectedDrug.name}</div>
        <div className="pharmacy">Pharmacy: {selectedDrug.pharmacy}</div>
<div className="quantity flex">
    Quantity:  
    <button className="subtract mx-2  bg-green-primary rounded-[50%] w-[25px] h-[25px]" onClick={()=>{setQuantity(quantity-1); setShoppingCart([...shoppingCart, selectedDrug.quantity - 1])}}>-</button>
    {quantity}
    <button className="ml-2 add bg-green-primary rounded-[50%] w-[25px] h-[25px]" onClick={()=>{setQuantity(quantity+1); setShoppingCart([...shoppingCart, selectedDrug.quantity + 1])}}>+</button></div>
        <button className="bg-green-primary px-3 py-1 rounded text-white" onClick={()=>{setIsModalOpen(false); setShoppingCart([...shoppingCart, selectedDrug])}}>OK</button>
    </div>
  )
}
//what ill need to do here is to wrap this comp in the context and then bring in the context