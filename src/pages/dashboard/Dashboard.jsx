import { Outlet } from "react-router";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

export default function Dashboard() {
	return (
		<div className="font-secondary flex bg-[#FAFBFF]">
			<Sidebar />
			<aside className="h-screen w-screen">
				<Topbar />
				<section className="w-full pl-[306px] mt-[117px]">
					<Outlet />
				</section>
			</aside>
		</div>
	);
}
