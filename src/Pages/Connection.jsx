import "./connection.css"
import Header from "../Components/Common/Header"
import Sidebar from "../Components/Common/Sidebar"

function Connection(){
    return (
        <div className="connectWrap">

            <Header showBtn={false} />

            <div className="conContain">

        <Sidebar showConnection={true} shouldNavigate={false} />


         <div className="connRight">

             <div className="connContent">

        
                 <div className="title">
                     <p>CONNECTION</p>
                 </div>

        <div className="connsubpara">
            <p>You need to connect your X account to begin.</p>
        </div>

            <div className="connectBtn">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.631705 0.70336L0.744359 0.884673L1.72255 2.26265L2.70088 3.64062L3.90633 5.34191L5.11193 7.04335L6.14427 8.48761L7.17661 9.93187L5.39424 11.9183L3.61187 13.9048L3.08685 14.5218L2.56183 15.1387L1.7317 16.062L0.901715 16.9852L0.700858 17.2391L0.5 17.4929H1.15777H1.8154L4.71921 14.223L7.62302 10.953L7.79253 11.0047L7.96204 11.0563L10.2309 14.2383L12.4997 17.4204L14.9999 17.4601L17.5 17.5L16.6123 16.2272L15.7245 14.9545L13.1599 11.3477L10.5952 7.74075L10.738 7.50388L10.8808 7.26687L13.8634 3.93072L16.846 0.594573L16.2292 0.547286L15.6123 0.5L14.8317 1.34506L14.0511 2.19012L12.0566 4.46407L10.0621 6.73802L9.98021 6.74861L9.89846 6.7592L7.68453 3.64062L5.47074 0.522048H2.9949H0.519051L0.631705 0.70336ZM8.4029 6.50536L11.9855 11.4733L13.039 12.9238L14.0923 14.3743L14.8147 15.3348L15.5373 16.2955V16.3865V16.4775H14.3515H13.1656L12.1235 15.0633L11.0813 13.6491L6.84329 7.78296L2.60533 1.91685L2.53003 1.72712L2.45473 1.5374H3.63752H4.82032L8.4029 6.50536Z" fill="white"/>
</svg> <span>CONNECT</span></button>
            </div>

             </div>
         </div>

      
      </div>

        </div>
    )
}

export default Connection;