import { Link } from 'react-router-dom';
import Agent from '../../assets/agents.png';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function AgentItem({ slug }: any) {
	const agentDetailUrl = `/agent/${slug}`;
	return (
		<div className='flex gap-5 p-5 shadow-sm'>
			<Link to={agentDetailUrl}>
				<img src={Agent} alt='' />
			</Link>
			<div className='flex flex-col gap-[52px]'>
				<div className='gap-2'>
					<h2 className='text-[22px] font-semibold'>Karen Eilla Boyette</h2>
					<span className='text-sm font-normal text-[#808191]'>Real-Estate Agent</span>
				</div>
				<div className='grid grid-cols-2 gap-[158px]'>
					<div className='flex flex-col gap-5'>
						<div className='flex gap-[10px]'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='18'
								height='18'
								viewBox='0 0 18 18'
								fill='none'
							>
								<path
									d='M2.40323 3.96438C2.26056 4.16893 2.3481 4.44059 2.56015 4.57186L9.10515 8.62353C9.34703 8.77327 9.65281 8.77327 9.89469 8.62353L16.4398 4.57179C16.6519 4.44052 16.7394 4.16885 16.5967 3.9643C16.1901 3.38139 15.5146 3 14.75 3H4.25C3.48536 3 2.80981 3.38142 2.40323 3.96438Z'
									fill='#808191'
								/>
								<path
									d='M17 6.88674C17 6.49498 16.5699 6.2554 16.2368 6.4616L10.6842 9.89893C9.95858 10.3481 9.04126 10.3481 8.31562 9.89893L2.76318 6.4617C2.43008 6.2555 2 6.49508 2 6.88683V12.75C2 13.9926 3.00736 15 4.25 15H14.75C15.9926 15 17 13.9926 17 12.75V6.88674Z'
									fill='#808191'
								/>
							</svg>
							<span className='text-sm font-normal text-[#808191]'>kareneboyette@armyspy.com</span>
						</div>
						<div className='flex gap-[10px]'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='18'
								height='18'
								viewBox='0 0 18 18'
								fill='none'
							>
								<path
									d='M2.32455 6.69457C1.49705 5.03392 2.33198 3.20118 3.92298 2.24658C4.68897 1.78698 5.67896 1.98644 6.20722 2.7068L7.37922 4.30498C7.87805 4.98521 7.95451 5.8873 7.57727 6.64178L7.26997 7.25637C7.18102 7.43428 7.16695 7.64009 7.25795 7.81696C7.42373 8.13921 7.77677 8.71029 8.45687 9.39039C9.13696 10.0705 9.70804 10.4235 10.0303 10.5893C10.2072 10.6803 10.413 10.6662 10.5909 10.5773L11.2055 10.27C11.9599 9.89275 12.862 9.9692 13.5423 10.468L15.1405 11.64C15.8608 12.1683 16.0603 13.1583 15.6007 13.9243C14.6461 15.5153 12.8133 16.3502 11.1527 15.5227C9.75309 14.8253 7.96459 13.6711 6.07038 11.7769C4.17617 9.88266 3.02196 8.09417 2.32455 6.69457Z'
									fill='#808191'
								/>
							</svg>
							<span className='text-sm font-normal text-[#808191]'>+502-324-4194</span>
						</div>
					</div>
					<div className='flex flex-col gap-5'>
						<div className='flex gap-[10px]'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='18'
								height='18'
								viewBox='0 0 18 18'
								fill='none'
							>
								<path
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M15 8.00441C15 9.42437 14.5075 10.7292 13.684 11.7572H13.6875C13.6875 11.7572 11.6022 14.5497 9.98682 16.527C9.47145 17.1579 8.52874 17.1576 8.01367 16.5265C6.40341 14.5535 4.32083 11.7632 4.32083 11.7632L4.31597 11.7572C3.49254 10.7292 3 9.42437 3 8.00441C3 4.68827 5.68629 2 9 2C12.3137 2 15 4.68827 15 8.00441ZM11.2404 7.97842C11.2404 9.21659 10.2374 10.2203 9.0001 10.2203C7.76284 10.2203 6.75984 9.21659 6.75984 7.97842C6.75984 6.74025 7.76284 5.73651 9.0001 5.73651C10.2374 5.73651 11.2404 6.74025 11.2404 7.97842Z'
									fill='#808191'
								/>
							</svg>
							<span className='text-sm font-normal text-[#808191]'>Manchester</span>
						</div>
						<div className='flex gap-[10px]'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='18'
								height='18'
								viewBox='0 0 18 18'
								fill='none'
							>
								<path
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M5.20429 3.19329C4.20267 3.44369 3.5 4.34366 3.5 5.37611V14.8694H2.75C2.33579 14.8694 2 15.2052 2 15.6194C2 16.0336 2.33579 16.3694 2.75 16.3694H16.25C16.6642 16.3694 17 16.0336 17 15.6194C17 15.2052 16.6642 14.8694 16.25 14.8694H15.5V8.11938C15.5 6.87674 14.4926 5.86938 13.25 5.86938H12.5V4.25111C12.5 2.78732 11.1244 1.71327 9.7043 2.06829L5.20429 3.19329ZM14 8.11938V14.8694H12.5V7.36938H13.25C13.6642 7.36938 14 7.70517 14 8.11938ZM7.25 11.8694C6.83579 11.8694 6.5 12.2052 6.5 12.6194C6.5 13.0336 6.83579 13.3694 7.25 13.3694H8.75C9.16421 13.3694 9.5 13.0336 9.5 12.6194C9.5 12.2052 9.16421 11.8694 8.75 11.8694H7.25ZM6.5 9.61938C6.5 9.20517 6.83579 8.86938 7.25 8.86938H8.75C9.16421 8.86938 9.5 9.20517 9.5 9.61938C9.5 10.0336 9.16421 10.3694 8.75 10.3694H7.25C6.83579 10.3694 6.5 10.0336 6.5 9.61938ZM7.25 5.86938C6.83579 5.86938 6.5 6.20517 6.5 6.61938C6.5 7.0336 6.83579 7.36938 7.25 7.36938H8.75C9.16421 7.36938 9.5 7.0336 9.5 6.61938C9.5 6.20517 9.16421 5.86938 8.75 5.86938H7.25Z'
									fill='#808191'
								/>
							</svg>
							<span className='text-sm font-normal text-[#808191]'>15 Properties</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AgentItem;
