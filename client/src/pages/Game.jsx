import logo from "../assets/img/logo.png"
// import Game1 from "../components/Game1" //imports Game1 component from Game1.jsx
import PhaserGame from "../components/phaserGame.jsx"

import Auth from "../utils/auth";
import { Link } from "react-router-dom"



const Game = () => {
	return (
		<div>
			<header>
				<Link className="btn btn-secondary gmBtn" to="/leaderboard">Leaderboard</Link>
				<img id="logo" src={logo}width="18%"></img>
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
