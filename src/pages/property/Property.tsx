import { Fragment } from 'react';
import PropertyItem from '../../modules/property/PropertyItem';
import Search from '../../components/search/Search';

const Property = () => {
	return (
		<Fragment>
			<div className='flex justify-between pt-6 pb-5 pl-6 pr-5'>
				<h1 className='text-[25px] font-bold'>Property List</h1>
				<button className='flex items-center py-[13px] px-5 rounded-[10px] bg-[#475BE8] text-[#FCFCFC] text-sm font-medium leading-normal'>
					+ Add Property
				</button>
			</div>
			<div className='p-5 bg-[#FCFCFC] rounded-2xl'>
				<div aria-label='filter'>
					<Search />
				</div>
				<div aria-label='list' className='grid grid-cols-2 gap-x-16 gap-y-6 mb-9'>
					{Array(10)
						.fill(0)
						.map((index) => (
							<div key={index}>
								<PropertyItem />
							</div>
						))}
				</div>
				<div aria-label='pagination' className='flex items-center justify-between mb-3'>
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
						<button className='py-2 px-4 text-sm text-[#fcfcfc] font-normal bg-[#475BE8] rounded-md'>
							1
						</button>
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
			</div>
		</Fragment>
	);
};

export default Property;
