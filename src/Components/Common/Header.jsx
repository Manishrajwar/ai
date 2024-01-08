import { useContext } from "react";
import logo from "../../assets/Logo.png"
import "./header.css"
import { IoReorderThree } from "react-icons/io5";
import { AppContext } from "../../Context/AppContext";



function Header({showBtn=true}){

    const {setShowSidebar} = useContext(AppContext);

     
    return (

        <div className="headerWrapper">

        <div className="HeaderContainer">
            <img src={logo} alt="" />

            {
 showBtn ? <button><span>TRY FOR FREE</span></button>:(
    <span onClick={()=>setShowSidebar((prev)=>!prev)}><IoReorderThree className=" sidebarIcon text-[40px]" />
    </span>
 )
            }

        </div>
        </div>
    )
}

export default Header;