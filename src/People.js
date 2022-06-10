import { Link } from "react-router-dom";
import { NavbarBottomQueue } from "./NavbarBottomQueue";
import { Person } from "./Person";

export const People = () => {




	return (
		<div>
			<div className="people-navbar">    <br />



				<p className="headline"><strong> (Current song) </strong> <span className="time-left" >(Time left)</span> </p>
				<Link to="/your-profile">  <img alt="img" src={require('./img/profile.png')} className="people-session-profile-img" /></Link>
				<h2 className="people-amount">People (Amount) </h2>
				<p className="people-navbar-newest-oldest"> <Link to="/people" style={{
					textDecoration: "none",
					color: "white"
				}}><strong>Newest</strong></Link> | <Link to="/people-oldest" style={{
					textDecoration: "none",
					color: "white"
				}}>Oldest</Link></p>

			</div>


			<div className="people-menu-session"  >
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