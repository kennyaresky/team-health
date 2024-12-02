import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Home from "./routes/Home.jsx"
import Exercises from "./routes/Exercises.jsx"
import MedRecords from "./routes/MedRecords.jsx"
import Drugs from "./routes/drugs.jsx";
import Doctors from "./routes/Doctors.jsx"


const router = createBrowserRouter([
  {
    path:"/",
    element:<Home />
  },
  {
    path:"/exercises",
    element:<Exercises />
  },
  {
    path:"/records",
    element:<MedRecords />
  },
  {
    path:"/drugs",
    element:<Drugs />
  },
  {
    path:"/doctors",
    element:<Doctors />
  }
])


function App() {
  return (
    <div className="page flex">
    <Navbar />
   <RouterProvider router={router} />
    </div>
  )
}

export default App
