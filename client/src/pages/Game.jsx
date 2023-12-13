/* eslint-disable no-mixed-spaces-and-tabs */
import logo from "../assets/img/logo.png"
import logo2 from "../assets/img/logo2.png"
import logo3 from "../assets/img/logo3.png"
import infoChef from "../assets/info_chef.png"
import arrowKeys from "../assets/arrowkeys.png"
import plot from "../assets/plot.png"
// import Game1 from "../components/Game1" //imports Game1 component from Game1.jsx
import PhaserGame from "../components/phaserGame.jsx"

import Auth from "../utils/auth";

import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';
 


const Game = () => {

	const navigate = useNavigate();
	const { loading, error, data, refetch } = useQuery(QUERY_USERS);
  
	const handleLeaderboardClick = () => {
	  //freshes the leaderboard with the latest info from query_users
	  refetch();
  
	  // Navigates to leaderboard
	  navigate('/leaderboard');
	};

	return (
		<div>
			<header>
				<button className="btn btn-secondary gmBtn" id="lb-game-btn" onClick={handleLeaderboardClick}>Leaderboard</button>
				<img id="logo" src={logo3} width="18%"></img>
				<a className="btn btn-secondary gmBtn" href="/" onClick={() => Auth.logout()}>
                    Logout
                </a>
			</header>
			<div id="main-game">
				<PhaserGame />
			</div>
			<div className="info-page">
				<div className="info-container">
					<div className="howTo">
						<h1 className="howToPlay">
							How to Play
						</h1>
						<div className="howTo-Content">
							<div className="howTo-One">
								<img className="info-chef" src={infoChef}></img>
								<p>The keyboard has many parts, but you only need these to play!</p>
							</div>
							<div className="tutorial">
								<p>Button ↑ makes him jump up!</p>
								<img className="arrowKeys" src={arrowKeys}></img>
								<div>
									<p>Button ← makes Giseppe move to the left.</p>
									<p>Button → makes him move right.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="info-separate"></div>
					<div className="plotLine">
						<p className="pL-Text">
							In the far off year of 2012, Giseppie da Fancychef was about to open the most famous restaurant in the world.
							The Fancychefs however had a long time rival in the Tomators of planet Tomatoroo. Tomatron, leader of the Tomators is looking for revenge!
							On the opening day of Giuseppe's restaurant, Tomatron attacked with his legion of tomator bombs. Help  Giseeppie fight back before it's too late!
							The restaurant opens... tonight!
						</p>
						<img className="plot" src={plot}></img>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Game;
