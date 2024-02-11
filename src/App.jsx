import Header from "./sections/Header";
import MainSection from "./sections/MainSection";
import Footer from "./sections/Footer";

function App() {
	return (
		<div className="max-w-7xl mx-auto flex flex-col px-6 h-full  gap-4 ">
			<Header />
			<MainSection />
			<Footer />
		</div>
	);
}

export default App;
