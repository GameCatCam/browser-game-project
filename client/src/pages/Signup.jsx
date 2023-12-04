import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup() {
	const [formState, setFormState] = useState({ firstName: '', lastName: '', email: '', password: '' });
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
		<div>
			<Link to="/login">← Go to Login</Link>

			<h2>Signup</h2>
			<form onSubmit={handleFormSubmit}>
				<div>
					<label htmlFor="firstName">First Name:</label>
					<input
						placeholder="First"
						name="firstName"
						type="firstName"
						id="firstName"
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="lastName">Last Name:</label>
					<input
						placeholder="Last"
						name="lastName"
						type="lastName"
						id="lastName"
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="email">Email:</label>
					<input
						placeholder="youremail@test.com"
						name="email"
						type="email"
						id="email"
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="pwd">Password:</label>
					<input
						placeholder="******"
						name="password"
						type="password"
						id="pwd"
						onChange={handleChange}
					/>
				</div>
				<div>
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	);
}

export default Signup;
