import Image from "next/image";
import NavBar from "@/app/components/NavBar";
import aboutusTopImg from '@/assets/aboutus-top.jpg';
import PromoSection from "@/app/components/dashboard/PromoSection";
import NoteFromFounders from "@/app/components/aboutus/NoteFromFounders";
import OurVision from "@/app/components/aboutus/OurVision";
import RelastoTeamMembers from "@/app/components/aboutus/RelastoTeam";
import Footer from "@/app/components/Footer";

const AboutUs = () => {
    return (
        <main className="w-screen min-h-screen flex flex-col">
            <NavBar />
            <heading className="flex flex-col gap-6 text-center pt-20">
                <span className="text-5xl font-bold ">
                    Reimagining real estate to <br/> make it easier to unlock
                </span>
                <span className="text-gray-600">
                    On the other hand, we denounce with righteous indignation and dislike men who <br/>
                    are so beguiled and demoralized by the charms of pleasure of the moment, <br/>
                    so blinded by desire, that they cannot foresee the pain and trouble.
                </span>
            </heading>
            <div className="px-24 py-7 mb-10">
                <Image src={aboutusTopImg} className="w-full h-auto"/>
            </div>
            <PromoSection />
            <NoteFromFounders />
            <OurVision />
            <RelastoTeamMembers/>
            <Footer/>
        </main>
    )
}

export default AboutUs;