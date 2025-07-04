import { Outlet } from "react-router";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { useState } from "react";

export default function Dashboard() {
	const [isOpen, setIsOpen] = useState(false);
	function handleClick() {
		setIsOpen(!isOpen);
	}
	return (
		<div className="font-secondary flex bg-[#FAFBFF] overflow-hidden h-screen xl:gap-[88px]">
			<Sidebar isOpen={isOpen} handleClick={handleClick} />
			<aside className="w-full relative overflow-y-auto h-full">
				<Topbar isOpen={isOpen} handleClick={handleClick} />
				<section className="w-full my-[36px]">
					<Outlet />
				</section>
			</aside>
		</div>
	);
}
