import logo from "../../assets/Logo.png"
import "./header.css"

function Header({showBtn=true}){
    return (

        <div className="headerWrapper">

        <div className="HeaderContainer">

            

            <img src={logo} alt="" />

            {
 showBtn && 

             <button><span>TRY FOR FREE</span></button>
            }

        </div>
        </div>
    )
}

export default Header;