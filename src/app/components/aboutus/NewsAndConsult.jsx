"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import news1 from '@/assets/news/news1.jpg';
import news2 from '@/assets/news/news2.jpg';
import news3 from '@/assets/news/news3.jpg';

const articles = [
    {
        thumbnail: news1,
        title: '9 Easy-to-Ambitious DIY Projects to Improve Your Home',
    },{
        thumbnail: news2,
        title: 'Serie Shophouse Launch in July, Opportunity For Investors',
    },{
        thumbnail: news3,
        title: 'Looking for a New Place? Use This Time to Create Your Wishlist',
    }
]

const NewsAndConsult = () => {
    const [email, setEmail] = useState('');
    
    return (
    <div className="bg-[#191919] px-24 py-24 flex flex-col gap-16">
        <span className="flex justify-between items-end px-5">
            <h2 className="text-white text-4xl font-semibold">News & Consult</h2>
            <h4 className="orange-text-1 text-lg font-semibold">Explore All &#8594;</h4>
        </span>

        <div className="flex gap-10 justify-between px-4">
        {
            articles.map((article) => (
                <div className="h-full w-full flex flex-col gap-5">
                    <Image 
                        src={article.thumbnail}
                        className="h-76 w-auto cover rounded-lg"
                    />
                    <h4 className="text-white text-xl font-semibold">{article.title}</h4>
                    <Link href="#" className="orange-text-1 text-lg font-semibold">Read the Article &#8594;</Link>
                </div>
            ))
        }
        </div>
        
        <div className="bg-[#c0c0c0] flex flex-col items-center py-10 gap-3 rounded-lg mt-16">
            <h3 className="text-3xl font-bold">For Recent Update, News.</h3>
            <h6 className="text-center text-xl">We helps businesses customize, automate and scale up their ad <br/> production and delivery.</h6>
            <span className="w-1/2 flex gap-3 mt-6">
                <input
                    placeholder="Enter your Email"
                    className="w-full py-3 px-4 rounded-lg"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className="bg-[#191919] text-white px-4 rounded-lg">Subscribe</button>
            </span>
        </div>
    </div>
    );
}

export default NewsAndConsult;