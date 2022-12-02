import React from "react";
import "../styles/Dashboard.css";
import { SidebarDataAdmin } from "./SidebarDataAdmin";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="SidebarExtra">
      <ul className="SidebarList">
        {SidebarDataAdmin.map((val, key) => {
          return (
            <div>
              <li
                key={key}
                className="row"
                onClick={() => {
                  navigate(val.link);
                }}
              >
                {" "}
                <div id="icon">{val.icon}</div>{" "}
                <div id="title">{val.title}</div>
                <div id="icon">{val.icon}</div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
