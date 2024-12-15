import {createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./routes/Home.jsx"
import Exercises from "./routes/Exercises.jsx"
import MedRecords from "./routes/MedRecords.jsx"
import Drugs from "./routes/drugs.jsx"
import Doctors from "./routes/Doctors.jsx"
import RootLayout from "./RootLayout.jsx"
import PushUps from "./routes/PushUps.jsx"
import ExercisesLayout from "./layouts/ExercisesLayout.jsx"
import DrugsLayout from "./layouts/DrugsLayout.jsx"
import ShoppingCart from "./routes/ShoppingCart.jsx"


function App() {
  return (
    <div className="page flex">
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route element={<ExercisesLayout />}>
          <Route path="/exercises" element={<Exercises />}/>
          <Route path="/exercises/push-ups" element={<PushUps />}/>
        </Route>
        <Route path="/records" element={<MedRecords />}/>
        <Route element={<DrugsLayout />}>
        <Route path="/drugs" element={<Drugs />}/>
        <Route path="/drugs/shopping-cart" element={<ShoppingCart />}/>
        </Route>
        <Route path="/doctors" element={<Doctors />}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
