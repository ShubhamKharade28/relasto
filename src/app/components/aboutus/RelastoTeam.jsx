
import Image from 'next/image';

import member1 from "@/assets/team-members/member-1.jpg";
import member2 from "@/assets/team-members/member-2.jpg";
import member3 from "@/assets/team-members/member-3.jpg";
import member4 from "@/assets/team-members/member-4.jpg";
import member5 from "@/assets/team-members/member-5.jpg";
import member6 from "@/assets/team-members/member-6.jpg";
import member7 from "@/assets/team-members/member-7.jpg";
import member8 from "@/assets/team-members/member-8.jpg";
import member9 from "@/assets/team-members/member-9.jpg";
import member10 from "@/assets/team-members/member-10.jpg";
import member11 from "@/assets/team-members/member-11.jpg";
import member12 from "@/assets/team-members/member-12.jpg";

const members = [
    {
        name: 'Kausar Pial',
        role: 'CEO',
        photo: member1,
    },{
        name: 'Floyd Miles',
        role: 'President of Sales',
        photo: member2,
    },{
        name: 'Darlene Robertson',
        role: 'Marketing Coordinator',
        photo: member3,
    },{
        name: 'Guy Hawkins',
        role: 'Marketing Coordinator',
        photo: member4,
    },{
        name: 'Jerome Bell',
        role: 'Marketing Coordinator',
        photo: member5,
    },{
        name: 'Ralph Edwards',
        role: 'Marketing Coordinator',
        photo: member6,
    },{
        name: 'Arlene McCoy',
        role: 'Marketing Coordinator',
        photo: member7,
    },{
        name: 'Devone Lane',
        role: 'Marketing Coordinator',
        photo: member8,
    },{
        name: 'Courtney Henry',
        role: 'Marketing Coordinator',
        photo: member9,
    },{
        name: 'Bessie Cooper',
        role: 'Marketing Coordinator',
        photo: member10,
    },{
        name: 'Cody Fisher',
        role: 'Marketing Coordinator',
        photo: member11,
    },{
        name: 'Cody Fisher',
        role: 'Marketing Coordinator',
        photo: member12,
    },
];

const RelastoTeamMembers = () => {
    return (
        <div className="px-24 py-10 flex flex-col items-center gap-12">
            <h2 className="text-4xl font-semibold">Relasto Team Members</h2>
            <grid className="grid grid-cols-4 w-full gap-x-8 gap-y-10">
            {
                members.map((member) => (
                    <div className="flex flex-col gap-3 w-full">
                        <Image 
                            className="w-full h-full object-cover rounded-lg"
                            src={member.photo}
                        />
                        <div className="text-xl flex flex-col gap-1">
                            <span className="font-semibold">{member.name}</span>
                            <span className="font-light">{member.role}</span>
                        </div>
                    </div>
                ))
            }
            </grid>
        </div>
    );
}

export default RelastoTeamMembers;