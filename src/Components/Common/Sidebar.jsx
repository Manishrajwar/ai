import "./sidebar.css";
import profile from "../../assets/profile.png";
import { sideBarItems } from "../../Data/sidebar";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";

function SideBar() {

  const {showSidebar , setShowSidebar} = useContext(AppContext);

  const navigate = useNavigate();
    const [currentPath , setCurrentPath] = useState("");

    useEffect(() => {
        // Get the current path from the URL
        const currPath = window.location.pathname;
        setCurrentPath(currPath);
      
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

        {/* bottom navitems */}
        <div className="navItems">
          
          {
            sideBarItems.map((item ,index)=>(
                <p onClick={()=>navigate(item.path)} className={`item cursor-pointer ${currentPath === item.path && 'active'}`} key={index}>{item.title} </p>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default SideBar;
