import "./home.css"
import logoWrap1 from "../../assets/Logowrapper0.png"
import logoWrap2 from "../../assets/Logo Wrapper.png"
import logoWrap3 from "../../assets/Logo Wrapper1.png"
import logoWrap4 from "../../assets/Logo Wrapper2.png"
import logoWrap5 from "../../assets/Logo Wrapper3.png"
import logoWrap6 from "../../assets/Logo Wrapper4.png"

function TrustSection(){
    return (
        <div className="trustWap">

              <h2 className="heading">Trusted By</h2>

              <div className="logoContainer">

                <img src={logoWrap1} className="img1" alt="" />
                <img src={logoWrap2}  alt="" />
                <img src={logoWrap3}  alt="" />
                <img src={logoWrap4}  alt="" />
                <img src={logoWrap5}  alt="" />
                <img src={logoWrap6}  alt="" />

              </div>


           </div>

    )
}

export default TrustSection;