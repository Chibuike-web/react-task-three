import { Link } from "react-router";
import { useForm } from "react-hook-form";
import {
	AppleIcon,
	FacebookIcon,
	GoogleIcon,
	IconEye,
	IconRemove,
	IconSuccess,
} from "../assets/Icons";
import { useFormUtils } from "../Hooks";
import Checkbox from "../components/Checkbox";
import { visualStroke } from "../utils";

export default function Register() {
	const {
		register,
		reset,
		handleSubmit,
		watch,
		formState: { errors, isSubmitting },
	} = useForm();

	const { input, isShowPassword, handleFocus, handleBlur, handleShowPassword } = useFormUtils();

	const onSubmit = async (data) => {
		console.log(data);
	};

	const watchedEmail = watch("email");
	const watchedPassword = watch("password");
	const watchedCheckbox = watch("checkbox");

	const isPassword = input === "password";
	const passwordLength = watchedPassword?.length || 0;

	let textClass = "text-gray-two";

	if (isPassword && watchedPassword) {
		if (passwordLength < 8) {
			textClass = "text-status-error";
		} else {
			textClass = "text-status-success";
		}
	}

	return (
		<main className="bg-background-two grid place-items-center h-screen px-6 md:px-0">
			<section className="flex flex-col max-w-[502px] w-full bg-background-one rounded-[24px] px-6 md:px-[44px] pt-8 pb-10 shadow-md">
				{/* Email Address */}
				<div className="flex items-center justify-between w-full">
					<div className="flex gap-4 items-center">
						<Link to="/" className="h-[56px] relative flex items-center text-gray-one">
							Register{" "}
							<span className="block h-[2px] absolute bottom-0 right-0 left-0 bg-[#ef498f]" />
						</Link>
						<Link to="/" className="h-[56px] relative flex items-center text-gray-two">
							Login
						</Link>
					</div>
					<IconRemove />
				</div>
				<div className="flex gap-4 mt-8 mb-[28px]">
					<AppleIcon /> <FacebookIcon /> <GoogleIcon />
				</div>
				<div>
					<p className="text-gray-three text-[13px] mb-[20px]">or register with email</p>
					<form onSubmit={handleSubmit(onSubmit)} className="w-full">
						<div>
							<div
								className={`h-[56px] px-4 rounded-[12px] border flex items-center w-full ${visualStroke(
									input,
									"email",
									errors.email
								)}`}
							>
								<fieldset className="flex flex-col w-full">
									{(input === "email" || watchedEmail) && (
										<label htmlFor="email" className="text-[12px] text-gray-two w-full">
											Email address
										</label>
									)}
									<input
										id="email"
										name="email"
										type="text"
										{...register("email", {
											required: "Email is required",
											pattern: {
												value: /^\S+@\S+$/i,
												message: "Invalid email address",
											},
										})}
										className="focus:border-0 focus:outline-0 text-[15px] text-gray-one placeholder:text-[15px] placeholder:text-gray-two w-full"
										placeholder="Email address"
										onFocus={(e) => handleFocus(e.target.id)}
										onBlur={handleBlur}
									/>
								</fieldset>
								{watchedEmail && watchedEmail?.match(/^\S+@\S+$/i) && (
									<IconSuccess className="text-status-success" />
								)}
							</div>
							{errors.email && (
								<p className="text-[13px] mt-[2px] text-status-error">{errors.email.message}</p>
							)}
						</div>
						<div className="mt-[20px]">
							<div
								className={`h-[56px] p-4 rounded-[12px] border flex items-center w-full ${visualStroke(
									input,
									"password",
									errors.password
								)}`}
							>
								<fieldset className="flex flex-col w-full">
									{(input === "password" || watchedPassword) && (
										<label htmlFor="password" className="text-[12px] text-gray-two w-full">
											Password
										</label>
									)}
									<input
										id="password"
										name="password"
										type={isShowPassword ? "text" : "password"}
										{...register("password", {
											required: "Password is required",
											minLength: {
												value: 8,
												message: "Password must have at least 8 characters",
											},
										})}
										className="focus:border-0 focus:bg-transparent focus:outline-0 text-[15px] text-gray-one placeholder:text-[15px] placeholder:text-gray-two w-full"
										placeholder="Password"
										onFocus={(e) => handleFocus(e.target.id)}
										onBlur={handleBlur}
									/>
								</fieldset>
								{watchedPassword && passwordLength >= 8 && (
									<IconSuccess className="text-status-success" />
								)}
								<button type="button" onClick={handleShowPassword}>
									<IconEye className="ml-[8px]" />
								</button>
							</div>
							{!errors.password && (
								<p className={`text-[13px] mt-[4px] ${textClass}`}>8+ characters</p>
							)}
							{errors.password && (
								<p className="text-[13px] mt-[2px] text-status-error">{errors.password.message}</p>
							)}
						</div>
						<div className="mt-8">
							<button
								type="submit"
								className="font-bold text-white bg-primary rounded-[12px] w-full h-[56px]"
							>
								Create account
							</button>
							<Checkbox
								register={register}
								text="Send me news and promotion"
								watchedCheckbox={watchedCheckbox}
							/>
						</div>
					</form>
				</div>
				<p className="text-center mt-10 text-[11px] text-gray-three w-full max-w-[270px] self-center">
					By continuing I agree with the{" "}
					<span className="text-status-info">Terms & Conditions</span>,{" "}
					<span className="text-status-info">Privacy Policy</span>
				</p>
			</section>
		</main>
	);
}
