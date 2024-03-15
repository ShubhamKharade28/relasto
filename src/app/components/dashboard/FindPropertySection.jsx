'use client';
import HomeImg from '@/assets/home-img.png';
import Image from "next/image";
import SearchProperty from "./SearchProperty";

function FindPropertySection() {
    return (
        <div className="orange-bg-0 w-full flex py-11 justify-between gap-10">
            <div className="w-3/5 pl-24	flex flex-col gap-8">
                <h1 className="text-4xl font-bold flex flex-col">
                    <span>Find a perfect property</span>
                    <span>Where you'll love to live</span>
                </h1>
                <h3 className="text-xl text-gray-500">We help businesses customize and scale up their ad production and delivery</h3>
                <SearchProperty />
            </div>

            <div className="w-2/5 flex items-center justify-end">
                <Image
                    src={HomeImg}
                    className="w-full h-min"
                />
            </div>
        </div>
    )
}

export default FindPropertySection;