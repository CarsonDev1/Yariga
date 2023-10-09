import { Link } from 'react-router-dom';
import Item1 from '../../assets/item-1.png';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PropertyItem = ({ slug }: any) => {
	const propertyDetailUrl = `/property/${slug}`;
	return (
		<div className='flex gap-[10px]'>
			<div className='relative'>
				<Link to={propertyDetailUrl}>
					<img
						src={Item1}
						alt=''
						className='flex-shrink-0 object-cover rounded-xl'
						width={200}
						height={125}
					/>
				</Link>
			</div>
			<div className='flex-1'>
				<span className='inline-block py-[7px] px-[10px] bg-[#DADEFA] rounded-[5px] text-xs font-semibold text-[#475BE8] mb-3'>
					$7400
				</span>
				<h3 className='text-base font-semibold mb-[6px]'>Metro Jayakarta Hotel & Spa</h3>
				<div className='flex gap-1'>
					<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M12.534 10.3542C13.1554 9.57904 13.5261 8.59791 13.5261 7.52609C13.5261 5.0264 11.4997 3 8.99996 3C6.50028 3 4.47388 5.0264 4.47388 7.52609C4.47388 8.59781 4.84449 9.57886 5.46577 10.354L5.47024 10.3595C5.60178 10.5234 5.72356 10.696 5.85008 10.8637C6.06981 11.155 6.37968 11.5641 6.73971 12.0347C7.41061 12.9115 8.2487 13.9924 9.0005 14.9204C9.75465 13.9904 10.5947 12.9078 11.2669 12.0299C11.6276 11.5588 11.9379 11.1493 12.158 10.8577C12.2838 10.6909 12.4033 10.5172 12.534 10.3542ZM13.7065 11.2941C13.7065 11.2941 13.7053 11.2959 13.7044 11.2971C13.6659 11.3484 13.3133 11.8197 12.8022 12.4908C12.044 13.4865 10.9373 14.9221 9.99108 16.0795C9.47346 16.7126 8.52665 16.7123 8.00935 16.079C6.39209 14.0989 4.30045 11.2985 4.30045 11.2985L4.29557 11.2924C3.46856 10.2607 2.97388 8.95118 2.97388 7.52609C2.97388 4.19797 5.67185 1.5 8.99996 1.5C12.3281 1.5 15.0261 4.19797 15.0261 7.52609C15.0261 8.41277 14.8345 9.25473 14.4906 10.0128C14.2826 10.4715 14.0188 10.8994 13.7078 11.288L13.7057 11.2908L13.7044 11.2924H13.7078L13.7065 11.2941Z'
							fill='#808191'
						/>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M9 8.25C9.41421 8.25 9.75 7.91421 9.75 7.5C9.75 7.08579 9.41421 6.75 9 6.75C8.58579 6.75 8.25 7.08579 8.25 7.5C8.25 7.91421 8.58579 8.25 9 8.25ZM11.25 7.5C11.25 8.74264 10.2426 9.75 9 9.75C7.75736 9.75 6.75 8.74264 6.75 7.5C6.75 6.25736 7.75736 5.25 9 5.25C10.2426 5.25 11.25 6.25736 11.25 7.5Z'
							fill='#808191'
						/>
					</svg>
					<span className='text-sm font-normal text-[#808191] mb-3'>North Carolina, USA</span>
				</div>
				<div className='flex gap-[20px]'>
					<div className='flex items-center gap-1'>
						<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'>
							<path
								d='M13.6666 9.19432V4.22516L4.33306 4.2223C4.33306 4.2223 4.33364 7.66864 4.33325 8.86145C4.34732 7.86161 5.12301 7.05576 6.08403 7.05576H7.24879C8.21579 7.05576 8.99977 7.87861 8.99977 8.88909C8.99977 7.87656 9.78082 7.05576 10.7508 7.05576H11.9155C12.8825 7.05576 13.6665 7.87861 13.6665 8.88909L13.6666 9.19432ZM3.16655 9.49991V4.22511C3.16655 3.54845 3.69048 3 4.33316 3H13.6667C14.311 3 14.8333 3.5501 14.8333 4.22511V9.49991H15.4163C15.7387 9.49991 16 9.77265 16 10.1095V14.3904C16 14.727 15.7412 15 15.4168 15H13.6666C13.3444 15 12.9653 14.7526 12.8223 14.4533L12.7609 14.3246C12.6168 14.0226 12.2369 13.7777 11.9141 13.7777H6.08586C5.76234 13.7777 5.38196 14.0251 5.23909 14.3246L5.17766 14.4533C5.03352 14.7552 4.65783 15 4.33341 15H2.5832C2.26113 15 2 14.7273 2 14.3904V10.1095C2 9.77286 2.26103 9.49991 2.5837 9.49991H3.16655ZM3.16655 13.7776H4.19546C4.53648 13.0633 5.32134 12.5554 6.08569 12.5554H11.914C12.6781 12.5554 13.4622 13.0612 13.8042 13.7776H14.8331V10.7222H3.16655V13.7776ZM7.83307 9.49991V8.88883C7.83307 8.55255 7.57077 8.27765 7.24879 8.27765H6.08404C5.75961 8.27765 5.49976 8.55009 5.49976 8.88883V9.49991H7.83307ZM12.4998 9.49991V8.88883C12.4998 8.55255 12.2375 8.27765 11.9156 8.27765H10.7508C10.4264 8.27765 10.1665 8.55009 10.1665 8.88883V9.49991H12.4998Z'
								fill='#808191'
							/>
						</svg>
						<span className='text-xs font-medium'>6 Beds</span>
					</div>
					<div className='flex items-center gap-1'>
						<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none'>
							<path
								d='M13.8954 7.03295C13.8954 7.21827 13.8548 7.39516 13.7738 7.56299C13.6926 7.73104 13.5884 7.87859 13.461 8.00597C13.3333 8.13374 13.183 8.2378 13.0091 8.31876C12.8355 8.39982 12.6558 8.4404 12.4706 8.4404C12.2274 8.4404 11.9955 8.37692 11.7756 8.24935C11.5554 8.12209 11.3817 7.95405 11.2543 7.74551H7.72756V11.2725C7.93589 11.4002 8.10384 11.5739 8.23141 11.7938C8.35867 12.014 8.42245 12.2455 8.42245 12.4888C8.42245 12.6742 8.38468 12.851 8.30955 13.0188C8.23412 13.1869 8.12985 13.3344 7.99676 13.4618C7.86337 13.5896 7.7128 13.6936 7.54507 13.7746C7.37702 13.8556 7.20024 13.8962 7.01502 13.8962C6.8296 13.8962 6.65281 13.8557 6.48507 13.7746C6.31702 13.6936 6.16634 13.5896 6.03338 13.4618C5.89998 13.3345 5.79582 13.1869 5.72059 13.0188C5.64515 12.8509 5.60769 12.6742 5.60769 12.4888C5.60769 12.2456 5.67117 12.014 5.79874 11.7938C5.926 11.5739 6.09404 11.4002 6.30258 11.2725L6.30278 7.74525H2.70638C2.57882 7.95378 2.40493 8.12184 2.18508 8.2491C1.9649 8.37666 1.73338 8.44015 1.4901 8.44015C1.30467 8.44015 1.12788 8.39967 0.96015 8.31851C0.792102 8.23755 0.641422 8.13348 0.508453 8.00572C0.375261 7.87845 0.270997 7.73081 0.195665 7.56274C0.120229 7.39499 0.0827637 7.21829 0.0827637 7.03289C0.0827637 6.84787 0.120229 6.66816 0.195665 6.49431C0.270799 6.32054 0.375264 6.17018 0.508453 6.04261C0.641545 5.91515 0.792108 5.81108 0.96015 5.72982C1.12789 5.64886 1.30477 5.60818 1.4901 5.60818C1.73328 5.60818 1.96491 5.67187 2.18508 5.79923C2.40495 5.9268 2.57874 6.09453 2.70638 6.30308H6.30304L6.30294 2.70668C6.09441 2.57921 5.92635 2.40543 5.79909 2.18527C5.67153 1.96549 5.60804 1.73357 5.60804 1.49029C5.60804 1.30527 5.64551 1.12839 5.72094 0.960342C5.79608 0.792598 5.90034 0.641922 6.03373 0.508645C6.16683 0.375553 6.31739 0.27129 6.48543 0.195857C6.65328 0.120722 6.82995 0.0828552 7.01538 0.0828552C7.2006 0.0828552 7.37738 0.120725 7.54542 0.195857C7.71317 0.271192 7.86384 0.375556 7.99712 0.508645C8.13021 0.642038 8.23428 0.792608 8.30991 0.960342C8.38505 1.12839 8.42281 1.30517 8.42281 1.49029C8.42281 1.73347 8.35903 1.96549 8.23176 2.18527C8.1042 2.40545 7.93625 2.57921 7.72792 2.70668V6.30333H11.2549C11.3824 6.09481 11.556 5.92706 11.7762 5.79949C11.9961 5.67202 12.2279 5.60844 12.4712 5.60844C12.6564 5.60844 12.8361 5.64902 13.0098 5.73008C13.1835 5.81114 13.3339 5.9154 13.4617 6.04287C13.5889 6.17043 13.6931 6.32081 13.7745 6.49457C13.855 6.66804 13.8956 6.84783 13.8956 7.03287L13.8954 7.03295Z'
								fill='#808191'
							/>
						</svg>
						<span className='text-xs font-medium'>29M</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PropertyItem;
