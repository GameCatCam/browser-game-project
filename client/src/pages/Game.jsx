import logo from "../assets/img/logo.png"

const Game = () => {
	return (
		<div>
			<header>
				<img id="logo" src={logo}width="18%"></img>
			</header>
			<div id="main-game">
				<h1>Game Page</h1>
				<canvas id="canvas"></canvas>
			</div>
		</div>
	);
};

export default Game;
