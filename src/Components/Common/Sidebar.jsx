import "./sidebar.css";
import profile from "../../assets/profile.png";
import { sideBarItems } from "../../Data/sidebar";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";

function SideBar({showConnection = false , shouldNavigate=true}) {

  const {showSidebar , setShowSidebar} = useContext(AppContext);

  const navigate = useNavigate();
    const [currentPath , setCurrentPath] = useState("");

    useEffect(() => {
        // Get the current path from the URL
        const currPath = window.location.pathname;
        setCurrentPath(currPath);
       setShowSidebar(false);
      }, []);

      const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
    
      useEffect(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
    
        // Add event listener to track window size changes
        window.addEventListener('resize', handleResize);
    
        // Remove event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);


       useEffect(()=>{

         if(windowSize.width > 920){
  setShowSidebar(false);
         }
       },[windowSize.width])

      
  return (
    <div className={`sidbarWrap ${showSidebar&&('active2')}`}>
      <div className="sideContain">
        {/* top box profile */}

              {
                showConnection ?(
                  <div className="showConnect">
<button>
<svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.131705 0.70336L0.244359 0.884673L1.22255 2.26265L2.20088 3.64062L3.40633 5.34191L4.61193 7.04335L5.64427 8.48761L6.67661 9.93187L4.89424 11.9183L3.11187 13.9048L2.58685 14.5218L2.06183 15.1387L1.2317 16.062L0.401715 16.9852L0.200858 17.2391L0 17.4929H0.657775H1.3154L4.21921 14.223L7.12302 10.953L7.29253 11.0047L7.46204 11.0563L9.73087 14.2383L11.9997 17.4204L14.4999 17.4601L17 17.5L16.1123 16.2272L15.2245 14.9545L12.6599 11.3477L10.0952 7.74075L10.238 7.50388L10.3808 7.26687L13.3634 3.93072L16.346 0.594573L15.7292 0.547286L15.1123 0.5L14.3317 1.34506L13.5511 2.19012L11.5566 4.46407L9.56212 6.73802L9.48021 6.74861L9.39846 6.7592L7.18453 3.64062L4.97074 0.522048H2.4949H0.0190506L0.131705 0.70336ZM7.9029 6.50536L11.4855 11.4733L12.539 12.9238L13.5923 14.3743L14.3147 15.3348L15.0373 16.2955V16.3865V16.4775H13.8515H12.6656L11.6235 15.0633L10.5813 13.6491L6.34329 7.78296L2.10533 1.91685L2.03003 1.72712L1.95473 1.5374H3.13752H4.32032L7.9029 6.50536Z" fill="white"/>
</svg> <span>CONNECT</span>
  </button>           
         </div>
                ):(
<div className="profile">

{/* profile image */}
<div>
  <img src={profile} alt="" />
</div>

<div className="indentity">
  <p className="name">Naffler | Founder | W...</p>
  <p className="userId">@TheNaffler</p>
</div>
</div>
                )
              }  

        {/* bottom navitems */}
        <div className={`navItems`}>
          
          {
            sideBarItems.map((item ,index)=>(
                <p onClick={()=>{
                  if(shouldNavigate){

                    navigate(item.path)}
                  }
                 } className={`item  ${currentPath === item.path && 'active'} `} key={index}>{item.title} </p>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default SideBar;
