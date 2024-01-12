import { useContext } from "react";
import "./popup.css"
import { AppContext } from "../../Context/AppContext";

function PopupData(){

    const {setShowSchedulePopup} = useContext(AppContext)
    return (
        <div className="popupWrap">

                     <div className="pupupNav">
                        <p onClick={()=>setShowSchedulePopup(false)} className="icon cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M19.5 3H5.5C4.39543 3 3.5 3.89543 3.5 5V19C3.5 20.1046 4.39543 21 5.5 21H19.5C20.6046 21 21.5 20.1046 21.5 19V5C21.5 3.89543 20.6046 3 19.5 3Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.5 9L9.5 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.5 9L15.5 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        </p>
                     </div>

                     <div className="firstTextPop">
                            <textarea name="" id="" cols="30" rows="10">This is a tweet that was generated...</textarea>
                        </div>

                         <div className="popupSchedule">
 
                       <p className="schText">Schedule (GMT+8)</p>
        </div>

         <div className="re-schBtn">

            <button className="ReGenebtn">
                <span>RE-GENERATE</span>
            </button>

            <button className="scheduleBtn">
                <span>SCHEDULE</span>
            </button>

         </div>

        </div>

    )
}
export default PopupData;