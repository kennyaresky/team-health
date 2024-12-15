import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Logo from "./assets/icons/Logo"

export default function RootLayout() {
  return (
    <>
<Logo />
<Navbar />
<Outlet />
    </>
  )
}
