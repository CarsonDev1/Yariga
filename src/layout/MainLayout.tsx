import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import SideBar from '../components/sidebar/SideBar';

const MainLayout = () => {
	return (
		<div>
			<Header />
			<div className='flex'>
				<SideBar />
				<div className='bg-[#F4F4F4] w-full p-5'>
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default MainLayout;
