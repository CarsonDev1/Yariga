import { Fragment } from 'react';
import AgentItem from '../../modules/agent/AgentItem';

const Agent = () => {
	return (
		<Fragment>
			<div className='flex justify-between pt-6 pb-5 pl-6 pr-5'>
				<h1 className='text-[25px] font-bold'>Agents List</h1>
				<button className='flex items-center py-[13px] px-5 rounded-[10px] bg-[#475BE8] text-[#FCFCFC] text-sm font-medium leading-normal'>
					+ Add Agents
				</button>
			</div>
			<div className='p-5 bg-[#FCFCFC] rounded-2xl'>
				<div className='grid grid-cols-1'>
					{Array(4)
						.fill(0)
						.map((index) => (
							<div key={index}>
								<AgentItem />
							</div>
						))}
				</div>
			</div>
		</Fragment>
	);
};

export default Agent;
