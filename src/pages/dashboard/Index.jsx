import {
	ActiveNow,
	DecreaseIcon,
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

export default function Index() {
	return (
		<div className="w-full max-w-[1200px] mx-auto px-[32px] lg:px-[88px] xl:px-0">
			<div className="flex gap-14 w-full bg-white px-14 py-10 items-center justify-between rounded-[30px] shadow-md">
				{dashCardInfo.map(({ id, ...item }, index) => (
					<Fragment key={id}>
						<DashCard {...item} />
						{index < 2 && <span className="block bg-[#f0f0f0] h-[87px] w-[1px]" />}
					</Fragment>
				))}
			</div>
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
		<div className="flex items-center gap-[20px]">
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
