
import OurVisionImg from '@/assets/simple-vision.jpg';
import Image from 'next/image';

const OurVision = () => {
    return (
        <div className="px-24 py-24 w-full flex justify-between items-center">
            <section className="w-2/3">
                <Image 
                    src={OurVisionImg}
                    alt="OurVision"
                    className="w-full h-auto rounded-xl"
                />
            </section>
            <section className="w-full px-24 flex flex-col gap-10">
                <h2 className="font-bold text-5xl">Our vision is simple</h2>
                <span className="text-xl font-light text-gray-600">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt repellat eaque ullam molestiae, nihil odit cum alias ad dolorem enim et omnis nulla consequuntur quis necessitatibus autem quos dolor eum.
                    Aspernatur perferendis, amet debitis eius tempora aliquid dolor et nobis provident doloribus quia eum.
                    <br /><br />
                    Quod repellendus ad ducimus a maxime assumenda corporis sint aut. Illum hic sint molestiae dignissimos accusantium!
                </span>
                <span className="text-xl">
                    <h4 className="font-semibold">Kausar Pial</h4>
                    <span className="text-gray-600 font-light">CEO at Static Mania</span>
                </span>
            </section>
        </div>
    )
}

export default OurVision;