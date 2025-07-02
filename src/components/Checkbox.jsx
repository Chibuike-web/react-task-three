import { IconSuccess } from "../assets/Icons";

export default function Checkbox({ register, text, watchedCheckbox }) {
	return (
		<label htmlFor="checkbox" className="relative mt-4 block">
			<input
				type="checkbox"
				name="checkbox"
				id="checkbox"
				className="absolute opacity-0 w-0 h-0"
				{...register("checkbox", { required: false })}
			/>
			<div className=" flex items-center gap-2">
				<span
					className={`flex items-center size-4 rounded-[4px] ${
						watchedCheckbox ? "bg-primary" : " bg-[#ef498f]/12 "
					}`}
				>
					{watchedCheckbox && <IconSuccess className="text-white" fillOpacity={1} />}
				</span>
				<span className="text-gray-one text-[13px]">{text}</span>
			</div>
		</label>
	);
}
