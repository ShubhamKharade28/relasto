
import { GoPerson } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { SlPhone } from "react-icons/sl";

const SendMessage = () => {
    return (
        <div className="flex flex-col gap-3 w-full">
            <h3 className="text-2xl font-semibold mb-2">Send a message</h3>
            <InputField 
                label="Full Name"
                icon={<GoPerson />}
            />
            <InputField 
                label="Email Address"
                type="email"
                icon={<MdOutlineEmail />}
            />
            <InputField 
                label="Phone Number"
                icon={<SlPhone />}
            />
            <textarea placeholder="Message" 
                className="outline-none px-4 py-2 rounded-lg border border-gray-300 w-full placeholder-gray-500"
                rows="4"
            />
            <button className="black-btn py-2 rounded-lg mt-8 text-sm">Send Request</button>
        </div>
    )
}

const InputField = ({label, type="text", icon}) => {
    return (
        <span className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg w-full border border-gray-300 ">
            {icon}
            <input type={type} placeholder={label} 
                className="outline-none placeholder-gray-500"
            />
        </span>
    )
}

export default SendMessage;