/* eslint-disable no-mixed-spaces-and-tabs */
import logo from "../assets/img/logo.png"
import logo2 from "../assets/img/logo2.png"
import logo3 from "../assets/img/logo3.png"
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
		</div>
	);
};

export default Game;
