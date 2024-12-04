import Icon_home from "../assets/icons/Icon_home.jsx"
import Icon_dumbell from "../assets/icons/Icon_dumbell.jsx"
import Icon_records from "../assets/icons/icon_records.jsx"
import Icon_pills from "../assets/icons/icon_pills.jsx"
import Icon_doctor from "../assets/icons/icon-doctor.jsx"

import {NavLink} from "react-router-dom"

export default function Navbar() {
  return (
    <div className="navbar sticky top-0 left-0 h-screen bg-green-primary w-[5%]">
        <ul className="flex flex-col items-center mt-20">
          <NavLink to="/"><li className="home-icon"><Icon_home /></li></NavLink>
          <NavLink to="/exercises"><li className="dumbell-icon"><Icon_dumbell /></li></NavLink>
          <NavLink to="/records"><li className="records-icon"><Icon_records /></li></NavLink>
          <NavLink to="/drugs"><li className="pills-icon"><Icon_pills /></li></NavLink>
          <NavLink to="/doctors"><li className="doctor-icon"><Icon_doctor /></li></NavLink>
        </ul>
    </div>
  )
}