import s from "../../styles/home.module.css"
import {NavLink} from "react-router-dom"

export default function Body() {
  return (
    <>
    <main className={`${s.main} *:rounded-2xl w-full`}>
    <div className={`${s.main_top} flex w-full justify-stretch gap-8 bg-gradient-to-br from-blue-secondary to-green-primary text-white`}>
      <div className="column border-r-2"><p className="text-3xl mb-4">Calories burned</p><p className="text-xl">4489 kcal</p></div>
      <div className="column border-r-2"><p className="text-3xl mb-4">Minutes spent exercising</p><p className="text-xl">240 mins</p></div>
      <div className="column"><p className="text-3xl mb-4">no. of workouts completed</p><p className="text-xl">23 workouts</p></div>
    </div>
    <div className={`${s.side_bottom_left} bg-gradient-to-br from-blue-secondary to-green-primary text-white`}>
     <NavLink to="/exercises"> <p className="text-5xl mx-6 mt-8 h-full">Don't miss out on your daily exercises</p></NavLink>
    </div>
    <div className={`${s.side_bottom_right} bg-gradient-to-br from-blue-secondary to-green-primary text-white`}>
     <NavLink to="/drugs"> <p className="text-5xl mx-6 mt-4 h-full">Get your prescription medicine at a lower price on the site</p></NavLink>
    </div>
  </main>
    </>
  )
}
