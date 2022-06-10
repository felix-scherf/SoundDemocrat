import { useState } from "react";
import { Link } from "react-router-dom";
import upvoteempty from "./img/arrow.svg";
import upvotefull from "./img/arrow-fill.svg";

export const Song = (props) => {


	const [upvoteimage, setUpvoteimage] = useState(upvoteempty)

	const [votecounter, setVotecounter] = useState(props.voteamount)


	const upvote = () => {


		if (votecounter === props.voteamount) {
			setVotecounter(props.voteamount + 1)
			setUpvoteimage(upvotefull)
		}

		if (votecounter === props.voteamount + 1) {
			setVotecounter(props.voteamount)
			setUpvoteimage(upvoteempty)
		}
	}

	return (




		<div className="song">

			<p className="song-name"><strong> (Song)</strong> <span className="suggested-by"> suggested by (name)</span> </p>
			<div className="right">


				<img alt="img" onClick={upvote} className="upvote-button" src={upvoteimage} />


				<Link to="/upvoter" style={{ textDecoration: "none", color: "black" }} >
					<h1 className="voting-counter">{votecounter}</h1>
				</Link>

			</div>

		</div>



	)



}

