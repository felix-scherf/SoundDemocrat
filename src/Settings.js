
import { NavbarBottomQueue } from "./NavbarBottomQueue";

export const Settings = () => {




	return (
		<div>
			<div className="people-navbar">


				<h3 className="headline-casual-menu"> <strong>Settings
				</strong>
				</h3>

			</div>

			<div className="settings-menu">
				<h3><strong>Privacy:</strong></h3><br />
				<p><strong>Session participation:</strong>
				</p>
				<div className="btn-group"  >
					<button className="btn first-button"
					><strong>Public
						</strong> </button>
					<button type="button" className="btn  second-button"
					>Anonymous</button>
					<button type="button" className="btn third-button"
					>Individual</button>
				</div>
				<br /> <br />
				<p><strong>Song suggestions:</strong> </p>
				<div className="btn-group"  >
					<button className="btn first-button"
					><strong>Public
						</strong> </button>
					<button type="button" className="btn  second-button"
					>Anonymous</button>
					<button type="button" className="btn third-button"
					>Individual</button>
				</div>
				<br />

				<br />
				<p><strong>Voting:</strong>
				</p>
				<div className="btn-group"  >
					<button className="btn first-button"
					><strong>Public
						</strong> </button>
					<button type="button" className="btn  second-button"
					>Anonymous</button>
					<button type="button" className="btn third-button"
					>Individual</button>
				</div>
				<br /> <br />
				<p><strong>Tip:</strong>
				</p>
				<div className="btn-group"  >
					<button className="btn first-button"
					><strong>Public
						</strong> </button>
					<button type="button" className="btn  second-button"
					>Anonymous</button>
					<button type="button" className="btn third-button"
					>Individual</button>
				</div>
			</div>
			<NavbarBottomQueue />
		</div>


	)





}