
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SendMessage from "../components/contact/SendMessage";
import OfficeAddress from "../components/contact/OfficeAddress";

const ContactPage = () => {
    return (
        <main className="flex flex-col w-screen min-h-screen">
            <NavBar />
            <div className="w-full flex flex-col items-center gap-6 px-24 py-16 orange-bg-0">
                <h1 className="text-4xl font-bold">Get in touch</h1>
                <p className="text-gray-600 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolorum, enim sunt amet consequuntur consequatur a fuga debitis aperiam ipsa consectetur tempora culpa, veniam officiis incidunt labore fugiat doloribus dicta.
                </p>
                <section
                    className="w-full h-max flex justify-between gap-5 bg-white py-10 px-14 rounded-lg mt-10"
                    style={{
                        boxShadow: "0px 0px 3px #aaa",
                    }}
                >
                    <SendMessage />
                    <divider className="rounded-2xl overflow-hidden w-px mx-10 h-[30rem] self-center bg-gray-300"></divider>
                    <OfficeAddress />
                </section>
            </div>
            <Footer />
        </main>
    )
}

export default ContactPage;