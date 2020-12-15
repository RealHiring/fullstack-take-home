import React, { useContext, useState } from 'react';

import { UserContext } from './hoc/withUser';

export const Login = () => {
	const { setUser } = useContext(UserContext);
	const [creds, setCreds] = useState({ firstName: null, email: null });

	const login = (e) => {
		e.preventDefault();
		setUser(creds);
	};

	const onChange = (e) => {
		setCreds({ ...creds, [e.target.name]: e.target.value });
	};

	return (
		<>
			<h2>Login</h2>
			<form onSubmit={login}>
				<input
					type='text'
					placeholder='First Name'
					name='firstName'
					onChange={(e) => onChange(e)}
				/>
				<input
					type='text'
					placeholder='Email'
					name='email'
					onChange={(e) => onChange(e)}
				/>
				<button type='submit'>Log In</button>
			</form>
		</>
	);
};
