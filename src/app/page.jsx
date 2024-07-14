
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import FindPropertySection from "./components/dashboard/FindPropertySection";
import GetStartedSection from "./components/dashboard/GetStartedSection";
import GetStartedTwo from "./components/dashboard/GetStartedTwo";
import LearnMoreSection from "./components/dashboard/LearnMoreSection";
import PromoSection from "./components/dashboard/PromoSection";

const RelastoHome = () => {
	return (
		<main className="flex min-h-screen w-screen flex-col">
			<NavBar />
			<FindPropertySection />
			<GetStartedSection />	
			<PromoSection />
			<GetStartedTwo />
			<LearnMoreSection />
			<Footer />
		</main>
	);
}

export default RelastoHome;