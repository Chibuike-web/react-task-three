import { NavLink } from "react-router";
import profileImage from "../assets/Profile.png";
import {
	ArrowRight,
	CustomersIcon,
	DashboardIcon,
	HelpIcon,
	IconDropdown,
	IncomeIcon,
	LogoIcon,
	ProductIcon,
	PromoteIcon,
} from "../assets/Icons";

export default function Sidebar() {
	return (
		<aside className="bg-white fixed left-0 top-0 flex flex-col h-full items-center justify-between gap-16 bottom-0 w-[102px] xl:w-[306px] overflow-auto px-[28px] py-[36px]">
			<div className="w-full">
				<div className="flex items-end gap-[4px]">
					<div className="flex gap-[8px]">
						<LogoIcon />{" "}
						<span className="font-semibold text-black text-[26px] hidden xl:block">Dashboard</span>
					</div>
					<span className="font-medium text-[10px] text-[#838383] mb-[10px] hidden xl:block">
						v.01
					</span>
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
								<span className="hidden xl:block">{title}</span>
							</div>
							<span className="hidden xl:block">
								<ArrowRight />
							</span>
						</NavLink>
					))}
				</div>
			</div>

			<div className="w-full ">
				<div
					className="flex items-center flex-col rounded-[20px] p-6 hidden xl:block"
					style={{
						background: "linear-gradient(45deg, #EAABF0, #4623E9)",
					}}
				>
					{" "}
					<p className="text-white font-semibold text-center">
						Upgrade to PRO to get access all Features!
					</p>
					<button className="font-secondary text-primary font-semibold bg-white w-[203px] h-[40px] rounded-full mt-[20px]">
						Get Pro Now!
					</button>
				</div>
				<div className="w-full flex items-center justify-between mt-12">
					<div className="flex items-center gap-[12px] ">
						<img src={profileImage} alt="" className="max-w-[42px] w-full" />
						<div className="hidden xl:flex flex-col ">
							<p className="text-[14px] font-medium">Evano</p>
							<p className="text-[12px] text-[#757575]">Project Manager</p>
						</div>
					</div>
					<IconDropdown className="hidden xl:block" />
				</div>
			</div>
		</aside>
	);
}

const menuList = [
	{
		title: "Dashboard",
		icon: <DashboardIcon />,
		link: "/dashboard",
	},
	{
		title: "Product",
		icon: <ProductIcon />,
		link: "/dashboard/product",
	},
	{
		title: "Customers",
		icon: <CustomersIcon />,
		link: "/dashboard/customers",
	},
	{
		title: "Income",
		icon: <IncomeIcon />,
		link: "/dashboard/income",
	},
	{
		title: "Promote",
		icon: <PromoteIcon />,
		link: "/dashboard/promote",
	},
	{
		title: "Help",
		icon: <HelpIcon />,
		link: "/dashboard/help",
	},
];
