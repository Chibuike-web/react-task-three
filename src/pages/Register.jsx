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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router";

export default function Register() {
	const {
		register,
		reset,
		handleSubmit,
		watch,
		setError,
		formState: { errors, isSubmitting },
	} = useForm();

	const navigate = useNavigate();
	const { input, isShowPassword, handleFocus, handleBlur, handleShowPassword } = useFormUtils();

	const onSubmit = async (data) => {
		const { email, password } = data;

		try {
			const userCredential = await createUserWithEmailAndPassword(auth, email, password);

			if (!userCredential || !userCredential.user) {
				setError("root", { type: "firebase", message: "Something went wrong. Please try again." });
				return;
			}
			reset();
			navigate("/personal-info");
		} catch (error) {
			const errorCode = error.code;

			if (errorCode === "auth/email-already-in-use") {
				setError("email", { type: "firebase", message: "Email is already in use" });
			} else if (errorCode === "auth/invalid-email") {
				setError("email", { type: "firebase", message: "Invalid email address" });
			} else {
				setError("root", { type: "firebase", message: "Something went wrong. Please try again." });
			}

			console.error("Firebase signup error:", error);
		}
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
				<div className="flex items-center justify-between w-full">
					<div className="flex gap-4 items-center">
						<Link to="/" className="h-[56px] relative flex items-center text-gray-one">
							Register{" "}
							<span className="block h-[2px] absolute bottom-0 right-0 left-0 bg-[#ef498f]" />
						</Link>
						<Link to="/login" className="h-[56px] relative flex items-center text-gray-two">
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
					{errors.root && (
						<p className="text-red-600 bg-red-100 border border-red-300 px-4 py-2 rounded-md mb-4">
							{errors.root.message}
						</p>
					)}
					<form onSubmit={handleSubmit(onSubmit)} className="w-full">
						{/* Email Address */}
						<div>
							<div
								className={`h-[56px] px-4 rounded-[12px] border flex items-center w-full ${visualStroke(
									input === "email",
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
								{!errors.email && watchedEmail && watchedEmail?.match(/^\S+@\S+$/i) && (
									<IconSuccess className="text-status-success" />
								)}
							</div>
							{errors.email && (
								<p className="text-[13px] mt-[2px] text-status-error">{errors.email.message}</p>
							)}
						</div>
						{/* Password */}
						<div className="mt-[20px]">
							<div
								className={`h-[56px] px-4 rounded-[12px] border flex items-center w-full ${visualStroke(
									input === "password",
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
								disabled={isSubmitting}
								className="font-bold font-primary text-white bg-primary rounded-[12px] w-full h-[56px] disabled:opacity-50"
							>
								{isSubmitting ? (
									<span className="flex gap-2 items-center justify-center">
										<div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
										Creating account...
									</span>
								) : (
									"Create account"
								)}
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
