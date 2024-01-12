import hoPaImg from "../../assets/_f9a498ac-e8b9-42a4-9a34-2cf4dcfac423 1.png"
import "./home.css"


function HeroSection(){
    return (
        <div className="hoPaWrap">

        {/* left part  */}
        <div className="hoPa_content ">

            <h2>Automated AI- <br />Crafted Tweets</h2>

            <p className="para">Ditch the time sink of writing your own tweets.  Experience the magic of automatic AI-generated content, inspired by trending content and your favourite influencers. </p>

            <div className=" btnTextWrap">


            <button className="tryBtn">TRY FOR FREE</button>

            <p className="noCreditText mt-1">No credit card required</p>

            </div>

        </div>


{/* right part  */}
<div className="hoPa_img">

<img src={hoPaImg} alt="" />

</div>


    </div>

    )
}

export default HeroSection;