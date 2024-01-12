import "./login.css"
import Header from "../Components/Common/Header"

function Login(){
    return (
        <div className="loginWrap">

        <Header showBtn={false} showSmBtn={false} />

         <div className="loginContain">

            <div className="log_HP">

 
              <h2 className="log_head">Login</h2>
             
          
            </div>


             <form >
                 
                 <div className="logemailCon">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="john@doe.com" />
                 </div>

                 <div className="logemailCon">
                    <label htmlFor="">Password</label>
                    <input type="password"  />
                 </div>

                 <button className="loginBtn">
                    <span>Login</span>
                 </button>
                
                 <div className="forPassLogin">
                    <p>Forgot Password</p>
                 </div>

             </form>
         </div>

        </div>
    )
}

export default Login;