import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

const AppNavbar = () => {

	return (
		<header className="flex-row px-1">
			<h1>
				Sample Application
			</h1>

			<nav>
				{Auth.loggedIn() ?
					<ul>
						<li>
							<a href="/" onClick={() => Auth.logout()}>
								Logout
							</a>
						</li>
					</ul>
					:
					<ul>
						<li>
							<Link to="/signup">
								Signup
							</Link>
						</li>
						<li>
							<Link to="/login">
								Login
							</Link>
						</li>
					</ul>
				}
			</nav>
		</header>
	);
};

export default AppNavbar;
