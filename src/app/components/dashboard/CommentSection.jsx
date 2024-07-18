'use client';
import TaylorPhoto from '@/assets/taylor.png';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

const comments = [
    {
      name: 'Taylor Wilson',
      role: 'Product Manager - Static Mania',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi error alias neque ipsum! Quos excepturi hic earum dolores quaerat. Quaerat incidunt illo iure pariatur.',
      photo: TaylorPhoto,
    },
    {
      name: 'Alex Johnson',
      role: 'Developer - Tech Innovators',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.',
      photo: TaylorPhoto,
    },
    // Add more comment objects as needed
  ];

const variants = {
    enter: (direction) => ({
        x: direction > 0 ? 600 : -600,
        opacity: 1,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction) => ({
        x: direction < 0 ? 600 : -600,
        opacity: 1,
    }),
};
16
const CommentSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex+1) % comments.length);
    }
    
    const handlePrevious = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => ((prevIndex - 1 + comments.length) % comments.length));
    }

    const currentComment = comments[currentIndex];

    return (
    <div className="px-24 py-10">
        <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="flex justify-center gap-16"
        >
            <Image  
                src={TaylorPhoto}
                className="w-1/3 h-auto cover rounded-lg"
            />
            <div className="flex flex-col gap-7 w-1/3">
                <span className="flex flex-col gap-3">
                    <h3 className="text-2xl font-bold text-gray-900">{currentComment.name}</h3>
                    <h5 className="text-lg text-gray-800 font-semibold">{currentComment.role}</h5>
                </span>
                <span className="text-2xl text-gray-700">
                    {currentComment.text}
                </span>
                <span className="flex justify-between w-full text-xl font-semibold">
                    <button className="text-gray-600" onClick={handlePrevious}>&larr; Previous</button>
                    <button className="orange-text" onClick={handleNext}>Next &rarr;</button>
                </span>
            </div>  
        </motion.div>
    </div>
    )
}

export default CommentSection;