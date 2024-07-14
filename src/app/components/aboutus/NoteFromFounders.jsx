
import NoteFromFoundersImg from '@/assets/note-from-founders.jpg';
import Image from 'next/image';

const NoteFromFounders = () => {
    return (
        <div className="px-24 py-24 flex flex-col gap-4">
            <h4 className="text-4xl font-bold">A note from our founders</h4>
            <span className="text-gray-600">
                Lorem ipsum is simply dummy text of the printing and <br/>
                typescripting industry: in a free hour,
            </span>
            <div className="w-full flex justify-between">
                <section className="w-full flex flex-col gap-10 my-5 pr-10">
                    <div className="flex gap-3 w-full">
                        <span className="text-lg font-bold flex items-center justify-center rounded-full h-8 w-8 border-2 border-black">1</span>
                        <span className="flex flex-col gap-2 w-full px-4">
                            <h3 className="text-2xl font-semibold">It all started in 1995</h3>
                            <span className="text-gray-500 text-lg w-fit">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati ullam nulla voluptate soluta vel maxime labore deserunt voluptates impedit autem, ea reprehenderit officia rem tempora similique quam, sapiente, cupiditate ipsa.</span>
                        </span>
                    </div>
                    <div className="flex gap-3 w-full">
                        <span className="text-lg font-bold flex items-center justify-center rounded-full h-8 w-8 border-2 border-black">2</span>
                        <span className="flex flex-col gap-2 w-full px-4">
                            <h3 className="text-2xl font-semibold">Donate launches in 2007</h3>
                            <span className="text-gray-500 text-lg w-fit">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati ullam nulla voluptate soluta vel maxime labore deserunt voluptates impedit autem, ea reprehenderit officia rem tempora similique quam, sapiente, cupiditate ipsa.</span>
                        </span>
                    </div>
                    <div className="flex gap-3 w-full">
                        <span className="text-lg font-bold flex items-center justify-center rounded-full h-8 w-8 border-2 border-black">3</span>
                        <span className="flex flex-col gap-2 w-full px-4">
                            <h3 className="text-2xl font-semibold">Relasto holds its initial public offering in 2008</h3>
                            <span className="text-gray-500 text-lg w-fit">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati ullam nulla voluptate soluta vel maxime labore deserunt voluptates impedit autem, ea reprehenderit officia rem tempora similique quam, sapiente, cupiditate ipsa.</span>
                        </span>
                    </div>
                </section>
                <section className="w-2/3 flex items-center justify-center">
                    <Image
                        src={NoteFromFoundersImg} 
                        className="w-full h-auto rounded-xl"
                    />
                </section>
            </div>
        </div>
    );
}

export default NoteFromFounders;