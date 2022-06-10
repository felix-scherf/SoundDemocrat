
import { Link } from "react-router-dom";

import { Song } from "./Song";

import { NavbarBottomAdd } from "./NavbarBottomAdd";
export const Newest = () => {

  return (
    <div>

      <div className="header">
        <br />



        <p className="headline"><strong>
          (Current song) </strong> <span className="time-left">(Time left)</span> </p>
        <Link to="/your-profile"> <img alt="img" src={require("./img/profile.png")} className="in-front  profile-image-menu" /></ Link>
        <h2 className="queue-menu">Queue: </h2>
        <p className="menu-navbar"> <Link to="/" className="strong" style={{
          textDecoration: "none",
          color: "white"
        }}>Newest
        </ Link> | <Link to="/most-popular" style={{
          textDecoration: "none",
          color: "white"
        }}> Most popular </ Link> </p>


      </div>

      <div className="menu">

        <Song voteamount={2} />
        <Song voteamount={8} />
        <Song voteamount={6} />
        <Song voteamount={12} />
        <Song voteamount={1} />

      </div>
      <NavbarBottomAdd />
    </div>


  )
}