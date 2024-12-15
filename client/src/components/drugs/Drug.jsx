import s from "../../styles/drugs.module.css"
import Icon_shopping_cart from "../../assets/icons/Icon_shopping_cart"

export default function Drug({drug, setSelectedDrug, setIsModalOpen}) {
   const {name, pharmacy, quantity} = drug
  return (
    <div className={`row ${s.row}`}>
    <div className="column drug">{name}</div>
    <div className="column pharmacy">{pharmacy}</div>
    <div className={`${s.column} quantity ${s.quantity}`}>{quantity}</div>
   <div className={`${s.column}`}><button className={`${s.cart}`} onClick={() => {setSelectedDrug(drug); setIsModalOpen(true)}}><Icon_shopping_cart /></button></div>
    </div>
  )
}
