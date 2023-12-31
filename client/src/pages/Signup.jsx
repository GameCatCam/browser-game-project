import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup() {
	const [formState, setFormState] = useState({ username: '', email: '', password: '' });
	const [addUser] = useMutation(ADD_USER);

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		const mutationResponse = await addUser({
			variables: {
				...formState
			},
		});
		const token = mutationResponse.data.addUser.token;
		Auth.login(token);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	return (
		<div className="signup">
			<Link to="/home">← Return Home</Link>

			<h1 className="heading">Signup</h1>
			<form onSubmit={handleFormSubmit}>
				<div>
					<label htmlFor="username">Username</label>
					<input
						placeholder="username"
						name="username"
						type="username"
						id="username"
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input
						placeholder="youremail@test.com"
						name="email"
						type="email"
						id="email"
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="pwd">Password</label>
					<input
						placeholder="******"
						name="password"
						type="password"
						id="pwd"
						onChange={handleChange}
					/>
				</div>
				<div>
					<button className="btn btn-primary game btnsgnp" type="submit">Submit</button>
				</div>
			</form>
		</div>
	);
}

export default Signup;
