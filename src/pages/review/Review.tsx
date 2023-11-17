import { Fragment } from 'react';
import ReviewItem from '../../modules/review/ReviewItem';

const Review = () => {
	return (
		<Fragment>
			<div className='pt-6 pb-5 pl-6 pr-5'>
				<h1 className='text-[25px] font-bold'>Review List</h1>
				<div className='mt-5 p-4 bg-[#FCFCFC] w-[33.333%] rounded-2xl'>
					<div className='flex justify-around cursor-pointer'>
						<span className='text-base font-medium text-[#808191]'>All Review</span>
						<span className='text-base font-medium text-[#808191]'>Published</span>
						<span className='text-base font-medium text-[#808191]'>Deleted</span>
					</div>
				</div>
				<div className='mt-5 p-4 bg-[#FCFCFC] rounded-2xl'>
					<div className='grid grid-cols-1'>
						{Array(1)
							.fill(0)
							.map((index) => (
								<div key={index}>
									<ReviewItem />
								</div>
							))}
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Review;
