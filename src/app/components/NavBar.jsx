'use client';

import TitledLogo from '@/assets/titled-logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { IoSearch } from 'react-icons/io5';

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center py-3 px-24 font-semibold">
		<Image 
			src={TitledLogo}
			alt="relasto"
			className="h-10 w-auto"
		/>
		<ul className="flex items-center gap-10">
			<li>Home</li>
			<li>Listing</li>
			<li>Agents</li>
			<li>Property</li>
			<li>Blog</li>
		</ul>
		<div className="flex gap-8">
			<Link className="flex items-center gap-2 text-lg"
				href="#"
			>
				<IoSearch />
				<span>Search</span>
			</Link>
			<Link className="bg-black text-white px-5 py-2 rounded-lg"
				href="#"
			>Login</Link>
		</div>
	</nav>
  );
};

export default NavBar;