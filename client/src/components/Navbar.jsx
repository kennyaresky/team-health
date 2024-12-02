import Home from "../assets/icons/icon-home.svg"
import dumbell from "../assets/icons/icon-dumbell.svg"
import records from "../assets/icons/icon-records.svg"
import pills from "../assets/icons/icon-pills.svg"
import doctor from "../assets/icons/icon-doctor.svg"

const imageWidth = 40
const imageSize = {width:imageWidth}

export default function Navbar() {
  return (
    <div className="navbar sticky top-0 left-0 h-screen bg-green-600 w-[5%]">
        <ul className="flex flex-col items-center mt-20">
            <li><img src={Home} alt="" {...imageSize}/></li>
            <li><img src={dumbell} alt="" {...imageSize}/></li>
            <li><img src={records} alt="" width={55} /></li>
            <li><img src={pills} alt="" {...imageSize}/></li>
            <li><img src={doctor} alt="" {...imageSize}/></li>
        </ul>
    </div>
  )
}