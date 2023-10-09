import Logo from '../../assets/logo.png';
const Header = () => {
	return (
		<div className='flex items-center justify-between px-5 py-4'>
			<div className='flex items-center gap-[82px] flex-1'>
				<img src={Logo} alt='' />
				<Search />
			</div>
			<div className='flex items-center gap-5'>
				<User />
			</div>
		</div>
	);
};

export default Header;

function Search() {
	return (
		<div className='p-[10px] flex items-center bg-[#F4F4F4] gap-2 rounded-lg flex-[0_1_405px]'>
			<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
				<path
					d='M12.803 13.8637C13.0959 14.1566 13.5708 14.1566 13.8637 13.8637C14.1566 13.5708 14.1566 13.0959 13.8637 12.803L12.803 13.8637ZM11.25 7C11.25 9.34721 9.34721 11.25 7 11.25V12.75C10.1756 12.75 12.75 10.1756 12.75 7H11.25ZM7 11.25C4.65279 11.25 2.75 9.34721 2.75 7H1.25C1.25 10.1756 3.82436 12.75 7 12.75V11.25ZM2.75 7C2.75 4.65279 4.65279 2.75 7 2.75V1.25C3.82436 1.25 1.25 3.82436 1.25 7H2.75ZM7 2.75C9.34721 2.75 11.25 4.65279 11.25 7H12.75C12.75 3.82436 10.1756 1.25 7 1.25V2.75ZM13.8637 12.803L11.0719 10.0113L10.0113 11.0719L12.803 13.8637L13.8637 12.803Z'
					fill='#808191'
				/>
			</svg>
			<input
				type='text'
				placeholder='Search Property, Customer etc'
				className='w-full text-xs font-normal bg-transparent outline-none'
			/>
		</div>
	);
}

function User() {
	return (
		<>
			<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M2 16.5959C2 16.2151 2.15471 15.8506 2.42864 15.586L3.45759 14.5922C3.84928 14.2139 4.06977 13.6922 4.06814 13.1476L4.05867 9.9946C4.04543 5.58319 7.61789 2 12.0293 2C16.4314 2 20 5.56859 20 9.97067L20 13.1716C20 13.702 20.2107 14.2107 20.5858 14.5858L21.5858 15.5858C21.851 15.851 22 16.2107 22 16.5858C22 17.3668 21.3668 18 20.5858 18H16C16 20.2091 14.2091 22 12 22C9.79086 22 8 20.2091 8 18H3.40408C2.62863 18 2 17.3714 2 16.5959ZM10 18C10 19.1046 10.8954 20 12 20C13.1046 20 14 19.1046 14 18H10ZM18 13.1716C18 14.2324 18.4214 15.2499 19.1716 16L4.87851 16C5.64222 15.246 6.07136 14.2161 6.06813 13.1416L6.05867 9.9886C6.04875 6.6841 8.7248 4 12.0293 4C15.3268 4 18 6.67316 18 9.97067L18 13.1716Z'
					fill='#808191'
				/>
				<circle cx='18.5' cy='5.5' r='3.5' fill='#EB5757' />
			</svg>
			<div className='flex gap-[10px]'>
				<img
					src='https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/133201823_465843014409987_8378772611988159967_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FQB3W8e29PcAX_8uYe5&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfCqNUjhxuClYu2bC6J3S6qbHHvp6DDDH1sp5s0kZDIppA&oe=6544A64B'
					alt=''
					className='w-10 h-10 rounded-full'
				/>
				<div className='flex flex-col'>
					<span className='text-sm font-semibold text-[#11142D]'>Hawkins Maru</span>
					<span className='text-sm font-normal text-[#808191]'>Company Manager</span>
				</div>
			</div>
		</>
	);
}
