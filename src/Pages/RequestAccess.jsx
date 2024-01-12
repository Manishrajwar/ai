import "./requestAccess.css"
import Header from "../Components/Common/Header"

function RequestAccess(){
    return (
        <div className="reqAccWrap">

        <Header showBtn={false} showSmBtn={false} />

         <div className="reqAccContain">

            <div className="req_HP">

 
              <h2 className="req_head">Request Access</h2>
             
             <p className="req_para">Create your account to request access</p>
            </div>


             <form >
                 
                 <div className="emailCon">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="john@doe.com" />
                 </div>

                 <div className="emailCon">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="At least 12 characters with numbers and special characters" />
                 </div>

                 <button className="sendBtn">
                    <span>Send message</span>
                 </button>

             </form>
         </div>

        </div>
    )
}

export default RequestAccess;