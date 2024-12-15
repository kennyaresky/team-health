import { useState,useEffect } from "react"
import s from "../styles/exercises.module.css"
import { NavLink, Outlet } from "react-router-dom"


export default function Exercises() {
  const [datesState, setDatesStates] = useState([])
  
  useEffect(()=>{
    const length = 7
    const dates = []
     const currentDate = new Date().getUTCDate()
     for(let i=0; i<length; i++){
      //add functionality to show days for other months, that is no negative numbers and no numbers bigger than 31
      dates.push(currentDate + i - Math.floor(length/2))
     }
     setDatesStates(dates)
  }, [])
  return (
    <>
  <div className="container w-full flex flex-col items-center">
  <div className="calender flex h-min w-[100%] gap-10 justify-center mt-4 text-xl font-bold">
   {datesState.map((date,index) => <div key={index} className="date border-2 border-blue-secondary px-10 py-[0.35rem] rounded-[40px]"><p>{date}</p></div>)}
  </div>
    <h2 className="mt-10 mb-6 text-center text-blue-secondary font-semibold text-xl">Today's recommendations</h2>
  <main className={`${s.main} *:rounded-xl`}>
    <div className={`${s.main_exercise} bg-gradient-to-br from-blue-secondary to-green-primary text-white pl-4 pt-14`}>
    <NavLink to={"/exercises/push-ups"}>
      <ul className="text-xl list-disc ml-8">
        <li>strength</li>
        <li>5 mins</li>
        <li>7 steps</li>
      </ul>
      <h3 className="text-3xl border-2 border-white rounded-xl w-fit px-2 py-1 self-end mb-4">Push-ups</h3>
    </NavLink>
    </div>
    <div className={`side-exercise ${s.side_exercise_top} bg-gradient-to-br from-blue-secondary to-green-primary`}>
    </div>
    <div className={`side-exercise ${s.side_exercise_bottom} bg-gradient-to-br from-blue-secondary to-green-primary`}>
    </div>
  </main>
  <div className={`${s.exercise_categories}`}>
    <h3 className="mt-10 mb-6 text-center text-blue-secondary font-semibold text-xl">Categories</h3>
    <div className={`${s.group}`}>
    <div className={`${s.category} ${s.strength}`}><p>Strength</p></div>
    <div className={`${s.category} ${s.cardio}`}><p>Cardio</p></div>
    <div className={`${s.category} ${s.flexibility}`}><p>Flexibility</p></div>
    <div className={`${s.category} ${s.yoga}`}><p>Yoga</p></div>
    <div className={`${s.category} ${s.warm_up}`}><p>warm-up</p></div>
    <div className={`${s.category} ${s.core}`}><p>core</p></div>
    </div>
  </div>
  </div>
  </>
  )
}// in order to implement a modal for the shopping cart system