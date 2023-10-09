import SignUp from '../../assets/signup.png';
const SingUp = () => {
	return (
		<div className='container grid grid-cols-2 mx-auto max-sm:grid-cols-1 max-lg:grid-cols-1'>
			<div className='flex flex-col items-start mt-40 max-sm:items-center max-sm:mt-6 max-lg:items-center'>
				<h1 className='text-[2.3125rem] font-bold'>Welcome back</h1>
				<span className='mt-2 mb-8 text-base font-normal text-[#808191]'>
					Welcome back! Please enter your details.
				</span>
				<form action='' className='flex flex-col w-[50%] gap-[0.3125rem] max-sm:w-full max-sm:p-3'>
					<label className='text-sm font-medium text-black'>Email</label>
					<input
						className='py-[0.6875rem] px-[0.75rem] border border-[#E4E4E4] outline-none rounded-[0.625rem]'
						type='text'
						placeholder='Enter your email'
					/>
					<label className='mt-3 text-sm font-medium text-black'>Name</label>
					<input
						className='py-[0.6875rem] px-[0.75rem] border border-[#E4E4E4] outline-none rounded-[0.625rem]'
						type='text'
						placeholder='Enter your name'
					/>
					<label className='mt-3 text-sm font-medium text-black'>Password</label>
					<input
						className='py-[0.6875rem] px-[0.75rem] border border-[#E4E4E4] outline-none rounded-[0.625rem]'
						type='password'
						placeholder='**********'
					/>
					<div className='flex justify-between mt-3 max-sm:justify-end'>
						<div className='flex gap-[0.38rem] max-sm:hidden'>
							<input type='checkbox' name='name' id='name' />
							<label className='text-sm font-medium' htmlFor='name'>
								Rememner for 30 days
							</label>
						</div>
						<a className='text-sm font-medium text-[#475BE8]' href=''>
							Forgot Password
						</a>
					</div>
					<button className='mt-5 py-[0.6875rem] px-[9.625rem] rounded-[0.625rem] text-white bg-[#475BE8] max-sm:px-[0.75rem]'>
						Sign Up
					</button>
					<div className='flex gap-3 cursor-pointer justify-center mt-5 py-[0.6875rem] px-[0.75rem] rounded-[0.625rem] text-black bg-[#FCFCFC] border border-[#E4E4E4]'>
						<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<g clip-path='url(#clip0_710_7657)'>
								<g clip-path='url(#clip1_710_7657)'>
									<path
										d='M23.745 12.27C23.745 11.48 23.675 10.73 23.555 10H12.255V14.51H18.725C18.435 15.99 17.585 17.24 16.325 18.09V21.09H20.185C22.445 19 23.745 15.92 23.745 12.27Z'
										fill='#4285F4'
									/>
									<path
										d='M12.255 24C15.495 24 18.205 22.92 20.185 21.09L16.325 18.09C15.245 18.81 13.875 19.25 12.255 19.25C9.12501 19.25 6.47501 17.14 5.52501 14.29H1.54501V17.38C3.51501 21.3 7.56501 24 12.255 24Z'
										fill='#34A853'
									/>
									<path
										d='M5.52501 14.29C5.27501 13.57 5.145 12.8 5.145 12C5.145 11.2 5.28501 10.43 5.52501 9.71V6.62H1.545C0.725004 8.24 0.255005 10.06 0.255005 12C0.255005 13.94 0.725004 15.76 1.545 17.38L5.52501 14.29Z'
										fill='#FBBC05'
									/>
									<path
										d='M12.255 4.75C14.025 4.75 15.605 5.36 16.855 6.55L20.275 3.13C18.205 1.19 15.495 0 12.255 0C7.56501 0 3.51501 2.7 1.54501 6.62L5.52501 9.71C6.47501 6.86 9.12501 4.75 12.255 4.75Z'
										fill='#EA4335'
									/>
								</g>
							</g>
							<defs>
								<clipPath id='clip0_710_7657'>
									<rect width='24' height='24' fill='white' />
								</clipPath>
								<clipPath id='clip1_710_7657'>
									<rect width='24' height='24' fill='white' />
								</clipPath>
							</defs>
						</svg>
						<button>Sign in with Google</button>
					</div>
					<div className='flex justify-center mt-7'>
						<span className='text-sm font-normal text-[#808191]'>You have an account?</span>
						<a className='text-sm font-medium text-[#475BE8]' href=''>
							Sign In
						</a>
					</div>
				</form>
			</div>
			<img className='justify-end 2xl:flex max-sm:hidden max-lg:hidden' src={SignUp} alt='' />
		</div>
	);
};

export default SingUp;
