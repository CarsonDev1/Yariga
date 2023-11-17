import Review from '../../assets/review.png';
const ReviewItem = () => {
	return (
		<div className='flex items-center'>
			<div className='flex gap-4'>
				<img src={Review} alt='' className='w-[70px] h-[70px]' />
				<span className='text-sm font-normal text-[#475BE8]'>#C01234</span>
			</div>
			<div className='flex'></div>
		</div>
	);
};

export default ReviewItem;
