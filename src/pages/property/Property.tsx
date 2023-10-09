import { Fragment } from 'react';
import PropertyItem from '../../modules/property/PropertyItem';

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
						.map((item, index) => (
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

function Search() {
	return (
		<div className='flex items-center pb-[25px] gap-[20px]'>
			<div className='flex pt-[18px] pb-[15px] pl-[10px] pr-[10px] bg-[#F7F7F7] gap-1 w-[15%] rounded-lg'>
				<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
					<path
						d='M12.803 13.8637C13.0959 14.1566 13.5708 14.1566 13.8637 13.8637C14.1566 13.5708 14.1566 13.0959 13.8637 12.803L12.803 13.8637ZM11.25 7C11.25 9.34721 9.34721 11.25 7 11.25V12.75C10.1756 12.75 12.75 10.1756 12.75 7H11.25ZM7 11.25C4.65279 11.25 2.75 9.34721 2.75 7H1.25C1.25 10.1756 3.82436 12.75 7 12.75V11.25ZM2.75 7C2.75 4.65279 4.65279 2.75 7 2.75V1.25C3.82436 1.25 1.25 3.82436 1.25 7H2.75ZM7 2.75C9.34721 2.75 11.25 4.65279 11.25 7H12.75C12.75 3.82436 10.1756 1.25 7 1.25V2.75ZM13.8637 12.803L11.0719 10.0113L10.0113 11.0719L12.803 13.8637L13.8637 12.803Z'
						fill='#808191'
					/>
				</svg>
				<input
					type='text'
					placeholder='Enter an address, city or Zip code'
					className='w-full text-xs font-normal bg-transparent outline-none'
				/>
			</div>
			<div className='pt-[10px] pb-[12px] pl-[10px] pr-[10px] bg-[#F7F7F7] w-[12%] rounded-lg'>
				<select
					name=''
					id=''
					className='pr-14 bg-transparent outline-none text-xs font-medium text-[#808191] w-full'
				>
					<option value='volvo'>Any Status</option>
					<option value='saab'>Saab</option>
					<option value='mercedes'>Mercedes</option>
				</select>
			</div>
			<div className='pt-[10px] pb-[12px] pl-[10px] pr-[10px] bg-[#F7F7F7] w-[12%] rounded-lg'>
				<select
					name=''
					id=''
					className='pr-14 bg-transparent outline-none text-xs font-medium text-[#808191] w-full'
				>
					<option value='volvo'>Any Type</option>
					<option value='saab'>Saab</option>
					<option value='mercedes'>Mercedes</option>
				</select>
			</div>
			<div className='pt-[10px] pb-[12px] pl-[10px] pr-[10px] bg-[#F7F7F7] w-[12%] rounded-lg'>
				<select
					name=''
					id=''
					className='pr-14 bg-transparent outline-none text-xs font-medium text-[#808191] w-full'
				>
					<option value='volvo'>Any Countries</option>
					<option value='saab'>Saab</option>
					<option value='mercedes'>Mercedes</option>
				</select>
			</div>
			<div className='pt-[10px] pb-[12px] pl-[10px] pr-[10px] bg-[#F7F7F7] w-[12%] rounded-lg'>
				<select
					name=''
					id=''
					className='pr-14 bg-transparent outline-none text-xs font-medium text-[#808191] w-full'
				>
					<option value='volvo'>Any States</option>
					<option value='saab'>Saab</option>
					<option value='mercedes'>Mercedes</option>
				</select>
			</div>
			<div className='flex items-center gap-[10px] text-xs font-medium pt-[10px] pb-[12px] pl-[10px] pr-[10px] bg-[#F7F7F7] w-[10%] rounded-lg'>
				<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'>
					<path
						fill-rule='evenodd'
						clip-rule='evenodd'
						d='M4.59451 13.5H3C2.58579 13.5 2.25 13.1642 2.25 12.75C2.25 12.3358 2.58579 12 3 12H4.59451C4.92755 10.7061 6.10212 9.75 7.5 9.75C8.89788 9.75 10.0725 10.7061 10.4055 12H15C15.4142 12 15.75 12.3358 15.75 12.75C15.75 13.1642 15.4142 13.5 15 13.5H10.4055C10.0725 14.7939 8.89788 15.75 7.5 15.75C6.10212 15.75 4.92755 14.7939 4.59451 13.5ZM6 12.75C6 11.9216 6.67157 11.25 7.5 11.25C8.32843 11.25 9 11.9216 9 12.75C9 13.5784 8.32843 14.25 7.5 14.25C6.67157 14.25 6 13.5784 6 12.75Z'
						fill='#808191'
					/>
					<path
						fill-rule='evenodd'
						clip-rule='evenodd'
						d='M7.59451 6H3C2.58579 6 2.25 5.66421 2.25 5.25C2.25 4.83579 2.58579 4.5 3 4.5H7.59451C7.92755 3.20608 9.10212 2.25 10.5 2.25C11.8979 2.25 13.0725 3.20608 13.4055 4.5H15C15.4142 4.5 15.75 4.83579 15.75 5.25C15.75 5.66421 15.4142 6 15 6H13.4055C13.0725 7.29392 11.8979 8.25 10.5 8.25C9.10212 8.25 7.92755 7.29392 7.59451 6ZM9 5.25C9 4.42157 9.67157 3.75 10.5 3.75C11.3284 3.75 12 4.42157 12 5.25C12 6.07843 11.3284 6.75 10.5 6.75C9.67157 6.75 9 6.07843 9 5.25Z'
						fill='#808191'
					/>
				</svg>
				More
			</div>
		</div>
	);
}

export default Property;
