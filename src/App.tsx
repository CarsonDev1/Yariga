import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import DashBoard from './pages/dashboard/DashBoard';
import Agent from './pages/agent/Agent';
import SingUp from './pages/signup/SignUp';
import Property from './pages/property/Property';
import Review from './pages/review/Review';
import Message from './pages/message/Message';
import Profile from './pages/profile/Profile';
import PropertyDetail from './modules/property/PropertyDetail';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route index element={<DashBoard />} />
					<Route path='property' element={<Property />} />
					<Route path='property/:slug' element={<PropertyDetail />} />
					<Route path='agent' element={<Agent />} />
					<Route path='review' element={<Review />} />
					<Route path='message' element={<Message />} />
					<Route path='profile' element={<Profile />} />
				</Route>
				<Route path='signup' element={<SingUp />} />
			</Routes>
		</>
	);
}

export default App;
