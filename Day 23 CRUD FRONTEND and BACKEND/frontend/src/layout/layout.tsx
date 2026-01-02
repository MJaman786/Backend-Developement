import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ToastContainer } from "react-toastify";

export default function Layout() {
    return (
        <>
            <ToastContainer/>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}