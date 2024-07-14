import { BiDollarCircle } from "react-icons/bi";
import { BiMapPin } from "react-icons/bi";
import { PiFire, PiSmileySticker } from "react-icons/pi";

function PromoSection() {
    return (
        <div className="flex justify-between px-24 py-10 orange-bg-0">
            <PromoBlock 
                blockIcon={<BiDollarCircle />}
                title="$15.4M+" 
                description={"Owned from Properties Transactions"}
            />
            <PromoBlock 
                blockIcon={<BiMapPin />}
                title="25K+"
                description={"Properties for Buy & Sell Successfully"}
            />
            <PromoBlock 
                blockIcon={<PiFire />}
                title="500"
                description={"Daily completed transactions"}
            />
            <PromoBlock
                blockIcon={<PiSmileySticker />}
                title="600+"
                description={"Regular Clients"}
            />
        </div>
    )
}

function PromoBlock({ blockIcon, title, description }) {
    return (
        <div className="flex flex-col gap-5 w-56">
            <span className="rounded-full p-3 bg-white w-fit orange-text text-3xl font-semibold mb-3"
                style={{
                    boxShadow: '2px 15px 15px #eee'
                }}
            >{blockIcon}</span>
            <h2 className="text-4xl font-bold px-1">{title}</h2>
            <span className="text-lg font-semibold text-gray-500">
                {description}
            </span>
        </div>
    )
}

export default PromoSection