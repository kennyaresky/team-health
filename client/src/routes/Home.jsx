import s from "../styles/home.module.css"
import Body from "../components/home/Body"

export default function Home() {
  return (
    <div className="container">
    <header><h2 className={`${s.greeting} bg-green-primary-light mb-6 ml-4 text-blue-secondary-dark text-[1.75rem] w-fit py-2 pl-2 pr-8 rounded-xl font-semibold`}>Hi Kehinde</h2></header>
    <Body />
    </div>
  )
}