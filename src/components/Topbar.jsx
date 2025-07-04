import { IconSearch } from "../assets/Icons";
import { useFormUtils } from "../Hooks";

export default function Topbar() {
	const { input, handleFocus, handleBlur } = useFormUtils();
	return (
		<div className="bg-[#FAFBFF] fixed top-0 py-[36px] left-[80px] xl:left-[306px] px-4 lg:px-[88px] right-0 flex items-center justify-between">
			<h1>Hello Evano 👋🏼,</h1>
			<div
				className={`h-10 shadow-md  bg-white rounded-[12px] w-full w-max xl:max-w-[216px] flex items-center gap-2 px-4 ${
					input === "search" ? "border-2 border-primary" : ""
				}`}
			>
				<IconSearch />
				<input
					type="search"
					name="search"
					id="search"
					placeholder="Search"
					className="bg-white focus:border-0 focus:outline-0 text-[15px] h-full text-gray-one placeholder:text-[15px] placeholder:text-gray-two w-full hidden xl:flex"
					onFocus={(e) => handleFocus(e.target.id)}
					onBlur={handleBlur}
				/>
			</div>
		</div>
	);
}
