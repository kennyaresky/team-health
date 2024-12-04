import {createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./routes/Home.jsx"
import Exercises from "./routes/Exercises.jsx"
import MedRecords from "./routes/MedRecords.jsx"
import Drugs from "./routes/drugs.jsx"
import Doctors from "./routes/Doctors.jsx"
import RootLayout from "./RootLayout.jsx"


// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:
//   },
//   {
//     path:"/exercises",
//     element:<Exercises />
//   },
//   {
//     path:"/records",
//     element:<MedRecords />
//   },
//   {
//     path:"/drugs",
//     element:<Drugs />
//   },
//   {
//     path:"/doctors",
//     element:<Doctors />
//   }
// ])


function App() {
  return (
    <div className="page flex">
    <BrowserRouter>
    <Routes>
      <Route element={<RootLayout />}>
<Route index element={<Home />} />
<Route path="/exercises" element={<Exercises />}/>
<Route path="/records" element={<MedRecords />}/>
<Route path="/drugs" element={<Drugs />}/>
<Route path="/doctors" element={<Doctors />}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
