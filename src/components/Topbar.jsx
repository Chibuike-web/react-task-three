import { IconSearch } from "../assets/Icons";
import { useFormUtils } from "../Hooks";

export default function Topbar() {
	const { input, handleFocus, handleBlur } = useFormUtils();
	return (
		<div className="fixed top-0 pt-[36px] left-[102px] xl:left-[306px] px-[32px] lg:px-[88px] right-0 flex items-center justify-between">
			<h1>Hello Evano 👋🏼,</h1>
			<div
				className={`h-10 shadow-md  bg-white rounded-[12px] w-full max-w-[216px] flex items-center gap-2 px-4 ${
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
		</div>
	);
}
