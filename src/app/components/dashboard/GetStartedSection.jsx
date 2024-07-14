"use client";

import { RiEmotionHappyLine, RiMenuSearchLine } from 'react-icons/ri';
import { FaRegEye } from 'react-icons/fa';
import { IoWalletOutline } from "react-icons/io5";
import { motion } from 'framer-motion';

function GetStartedSection() {
    return (
        <div className="px-24 flex gap-10 py-20">
            <div className="flex flex-col items-start h-full w-1/2 gap-8 px-10 py-12 orange-bg-2 rounded-2xl">
                <h1 className="text-4xl font-bold">
                    Simple & easy way to find your dream Appointment
                </h1>
                <span className="text-lg text-gray-800">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
                    illum vero illo deleniti.
                </span>
                <button className="bg-black hover:bg-gray-900 text-white py-3 px-5 rounded-lg my-4">
                    Get Started
                </button>
            </div>
            <div className="w-1/2 grid grid-cols-2 gap-10 text-2xl font-bold">
                <motion.div 
                    className="w-full h-full cursor-pointer orange-bg-1 hover-scale rounded-2xl flex flex-col justify-center px-6 gap-4"
                    initial={{x: 20, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{
                        duration: 0.2,
                        type: 'spring',
                        delay: 0,
                    }}
                >
                    <RiMenuSearchLine size={31} color="#fd650b" />
                    <span>
                        Search <br /> your location
                    </span>
                </motion.div>
                <motion.div 
                    className="w-full h-full cursor-pointer orange-bg-1 hover-scale rounded-2xl flex flex-col justify-center px-6 gap-4"
                    initial={{x: 40, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{
                        duration: 0.2,
                        type: 'spring',
                        delay: 0.2,
                    }}
                >
                    <FaRegEye size={31} color="#fd650b" />
                    <span>
                        Visit <br /> Appointment
                    </span>
                </motion.div>
                <motion.div 
                    className="w-full h-full cursor-pointer orange-bg-1 hover-scale rounded-2xl flex flex-col justify-center px-6 gap-4"
                    initial={{x: 60, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{
                        duration: 0.2,
                        type: 'spring',
                        delay: 0.3
                    }}
                >
                    <IoWalletOutline size={31} color="#fd650b" />
                    <span>
                        Get your <br /> dream house
                    </span>
                </motion.div>
                <motion.div
                    className="w-full h-full cursor-pointer orange-bg-1 hover-scale rounded-2xl flex flex-col justify-center px-6 gap-4"
                    initial={{x: 80, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{
                        duration: 0.2,
                        type: 'spring',
                        delay: 0.4
                    }}
                >
                    <RiEmotionHappyLine size={31} color="#fd650b" />
                    <span>
                        Enjoy your <br /> Appointment
                    </span>
                </motion.div>
            </div>
        </div>
    );
}

export default GetStartedSection;
