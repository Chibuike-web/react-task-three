import { NavLink } from "react-router";
import {
	ArrowRight,
	IconDropdown,
	IconMenu,
	IconRemove,
	IconSearch,
	LogoIcon,
} from "../assets/Icons";
import profileImage from "../assets/Profile.png";

import { useFormUtils } from "../Hooks";
import { menuList } from "./Sidebar";

export default function Topbar({ isOpen, handleClick }) {
	const { input, handleFocus, handleBlur } = useFormUtils();
	return (
		<div className="py-6 flex items-center justify-between px-6 xl:px-0">
			<div className="flex items-center gap-[2px]">
				<button onClick={() => handleClick()} className="sm:hidden">
					{isOpen ? <IconRemove /> : <IconMenu />}
				</button>
				<h1>Hello Evano 👋🏼,</h1>
			</div>
			<div
				className={`h-10 shadow-md  bg-white rounded-[12px] max-w-[120px] xl:max-w-[216px] flex items-center gap-2 px-4 ${
					input === "search" ? "border-2 border-primary" : ""
				}`}
			>
				<IconSearch />
				<input
					type="search"
					name="search"
					id="search"
					placeholder="Search"
					className="bg-white focus:border-0 focus:outline-0 text-[15px] h-full text-gray-one placeholder:text-[15px] placeholder:text-gray-two w-full"
					onFocus={(e) => handleFocus(e.target.id)}
					onBlur={handleBlur}
				/>
			</div>
			{isOpen && <Sidebar handleClick={handleClick} />}
		</div>
	);
}
function Sidebar({ handleClick }) {
	return (
		<div
			className="inset-0 bg-black/50 fixed flex z-10 top-[88px]"
			onClick={(e) => {
				handleClick();
			}}
		>
			<aside
				className="bg-white flex flex-col items-center w-full min-w-[306px] top-[88px] max-w-[306px] overflow-auto px-[28px] py-[36px]"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<div className="w-full">
					<div className="flex items-end gap-[4px]">
						<div className="flex gap-[8px]">
							<LogoIcon /> <span className="font-semibold text-black text-[26px]">Dashboard</span>
						</div>
						<span className="font-medium text-[10px] text-[#838383] mb-[10px]">v.01</span>
					</div>

					<div className="flex flex-col gap-[16px] mt-10">
						{menuList.map(({ title, icon, link }) => (
							<NavLink
								to={`${link}`}
								end={link === "/dashboard"}
								key={title}
								className={({ isActive }) =>
									` font-medium flex items-center p-[12px] rounded-[8px] w-full justify-between  ${
										isActive ? "text-white bg-primary" : "text-dashboard"
									}`
								}
							>
								<div className="flex items-center gap-[14px]">
									<span>{icon}</span>
									<span>{title}</span>
								</div>
								<span>
									<ArrowRight />
								</span>
							</NavLink>
						))}
					</div>
				</div>

				<div className="w-full mt-[160px]">
					<div
						className="flex items-center flex-col rounded-[20px] p-6"
						style={{
							background: "linear-gradient(45deg, #EAABF0, #4623E9)",
						}}
					>
						{" "}
						<p className="text-white font-semibold text-center">
							Upgrade to PRO to get access all Features!
						</p>
						<button className="font-secondary text-primary font-semibold bg-white  w-full h-[40px] rounded-full mt-[20px]">
							Get Pro Now!
						</button>
					</div>
					<div className="w-full flex items-center justify-between mt-12">
						<div className="flex items-center gap-[12px] ">
							<img src={profileImage} alt="" className="max-w-[42px] w-full" />
							<div className="flex flex-col ">
								<p className="text-[14px] font-medium">Evano</p>
								<p className="text-[12px] text-[#757575]">Project Manager</p>
							</div>
						</div>
						<IconDropdown />
					</div>
				</div>
			</aside>
		</div>
	);
}
