import '../App.css'

const Landing = () => {
	return (
		<div className= "landing">
		<div>
			Press Start
		</div>
		<div>
		<a href="./home" className="btn btn-primary" tabindex="-1" role="button" aria-disabled="true">Start</a>
		</div>
		</div>
	);
};

export default Landing;
