import { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";
import logoCrop from "../assets/logoCrop.png";
import search from "../assets/search.png";
import alert from "../assets/notification.png";
import profile from "../assets/profile.png";
import more from "../assets/More.png";

const Navbar = () => {
	const [openSearch, setOpenSearch] = useState(false);

	const searchRef = useRef(null);
	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	const handleClickOutside = (event) => {
		if (searchRef.current && !searchRef.current.contains(event.target)) {
			setOpenSearch(false);
		}
	};
	return (
		<nav className="h-[71px] flex w-full relative my-2 ">
			<div className="flex items-center justify-between w-full gap-2 ">
				<div className="  h-[71px] lg:w-[430px] w-[220px] item-center justify-center sm:block hidden ">
					<img
						src={logo}
						alt="logo"
						title="st-suite"
						className=" w-full h-full object-cover items-center justify-center  "
					/>
				</div>
				<div className="max-sm:block hidden  h-full ">
					<img
						src={logoCrop}
						alt="logo"
						title="st-suite"
						className="  h-full object-cover items-center justify-center "
					/>
				</div>
				<div className="flex justify-between items-center rounded-lg w-full max-lg:flex-[4] lg:px-4 px-2 my-8 gap-2  bg-sections">
					<div className="bg-white text-black gap-4 hidden sm:flex  px-2 rounded-full items-center max-md:w-[90%]  ">
						<img
							src={search}
							alt="search"
							title="search"
							className="object-fill w-4 h-4"
						/>
						<input
							type="text"
							placeholder="Search"
							className="outline-0 focus:ring-0 rounded-full p-1 max-md:w-[90%] "
						/>
					</div>
					<div
						ref={searchRef}
						onClick={() => setOpenSearch(!openSearch)}
						className="flex sm:hidden  bg-white rounded-full h-full p-2  flex-col items-start justify-around"
					>
						<img
							src={search}
							alt="search"
							title="search"
							className="object-fill w-4 h-4 "
						/>
					</div>
					<div className="flex items-center  rounded-lg  gap-4   justify-end w-full ">
						<div className="flex items-center gap-4 max-md:gap-2 py-2 ">
							<div className="flex relative items-center">
								<img
									src={alert}
									alt="notification"
									title="notification"
									className="object-fill lg:w-[24px] lg:h-[25.5px] h-full w-full items-center"
								/>
								<span className="absolute bg-[#118F4B] lg:text-xs text-[8px] lg:w-4 lg:h-4 w-3 h-3 items-center justify-center flex rounded-full right-[-5px] top-[-5px]">
									6
								</span>
							</div>
							<img
								src={profile}
								alt="profile"
								title="profile"
								className="lg:w-[50px] lg:h-[52px] h-[36px] w-[36px] rounded-full items-center flex overflow-hidden"
							/>

							<div className="flex flex-col lg:text-[14px] text-xs text-[#404040] items-center">
								<span>Moni Roy</span>
								<span className="text-[#565656] lg:text-[12px] text-[10px] font-semibold">
									Admin
								</span>
							</div>
							<span>
								<img src={more} alt="more" />
							</span>
						</div>
					</div>
				</div>
				{openSearch && (
					<div className="bg-white absolute top-[75px] right-0 text-black gap-4    px-2 rounded-full items-center  flex w-full  ">
						<img
							src={search}
							alt="search"
							title="search"
							className="object-fill w-4 h-4"
						/>
						<input
							type="text"
							placeholder="Search"
							className="outline-0 focus:ring-0 rounded-full p-1 max-md:w-[90%] "
						/>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
