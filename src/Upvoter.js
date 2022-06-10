import { NavbarBottomQueue } from "./NavbarBottomQueue";
import { Link } from "react-router-dom";
import { Person } from "./Person";

export const Upvoter = () => {




	return (
		<div>
			<div className="people-navbar">    <br />



				<p className="headline"><strong> (Current song) </strong> <span className="time-left" >(Time left)</span> </p>
				<Link to="/your-profile">  <img alt="img" src={require('./img/profile.png')} className="people-profile-img" /></Link>
				<h2 className="people-amount">Upvoter (Amount) </h2>


			</div>


			<div className="people-menu"  >
				<Person />
				<Person />
				<Person />
				<Person />
				<Person />
			</div>
			<NavbarBottomQueue />
		</div>


	)





}