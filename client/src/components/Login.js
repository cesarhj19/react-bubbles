import React, { useState, Fragment } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import LoadingIcon from '../img/loadingIcon.gif';

const Login = props => {
	// make a post request to retrieve a token from the api
	// when you have handled the token, navigate to the BubblePage route
	const [loading, setLoading] = useState(false);
	const [credentials, setCredentials] = useState({
		username: '',
		password: ''
	});

	const handleChange = e => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value
		});
	};

	const login = e => {
		e.preventDefault();
		setLoading(true);
		axiosWithAuth()
			.post('/login', credentials)
			.then(res => {
				sessionStorage.setItem('token', res.data.payload);
				props.history.push('/secure');
			})
			.catch(err => console.log(err));
	};

	return (
		<>
			<h1>Welcome to the Bubble App!</h1>
			<div>
				<form onSubmit={login}>
					<input
						type='text'
						name='username'
						value={credentials.username}
						onChange={handleChange}
						placeholder='username'
					/>
					<input
						type='password'
						name='password'
						value={credentials.password}
						onChange={handleChange}
						placeholder='password'
					/>
					<button>Login</button>
				</form>
				<div className='loading'>
					{loading && (
						<>
							{' '}
							<img src={LoadingIcon} />{' '}
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default Login;
