import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import { Outlet } from 'react-router-dom'

export default function Root() {
    return (
    <>
        <Header />
        <Sidebar />
        <Outlet />
        <Footer />
    </>
    )}