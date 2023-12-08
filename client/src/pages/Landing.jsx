import '../App.css'
import { Link } from 'react-router-dom';

const Landing = () => {
	return (
		<>
			<div className="landing">

				<div>
					Press Start
				</div>
			</div>
			<div>
				<Link to="/home">
					<button className="btn btn-primary lndgBtn">Start</button>
				</Link>
			</div>
		</>
	);
};

export default Landing;
