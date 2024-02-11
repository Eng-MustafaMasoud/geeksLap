import React from "react";
import ticker from "../assets/ticker.png";
import risk from "../assets/risk.png";
import volume from "../assets/volume.png";
import contract from "../assets/contract.png";
const News = () => {
	return (
		<section className="w-full p-2 flex justify-start  ">
			<div className=" flex flex-col w-full gap-4 ">
				<div
					className="flex w-full justify-between  bg-gradient-to-r from-[#667eea00] to-[#764ba224] bg-no-repeat   items-center  md:px-4 
] rounded-md max-md:text-sm flex-col gap-4 py-4 border-2 border-[#484848]   "
				>
					<div className=" news w-full  items-center h-full ">
						<span className=" flex items-center gap-2 w-full  justify-center  max-md:justify-between border-r border-[#484848] max-md:flex-col h-full">
							<img src={ticker} alt="" className="w-6 h-6" />
							<p className="uppercase">$tsla</p>
						</span>
						<span className=" flex items-center gap-2 w-full   justify-center max-lg:justify-between border-r border-[#484848] max-md:flex-col h-full">
							<img src={contract} alt="" className="w-6 h-6" />
							<p className="text-center">200 Contarcts</p>
						</span>
						<span className=" flex items-center gap-2 w-full   justify-center max-lg:justify-between border-r border-[#484848] max-md:flex-col h-full">
							<img src={volume} alt="" className="w-6 h-6" />
							<p>12.2%</p>
						</span>
						<span className=" flex items-center gap-2 w-full   justify-center max-lg:justify-between  max-md:flex-col h-full">
							<img src={risk} alt="" className="w-6 h-6" />
							<p className="text-center">High risk</p>
						</span>
					</div>
					<p className="max-md:px-4">
						Someone Just bought xxxx contracts of $XYZ, this is notable because
						the relative volume on this options trade is X.X%.
					</p>
				</div>
				<div className=" flex flex-col gap-4">
					<p className="border rounded-md p-4">
						Someone Just bought xxxx contracts of $XYZ, this is notable because
						the relative volume on this options trade is X.X%.
					</p>
					<p className="border rounded-md p-4">
						Someone Just bought xxxx contracts of $XYZ, this is notable because
						the relative volume on this options trade is X.X%.
					</p>
					<p className="border rounded-md p-4">
						Someone Just bought xxxx contracts of $XYZ, this is notable because
						the relative volume on this options trade is X.X%.
					</p>
					<p className="border rounded-md p-4">
						Someone Just bought xxxx contracts of $XYZ, this is notable because
						the relative volume on this options trade is X.X%.
					</p>
					<p className="border rounded-md p-4">
						Someone Just bought xxxx contracts of $XYZ, this is notable because
						the relative volume on this options trade is X.X%.
					</p>
				</div>
			</div>
		</section>
	);
};

export default News;
