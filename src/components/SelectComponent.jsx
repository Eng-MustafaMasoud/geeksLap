import { useRef, useEffect } from "react";
import vector from "../assets/Vector.png";
const SelectComponent = ({ title, img, desc, inside }) => {
	const inputRef = useRef();
	const handleClick = (e) => {
		if (inputRef.current.contains(e.target)) {
			inputRef.current.style = "border:1px solid #fff";
		} else {
			inputRef.current.style = "border:1px solid #484848";
		}
	};
	useEffect(() => {
		document.addEventListener("click", handleClick);
		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, []);
	return (
		<div>
			<div className=" flex flex-col w-full  gap-1">
				<p className="text-sm">{title}</p>
				<div
					onClick={handleClick}
					ref={inputRef}
					className=" flex justify-between w-full border border-[#484848] focus:outline-none focus:ring focus:ring-violet-300  rounded-md py-2 items-center px-2"
				>
					<div className="flex items-center gap-2  ">
						<span>
							<img src={vector} alt="vector" />
						</span>
						<input
							className=" outline-none focus:ring-0 bg-background text-sm w-full placeholder:text-sm placeholder:text-[#484848]"
							placeholder={inside}
						/>
					</div>
					<div className="cursor-pointer">
						<img src={img} alt="select" />
					</div>
				</div>
				<p className="text-[#484848] text-xs">{desc}</p>
			</div>
		</div>
	);
};

export default SelectComponent;
