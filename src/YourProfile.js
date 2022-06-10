
import { Link } from "react-router-dom";
import { NavbarBottomQueue } from "./NavbarBottomQueue";

import settings from "./img/settings.svg";

import edit from "./img/edit.svg";

export const YourProfile = () => {

	return (
		<div>
			<div className="people-navbar">

				<Link className="settings-link" to="/settings">
					<img alt="img" src={settings} className="settings-image" /> </Link>
				<h3 className="headline-your-profile strong" >Your profile</h3>
			</div>




			<div className="profile-menu">

				<h1 >(Name)<Link to=""><img alt="img" src={edit} /></Link> </h1>


				<br />

				<img alt="img" src={require('./img/profile.png')} className="profile-picture-fullscreen" />

				<br />
				<Link to=""> <img alt="img" src={edit} /></Link>

			</div>
			<NavbarBottomQueue />
		</div >




	)
}






