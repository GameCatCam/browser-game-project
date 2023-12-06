import logo from "../assets/img/logo.png"
import Game1 from "../components/Game1" //imports Game1 component from Game1.jsx

import Auth from "../utils/auth";
import { Link } from "react-router-dom"

const Game = () => {
	return (
		<div>
			<header>
				<Link to="/leaderboard">Leaderboard</Link>
				<img id="logo" src={logo}width="18%"></img>
				<a href="/" onClick={() => Auth.logout()}>
                    Logout
                </a>
			</header>
			<Game1 />
		</div>
	);
};

export default Game;
