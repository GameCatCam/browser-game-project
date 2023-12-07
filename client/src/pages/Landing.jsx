import '../App.css'
import { Link } from 'react-router-dom';

const Landing = () => {
	return (
		<>
			<div className= "landing">

				<div>
					Press Start
				</div>
			</div>
			<div>
				<a href="/home" className="btn btn-primary lndgBtn" tabindex="-1" role="button" aria-disabled="true">Start</a>
			</div>
		</>
	);
};

export default Landing;
