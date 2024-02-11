import React from "react";
import Navbar from "../components/Navbar";
import Features from "../components/Features";

const Header = () => {
	return (
		<header className="font-heading ">
			<Navbar />
			<Features />
		</header>
	);
};

export default Header;
