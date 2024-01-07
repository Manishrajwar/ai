import "./sidebar.css";
import profile from "../../assets/profile.png";
import { sideBarItems } from "../../Data/sidebar";
import { useEffect, useState } from "react";

function SideBar() {

    const [currentPath , setCurrentPath] = useState("");

    useEffect(() => {
        // Get the current path from the URL
        const currPath = window.location.pathname;
        setCurrentPath(currPath);
      
      }, []);

      
  return (
    <div className="sidbarWrap">
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
                <p className={`item cursor-pointer ${currentPath === item.path && 'active'}`} key={index}>{item.title} </p>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default SideBar;
