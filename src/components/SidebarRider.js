import React from 'react'
import "../styles/Dashboard.css";
import { SidebarDataRider } from "./SidebarDataRider";

function Sidebar() {
  return (
    <div className="SidebarExtra">
        <ul className="SidebarList">
            {SidebarDataRider.map((val, key) => {
                return (
                  <div>
                    <li 
                     key={key}
                     className="row"
                     onClick={()=> {
                        window.location.pathname = val.link;
                     }}
                    >
                     {" "}
                    <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
                    </li>
                    </div>
                   );
                })}
        </ul>
    </div>
  );
}

export default Sidebar;