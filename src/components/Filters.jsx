import { useState, useRef, useEffect } from "react";
import SelectComponent from "./SelectComponent";
import correct from "../assets/correct.png";
import up from "../assets/up.png";
import down from "../assets/down.png";

const Filters = () => {
	const [openOptions, setOpenOptions] = useState(false);

	const inputRef = useRef(null);
	const inputRef2 = useRef(null);
	const inputRef3 = useRef(null);
	const inputRef4 = useRef(null);
	const handleClick = (e) => {
		if (inputRef.current.contains(e.target)) {
			inputRef.current.style.background = " #fff";
		} else {
			inputRef.current.style.background = " #212121";
		}
		if (inputRef2.current.contains(e.target)) {
			inputRef2.current.style.background = " #fff";
		} else {
			inputRef2.current.style.background = " #212121";
		}
		if (inputRef3.current.contains(e.target)) {
			inputRef3.current.style.background = " #fff";
		} else {
			inputRef3.current.style.background = " #212121";
		}
		if (inputRef4.current.contains(e.target)) {
			inputRef4.current.style.background = " #fff";
			inputRef4.current.style.color = " #484848";
		} else {
			inputRef4.current.style.background = " #212121";
			inputRef4.current.style.color = " #fff";
		}
	};
	useEffect(() => {
		document.addEventListener("click", handleClick);
		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, []);
	return (
		<section className="font-filters w-full py-6 px-4 flex flex-col  gap-8">
			<div className="text-center">
				<h2 className="text-xl font-medium">Filters</h2>
			</div>
			<div className=" flex flex-col  gap-8">
				<SelectComponent
					title={"industry"}
					desc={"choose something"}
					inside={"Health care"}
					img={down}
				/>
				<SelectComponent
					title={"Market cap"}
					desc={"press Apply to see the changes"}
					inside={"Large-cap"}
					img={down}
				/>
				<div className="">
					<div className="" onClick={() => setOpenOptions(!openOptions)}>
						<SelectComponent
							title={"Risk"}
							inside={"insert text here"}
							img={`${openOptions ? up : down} `}
						/>
					</div>
					{openOptions && (
						<div className="w-full border border-[#fff] flex flex-col gap-4 p-1 rounded-md">
							{" "}
							<p
								onClick={handleClick}
								ref={inputRef}
								className="flex items-center w-full gap-2 py-1 rounded-md text-[#484848]"
							>
								<img src={correct} alt="" />
								Low risk{" "}
							</p>{" "}
							<p
								onClick={handleClick}
								ref={inputRef2}
								className="flex items-center w-full gap-2 py-1 rounded-md  text-[#484848]"
							>
								<img src={correct} alt="" />
								Mid risk risk{" "}
							</p>{" "}
							<p
								onClick={handleClick}
								ref={inputRef3}
								className="flex items-center w-full gap-2 py-1 rounded-md text-[#887EFF]"
							>
								<img src={correct} alt="" />
								High risk{" "}
							</p>
							<p
								ref={inputRef4}
								onClick={handleClick}
								className="flex items-center w-full gap-2 text-[#fff] py-1 rounded-md"
							>
								<img src={correct} alt="" />
								Option text here{" "}
							</p>
						</div>
					)}
				</div>
				<button className="text-center w-full py-4 bg-[#887EFF] rounded-md ">
					Apply Filters
				</button>
			</div>
		</section>
	);
};

export default Filters;
