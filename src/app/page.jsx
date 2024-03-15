
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import FindPropertySection from "./components/dashboard/FindPropertySection";
import GetStartedSection from "./components/dashboard/GetStartedSection";
import PromoSection from "./components/dashboard/PromoSection";

const RelastoHome = () => {
	return (
		<main className="flex min-h-screen w-screen flex-col">
			<NavBar />
			<FindPropertySection />
			<GetStartedSection />	
			<PromoSection />
				
			<Footer />
		</main>
	);
}

export default RelastoHome;