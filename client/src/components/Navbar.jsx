import Icon_home from "../assets/icons/Icon_home.jsx"
import Icon_dumbell from "../assets/icons/Icon_dumbell.jsx"
import Icon_records from "../assets/icons/icon_records.jsx"
import Icon_pills from "../assets/icons/icon_pills.jsx"
import Icon_doctor from "../assets/icons/icon-doctor.jsx"
import s from "../styles/navbar.module.css"

import {NavLink} from "react-router-dom"

export default function Navbar() {
  return (
    <div className="navbar sticky top-0 left-0 h-screen bg-green-primary w-[5%]">
        <ul className={`flex flex-col items-center mt-20 ${s.ul}`}>
          <NavLink to="/"><li className={`${s.li}`}><Icon_home /></li></NavLink>
          <NavLink to="/exercises"><li className={`${s.li}`}><Icon_dumbell /></li></NavLink>
          <NavLink to="/records"><li className={`${s.li}`}><Icon_records /></li></NavLink>
          <NavLink to="/drugs"><li className={`${s.li}`}><Icon_pills /></li></NavLink>
          <NavLink to="/doctors"><li className={`${s.li}`}><Icon_doctor /></li></NavLink>
        </ul>
    </div>
  )
}