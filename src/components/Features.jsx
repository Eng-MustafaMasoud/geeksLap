import React from "react";

const Features = () => {
	return (
		<div className=" w-full bg-sections py-4 rounded-lg">
			<div className="features w-full place-items-center  text-2xl font-bold  text-[#484848] gap-4   justify-center">
				<span className="a border-[#484848]  w-full items-center flex flex-col justify-center">
					<p className="text-[7px] tracking-widest bg-[#9089DC] text-[#d9d8e3] font-[300] h-3 w-14 justify-center items-center flex rounded-full ">
						coming soon
					</p>
					Trading
				</span>
				{/* <span className="w-[2px] h-[30px] bg-[#484848]" /> */}
				<span className="b border-l-2 border-[#484848]  w-full items-center flex justify-center flex-col">
					<p className="text-[7px] tracking-widest bg-[#9089DC] text-[#d9d8e3] font-[300] h-3 w-14 justify-center items-center flex rounded-full ">
						coming soon
					</p>
					Automation
				</span>

				<span className="c border-l-2 border-[#484848]  w-full items-center flex justify-center flex-col">
					<p className="text-[7px] tracking-widest bg-[#9089DC] text-[#d9d8e3] font-[300] h-3 w-14 justify-center items-center flex rounded-full ">
						coming soon
					</p>
					Portfolio
				</span>

				<p className="e text-white border-l-2 border-[#484848]   w-full items-center flex justify-center">
					Alerts
				</p>

				<p className="f w-full  border-l-2 border-[#484848] items-center flex justify-center">
					Training
				</p>
			</div>
		</div>
	);
};

export default Features;
