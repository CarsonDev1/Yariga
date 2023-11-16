import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import BackGround from '../../assets/agents-bg.png';
import Avatar from '../../assets/agent-detail.png';
import Instagram from '../../assets/instagram.png';
import PropertyItem from '../property/PropertyItem';

const AgentDetail = () => {
	return (
		<Fragment>
			<div className='flex items-center mb-6'>
				<Link to={'/agent'} className='block mr-6'>
					<svg xmlns='http://www.w3.org/2000/svg' width='9' height='16' viewBox='0 0 9 16' fill='none'>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M7.79292 0.792893C8.18345 1.18342 8.18345 1.81658 7.79292 2.20711L2.00003 8L7.79292 13.7929C8.18345 14.1834 8.18345 14.8166 7.79292 15.2071C7.4024 15.5976 6.76923 15.5976 6.37871 15.2071L0.585817 9.41422C-0.195233 8.63317 -0.195231 7.36683 0.585817 6.58579L6.37871 0.792893C6.76923 0.402369 7.4024 0.402369 7.79292 0.792893Z'
							fill='#11142D'
						/>
					</svg>
				</Link>
				<h2 className='text-[22px] font-semibold text-[#11142D]'>Agent Details</h2>
			</div>
			<div className='flex gap-8 mb-[21px]'>
				<div className='flex flex-col bg-[#fcfcfc]'>
					<img src={BackGround} alt='' className='relative' />
					<div className='absolute z-10 flex pt-24 gap-3 pl-[17px]'>
						<img src={Avatar} alt='' />
						<div className='flex flex-col gap-1 mt-[52px]'>
							<h3 className='text-base font-semibold'>Hussain Ahmed</h3>
							<span className='text-sm font-normal'>Agent</span>
						</div>
					</div>
					<div className='mt-[78px] mb-6 flex flex-col gap-[15px] px-[17px]'>
						<div className='grid grid-cols-2'>
							<span className='text-sm font-normal text-[#808191]'>Age:</span>
							<span className='text-sm font-medium'>26</span>
						</div>
						<div className='grid grid-cols-2'>
							<span className='text-sm font-normal text-[#808191]'>City:</span>
							<span className='text-sm font-medium'>New York City</span>
						</div>
						<div className='grid grid-cols-2'>
							<span className='text-sm font-normal text-[#808191]'>State:</span>
							<span className='text-sm font-medium'>New York</span>
						</div>
						<div className='grid grid-cols-2'>
							<span className='text-sm font-normal text-[#808191]'>Country:</span>
							<span className='text-sm font-medium'>USA</span>
						</div>
						<div className='grid grid-cols-2'>
							<span className='text-sm font-normal text-[#808191]'>Post Code:</span>
							<span className='text-sm font-medium'>1001</span>
						</div>
						<div className='grid grid-cols-2'>
							<span className='text-sm font-normal text-[#808191]'>Agent ID:</span>
							<span className='text-sm font-medium'>#18457 865 8745</span>
						</div>
						<div className='grid grid-cols-2'>
							<span className='text-sm font-normal text-[#808191]'>Phone:</span>
							<span className='text-sm font-medium'>+021 541 236 4580</span>
						</div>
						<div className='grid grid-cols-2'>
							<span className='text-sm font-normal text-[#808191]'>Email:</span>
							<span className='text-sm font-medium'>hussain145@gmail.com</span>
						</div>
					</div>
					<div className='flex items-end justify-center gap-[10px] pb-[21px]'>
						<div className='py-[9px] px-[10px] bg-[#f7f7f7] rounded-full'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='12'
								height='18'
								viewBox='0 0 12 18'
								fill='none'
							>
								<path
									d='M3.77365 17.25L3.75 9.75H0.75V6.75H3.75V4.875C3.75 2.09145 5.47374 0.75 7.95686 0.75C9.1463 0.75 10.1686 0.838553 10.4665 0.878138V3.78711L8.74429 3.78789C7.39384 3.78789 7.13236 4.4296 7.13236 5.37128V6.75H11.0625L9.5625 9.75H7.13236V17.25H3.77365Z'
									fill='#1976D2'
								/>
							</svg>
						</div>
						<div className='py-[9px] px-[10px] bg-[#f7f7f7] rounded-full'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='18'
								height='16'
								viewBox='0 0 18 16'
								fill='none'
							>
								<path
									d='M18 2.44998C17.325 2.74998 16.65 2.97498 15.9 3.04998C16.65 2.59998 17.25 1.84998 17.55 1.02498C16.8 1.47498 16.05 1.77498 15.225 1.92498C14.55 1.17498 13.575 0.724976 12.525 0.724976C10.5 0.724976 8.85 2.37498 8.85 4.39998C8.85 4.69998 8.85 4.99998 8.925 5.22498C5.775 5.07498 3.075 3.57498 1.275 1.32498C0.9 1.92498 0.75 2.52498 0.75 3.19998C0.75 4.47498 1.425 5.59998 2.4 6.27498C1.8 6.27498 1.2 6.12498 0.75 5.82498C0.75 5.82498 0.75 5.82498 0.75 5.89998C0.75 7.69998 2.025 9.19998 3.675 9.49998C3.375 9.57498 3.075 9.64997 2.7 9.64997C2.475 9.64997 2.25 9.64998 2.025 9.57498C2.475 11.075 3.825 12.125 5.475 12.125C4.2 13.1 2.625 13.7 0.9 13.7C0.6 13.7 0.3 13.7 0 13.625C1.65 14.675 3.6 15.275 5.625 15.275C12.45 15.275 16.125 9.64997 16.125 4.77498C16.125 4.62498 16.125 4.47498 16.125 4.32498C16.875 3.79998 17.475 3.12498 18 2.44998Z'
									fill='#55ACEE'
								/>
							</svg>
						</div>
						<div className='py-[9px] px-[10px] bg-[#f7f7f7] rounded-full'>
							<img src={Instagram} alt='' />
						</div>
					</div>
				</div>
				<div className='bg-[#fcfcfc] w-[70%]'>
					<div className='p-5'>
						<h3 className='text-lg font-semibold'>Agent Details</h3>
						<div className='mt-[15px] mb-[20px] border border-b-[1px] border-[#E4E4E4]'></div>
						<p className='text-base font-medium text-[#808191] text-justify mb-[30px]'>
							Talent customers tend to earn a basic salary in the range of £15,000 to £35,000 per annum.
							However, talented customers also earn a commission for finding their client's work.
							Typically, agents receive around 10% of what the client is paid.
						</p>
						<div className='grid grid-cols-3'>
							<div className='flex flex-col gap-5'>
								<div className='flex gap-[15px]'>
									<div className='py-[6px] px-[5px] bg-[#475BE8] rounded-full'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='9'
											height='8'
											viewBox='0 0 9 8'
											fill='none'
										>
											<path
												d='M8 1.5L3.10002 6.5L1 4.35713'
												stroke='#FCFCFC'
												stroke-width='1.07143'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
										</svg>
									</div>
									<span className='text-sm font-medium'>Agency</span>
								</div>
								<div className='flex gap-[15px]'>
									<div className='py-[6px] px-[5px] bg-[#475BE8] rounded-full'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='9'
											height='8'
											viewBox='0 0 9 8'
											fill='none'
										>
											<path
												d='M8 1.5L3.10002 6.5L1 4.35713'
												stroke='#FCFCFC'
												stroke-width='1.07143'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
										</svg>
									</div>
									<span className='text-sm font-medium'>Agent License</span>
								</div>
								<div className='flex gap-[15px]'>
									<div className='py-[6px] px-[5px] bg-[#475BE8] rounded-full'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='9'
											height='8'
											viewBox='0 0 9 8'
											fill='none'
										>
											<path
												d='M8 1.5L3.10002 6.5L1 4.35713'
												stroke='#FCFCFC'
												stroke-width='1.07143'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
										</svg>
									</div>
									<span className='text-sm font-medium'>Tax Number</span>
								</div>
								<div className='flex gap-[15px]'>
									<div className='py-[6px] px-[5px] bg-[#475BE8] rounded-full'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='9'
											height='8'
											viewBox='0 0 9 8'
											fill='none'
										>
											<path
												d='M8 1.5L3.10002 6.5L1 4.35713'
												stroke='#FCFCFC'
												stroke-width='1.07143'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
										</svg>
									</div>
									<span className='text-sm font-medium'>Service area</span>
								</div>
							</div>
							<div className='flex flex-col col-span-2 gap-4'>
								<div className='flex gap-[31px] items-center'>
									<span>:</span>
									<span className='text-xs font-medium text-[#808191]'>All American Real Estate</span>
								</div>
								<div className='flex gap-[31px] items-center'>
									<span>:</span>
									<span className='text-xs font-medium text-[#808191]'>3124 9764 9700 234</span>
								</div>
								<div className='flex gap-[31px] items-center'>
									<span>:</span>
									<span className='text-xs font-medium text-[#808191]'>TX 87D0 678H PQ45</span>
								</div>
								<div className='flex gap-[31px] items-center'>
									<span>:</span>
									<span className='text-xs font-medium text-[#808191]'>
										Chicago, Los Angeles, New York, Miami beach
									</span>
								</div>
							</div>
						</div>
						<div className='mt-[15px] mb-[20px] border border-b-[1px] border-[#E4E4E4]'></div>
						<h3 className='mb-5 text-lg font-semibold'>Agent Status</h3>
						<div className='flex items-center justify-center gap-[25px]'>
							<div className='pt-[15px] pb-[20px] pr-[40px] pl-[50px] border border-[#E4E4E4] rounded-[10px] gap-[10px] flex flex-col justify-center items-center'>
								<span className='text-base font-normal text-[#808191]'>Total Listings</span>
								<h3 className='text-[25px] font-bold'>1050</h3>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='63'
									height='62'
									viewBox='0 0 63 62'
									fill='none'
								>
									<path
										d='M62.5 31C62.5 48.1208 48.6208 62 31.5 62C14.3792 62 0.5 48.1208 0.5 31C0.5 13.8792 14.3792 0 31.5 0C48.6208 0 62.5 13.8792 62.5 31ZM8.43476 31C8.43476 43.7386 18.7614 54.0652 31.5 54.0652C44.2386 54.0652 54.5652 43.7386 54.5652 31C54.5652 18.2614 44.2386 7.93476 31.5 7.93476C18.7614 7.93476 8.43476 18.2614 8.43476 31Z'
										fill='#E4E8EF'
									/>
									<path
										d='M53.9561 47.7249C55.2849 48.7146 57.1784 48.4461 58.035 47.0279C60.7908 42.4657 62.3328 37.2538 62.4872 31.8924C62.6704 25.528 60.8896 19.2615 57.3866 13.9446C53.8836 8.62783 48.8284 4.51859 42.9082 2.17547C37.9209 0.201613 32.5236 -0.43826 27.2441 0.293504C25.6029 0.520979 24.6091 2.15482 24.9941 3.76633L25.4436 5.64814C25.8286 7.25965 27.4479 8.2331 29.0957 8.0604C32.7791 7.67433 36.5171 8.17964 39.9881 9.5534C44.393 11.2968 48.1543 14.3542 50.7606 18.3101C53.367 22.2661 54.6921 26.9286 54.5557 31.664C54.4482 35.3954 53.4374 39.0294 51.6291 42.2616C50.8202 43.7076 51.0756 45.5796 52.4044 46.5692L53.9561 47.7249Z'
										fill='#FE6D8E'
									/>
								</svg>
							</div>
							<div className='pt-[15px] pb-[20px] pr-[40px] pl-[50px] border border-[#E4E4E4] rounded-[10px] gap-[10px] flex flex-col justify-center items-center'>
								<span className='text-base font-normal text-[#808191]'>Properties Sold</span>
								<h3 className='text-[25px] font-bold'>650</h3>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='63'
									height='62'
									viewBox='0 0 63 62'
									fill='none'
								>
									<path
										d='M62.5 31C62.5 48.1208 48.6208 62 31.5 62C14.3792 62 0.5 48.1208 0.5 31C0.5 13.8792 14.3792 0 31.5 0C48.6208 0 62.5 13.8792 62.5 31ZM8.43476 31C8.43476 43.7386 18.7614 54.0652 31.5 54.0652C44.2386 54.0652 54.5652 43.7386 54.5652 31C54.5652 18.2614 44.2386 7.93476 31.5 7.93476C18.7614 7.93476 8.43476 18.2614 8.43476 31Z'
										fill='#E4E8EF'
									/>
									<path
										d='M26.0334 58.4612C25.71 60.0862 26.7652 61.6811 28.4138 61.8461C35.5339 62.5587 42.7175 60.7868 48.7189 56.7781C55.5557 52.2114 60.2983 45.1158 61.9035 37.0523C63.5086 28.9888 61.8448 20.6179 57.2781 13.7811C53.2693 7.77969 47.312 3.39193 40.4618 1.32354C38.8757 0.844618 37.29 1.91385 36.9666 3.53882L36.5888 5.43635C36.2654 7.06132 37.33 8.62223 38.8993 9.15371C43.6881 10.7756 47.8408 13.9381 50.6799 18.1885C54.0778 23.2753 55.3157 29.5036 54.1214 35.5031C52.9271 41.5027 49.3984 46.7821 44.3115 50.1799C40.0612 53.019 35.0139 54.3502 29.969 54.0145C28.3158 53.9045 26.7346 54.9387 26.4112 56.5637L26.0334 58.4612Z'
										fill='#2ED480'
									/>
								</svg>
							</div>
							<div className='pt-[15px] pb-[20px] pr-[40px] pl-[50px] border border-[#E4E4E4] rounded-[10px] gap-[10px] flex flex-col justify-center items-center'>
								<span className='text-base font-normal text-[#808191]'>Properties Rent</span>
								<h3 className='text-[25px] font-bold'>400</h3>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='63'
									height='62'
									viewBox='0 0 63 62'
									fill='none'
								>
									<path
										d='M62.5 31C62.5 48.1208 48.6208 62 31.5 62C14.3792 62 0.5 48.1208 0.5 31C0.5 13.8792 14.3792 0 31.5 0C48.6208 0 62.5 13.8792 62.5 31ZM8.43476 31C8.43476 43.7386 18.7614 54.0652 31.5 54.0652C44.2386 54.0652 54.5652 43.7386 54.5652 31C54.5652 18.2614 44.2386 7.93476 31.5 7.93476C18.7614 7.93476 8.43476 18.2614 8.43476 31Z'
										fill='#E4E8EF'
									/>
									<path
										d='M15.9925 54.3135C15.0749 55.693 15.4437 57.5696 16.9054 58.3496C22.3547 61.2576 28.5719 62.4824 34.7596 61.8282C41.9457 61.0683 48.6406 57.8219 53.6873 52.65C58.734 47.4781 61.8153 40.7057 62.3988 33.5031C62.9012 27.3012 61.5244 21.1159 58.4837 15.7395C57.6681 14.2973 55.783 13.9746 54.4264 14.9258L52.8422 16.0365C51.4856 16.9877 51.1766 18.8516 51.9438 20.3201C53.9492 24.159 54.8429 28.5052 54.4899 32.8624C54.0558 38.2214 51.7632 43.2604 48.0082 47.1085C44.2533 50.9566 39.272 53.372 33.9253 53.9374C29.578 54.397 25.2112 53.6101 21.3243 51.6994C19.8374 50.9684 17.9817 51.323 17.0641 52.7025L15.9925 54.3135Z'
										fill='#2F80ED'
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='p-5 bg-[#FCFCFC] rounded-2xl'>
				<div className='flex justify-between mb-7'>
					<h3 className='text-lg font-semibold'>Active Listing</h3>
					<button className='flex items-center py-2 px-[10px] rounded-[10px] text-sm font-medium leading-normal border border-[#E4E4E4]'>
						View All
					</button>
				</div>
				<div aria-label='list' className='grid grid-cols-2 gap-x-16 gap-y-6 mb-9'>
					{Array(4)
						.fill(0)
						.map((index) => (
							<div key={index}>
								<PropertyItem />
							</div>
						))}
				</div>
			</div>
		</Fragment>
	);
};

export default AgentDetail;
