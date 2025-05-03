import React from "react";

const Navigation=()=> {
    return (
      <nav className="nav">
            <div className="logo">
              <img src={"/Frame .png"} alt="do"></img>
            </div>

            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
      </nav>

    );
  };

export default Navigation;