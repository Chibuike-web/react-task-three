import { useForm } from "react-hook-form";
import { useFormUtils } from "../Hooks";
import { Link } from "react-router";
import { AppleIcon, FacebookIcon, GoogleIcon, IconEye, IconRemove } from "../assets/Icons";
import { visualStroke } from "../utils";
import Checkbox from "../components/Checkbox";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router";

export default function Login() {
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
			const userCredential = await signInWithEmailAndPassword(auth, email, password);

			if (!userCredential || !userCredential.user) {
				setError("root", { type: "firebase", message: "Login failed. Please try again." });
				return;
			}
			reset();
			navigate("/dashboard");
		} catch (error) {
			const errorCode = error.code;

			if (errorCode === "auth/invalid-credential") {
				setError("root", { type: "firebase", message: "Invalid email or password" });
			}
			console.error("Firebase login error:", error);
		}
	};

	const watchedEmail = watch("email");
	const watchedPassword = watch("password");
	const watchedCheckbox = watch("checkbox");
	return (
		<main className="bg-background-two grid place-items-center h-screen px-6 md:px-0">
			<section className="flex flex-col max-w-[502px] w-full bg-background-one rounded-[24px] px-6 md:px-[44px] pt-8 pb-10 shadow-md">
				<div className="flex items-center justify-between w-full">
					<div className="flex gap-4 items-center">
						<Link to="/" className="h-[56px] relative flex items-center text-gray-two">
							Register
						</Link>
						<Link to="/login" className="h-[56px] relative flex items-center text-gray-one">
							Login <span className="block h-[2px] absolute bottom-0 right-0 left-0 bg-[#ef498f]" />
						</Link>
					</div>
					<IconRemove />
				</div>
				<div className="flex gap-4 mt-8 mb-[28px]">
					<AppleIcon /> <FacebookIcon /> <GoogleIcon />
				</div>
				<div>
					{errors.root && (
						<p className="text-red-600 bg-red-100 border border-red-300 px-4 py-2 rounded-md mb-4">
							{errors.root.message}
						</p>
					)}
					<p className="text-gray-three text-[13px] mb-[20px]">or register with email</p>
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
										})}
										className="focus:border-0 focus:outline-0 text-[15px] text-gray-one placeholder:text-[15px] placeholder:text-gray-two w-full"
										placeholder="Email address"
										onFocus={(e) => handleFocus(e.target.id)}
										onBlur={handleBlur}
									/>
								</fieldset>
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

								<button type="button" onClick={handleShowPassword}>
									<IconEye className="ml-[8px]" />
								</button>
							</div>

							{errors.password && (
								<p className="text-[13px] mt-[2px] text-status-error">{errors.password.message}</p>
							)}
						</div>
						<button
							type="submit"
							disabled={isSubmitting}
							className="font-bold font-primary text-white bg-primary rounded-[12px] w-full h-[56px] mt-8 disabled:opacity-50"
						>
							{isSubmitting ? (
								<span className="flex gap-2 items-center justify-center">
									<div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
									Login...
								</span>
							) : (
								"Login to Dashboard"
							)}
						</button>
						<Checkbox register={register} text="Remember me" watchedCheckbox={watchedCheckbox} />
					</form>
				</div>
			</section>
		</main>
	);
}
