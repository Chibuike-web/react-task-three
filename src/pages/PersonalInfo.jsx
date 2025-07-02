import { useForm } from "react-hook-form";
import { IconCalendar, IconDropdown, IconInfo, IconRemove, IconSuccess } from "../assets/Icons";
import { useFormUtils } from "../Hooks";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { visualStroke } from "../utils";

export default function PersonalInfo() {
	const { input, handleFocus, handleBlur, setInput } = useFormUtils();
	const [isOpen, setIsOpen] = useState(false);
	const {
		register,
		setValue,
		reset,
		handleSubmit,
		watch,
		formState: { errors, isSubmitting },
	} = useForm({
		defaultValues: {
			birthday: null,
		},
	});

	const onSubmit = (data) => {
		console.log("Submitted data:", data);
	};

	const watchedName = watch("name");
	const selectedGender = watch("gender");
	const watchedPhoneNumber = watch("phoneNumber");
	const watchedBirthday = watch("birthday");

	return (
		<main className="bg-background-two grid place-items-center h-screen px-6 md:px-0">
			<section className="flex flex-col max-w-[502px] w-full bg-background-one rounded-[24px] px-6 md:px-[44px] pt-8 pb-10 shadow-md">
				<div className="flex items-center justify-between w-full mb-14">
					<div className="flex gap-4 items-center">
						<h2 className="text-gray-one font-bold text-[20px]">Personal Information</h2>
						<span className="text-status-success font-bold">2 of 3</span>
					</div>
					<IconRemove />
				</div>

				<form onSubmit={handleSubmit(onSubmit)} className="w-full">
					{/* First name */}
					<div className=" mb-[20px]">
						<div
							className={`h-[56px] p-4 rounded-[12px] border flex items-center w-full ${visualStroke(
								input,
								"name"
							)}`}
						>
							<fieldset className="flex flex-col w-full">
								{(input === "name" || watchedName) && (
									<label htmlFor="name" className="text-[12px] text-gray-two w-full">
										Full name
									</label>
								)}
								<input
									id="name"
									name="name"
									type="text"
									{...register("name", {
										required: "Full name is required",
									})}
									className="focus:border-0 focus:outline-0 text-[15px] text-gray-one placeholder:text-[15px] placeholder:text-gray-two w-full"
									placeholder="Full name"
									onFocus={(e) => handleFocus(e.target.id)}
									onBlur={handleBlur}
								/>
							</fieldset>
							{watchedName && <IconSuccess className="text-status-success" />}
						</div>
						{errors.name && (
							<p className="text-[13px] mt-[2px] text-status-error">{errors.name.message}</p>
						)}
					</div>
					{/* Gender Selection */}
					<div className=" mb-6">
						<div className="flex items-center gap-[12px]">
							<p>Gender:</p>
							<div className="flex gap-[8px]">
								<label htmlFor="male" className="flex items-center gap-[8px]">
									<input
										type="radio"
										id="male"
										value="male"
										{...register("gender", {
											required: "You must select one option",
										})}
										className="sr-only"
									/>
									<div
										className={`size-4 rounded-full flex items-center justify-center ${
											selectedGender === "male" ? "bg-primary" : "bg-[#EF498F]/16"
										}`}
									>
										{selectedGender === "male" && (
											<span className="block bg-white size-[8px] rounded-full " />
										)}{" "}
									</div>
									<span>Male</span>
								</label>

								<label htmlFor="female" className="flex items-center gap-[8px]">
									<input
										type="radio"
										id="female"
										value="female"
										{...register("gender")}
										className="sr-only"
									/>
									<div
										className={`size-4 rounded-full flex items-center justify-center ${
											selectedGender === "female" ? "bg-primary" : "bg-[#EF498F]/16"
										}`}
									>
										{selectedGender === "female" && (
											<span className="block bg-white size-[8px] rounded-full " />
										)}{" "}
									</div>
									<span>Female</span>
								</label>
							</div>
						</div>{" "}
						{errors.gender && (
							<p className="text-[13px] mt-[2px] text-status-error">{errors.gender.message}</p>
						)}
					</div>
					<div className="flex items-center gap-[8px] mb-[20px]">
						<IconInfo />
						<span className="text-gray-two font-bold text-[13px]">
							The phone number and birthday are only visible to you
						</span>
					</div>
					<div className=" mb-[20px]">
						<div className="flex gap-4">
							<div className="relative w-[102px]">
								<select
									{...register("countryCode", { required: true })}
									className="w-[102px] border border-stroke focus:border-[2px] focus:border-primary focus:outline-0 h-[56px] rounded-[12px] px-4 appearance-none"
									defaultValue="+234"
									onClick={() => setIsOpen(true)}
									onBlur={() => setIsOpen(false)}
								>
									<option value="+234">+234</option>
									<option value="+598">+598</option>
									<option value="+334">+334</option>
								</select>

								<span
									className={`pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 transition-transform duration-300 text-gray-500 ${
										isOpen ? "rotate-180" : ""
									}`}
								>
									<IconDropdown />
								</span>
							</div>
							<div
								className={`h-[56px] p-4 rounded-[12px] border flex items-center w-full ${visualStroke(
									input,
									"phoneNumber"
								)}`}
							>
								<fieldset className="flex flex-col w-full">
									{(input === "phoneNumber" || watchedPhoneNumber) && (
										<label htmlFor="phoneNumber" className="text-[12px] text-gray-two w-full">
											Phone number
										</label>
									)}
									<input
										id="phoneNumber"
										name="phoneNumber"
										type="tel"
										{...register("phoneNumber", {
											required: "Phone number is required",
										})}
										className="focus:border-0 focus:outline-0 text-[15px] text-gray-one placeholder:text-[15px] placeholder:text-gray-two w-full"
										placeholder="Phone number"
										onFocus={(e) => handleFocus(e.target.id)}
										onBlur={handleBlur}
									/>
								</fieldset>
								{watchedPhoneNumber && <IconSuccess className="text-status-success" />}
							</div>
						</div>
						{errors.phoneNumber && (
							<p className="text-[13px] mt-[2px] text-status-error">{errors.phoneNumber.message}</p>
						)}
					</div>

					{/* Birthday */}
					<div
						className={`h-[56px] p-4 rounded-[12px] border flex items-center w-full mb-[4px] ${
							input === "birthday" ? "border-[2px] border-primary" : "border-stroke"
						}`}
					>
						<fieldset className="flex flex-col w-full">
							{(input === "birthday" || watchedBirthday) && (
								<label
									htmlFor="birthday"
									className="text-[12px] text-gray-two w-full appearance-none"
								>
									Birthday
								</label>
							)}
							<DatePicker
								id="birthday"
								name="birthday"
								placeholderText="Date of Birth"
								selected={watchedBirthday}
								onChange={(date) => setValue("birthday", date, { shouldValidate: true })}
								onFocus={(e) => handleFocus(e.target.id)}
								onBlur={handleBlur}
								className="focus:border-0 focus:outline-0 text-[15px] text-gray-one placeholder:text-[15px] placeholder:text-gray-two w-full bg-transparent"
								dateFormat="dd/MM/yyyy"
								showMonthDropdown
								showYearDropdown
								dropdownMode="select"
							/>
						</fieldset>

						<div className="flex gap-[4px]">
							<span className="text-gray-three">Optional</span> <IconCalendar />{" "}
							{watchedBirthday && <IconSuccess className="text-status-success" />}
						</div>
					</div>
					<p className="text-gray-two text-[13px] mb-[52px]">
						Let us know about your birthday so as not to miss a gift
					</p>
					<button
						type="submit"
						className="font-bold text-white bg-primary rounded-[12px] w-full h-[56px]"
					>
						Save Information
					</button>
				</form>
			</section>
		</main>
	);
}
