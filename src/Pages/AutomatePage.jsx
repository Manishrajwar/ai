import { useContext } from "react";
import Calendar from "../Components/Common/Calender";
import Header from "../Components/Common/Header";
import SideBar from "../Components/Common/Sidebar";
import "./page.css"
import { AppContext } from "../Context/AppContext";

function AutomatePage(){

 const {showSidebar} = useContext(AppContext);

    return(
        <div className="autoMateWrap overflow-hidden">

            <Header showBtn={false} />

             <div className="autmaContain overflow-hidden">

                {/* left side */}
              <SideBar />

                {/* right side  */}
                <div className={`auRightContainer ${showSidebar && "addBg"}`}>

                
                <div className={`auto_page_content`}>

               <div className="auto_head">
                <p>AUTOMATE</p>
               </div>

               <div className="auto_Para ">
                <p>Fully automate the scheduling of your tweets.</p>
               </div>

               <div className="autoSubPara ">
                <p>We will continuously populate and schedule your tweet activity based on your guidance.</p>
               </div>


                 <div className="autoSched_box">

                    {/* first box */}
                    <div className="boxCol1">
                        <p className="title ">Commencing</p>
                         <div className="dateNow">

                 <input type="date" className="dateBox " />

                 <p className="nowText">Now</p>
                         </div>
                    </div>

                  {/* second box  */}
                  <div className="boxCol2">

                    <p className="textCom">Schedule </p>
                    <Calendar width={`w-[66px]`} data={'6'} />
                    <Calendar width={`w-[96px]`} data={'Weeks'} />

                    <span className="textCom">of tweets</span>

                  </div>

              {/* thirrd */}
                  <div className="boxCol3">
                    <p className="textCom pr-2 sm:w-[243px]">Duration between each tweet:</p>

                       <div className="timeDate1">

                    <Calendar data={'3'} width={'w-[66px]'} />
                    <Calendar data={'days'} width={'w-[96px]'} />

                       </div>

                  </div>

                  {/* forth */}
                  <div className="boxCol4">
                    <p className="textCom w-[206px]">Random variance of schedule: </p>

                    <div className="timeDate1">

                    <p className="sign">+/-</p>

                    <Calendar data={'6'} width={'w-[66px]'} />
                    <Calendar data={'hours'} width={'w-[96px]'} />

                    </div>

                  </div>

                  {/* fivth */}
                  <div className="boxCol5">
                    <p className="textCom w-[151px]" >System will give you</p>

                    <div className="timeDate2">


                    <Calendar data={'6'} width={'w-[66px]'} />
                    <Calendar data={'hours'} width={'w-[96px]'} />

                    <span className="textCom">notice before first tweet is posted</span>

                    </div>

                  </div>

                  <button className="autoBtn"><span>AUTOMATE</span></button>

                 </div>

                </div>

                </div>

             </div>

        </div>
    )
}

export default AutomatePage;