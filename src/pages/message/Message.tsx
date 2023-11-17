import { Fragment } from 'react';
import Chat from '../../assets/Chat.png';

const Message = () => {
	return (
		<Fragment>
			<div className='pt-6 pb-5 pl-6 pr-5'>
				<h1 className='text-[25px] font-bold'>Messages</h1>
				<div className='mt-5 p-3 bg-[#FCFCFC] rounded-2xl'>
					<div className='flex'>
						<div className='w-[26%] mr-4'>
							<div className='flex flex-col p-7'>
								<div className='mb-[21px] flex justify-between px-[12px] py-[15px] border border-[#E4E4E4] rounded-md bg-[#FCFCFC]'>
									<div className='flex items-center gap-2'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='18'
											height='18'
											viewBox='0 0 18 18'
											fill='none'
										>
											<path
												d='M14.4697 15.5303C14.7626 15.8232 15.2374 15.8232 15.5303 15.5303C15.8232 15.2374 15.8232 14.7626 15.5303 14.4697L14.4697 15.5303ZM12.75 7.875C12.75 10.5674 10.5674 12.75 7.875 12.75V14.25C11.3958 14.25 14.25 11.3958 14.25 7.875H12.75ZM7.875 12.75C5.18261 12.75 3 10.5674 3 7.875H1.5C1.5 11.3958 4.35418 14.25 7.875 14.25V12.75ZM3 7.875C3 5.18261 5.18261 3 7.875 3V1.5C4.35418 1.5 1.5 4.35418 1.5 7.875H3ZM7.875 3C10.5674 3 12.75 5.18261 12.75 7.875H14.25C14.25 4.35418 11.3958 1.5 7.875 1.5V3ZM15.5303 14.4697L12.3896 11.329L11.329 12.3896L14.4697 15.5303L15.5303 14.4697Z'
												fill='#808191'
											/>
										</svg>
										<input type='text' placeholder='Search' className='outline-none' />
									</div>
									<select name='All' id='' className='text-sm font-medium text-[#808191]'>
										<option value=''>All</option>
									</select>
								</div>
								<div>
									{Array(10)
										.fill(0)
										.map((index) => (
											<div key={index}>
												<div className='flex gap-2 px-[12px] py-[15px]'>
													<img src={Chat} alt='' />
													<div className='flex flex-col gap-1'>
														<span className='text-base font-semibold text-[#11142D]'>
															Jane Cooper
														</span>
														<span className='text-sm font-normal text-[#11142D]'>
															Hello, How are you...?
														</span>
													</div>
												</div>
											</div>
										))}
								</div>
							</div>
						</div>
						<div className='border-r-[1px] border-[#E4E4E4]'></div>
						<div className='flex flex-col w-[74%]'>
							<div className='flex ml-5 mt-[26px] justify-between'>
								<div className='flex gap-4'>
									<img src={Chat} alt='' />
									<div className='flex flex-col'>
										<span className='text-base font-semibold text-[#11142D]'>Jane Cooper</span>
										<span className='text-sm font-normal text-[#808191]'>Active Now</span>
									</div>
								</div>
								<div className='flex gap-[35px] items-center'>
									<div className='flex gap-5'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
										>
											<path
												d='M3.18273 9.00943C2.0794 6.79522 3.19265 4.35157 5.31397 3.07877C6.3353 2.46598 7.65528 2.73192 8.35963 3.6924L9.92229 5.82331C10.5874 6.73027 10.6893 7.93307 10.1864 8.93904L9.77663 9.75849C9.65802 9.99571 9.63927 10.2701 9.7606 10.506C9.98164 10.9356 10.4524 11.6971 11.3592 12.6038C12.266 13.5106 13.0274 13.9814 13.4571 14.2024C13.6929 14.3237 13.9673 14.305 14.2045 14.1864L15.024 13.7766C16.0299 13.2737 17.2327 13.3756 18.1397 14.0407L20.2706 15.6034C21.2311 16.3077 21.497 17.6277 20.8842 18.649C19.6114 20.7704 17.1678 21.8836 14.9536 20.7803C13.0874 19.8504 10.7028 18.3114 8.17717 15.7858C5.65156 13.2602 4.11261 10.8756 3.18273 9.00943Z'
												fill='#808191'
											/>
										</svg>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
										>
											<path
												d='M5 5C3.34315 5 2 6.34315 2 8V16C2 17.6569 3.34315 19 5 19H14C15.6569 19 17 17.6569 17 16V15.4286L18.8375 16.7411C20.1613 17.6866 22 16.7404 22 15.1136V8.88638C22 7.25963 20.1613 6.31339 18.8375 7.25891L17 8.57143V8C17 6.34315 15.6569 5 14 5H5Z'
												fill='#808191'
											/>
										</svg>
									</div>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='18'
										height='18'
										viewBox='0 0 18 18'
										fill='none'
									>
										<path
											d='M8.25 9C8.25 9.41421 8.58579 9.75 9 9.75C9.41421 9.75 9.75 9.41421 9.75 9C9.75 8.58579 9.41421 8.25 9 8.25C8.58579 8.25 8.25 8.58579 8.25 9Z'
											stroke='#808191'
											stroke-width='2'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
										<path
											d='M8.25 14.25C8.25 14.6642 8.58579 15 9 15C9.41421 15 9.75 14.6642 9.75 14.25C9.75 13.8358 9.41421 13.5 9 13.5C8.58579 13.5 8.25 13.8358 8.25 14.25Z'
											stroke='#808191'
											stroke-width='2'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
										<path
											d='M8.25 3.75C8.25 4.16421 8.58579 4.5 9 4.5C9.41421 4.5 9.75 4.16421 9.75 3.75C9.75 3.33579 9.41421 3 9 3C8.58579 3 8.25 3.33579 8.25 3.75Z'
											stroke='#808191'
											stroke-width='2'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</svg>
								</div>
							</div>
							<div className='border-b-[1px] border-[#E4E4E4] text-center'>
								<span className='text-[#11142D] px-2 text-xs font-normal bg-white relative top-[0.65rem]'>
									Today
								</span>
							</div>
							<div className='grid grid-cols-2 gap-4 mt-[25px] ml-5'>
								<div className='flex col-span-12 gap-4'>
									<img src={Chat} alt='' className='w-[46px] h-[46px]' />
									<div className='flex flex-col gap-4'>
										<div className='flex items-center gap-1'>
											<div className='py-[10px] px-[15px] border border-[#E4E4E4] flex gap-1'>
												<span className='text-base font-normal text-[#11142D]'>
													Hello! How are you?👋
												</span>
											</div>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='18'
												height='18'
												viewBox='0 0 18 18'
												fill='none'
											>
												<path
													d='M8.25 9C8.25 9.41421 8.58579 9.75 9 9.75C9.41421 9.75 9.75 9.41421 9.75 9C9.75 8.58579 9.41421 8.25 9 8.25C8.58579 8.25 8.25 8.58579 8.25 9Z'
													stroke='#808191'
													stroke-width='2'
													stroke-linecap='round'
													stroke-linejoin='round'
												/>
												<path
													d='M8.25 14.25C8.25 14.6642 8.58579 15 9 15C9.41421 15 9.75 14.6642 9.75 14.25C9.75 13.8358 9.41421 13.5 9 13.5C8.58579 13.5 8.25 13.8358 8.25 14.25Z'
													stroke='#808191'
													stroke-width='2'
													stroke-linecap='round'
													stroke-linejoin='round'
												/>
												<path
													d='M8.25 3.75C8.25 4.16421 8.58579 4.5 9 4.5C9.41421 4.5 9.75 4.16421 9.75 3.75C9.75 3.33579 9.41421 3 9 3C8.58579 3 8.25 3.33579 8.25 3.75Z'
													stroke='#808191'
													stroke-width='2'
													stroke-linecap='round'
													stroke-linejoin='round'
												/>
											</svg>
										</div>
										<span className='text-xs font-normal text-[#808191]'>11.25 AM</span>
									</div>
								</div>
								<div className='flex col-end-12 gap-4'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='18'
										height='18'
										viewBox='0 0 18 18'
										fill='none'
									>
										<path
											d='M8.25 9C8.25 9.41421 8.58579 9.75 9 9.75C9.41421 9.75 9.75 9.41421 9.75 9C9.75 8.58579 9.41421 8.25 9 8.25C8.58579 8.25 8.25 8.58579 8.25 9Z'
											stroke='#808191'
											stroke-width='2'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
										<path
											d='M8.25 14.25C8.25 14.6642 8.58579 15 9 15C9.41421 15 9.75 14.6642 9.75 14.25C9.75 13.8358 9.41421 13.5 9 13.5C8.58579 13.5 8.25 13.8358 8.25 14.25Z'
											stroke='#808191'
											stroke-width='2'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
										<path
											d='M8.25 3.75C8.25 4.16421 8.58579 4.5 9 4.5C9.41421 4.5 9.75 4.16421 9.75 3.75C9.75 3.33579 9.41421 3 9 3C8.58579 3 8.25 3.33579 8.25 3.75Z'
											stroke='#808191'
											stroke-width='2'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</svg>
									<div className='flex flex-col gap-4'>
										<div className='flex items-center gap-1'>
											<div className='py-[10px] px-[15px] border border-[#E4E4E4] flex gap-1'>
												<span className='text-base font-normal text-[#11142D]'>
													Im good 👍 and you...? How cane how help you...?
												</span>
											</div>
										</div>
										<span className='text-xs font-normal text-[#808191]'>11.25 AM</span>
									</div>
								</div>
							</div>
						</div>
						<div className=''>sdsads</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Message;
