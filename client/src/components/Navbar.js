import React, { useState } from "react";
import Logo from "../assets/logopd.png";
import { Link, useNavigate } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const [openLinks, setOpenLinks] = useState(false);

  const auth = localStorage.getItem("user");

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    //--------------------------------------------------With Authentication-------------------------------------------

    <div className="navbar">
      {auth ? (
        <div className="leftSide" id={openLinks ? "open" : "close"}>
          <img src={Logo} alt="logo" />
          <div className="hiddenLinks">
            <ul></ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services"> Services </Link>
            </li>
            <li>
              <Link to="/about"> About </Link>
            </li>
            <li>
              <Link to="/profile"> Dashboard </Link>
            </li>

            {auth ? (
              <li>
                <Link onClick={logout} to="/">
                  {" "}
                  Logout{" "}
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/login"> Login </Link>
              </li>
            )}
          </div>
        </div>
      ) : (
        <div className="leftSide" id={openLinks ? "open" : "close"}>
          <img src={Logo} alt="logo" />
          <div className="hiddenLinks">
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/services"> Services </Link>
            </li>
            <li>
              <Link to="/about"> About </Link>
            </li>

            {auth ? (
              <li>
                <Link onClick={logout} to="/">
                  {" "}
                  Logout{" "}
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/login"> Login </Link>
              </li>
            )}
          </div>
        </div>
      )}

      {auth ? (
        <div className="rightSide">
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/services"> Services </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
          {JSON.parse(auth).role === "" ? (
            <li>
              <Link to="/profile"> Dashboard </Link>
            </li>
          ) : (
            ""
          )}
          {JSON.parse(auth).role === "admin" ? (
            <li>
              <Link to="/profile"> A.Dashboard </Link>
            </li>
          ) : (
            ""
          )}
          {JSON.parse(auth).role === "rider" ? (
            <li>
              <Link to="/profile"> R.Dashboard </Link>
            </li>
          ) : (
            ""
          )}
          {auth ? (
            <li>
              <Link onClick={logout} to="/">
                {" "}
                Logout{" "}
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login"> Login </Link>
            </li>
          )}

          <button onClick={toggleNavbar}>
            <ReorderIcon />
          </button>
        </div>
      ) : (
        <div className="rightSide">
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/services"> Services </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
          {auth ? (
            <li>
              <Link onClick={logout} to="/">
                {" "}
                Logout{" "}
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login"> Login </Link>
            </li>
          )}

          <button onClick={toggleNavbar}>
            <ReorderIcon />
          </button>
        </div>
      )}
    </div>

    //--------------------------------------------------UI DESIGN-------------------------------------------

    // <div className='navbar'>

    //      <div className='leftSide' id={openLinks ? "open" : "close"}>
    //      <img src={Logo} alt="logo"/>
    //      <div className='hiddenLinks'>

    //      <Link to ="/"> Home </Link>
    //      <Link to ="/services"> Services </Link>
    //      <Link to ="/about"> About  </Link>
    //      <Link to ="/dashboard"> Dashboard  </Link>

    //      <Link to ="/login"> Login  </Link>

    //      </div>
    //     </div>

    //         <div className='rightSide'>
    //           <Link to ="/"> Home </Link>
    //           <Link to ="/services"> Services </Link>
    //           <Link to ="/about"> About  </Link>
    //           <Link to ="/profile"> Dashboard  </Link>
    //           <Link to ="/login"> Login  </Link>

    //           <button onClick={toggleNavbar}>
    //               <ReorderIcon />
    //           </button>
    //     </div>

    //     </div>
  );
}

export default Navbar;
