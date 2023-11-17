import Review from '../../assets/review.png';
const ReviewItem = () => {
	return (
		<div className='flex gap-7 mt-5 p-6 bg-[#FCFCFC] rounded-2xl'>
			<div className='flex gap-4 w-[20%]'>
				<img src={Review} alt='' className='w-[70px] h-[70px]' />
				<div className='flex flex-col gap-1'>
					<span className='text-sm font-normal text-[#475BE8]'>#C01234</span>
					<h4 className='text-base font-medium text-[#11142D]'>James Sullivan</h4>
					<span className='text-sm font-normal text-[#808191]'>Join On 25-04-2022</span>
					<span className='text-sm font-normal text-[#808191]'>12:42 PM</span>
				</div>
			</div>
			<div className='flex flex-col gap-4'>
				<p className='text-sm font-normal text-[#808191] w-[60%]'>
					Friendly service Josh, Lunar and everyone at Just Property in Hastings deserved a big Thank You from
					us for moving us from Jakarta to Medan during the lockdown.
				</p>
				<div className='flex gap-2'>
					<div className='flex items-center px-[8px] py-1 border border-[#475BE8] rounded-2xl bg-[#FCFCFC]'>
						<button className='text-sm font-semibold text-[#475BE8]'>EXCELENT</button>
					</div>
					<div className='flex items-center px-[8px] py-1 border border-[#475BE8] rounded-2xl bg-[#FCFCFC]'>
						<button className='text-sm font-semibold text-[#475BE8]'>GREAT</button>
					</div>
					<div className='flex items-center px-[8px] py-1 border border-[#475BE8] rounded-2xl bg-[#FCFCFC]'>
						<button className='text-sm font-semibold text-[#475BE8]'>BEST SERVICE</button>
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-[14px]'>
				<div className='flex items-center gap-2'>
					<h3 className='text-[22px] font-semibold text-[#11142D]'>5.0</h3>
					<div className='flex'>
						<svg xmlns='http://www.w3.org/2000/svg' width='24' height='25' viewBox='0 0 24 25' fill='none'>
							<path
								d='M10.1359 4.34334C10.7585 2.55222 13.2916 2.55222 13.9142 4.34334L14.8597 7.0635C15.1344 7.85364 15.8717 8.38938 16.7081 8.40642L19.5873 8.4651C21.4831 8.50373 22.2659 10.9128 20.7548 12.0584L18.46 13.7983C17.7934 14.3036 17.5117 15.1705 17.754 15.9712L18.5879 18.7276C19.137 20.5426 17.0877 22.0315 15.5312 20.9484L13.1674 19.3035C12.4808 18.8257 11.5693 18.8257 10.8827 19.3035L8.51887 20.9484C6.96239 22.0315 4.91309 20.5426 5.4622 18.7276L6.29612 15.9712C6.53835 15.1705 6.2567 14.3036 5.5901 13.7983L3.29526 12.0584C1.7842 10.9128 2.56696 8.50373 4.46281 8.4651L7.34201 8.40642C8.17835 8.38938 8.91574 7.85364 9.19039 7.0635L10.1359 4.34334Z'
								fill='#F2C94C'
							/>
						</svg>
						<svg xmlns='http://www.w3.org/2000/svg' width='24' height='25' viewBox='0 0 24 25' fill='none'>
							<path
								d='M10.1359 4.34334C10.7585 2.55222 13.2916 2.55222 13.9142 4.34334L14.8597 7.0635C15.1344 7.85364 15.8717 8.38938 16.7081 8.40642L19.5873 8.4651C21.4831 8.50373 22.2659 10.9128 20.7548 12.0584L18.46 13.7983C17.7934 14.3036 17.5117 15.1705 17.754 15.9712L18.5879 18.7276C19.137 20.5426 17.0877 22.0315 15.5312 20.9484L13.1674 19.3035C12.4808 18.8257 11.5693 18.8257 10.8827 19.3035L8.51887 20.9484C6.96239 22.0315 4.91309 20.5426 5.4622 18.7276L6.29612 15.9712C6.53835 15.1705 6.2567 14.3036 5.5901 13.7983L3.29526 12.0584C1.7842 10.9128 2.56696 8.50373 4.46281 8.4651L7.34201 8.40642C8.17835 8.38938 8.91574 7.85364 9.19039 7.0635L10.1359 4.34334Z'
								fill='#F2C94C'
							/>
						</svg>
						<svg xmlns='http://www.w3.org/2000/svg' width='24' height='25' viewBox='0 0 24 25' fill='none'>
							<path
								d='M10.1359 4.34334C10.7585 2.55222 13.2916 2.55222 13.9142 4.34334L14.8597 7.0635C15.1344 7.85364 15.8717 8.38938 16.7081 8.40642L19.5873 8.4651C21.4831 8.50373 22.2659 10.9128 20.7548 12.0584L18.46 13.7983C17.7934 14.3036 17.5117 15.1705 17.754 15.9712L18.5879 18.7276C19.137 20.5426 17.0877 22.0315 15.5312 20.9484L13.1674 19.3035C12.4808 18.8257 11.5693 18.8257 10.8827 19.3035L8.51887 20.9484C6.96239 22.0315 4.91309 20.5426 5.4622 18.7276L6.29612 15.9712C6.53835 15.1705 6.2567 14.3036 5.5901 13.7983L3.29526 12.0584C1.7842 10.9128 2.56696 8.50373 4.46281 8.4651L7.34201 8.40642C8.17835 8.38938 8.91574 7.85364 9.19039 7.0635L10.1359 4.34334Z'
								fill='#F2C94C'
							/>
						</svg>
						<svg xmlns='http://www.w3.org/2000/svg' width='24' height='25' viewBox='0 0 24 25' fill='none'>
							<path
								d='M10.1359 4.34334C10.7585 2.55222 13.2916 2.55222 13.9142 4.34334L14.8597 7.0635C15.1344 7.85364 15.8717 8.38938 16.7081 8.40642L19.5873 8.4651C21.4831 8.50373 22.2659 10.9128 20.7548 12.0584L18.46 13.7983C17.7934 14.3036 17.5117 15.1705 17.754 15.9712L18.5879 18.7276C19.137 20.5426 17.0877 22.0315 15.5312 20.9484L13.1674 19.3035C12.4808 18.8257 11.5693 18.8257 10.8827 19.3035L8.51887 20.9484C6.96239 22.0315 4.91309 20.5426 5.4622 18.7276L6.29612 15.9712C6.53835 15.1705 6.2567 14.3036 5.5901 13.7983L3.29526 12.0584C1.7842 10.9128 2.56696 8.50373 4.46281 8.4651L7.34201 8.40642C8.17835 8.38938 8.91574 7.85364 9.19039 7.0635L10.1359 4.34334Z'
								fill='#F2C94C'
							/>
						</svg>
						<svg xmlns='http://www.w3.org/2000/svg' width='24' height='25' viewBox='0 0 24 25' fill='none'>
							<path
								d='M10.1359 4.34334C10.7585 2.55222 13.2916 2.55222 13.9142 4.34334L14.8597 7.0635C15.1344 7.85364 15.8717 8.38938 16.7081 8.40642L19.5873 8.4651C21.4831 8.50373 22.2659 10.9128 20.7548 12.0584L18.46 13.7983C17.7934 14.3036 17.5117 15.1705 17.754 15.9712L18.5879 18.7276C19.137 20.5426 17.0877 22.0315 15.5312 20.9484L13.1674 19.3035C12.4808 18.8257 11.5693 18.8257 10.8827 19.3035L8.51887 20.9484C6.96239 22.0315 4.91309 20.5426 5.4622 18.7276L6.29612 15.9712C6.53835 15.1705 6.2567 14.3036 5.5901 13.7983L3.29526 12.0584C1.7842 10.9128 2.56696 8.50373 4.46281 8.4651L7.34201 8.40642C8.17835 8.38938 8.91574 7.85364 9.19039 7.0635L10.1359 4.34334Z'
								fill='#F2C94C'
							/>
						</svg>
					</div>
				</div>
				<div className='flex justify-center gap-[10px]'>
					<div className='px-[12px] py-1 rounded-[18px] border border-[#EB5757] bg-[#FCFCFC]'>
						<button className='text-[#EB5757] text-xs font-normal'>Reject</button>
					</div>
					<div className='px-[16px] py-1 rounded-[18px] bg-[#2ED480]'>
						<button className='text-[#FCFCFC] text-xs font-normal'>Approve</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReviewItem;
