import { useContext } from "react";
import Header from "../Components/Common/Header";
import PopupData from "../Components/Common/PopupData";
import SideBar from "../Components/Common/Sidebar";
import "./schedulePost.css";
import { AppContext } from "../Context/AppContext";


const data = [
    {
        date:"10:30AM 14th June" , 
        title:"One line of tweet text will appear here. Cut short extra text ...",
    },
    {
        date:"10:30AM 15th June" , 
        title:"One line of tweet text will appear here. Cut short extra text ...",
    },
    {
        date:"10:30AM 16th June" , 
        title:"One line of tweet text will appear here. Cut short extra text ...",
    },
    {
        date:"10:30AM 17th June" , 
        title:"One line of tweet text will appear here. Cut short extra text ...",
    },
    
]

function AccountFeedPage() {

const {showschedulePostPopup , setShowSchedulePopup} = useContext(AppContext);
 
  return (
    <div className="schPoWrap ">
      <Header showBtn={false} />

      <div className="schePoContain ">
        <SideBar />

        <div className="scherightContain">

          <div className="shcPoContent">

            <div className="shc_head">
              <p>SCHEDULED POSTS</p>
            </div>

            <div className="sch_Para ">
              <p>
              View and Edit your schedule posts
              </p>
            </div>

            <div className="sch_Para2 ">
              <p>
              The system will generate a new set tweet of tweets on:  <span className="accEdit">04:30am 18th June 2024</span>
             </p>
            </div>

            <div className="shcManBlock">
                  {
                    data.map((tw , index)=>(
                        <div onClick={()=>setShowSchedulePopup(true)} key={index} className={`singleTw ${index%2 === 0 ?"AddEvenTw":"AddOddTw"}`} >
                               <p className="twDate">{tw.date}</p>
                               <p className="twTitl">{tw.title}</p>
                               <p className="crossIcon"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none">
  <path d="M7.875 5.54167L9.625 9.5L7.875 13.4583H9.625L10.5 11.4792L11.375 13.4583H13.125L11.375 9.5L13.125 5.54167H11.375L10.5 7.52083L9.625 5.54167H7.875ZM4.375 2.375H16.625C17.0891 2.375 17.5342 2.54181 17.8624 2.83875C18.1906 3.13568 18.375 3.53841 18.375 3.95833V15.0417C18.375 15.4616 18.1906 15.8643 17.8624 16.1613C17.5342 16.4582 17.0891 16.625 16.625 16.625H4.375C3.91087 16.625 3.46575 16.4582 3.13756 16.1613C2.80937 15.8643 2.625 15.4616 2.625 15.0417V3.95833C2.625 3.53841 2.80937 3.13568 3.13756 2.83875C3.46575 2.54181 3.91087 2.375 4.375 2.375Z" fill="#FF8080"/>
</svg></p>
                        </div>
                    ))
                  }
                
            </div>

          </div>
 

{
  showschedulePostPopup && 

  
        <div className="ScpopupLayer">

                    <PopupData />

        </div>

}
        </div>


      </div>
    </div>
  );
}

export default AccountFeedPage;
