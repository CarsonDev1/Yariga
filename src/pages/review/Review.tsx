import { Fragment } from 'react';
import ReviewItem from '../../modules/review/ReviewItem';

const Review = () => {
	return (
		<Fragment>
			<div className='pt-6 pb-5 pl-6 pr-5'>
				<h1 className='text-[25px] font-bold'>Review List</h1>
				<div className='mt-5 p-3 bg-[#FCFCFC] w-[33.333%] rounded-2xl'>
					<div className='flex justify-around cursor-pointer'>
						<span className='text-base font-medium text-[#808191] hover:text-[#475BE8]'>All Review</span>
						<span className='text-base font-medium text-[#808191] hover:text-[#475BE8]'>Published</span>
						<span className='text-base font-medium text-[#808191] hover:text-[#475BE8]'>Deleted</span>
					</div>
				</div>
				<div className='grid grid-cols-1'>
					{Array(5)
						.fill(0)
						.map((index) => (
							<div key={index}>
								<ReviewItem />
							</div>
						))}
				</div>
			</div>
			<div aria-label='pagination' className='flex items-center justify-between pt-6 pl-6 pr-5 mb-3'>
				<p className='text-sm font-normal text-[#808191]'>Showing 1 to 10 Propertys</p>
				<div className='flex items-center gap-[10px]'>
					<svg xmlns='http://www.w3.org/2000/svg' width='7' height='12' viewBox='0 0 7 12' fill='none'>
						<path
							d='M6 1L1 6L6 11'
							stroke='#808191'
							stroke-width='1.5'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
					<button className='py-2 px-4 text-sm text-[#fcfcfc] font-normal bg-[#475BE8] rounded-md'>1</button>
					<button className='py-2 px-4 text-sm text-[#808191] font-normal rounded-md'>2</button>
					<svg xmlns='http://www.w3.org/2000/svg' width='7' height='12' viewBox='0 0 7 12' fill='none'>
						<path
							d='M1 11L6 6L1 1'
							stroke='#808191'
							stroke-width='1.5'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
				</div>
			</div>
		</Fragment>
	);
};

export default Review;
