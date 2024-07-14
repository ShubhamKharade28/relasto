'use client';

import Link from "next/link";
import Image from "next/image";
import learnMoreImg from '@/assets/learn-more.jpg';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";

const LearnMoreSection = () => {
    return (
        <section className="px-24 py-20 w-full flex items-center justify-between orange-bg-0">
            <motion.div className="w-full"
                initial={{x: -100,opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{
                    duration: 0.7,
                    type: 'spring',
                    damping: 20,
                }}
            >
                <Image 
                    src={learnMoreImg} className=" w-11/12 rounded-lg"
                    style={{boxShadow: '-30px 30px #fc650a',}}
                />
            </motion.div>
            <motion.div className="flex flex-col gap-8 w-full pl-24"
                initial={{x: 100, opacity:0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{
                    duration:0.7,
                    type: 'spring',
                    damping:20,
                    delay: 0.5,
                }}
            >
                <h1 className="text-4xl font-bold">Best rated host on popular <br/> rental sites</h1>
                <span className="text-gray-700 opacity-90 text-lg">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, in? At consequuntur distinctio sequi quo doloribus. Tenetur non reprehenderit sint eveniet.
                </span>
                <div className="flex flex-col gap-2">
                    <span className="flex gap-2 items-center font-semibold text-lg">
                        <IoIosCheckmarkCircleOutline className="text-xl"/>
                        <p>Find Excellent Deals</p>
                    </span>
                    <span className="flex gap-2 items-center font-semibold text-lg">
                        <IoIosCheckmarkCircleOutline className="text-xl"/>
                        <p>Friendly host & Fast support</p>
                    </span>
                    <span className="flex gap-2 items-center font-semibold text-lg">
                        <IoIosCheckmarkCircleOutline className="text-xl"/>
                        <p>Secure payment system</p>
                    </span>
                </div>
                <Link href="#" 
                    className="py-3 px-6 black-btn w-fit rounded-lg mt-8"
                >
                    Learn More
                </Link>
            </motion.div>
        </section>
    )
}

export default LearnMoreSection;