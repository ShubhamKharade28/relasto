import Image from "next/image";
import { LiaCopyrightSolid } from "react-icons/lia";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineLinkedin } from "react-icons/ai";
import { SlSocialTwitter } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import { PiYoutubeLogo } from "react-icons/pi";

import TitledLogo from '@/assets/titled-logo.png';
import Link from "next/link";

function Footer() {
	return (
		<footer className="w-full flex-col bg-white justify-around px-24 py-24">
			<div className="w-full flex justify-between">
				<div className="flex flex-col gap-7 justify-between text-[#222] ">
					<Image src={TitledLogo} alt="logo" className="w-32 h-auto my-5"/>
					<span className="font-semibold">
						59 Bervely Hill Ave, Brooklyn Town, <br/>
						New York, NY 5630, CA, US
					</span>
					<span className="font-semibold">
						+(123) 456-7890 <br/>
						info@gmail.com	
					</span>
					<span className="flex gap-4 text-2xl font-bold orange-text">
						<Link href="#" className="hover:scale-90 transition-all duration-300 ease"><CiFacebook /></Link>
						<Link href="#" className="hover:scale-90 transition-all duration-300 ease"><SlSocialTwitter/></Link>
						<Link href="#" className="hover:scale-90 transition-all duration-300 ease"><FaInstagram /></Link>
						<Link href="#" className="hover:scale-90 transition-all duration-300 ease"><AiOutlineLinkedin/></Link>
						<Link href="#" className="hover:scale-90 transition-all duration-300 ease"><PiYoutubeLogo/></Link>
					</span>
				</div>
				<div className="flex w-full items-start justify-between px-20 py-10">
					<List 
						title={"Features"}
						items={['Home v1', 'Home v2', 'About', 'Contact', 'Search']}
					/>
					<List
						title={"Information"}
						items={['Listing v1', 'Listing v2', 'Property Details', 'Agent List', 'Agent Profile']}
					/>
					<List
						title={"Documentation"}
						items={['Blog', 'FAQ', 'Privacy Policy', 'Licence']}
					/>
					<List
						title={"Others"}
						items={['Log in', 'Enter OTP', 'New Password', 'Reset Password', 'Create Account']}
					/>
				</div>
			</div>
			<div className="flex items-center font-semibold mt-20 text-[#222]">
			  	<LiaCopyrightSolid />
				<span>2024. All rights reserved</span>
			</div>
		</footer>
	);
}

function List({title, items}){
	return (
		<ul className="flex flex-col gap-5 text-[#222]">
			<h4 className="text-xl font-bold">{title}</h4>
			{items.map((item) => 
			<li className="font-semibold hover:opacity-70" key={item}>
				<Link href="#">{item}</Link>
			</li>)}
		</ul>
	)
}

export default Footer;