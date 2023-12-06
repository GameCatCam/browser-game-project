import logo from "../assets/img/logo.png"
import Game1 from "../components/Game1" //imports Game1 component from Game1.jsx

const Game = () => {
	return (
		<div>
			<header>
				<img id="logo" src={logo}width="18%"></img>
			</header>
			<Game1 />
		</div>
	);
};

export default Game;
