import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../Footer/Footer";

function Root() {
    return (
        <div>
            
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
}

export default Root;