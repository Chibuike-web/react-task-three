import { Outlet } from "react-router";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

export default function Dashboard() {
	return (
		<div>
			<Sidebar />
			<aside>
				<Topbar />
				<Outlet />
			</aside>
		</div>
	);
}
