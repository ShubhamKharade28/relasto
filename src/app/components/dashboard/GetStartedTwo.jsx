'use client';
import getStartedTwoImg from '@/assets/get-started-two.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const GetStartedTwo = () => {
    return (
        <div className="w-full flex items-center px-24 py-20 orange-bg-0 justify-between mt-10">
            <motion.div 
                initial={{x: -100,opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{
                    duration: 0.7,
                    type: 'spring',
                    damping: 20,
                    delay: 0.5,
                }}
                className="flex flex-col gap-8 w-full">
                <h2 className="text-4xl font-bold">Simple & easy way to find your <br/> dream Appointment</h2>
                <p className="text-gray-700 opacity-90 text-lg">
                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga eveniet distinctio ut, obcaecati aliquam nulla rerum consectetur inventore ipsam alias quo consequatur accusamus enim reiciendis minus animi iusto quis harum?
                </p>
                <Link href="#" 
                    className="py-3 px-6 black-btn font-semibold w-fit rounded-lg mt-8"
                >
                    Get Started
                </Link>
            </motion.div>
            <motion.div className="w-full pl-24"
                initial={{x: 100, opacity:0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{
                    duration:0.7,
                    type: 'spring',
                    damping:20,
                }}
            >
                <Image src={getStartedTwoImg} className="w-full h-auto"/>
            </motion.div>
        </div>
    );
}

export default GetStartedTwo;