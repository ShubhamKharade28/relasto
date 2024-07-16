"use client";

import { useEffect, useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { HiSelector } from 'react-icons/hi';
import { motion } from 'framer-motion';

function SearchProperty() {
	const [purposeIdx, setPurposeIdx] = useState(1);
	const [propertyType, setPropertyType] = useState('');
	const [priceRanges, setPriceRanges] = useState([]);
	const [priceRange, setPriceRange] = useState('');

	const allPropertyTypes = ['Resident Property', 'Commercial Property', 'Industrial Property', 'Agriculture Property'];
	const allPriceRanges = [
		['Under $200,000', '$200,000 - $500,000', '$500,000 - $1,000,000', 'Over $1,000,000'],
		['Under $1,000,000', '$1,000,000 - $5,000,000', 'Over $5,000,000'],
		['Under $500,000', '$500,000 - $2,000,000', 'Over $2,000,000'],
		['Under $100,000', '$100,000 - $500,000', 'Over $500,000']
	];

	useEffect(() => {
		if(propertyType){
			console.log(propertyType);
			console.log(allPropertyTypes);
			let idx = allPropertyTypes.findIndex(type => type == propertyType);
			if(idx === -1) setPriceRanges([]);
			setPriceRanges(allPriceRanges[idx]);
			setPriceRange('');
		}
	}, [propertyType])

	return (
		<div
			className="w-4/5 p-5 flex flex-col rounded-xl bg-white text-lg gap-5"
			style={{
				boxShadow: "0px 0px 3px #aaa",
			}}
		>
			<div className="w-full flex items-center justify-between text-center gap-3 font-semibold mb-3">
				<span
					className={`${purposeIdx == 1 ? 'bg-black text-white' : 'bg-gray-300 text-black'} cursor-pointer rounded-lg w-full py-3`}
					onClick={() => setPurposeIdx(1)}
				>Buy</span>
				<span
					onClick={() => setPurposeIdx(2)}
					className={`${purposeIdx == 2 ? 'bg-black text-white' : 'bg-gray-300 text-black'} cursor-pointer rounded-lg w-full py-3`}
				>Sell</span>
				<span
					className={`${purposeIdx == 3 ? 'bg-black text-white' : 'bg-gray-300 text-black'} cursor-pointer rounded-lg w-full py-3`}
					onClick={() => setPurposeIdx(3)}
				>Rent</span>
			</div>
			<div className="flex flex-col gap-4 w-full">
				<span className="flex justify-between items-center py-3 px-5 text-gray-500 border border-gray-300 rounded-lg">
					<span>City/Street</span>
					<CiLocationOn />
				</span>
				<CustomSelect 
					selectTitle="Property Type"
					selectList={allPropertyTypes}
					setValue={setPropertyType}
					value={propertyType}
				/>
				<CustomSelect 
					selectTitle="Property Range"
					selectList={priceRanges}
					setValue={setPriceRange}
					value={priceRange}
				/>
			</div>
			<button className="w-full rounded-lg bg-black hover:bg-gray-900 text-white py-3 font-semibold">
				Search
			</button>
		</div>
	);
}

function CustomSelect({selectTitle, selectList, value, setValue}){
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="flex justify-between items-center relative py-3 px-4 border border-gray-300 rounded-lg select-none cursor-pointer"
			onClick={() => {setIsOpen(!isOpen)}}

		>
			<input placeholder={selectTitle} value={value}
				className="outline-none placeholder:text-gray-500 text-black" 
			/>
			<HiSelector className={value ? 'text-black': 'text-gray-700'}/>
			{	isOpen &&
				<motion.ul className="flex flex-col w-full absolute bg-white rounded-lg top-14 left-0 overflow-hidden z-10"
					style={{
						boxShadow: "0px 0px 3px #aaa",
					}}
					initial={{
						y: -10,
						opacity: 0.7
					}}
					animate={{
						y: 5,
						opacity: 1,
						transition:{
							duration: 0.3,
							type: "spring"
						}
					}}
				>
				{selectList && selectList.map((item) => (
					<li
						className="px-4 py-2 w-full text-base hover:bg-gray-100 cursor-pointer"
						onClick={() => {
							setValue(item);
						}}
					>{item}</li>
				))}
				</motion.ul>
			}
		</div>
	);
}

export default SearchProperty;
