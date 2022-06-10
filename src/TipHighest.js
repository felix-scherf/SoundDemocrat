import { Link } from "react-router-dom";



export const TipHighest = () => {




	return (
		<div>
			<div className="people-navbar">    <br />



				<p className="headline"><strong> (Current song) </strong> <span className="time-left" >(Time left)</span> </p>
				<Link to="/your-profile">  <img alt="img" src={require('./img/profile.png')} className="people-session-profile-img" /></Link>
				<h2 className="people-amount">Tips (Amount) </h2>
				<p className="people-navbar-newest-oldest"> <Link to="/tip" style={{
					textDecoration: "none",
					color: "white"
				}}>Newest</Link> | <Link to="/tip-oldest" style={{
					textDecoration: "none",
					color: "white"
				}}>Oldest</Link>  | <Link to="/tip-highest" style={{
					textDecoration: "none",
					color: "white",
					fontWeight: "bold"
				}}>Highest</Link></p>

			</div>


			<div className="people-menu-session"  >
				
				<div>
					<h1>  (Amount)</h1>

				</div>


			</div>
			<Link to="/info" className="info">
				<img alt="img" className="info-img" src={require('./img/info-circle.svg')} /></ Link>
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
				<a href="https://paypal.com" className="nav__link nav__link--active navitem-link" style={{
					textDecoration: "none",
					color: "white"
				}}>
					<i className="material-icons nav__icon" style={{
						fontSize: "80px"
					}}>add_circle_outline</i>
					<span className="nav__text"></span>
				</a>

				<Link to="" className="nav__link navitem-link" style={{
					textDecoration: "none",
					color: "white"
				}}>
					<i className="material-icons nav__icon hidden" style={{
						fontSize: "60px"
					}} >volunteer_activism</i>
					<span className="nav__text strong hidden">Give a tip!</span>
				</Link>

			</ nav>
		</div>


	)





}