"use client";
import { BiSearch } from "react-icons/bi";

const SearchAgentSection = ({address, setAddress, review, setReview, onSearchHandler}) => {
    return (
        <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-bold">Some Nearby Good Agents</h1>
            <div className="flex items-center justify-between gap-10 text-lg font-semibold">
                <input 
                    className="w-full py-3 px-6 text-lg rounded-lg border"
                    placeholder="Ente your address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <select className="py-3 px-6 rounded-lg bg-white border outline-none"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                >
                    <option selected value="all">Review (all)</option>
                    <option value="4-5">4 to 5</option>
                    <option value=">3">above 3</option>
                    <option value=">2">above 2</option>
                    {/* <option value=">1">&gt; 1</option> */}
                </select>
                <button className="flex items-center gap-3 py-2 px-6 bg-black text-white rounded-lg text-lg"
                    onClick={onSearchHandler}
                >
                    <span>Search</span>
                    <BiSearch />
                </button>
            </div>
        </div>
    )
}

export default SearchAgentSection;