
import Image from "next/image";
import Link from "next/link";

const AgentCard = ({agent}) => {
    const {id, name, photo, review} = agent;
    return (
        <div className="w-full flex flex-col border shadow-lg rounded-lg overflow-hidden">
            <Image 
                src={photo}
                className="w-full h-72 object-cover border"
            />
            <div className="flex flex-col py-3 px-4 gap-2">
                <span className="text-2xl font-semibold">{name}</span>
                <span className="text-lg">Review <b>{review}</b></span>
                <Link 
                    href={`/agents/profile?id=${id}&name=${name}`}
                    className="border hover:shadow font-semibold hover:font-normal w-full p-2 text-center rounded-lg"
                >View Profile</Link>
            </div>
        </div>
    )
}

export default AgentCard;