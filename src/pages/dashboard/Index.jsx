import {
	ActiveNow,
	DecreaseIcon,
	IconDropdown,
	IconSearch,
	IncreaseIcon,
	Members,
	TotalCustomerIcon,
} from "../../assets/Icons";
import activeNowOne from "../../assets/active-now-one.png";
import activeNowTwo from "../../assets/active-now-two.png";
import activeNowThree from "../../assets/active-now-three.png";
import activeNowFour from "../../assets/active-now-four.png";
import activeNowFive from "../../assets/active-now-five.png";
import { Fragment } from "react";
import { useFormUtils, useMediaQuery } from "../../Hooks";

export default function Index() {
	const isDesktop = useMediaQuery("(min-width: 640px)");

	return (
		<div className="max-w-[1456px] mx-auto px-6 xl:px-0">
			<div className="flex flex-col lg:flex-row gap-6 lg:gap-14 w-full bg-white px-6 xl:px-14 py-5 xl:py-10 items-center justify-between rounded-[30px] shadow-md overflow-x-auto">
				{dashCardInfo.map(({ id, ...item }, index) => (
					<Fragment key={id}>
						<DashCard {...item} />
						{index < 2 && (
							<span className="flex bg-[#f0f0f0] w-full h-[1px] lg:h-[87px] lg:w-[1px]" />
						)}
					</Fragment>
				))}
			</div>

			{isDesktop ? <DesktopTable /> : <MobileTable />}
		</div>
	);
}

const dashCardInfo = [
	{
		id: "totalCustomers",
		text: "Total Customers",
		number: 5423,
		trend: { type: "increase", value: 16 },
		icon: <TotalCustomerIcon />,
	},
	{
		id: "members",
		text: "Members",
		number: 1893,
		trend: { type: "decrease", value: 1 },
		icon: <Members />,
	},
	{
		id: "activeNow",
		text: "Active Now",
		number: 189,
		trend: {
			type: "active",
			images: [activeNowOne, activeNowTwo, activeNowThree, activeNowFour, activeNowFive],
		},
		icon: <ActiveNow />,
	},
];

const DashCard = ({ text, number, trend, icon }) => {
	let bottomContent = null;

	if (trend?.type === "increase") {
		bottomContent = (
			<p className="flex items-center gap-1 text-sm">
				<IncreaseIcon />
				<span className="text-[#00AC4F] font-bold">{trend.value}%</span> this month
			</p>
		);
	} else if (trend?.type === "decrease") {
		bottomContent = (
			<p className="flex items-center gap-1 text-sm">
				<DecreaseIcon />
				<span className="text-[#D0004B] font-bold">{trend.value}%</span> this month
			</p>
		);
	} else if (trend?.type === "active" && Array.isArray(trend.images)) {
		bottomContent = (
			<div className="flex -space-x-2">
				{trend.images.map((img, i) => (
					<img
						key={i}
						src={img}
						alt="User"
						className="size-[26px] border-[1.3px] border-white rounded-full"
					/>
				))}
			</div>
		);
	}

	return (
		<div className="flex items-center gap-[20px] md:min-w-[270px]">
			<span className="bg-[#D3FFE7] size-[84px] rounded-full text-[#00AC4F] flex items-center justify-center">
				{icon}
			</span>
			<div className="flex flex-col gap-2">
				<p className="text-sm font-medium text-gray-500">{text}</p>
				<p className="text-2xl font-bold text-gray-900">{number}</p>
				{bottomContent}
			</div>
		</div>
	);
};

const tableRowInfo = [
	{
		id: 1,
		name: "Jane Cooper",
		company: "Microsoft",
		phoneNumber: "(225) 555-0118",
		email: "jane@microsoft.com",
		country: "United States",
		status: "Active",
	},
	{
		id: 2,
		name: "Floyd Miles",
		company: "Microsoft",
		phoneNumber: "(205) 555-0100",
		email: "floyd@yahoo.com",
		country: "Kiribati",
		status: "Inactive",
	},
	{
		id: 3,
		name: "Ronald Richards",
		company: "Adobe",
		phoneNumber: "(302) 555-0107",
		email: "ronald@adobe.com",
		country: "Israel",
		status: "Inactive",
	},
	{
		id: 4,
		name: "Marvin McKinney",
		company: "Tesla",
		phoneNumber: "(252) 555-0126",
		email: "marvin@tesla.com",
		country: "Iran",
		status: "Active",
	},
	{
		id: 5,
		name: "Jerome Bell",
		company: "Google",
		phoneNumber: "(629) 555-0129",
		email: "jerome@google.com",
		country: "Réunion",
		status: "Active",
	},
	{
		id: 6,
		name: "Kathryn Murphy",
		company: "Microsoft",
		phoneNumber: "(225) 555-0118",
		email: "jane@microsoft.com",
		country: "United States",
		status: "Active",
	},
	{
		id: 7,
		name: "Jacob Jones",
		company: "Yahoo",
		phoneNumber: "(208) 555-0112",
		email: "jacob@yahoo.com",
		country: "Brazil",
		status: "Active",
	},
	{
		id: 8,
		name: "Kristin Watson",
		company: "Facebook",
		phoneNumber: "(704) 555-0127",
		email: "kristin@facebook.com",
		country: "Åland Islands",
		status: "Inactive",
	},
];

const columns = ["Customer Name", "Company", "Phone Number", "Email", "Country", "Status"];

const DesktopTable = () => {
	const { input, handleFocus, handleBlur } = useFormUtils();
	return (
		<div className="w-full overflow-x-auto">
			<div className="min-w-[1280px] bg-white py-[30px] rounded-[30px] shadow-md mt-10">
				{/* top */}
				<div className="flex items-center justify-between w-full px-[38px]">
					<div>
						<h2 className="text-[22px] font-semibold">All Customers</h2>
						<p className="text-[#16C098] text-[14px]">Active Members</p>
					</div>
					<div className="flex">
						<div
							className={`h-10 bg-[#F9FBFF] rounded-[12px] w-full max-w-[216px] flex items-center gap-2 px-4 ${
								input === "search" ? "border-2 border-primary" : ""
							}`}
						>
							<IconSearch />
							<input
								type="search"
								name="search"
								id="search"
								placeholder="Search"
								className="focus:border-0 focus:outline-0 text-[15px] h-full text-gray-one placeholder:text-[15px] placeholder:text-gray-two w-full"
								onFocus={(e) => handleFocus(e.target.id)}
								onBlur={handleBlur}
							/>
						</div>
						<div className="bg-[#F9FBFF] py-[10px] pl-[15] pr-[10px] rounded-[10px] flex items-center gap-[7px]">
							<span>Sort by: Newest</span>
							<IconDropdown />
						</div>
					</div>
				</div>

				{/* heading */}
				<div className="grid grid-cols-6 gap-4 pb-[14px] pt-10 px-[38px] text-[#B5B7C0] font-medium text-sm border-b border-[#EEEEEE]">
					{columns.map((column, index) => (
						<div key={index}>{column}</div>
					))}
				</div>
				{/* table */}
				<div className="px-[38px] font-medium">
					{tableRowInfo.map((row) => (
						<div
							key={row.id}
							className={`grid grid-cols-6 gap-4 py-[20px] text-sm border-b border-[#EEEEEE]
						}`}
						>
							<div>{row.name}</div>
							<div>{row.company}</div>
							<div>{row.phoneNumber}</div>
							<div>{row.email}</div>
							<div>{row.country}</div>
							<div>
								<span
									className={`px-2 py-1 rounded-[4px] text-xs font-medium ${
										row.status.toLowerCase() === "active"
											? "bg-[#16C098]/38 text-[#00B087] border border-[#00B087]"
											: "bg-[#FFC5C5] text-[#DF0404] border border-[#DF0404]"
									}`}
								>
									{row.status}
								</span>
							</div>
						</div>
					))}
				</div>

				{/* pagination */}

				<div className="px-[38px] pt-[30px] flex w-full justify-between">
					<p className="font-medium text-[14px] text-[#B5B7C0]">
						Showing data 1 to 8 of 256K entries
					</p>
					<div className="flex items-center gap-[12px] text-[12px] font-medium text-[#404B52]">
						<button
							type="button"
							className="size-6 border border-[#EEEEEE] rounded-[4px] bg-[#f5f5f5]"
						>
							&lt;
						</button>
						<button type="button" className="size-6 text-white rounded-[4px] bg-primary">
							1
						</button>
						<button
							type="button"
							className="size-6 border border-[#EEEEEE] rounded-[4px] bg-[#f5f5f5]"
						>
							2
						</button>
						<button
							type="button"
							className="size-6 border border-[#EEEEEE] rounded-[4px] bg-[#f5f5f5]"
						>
							3
						</button>
						<button
							type="button"
							className="size-6 border border-[#EEEEEE] rounded-[4px] bg-[#f5f5f5]"
						>
							4
						</button>
						<p>...</p>
						<button
							type="button"
							className="size-6 border border-[#EEEEEE] rounded-[4px] bg-[#f5f5f5]"
						>
							40
						</button>
						<button
							type="button"
							className="size-6 border border-[#EEEEEE] rounded-[4px] bg-[#f5f5f5]"
						>
							&gt;
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

const MobileTable = () => {
	return (
		<div className="flex flex-col gap-6 mt-12">
			{tableRowInfo.map((row) => (
				<div
					key={row.id}
					className="bg-gray-100 text-gray-600 border border-gray-300 grid grid-cols-2 gap-6 text-[12px] rounded-[12px] w-full p-4"
				>
					{/* Left */}
					<div className="flex flex-col gap-2">
						<h2>{row.name}</h2>
						<p>{row.company}</p>
						<p>{row.phoneNumber}</p>
					</div>
					<div className="flex flex-col gap-2 items-end">
						<p>{row.email}</p>
						<p>{row.country}</p>
						<div>
							<span
								className={`px-2 py-1 rounded-[4px] text-xs font-medium ${
									row.status.toLowerCase() === "active"
										? "bg-[#16C098]/38 text-[#00B087] border border-[#00B087]"
										: "bg-[#FFC5C5] text-[#DF0404] border border-[#DF0404]"
								}`}
							>
								{row.status}
							</span>
						</div>
					</div>
				</div>
			))}
			{/* pagination */}

			<div className="pt-[30px] flex flex-col gap-4 w-full justify-between">
				<p className="font-medium text-[14px] text-[#B5B7C0]">
					Showing data 1 to 8 of 256K entries
				</p>
				<div className="flex items-center gap-[12px] text-[12px] font-medium text-[#404B52]">
					<button
						type="button"
						className="size-6 border border-[#EEEEEE] rounded-[4px] bg-[#f5f5f5]"
					>
						&lt;
					</button>
					<button type="button" className="size-6 text-white rounded-[4px] bg-primary">
						1
					</button>
					<button
						type="button"
						className="size-6 border border-[#EEEEEE] rounded-[4px] bg-[#f5f5f5]"
					>
						2
					</button>
					<button
						type="button"
						className="size-6 border border-[#EEEEEE] rounded-[4px] bg-[#f5f5f5]"
					>
						3
					</button>
					<button
						type="button"
						className="size-6 border border-[#EEEEEE] rounded-[4px] bg-[#f5f5f5]"
					>
						4
					</button>
					<p>...</p>
					<button
						type="button"
						className="size-6 border border-[#EEEEEE] rounded-[4px] bg-[#f5f5f5]"
					>
						40
					</button>
					<button
						type="button"
						className="size-6 border border-[#EEEEEE] rounded-[4px] bg-[#f5f5f5]"
					>
						&gt;
					</button>
				</div>
			</div>
		</div>
	);
};
