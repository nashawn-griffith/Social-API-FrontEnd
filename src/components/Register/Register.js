import React, {Fragment, useState} from 'react';

const Register = () => {
	const [input, setInput] = useState({
		name: '',
		email: '',
		password: '',
		confirm: '',
	});

	const {name, email, password, confirm} = input;

	const handleOnChange = e => {
		setInput({...input, [e.target.name]: e.target.value});
	};

	const onSubmit = e => {
		e.preventDefault();
		/*
            submit data to backend, register user
 
        */
	};

	return (
		<Fragment>
			<section className='container'>
				<h1 className='large text-primary'>Sign Up</h1>
				<p className='lead'>
					<i className='fas fa-user'></i> Create Your Account
				</p>
				<form className='form' onSubmit={onSubmit}>
					<div className='form-group'>
						<input type='text' placeholder='Name' name='name' value={name} onChange={handleOnChange} required />
					</div>
					<div className='form-group'>
						<input type='email' placeholder='Email Address' name='email' value={email} onChange={handleOnChange} required />
						<small className='form-text'>This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
					</div>
					<div className='form-group'>
						<input type='password' placeholder='Password' name='password' value={password} onChange={handleOnChange} minLength='6' />
					</div>
					<div className='form-group'>
						<input type='password' placeholder='Confirm Password' name='confirm' value={confirm} onChange={handleOnChange} minLength='6' />
					</div>
					<input type='submit' className='btn btn-primary' value='Register' />
				</form>
				<p className='my-1'>
					Already have an account? <a href='login.html'>Sign In</a>
				</p>
			</section>
		</Fragment>
	);
};

export {Register};
