import { Link } from "react-router-dom";

import infocircle from "./img/info-circle.svg";

export const NavbarBottomQueue = () => {




	return (
		<div>

			<Link to="/info" className="info">
				<img alt="img" className="info-img" src={infocircle} /></ Link>
			<nav className="nav under-navbar">
				<Link to="/people" className="nav__link navitem-link" style={{
					textDecoration: "none",
					color: "white"
				}}>
					<i className="material-icons nav__icon navitem" style={{
						fontSize: "60px"
					}}>people</i>
					<span className="nav__text strong">People</span>
				</Link>
				<Link to="/" className="nav__link nav__link--active navitem-link" style={{
					textDecoration: "none",
					color: "white"
				}}>
					<i className="material-icons nav__icon" style={{
						fontSize: "60px"
					}}>queue_music</i>
					<span className="nav__text strong">Queue</span>
				</Link>

				<Link to="/tip" className="nav__link navitem-link" style={{
					textDecoration: "none",
					color: "white"
				}}>
					<i className="material-icons nav__icon" style={{
						fontSize: "60px"
					}} >volunteer_activism</i>
					<span className="nav__text strong">Give a tip!</span>
				</Link>

			</ nav>
		</div>


	)





}


