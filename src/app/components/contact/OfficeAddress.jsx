
import { MdOutlineEmail } from "react-icons/md";
import { SlPhone } from "react-icons/sl";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineLinkedin } from "react-icons/ai";
import { SlSocialTwitter } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import { PiYoutubeLogo } from "react-icons/pi";

import Link from 'next/link';

const OfficeAddress = () => {
    return (
        <div className="flex flex-col w-full gap-10">
            <div className="flex flex-col text-sm gap-3 text-gray-700">
                <h4 className="text-lg font-bold text-gray-800">Office Address</h4>
                <span>1421 San Pedro St, Los Angeles <br/> CA 90015s</span>
                <div className="flex items-center gap-2">
                    <SlPhone />
                    <span>(123) 456-7890</span>
                </div>
                <div className="flex items-center gap-2">
                    <MdOutlineEmail />
                    <span>info@mail.com</span>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <h4 className="text-lg font-bold text-gray-800">Social</h4>
                <span className="flex gap-4 items-center text-2xl text-gray-600">
                    <Link href="#"><CiFacebook /></Link>
                    <Link href="#"><AiOutlineLinkedin /></Link>
                    <Link href="#"><SlSocialTwitter /></Link>
                    <Link href="#"><PiYoutubeLogo /></Link>
                </span>
            </div>
        </div>
    )
}

export default OfficeAddress;