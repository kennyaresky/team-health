import s from "../styles/drugs.module.css"
import Icon_search from "../assets/icons/Icon_search.jsx"
import AI_search from "../assets/icons/AI_search.png"
import Drug from "../components/drugs/Drug.jsx"
import drugsContext from "../contexts/DrugsContext.jsx"
import { useState, useContext, useRef } from "react"
import Search from "../components/Search.jsx"
import DrugsModal from "../components/drugs/DrugsModal.jsx"
import { NavLink } from "react-router-dom"



export default function Drugs() {
  const drugsList = useContext(drugsContext)
  const [drugs, setDrugs] = useState(drugsList)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedDrug, setSelectedDrug] = useState(null)
  const searchRef = useRef(null)

function handleChange(){
  const newDrugs = drugsList.filter((drug)=>(
  drug.name.toLowerCase().includes(searchRef.current.value.toLowerCase())
  || drug.pharmacy.toLowerCase().includes(searchRef.current.value.toLowerCase())
  )
)
  setDrugs(newDrugs)
}
  return (
        <div className={`container flex flex-col w-[80%] ${s.container}`}>
    {isModalOpen && <div className="darkoverlay absolute inset-0 bg-black/30 pointer-events-none"></div>}
    {isModalOpen && <DrugsModal {...{selectedDrug, setIsModalOpen}} />}
    <header className="flex mb-6 mt-6 self-center">
      <h2 className="text-2xl font-semibold mr-6">Get your prescription drugs without hassle</h2>
     <Search {...{searchRef, handleChange}} />
      </header>
     <div className={`${s._table}`}>
      <div className={`row ${s.row}`}>
      <div className="column drug">Drug</div>
      <div className="column pharmacy">Provider</div>
      <div className={`${s.column} quantity ${s.quantity}`}>no. in stock</div>
      <div className={`${s.column} quantity ${s.quantity}`}><NavLink to="/drugs/shopping-cart"><button className="bg-grey px-3 py-1 rounded ">Cart</button></NavLink></div>
    </div>
     {drugs.map((drug, index)=>(
      <Drug {...{drug, setSelectedDrug, setIsModalOpen}} key = {index}/>
      ))}
      </div>
   </div>
  )
}
// ok so create the modal we need to create the modal component and then create state to determine whether the modal is open or not, the modal will be imported into the drugs component and then there will also be state in the home component that will dictate what will be shown in the modal