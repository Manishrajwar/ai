import "./footer.css"
import footerLogo from "../../assets/footerLogo.png"

function Footer(){
    return (
        <div className="footerWrap">

            {/* top box */}
            <div className="footerItems">

                {/* first  */}
                <div className="first">
                    <img src={footerLogo} alt="" />
                </div>

               <div className="footSec">

               
                {/* second  */}
                <div className="lg:w-[180px]">
                  
                </div>

                {/* third  */}
                <div className="third">
                    <h2>COMPANY</h2>
                    <p>How it works</p>
                   
                </div>

                {/* fourth  */}
                <div className="third ">
                    <h2>ABOUT</h2>
                     <div className="conWrap">

                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                     </div>
                </div>

                </div>

            </div>


         {/* btton */}
         <div className="copyright">
            <p>Copyright © 2023 Company name</p>
         </div>
        </div>
    )
}

export default Footer;