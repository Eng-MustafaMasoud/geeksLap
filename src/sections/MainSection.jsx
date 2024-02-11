import React from "react";
import Filters from "../components/Filters";
import News from "../components/News";
const MainSection = () => {
	return (
		<main className="font-alertBody flex justify-center items-center py-8  bg-sections rounded-lg w-full  px-8  ">
			<div className="flex flex-col lg:flex-row gap-4 w-full    h-full  ">
				<div className="filter flex-[2] bg-background rounded-lg shadow-md  ">
					<Filters />
				</div>
				<div className=" flex-[4] h-full bg-background rounded-lg shadow-md   ">
					<News />
				</div>
			</div>
		</main>
	);
};

export default MainSection;
