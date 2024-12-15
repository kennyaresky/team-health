import AI_search from "../assets/icons/AI_search.png"
import Icon_search from "../assets/icons/Icon_search"
import s from "../styles/drugs.module.css"
import { useState} from "react"


export default function Search({handleChange,searchRef}) {
  const [inputClass, setInputClass] = useState(s.search_active)

function handleClick(){
inputClass === s.search_active ? setInputClass(s.search_inactive) : setInputClass(s.search_active)
}
  return (
   <>
    <input type="text" className={`${inputClass} border-green-primary focus:border-green-primary rounded-lg`} ref={searchRef} onChange={handleChange}/>
      <button onClick={handleClick}><Icon_search /></button>
      <img src={AI_search} width={30} />
   </>
  )
}
