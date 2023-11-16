import Review from '../../assets/review.png';
const ReviewItem = () => {
	return (
		<div className='flex'>
			<div className='flex justify-center'>
				<img src={Review} alt='' className='w-[70px] h-[70px]' />
			</div>
			<div className='flex'></div>
		</div>
	);
};

export default ReviewItem;
