import { Link } from "react-router";
import { IconRemove } from "../assets/Icons";
import successImage from "../assets/success-image.png";

export default function Success() {
	return (
		<main className="bg-background-two grid place-items-center h-screen px-6 md:px-0">
			<section className="flex flex-col max-w-[502px] w-full bg-background-one rounded-[24px] overflow-hidden shadow-md">
				<figure className="relative bg-[#EF498F]/14 w-full flex items-center justify-center">
					<span className="absolute right-8 top-8 ">
						<IconRemove />
					</span>
					<img src={successImage} alt="" />
				</figure>
				<div className="px-6 md:px-[44px] py-6 md:py-12">
					<h1 className="w-full text-[44px] font-bold leading-12 mb-12">
						You are successfully registered!
					</h1>
					<Link
						to="/login"
						className="font-bold text-white bg-primary rounded-[12px] flex items-center justify-center w-full h-[56px]"
					>
						Go to Login
					</Link>
				</div>
			</section>
		</main>
	);
}
