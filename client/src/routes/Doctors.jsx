import { useContext, useRef, useState } from "react";
import Search from "../components/Search.jsx";

// images
import Icon_search from "../assets/icons/Icon_search"
import AI_search from "../assets/icons/AI_search.png"

//stylesheet
import s from "../styles/doctors.module.css"

//components
import Doctor from "../components/doctors/Doctor.jsx";

//contexts
import doctorContext from "../contexts/doctorsContext.jsx";



export default function Doctors() {
  const doctorsList = useContext(doctorContext)
  const [doctors, setDoctors] = useState(doctorsList)
  const searchRef = useRef(null)

function handleChange(){
  const newDoctors = doctorsList.filter((doctor)=>(
  doctor.name.toLowerCase().includes(searchRef.current.value.toLowerCase())
  || doctor.specialization.toLowerCase().includes(searchRef.current.value.toLowerCase())
  || doctor.hospital.toLowerCase().includes(searchRef.current.value.toLowerCase())
  )
)
setDoctors(newDoctors)
}
  return (
    <>
    <div className={`${s.container} mx-auto`}>
    <header className="flex mb-8 mt-2 self-center m-auto w-fit"><h2 className="text-2xl font-semibold mr-6">Get in touch with a doctor right now</h2><Search {...{handleChange, searchRef}} /></header>
    <main className={`${s.main} *:bg-grey *:rounded-2xl w-full`}>
     {doctors.map((doctor, index)=>(
      <Doctor {...{doctor}} key = {index}/>
      ))}
    </main>
    </div>
    </>
  )
}
