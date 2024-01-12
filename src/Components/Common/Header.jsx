import { useContext, useEffect, useState } from "react";
import logo from "../../assets/Logo.png"
import "./header.css"
import { IoReorderThree } from "react-icons/io5";
import { AppContext } from "../../Context/AppContext";
import { ImCross } from "react-icons/im";




function Header({showBtn=true , showSmBtn=true}){


    const {setShowSidebar , showSidebar} = useContext(AppContext);

     
    return (

        <div className="headerWrapper">

        <div className={`HeaderContainer ${showBtn && "setHomPage"} `}>
            <img src={logo} alt="" />

            {
 showBtn ? <button><span>TRY FOR FREE</span></button>:(
    showSmBtn &&  
    <span onClick={()=>setShowSidebar((prev)=>!prev)}>{
        showSidebar ?(
            <ImCross  className={` sidebarIcon  text-[20px]`} />
            ):(
                 <IoReorderThree  className={`sidebarIcon text-[40px]`} />
        )
    }
    </span>
 )
            }

        </div>
        </div>
    )
}

export default Header;