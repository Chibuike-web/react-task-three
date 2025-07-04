import { useState } from "react";
import {
	IconDollar,
	IconPin,
	IconRemove,
	IconSearch,
	IconSuccess,
	IconTime,
	IconUsers,
} from "../assets/Icons";
import { useFormUtils } from "../Hooks";
import { useForm } from "react-hook-form";
import { visualStroke } from "../utils";
import { useNavigate } from "react-router";

export default function Address() {
	const [selection, setSelection] = useState("");
	const handleSelection = (value) => {
		setSelection(value);
	};
	return (
		<>
			{selection === "addManually" ? (
				<AddManually />
			) : (
				<ChooseAddress handleSelection={handleSelection} />
			)}
		</>
	);
}

const ChooseAddress = ({ handleSelection }) => {
	const { input, handleFocus, handleBlur } = useFormUtils();
	return (
		<main className="bg-background-two grid place-items-center h-screen px-6 md:px-0">
			<section className="flex flex-col max-w-[502px] w-full bg-background-one rounded-[24px] px-6 md:px-[44px] pt-8 pb-10 shadow-md">
				<div className="flex items-center justify-between w-full mb-14">
					<div className="flex gap-4 items-center">
						<h2 className="text-gray-one font-bold text-[20px]">Add </h2>
						<span className="text-status-success font-bold">3 of 3</span>
					</div>
					<IconRemove />
				</div>
				<div
					className={`border h-16 rounded-[12px] w-full flex items-center gap-2 px-4 ${
						input === "search" ? "border-2 border-primary" : "border-stroke"
					}`}
				>
					<IconSearch />
					<input
						type="search"
						name="search"
						id="search"
						placeholder="Search for Address"
						className="focus:border-0 focus:outline-0 text-[15px] h-full text-gray-one placeholder:text-[15px] placeholder:text-gray-two w-full"
						onFocus={(e) => handleFocus(e.target.id)}
						onBlur={handleBlur}
					/>
				</div>
				<p className="text-gray-two text-13px mt-[4px]">
					Your address is not visible to other users
				</p>

				<div className="flex flex-col sm:flex-row items-start sm:items-center gap-[8px] text-primary font-bold mt-8">
					<button
						id="useCurrentLocation"
						className="flex items-center h-8 px-[12px] gap-2 rounded-[12px] border border-[#EF498F]/28"
					>
						<IconPin />
						Use current location
					</button>
					<button
						id="addManually"
						className="rounded-[12px] border border-[#EF498F]/28 px-[12px] h-8"
						onClick={(e) => handleSelection(e.target.id)}
					>
						Add manually
					</button>
				</div>

				<div className="flex flex-col gap-4 mt-[128px]">
					<h3 className="text-gray-one font-bold text-[20px]">Sharing your address shows</h3>
					<div className="flex flex-col gap-[12px] text-gray-two">
						<div className="flex items-center gap-[8px]">
							<IconUsers /> <span>People near your</span>
						</div>
						<div className="flex items-center gap-[8px]">
							<IconTime /> <span>Estimated delivery time</span>
						</div>
						<div className="flex items-center gap-[8px]">
							<IconDollar /> <span>Estimate shipping costs</span>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

const AddManually = () => {
	const {
		register,
		reset,
		handleSubmit,
		watch,
		formState: { errors, isSubmitting },
	} = useForm();

	const navigate = useNavigate();

	const { input, handleFocus, handleBlur } = useFormUtils();

	const onSubmit = (data) => {
		reset();
		navigate("/success");
	};

	const watchedStreetAddress = watch("streetAddress");
	const watchedCity = watch("city");
	const watchedState = watch("state");
	const watchedApartment = watch("apartment");
	const watchedZipCode = watch("zipCode");
	return (
		<main className="bg-background-two grid place-items-center h-screen px-6 md:px-0">
			<section className="flex flex-col max-w-[502px] w-full bg-background-one rounded-[24px] px-6 md:px-[44px] pt-8 pb-10 shadow-md">
				<div className="flex items-center justify-between w-full mb-14">
					<div className="flex gap-4 items-center">
						<h2 className="text-gray-one font-bold text-[20px]">Add address</h2>
						<span className="text-status-success font-bold">3 of 3</span>
					</div>
					<IconRemove />
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					{/* Street Address */}
					<div className="mb-[20px]">
						<div
							className={`h-[56px] px-4 rounded-[12px] border flex items-center w-full ${visualStroke(
								input === "streetAddress",
								errors.streetAddress
							)}`}
						>
							<fieldset className="flex flex-col w-full">
								{(input === "streetAddress" || watchedStreetAddress) && (
									<label htmlFor="streetAddress" className="text-[12px] text-gray-two w-full">
										Street address
									</label>
								)}
								<input
									id="streetAddress"
									name="streetAddress"
									type="text"
									{...register("streetAddress", {
										required: "Street address required",
									})}
									className="focus:border-0 focus:outline-0 text-[15px] text-gray-one placeholder:text-[15px] placeholder:text-gray-two w-full"
									placeholder="Street address"
									onFocus={(e) => handleFocus(e.target.id)}
									onBlur={handleBlur}
								/>
							</fieldset>
						</div>
						{errors.streetAddress && (
							<p className="text-[13px] mt-[2px] text-status-error">
								{errors.streetAddress.message}
							</p>
						)}
					</div>

					{/* Apartment */}
					<div className="mb-[20px]">
						<div
							className={`h-[56px] px-4 rounded-[12px] border flex items-center w-full ${visualStroke(
								input === "apartment",
								errors.apartment
							)}`}
						>
							<fieldset className="flex flex-col w-full">
								{(input === "apartment" || watchedApartment) && (
									<label htmlFor="apartment" className="text-[12px] text-gray-two w-full">
										Apartment (optional)
									</label>
								)}
								<input
									id="apartment"
									name="apartment"
									type="text"
									{...register("apartment")}
									className="focus:border-0 focus:outline-0 text-[15px] text-gray-one placeholder:text-[15px] placeholder:text-gray-two w-full"
									placeholder="Apartment, suite, etc. (optional)"
									onFocus={(e) => handleFocus(e.target.id)}
									onBlur={handleBlur}
								/>
							</fieldset>
						</div>
					</div>

					{/* City */}
					<div className="mb-[20px]">
						<div
							className={`h-[56px] px-4 rounded-[12px] border flex items-center w-full ${visualStroke(
								input === "city",
								errors.city
							)}`}
						>
							<fieldset className="flex flex-col w-full">
								{(input === "city" || watchedCity) && (
									<label htmlFor="city" className="text-[12px] text-gray-two w-full">
										City
									</label>
								)}
								<input
									id="city"
									name="city"
									type="text"
									{...register("city", {
										required: "City is required",
									})}
									className="focus:border-0 focus:outline-0 text-[15px] text-gray-one placeholder:text-[15px] placeholder:text-gray-two w-full"
									placeholder="City"
									onFocus={(e) => handleFocus(e.target.id)}
									onBlur={handleBlur}
								/>
							</fieldset>
						</div>
						{errors.city && (
							<p className="text-[13px] mt-[2px] text-status-error">{errors.city.message}</p>
						)}
					</div>

					<div className="flex gap-4 w-full mb-[88px]">
						{/* State */}
						<div className="w-full">
							<div
								className={`h-[56px] px-4 rounded-[12px] border flex items-center w-full ${visualStroke(
									input === "state",
									errors.state
								)}`}
							>
								<fieldset className="flex flex-col w-full">
									{(input === "state" || watchedState) && (
										<label htmlFor="state" className="text-[12px] text-gray-two w-full">
											State
										</label>
									)}
									<input
										id="state"
										name="state"
										type="text"
										{...register("state", {
											required: "State is required",
										})}
										className="focus:border-0 focus:outline-0 text-[15px] text-gray-one placeholder:text-[15px] placeholder:text-gray-two w-full"
										placeholder="State"
										onFocus={(e) => handleFocus(e.target.id)}
										onBlur={handleBlur}
									/>
								</fieldset>
							</div>
							{errors.state && (
								<p className="text-[13px] mt-[2px] text-status-error">{errors.state.message}</p>
							)}
						</div>

						{/* Zip Code */}
						<div className="w-full">
							<div
								className={`h-[56px] px-4 rounded-[12px] border flex items-center w-full ${visualStroke(
									input === "zipCode",
									errors.zipCode
								)}`}
							>
								<fieldset className="flex flex-col w-full">
									{(input === "zipCode" || watchedZipCode) && (
										<label htmlFor="zipCode" className="text-[12px] text-gray-two w-full">
											Zip Code
										</label>
									)}
									<input
										id="zipCode"
										name="zipCode"
										type="text"
										{...register("zipCode", {
											required: "Zip code is required",
										})}
										className="focus:border-0 focus:outline-0 text-[15px] text-gray-one placeholder:text-[15px] placeholder:text-gray-two w-full"
										placeholder="Zip Code"
										onFocus={(e) => handleFocus(e.target.id)}
										onBlur={handleBlur}
									/>
								</fieldset>
							</div>
							{errors.zipCode && (
								<p className="text-[13px] mt-[2px] text-status-error">{errors.zipCode.message}</p>
							)}
						</div>
					</div>
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
};
