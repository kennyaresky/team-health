import s from "../../styles/doctors.module.css"


export default function Doctor({doctor}) {
    const {name, availability, specialization, hospital} = doctor
  return (
   <>
   <ul className={`${s.ul}`}>
    <li>Name: {name}</li>
    <li>Available: {availability? "Yes" : "No"}</li>
    <li>Specialization: {specialization}</li>
    <li>Hospital: {hospital}</li>
   </ul>
   </>
  )
}
