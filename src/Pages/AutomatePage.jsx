import Calendar from "../Components/Common/Calender";
import Header from "../Components/Common/Header";
import SideBar from "../Components/Common/Sidebar";
import "./page.css"

function AutomatePage(){
    return(
        <div className="autoMateWrap">

            <Header showBtn={false} />

             <div className="autmaContain">

                {/* left side */}
              <SideBar />

                {/* right side  */}
                <div className="rightContainer">

                
                <div className="auto_page_content">

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

                 <input type="date" className="dateBox" />

                 <p className="nowText">Now</p>
                    </div>

                  {/* second box  */}
                  <div className="boxCol2">

                    <p className="textCom">Schedule </p>
                    <Calendar width={`w-[66px]`} data={'6'} />
                    <Calendar width={`w-[96px]`} data={'Weeks'} />

                    <span className="textCom">of tweets</span>

                  </div>

              {/* thirrd */}
                  <div className="boxCol2">
                    <p className="textCom w-[243px]">Duration between each tweet:</p>

                    <Calendar data={'3'} width={'w-[66px]'} />
                    <Calendar data={'days'} width={'w-[96px]'} />


                  </div>

                  {/* forth */}
                  <div className="boxCol2">
                    <p className="textCom w-[206px]">Random variance of schedule: </p>
                    <p className="sign">+/-</p>

                    <Calendar data={'6'} width={'w-[66px]'} />
                    <Calendar data={'hours'} width={'w-[96px]'} />


                  </div>

                  {/* fivth */}
                  <div className="boxCol2">
                    <p className="textCom w-[151px]" >System will give you</p>

                    <Calendar data={'6'} width={'w-[66px]'} />
                    <Calendar data={'hours'} width={'w-[96px]'} />

                    <span className="textCom">notice before first tweet is posted</span>


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