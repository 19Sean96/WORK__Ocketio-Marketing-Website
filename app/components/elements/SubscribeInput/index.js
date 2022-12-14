import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { AiFillMail, AiOutlineArrowUp } from "react-icons/ai";
import ScrollAnimation from "react-animate-on-scroll";
import Section from "./index.styled";
import SingleCircle from "@elements/decorations/SingleCircle";
import { $bluedark, $bluemid } from "@lib/Colors";
export default () => {
	const {
		register,
		handleSubmit,
		watch,
		control,
		formState: { errors },
	} = useForm();

	const watchAllInputs = watch();

	const onSubmit = async (data) => {
		let { email } = data;

		const result = await fetch("/api/addSubscriber", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		const res = await result.json();
		console.log("RESULTING: ", res);

		useEffect(() => {
			console.log(watchAllInputs);
		}, [watchAllInputs]);
	};
	return (
		<Section
			className="section section__with-grid all-columns"
			id="emailIntake">
			<div className="bg"></div>
			<SingleCircle
				styles={{
					height: "455px",
					top: "0",
					left: "0",
					transform: "translate(-25vw, -25%)",
					zIndex: "0",
					backgroundColor: $bluedark,
				}}
				uniqueClass="emailIntake-decor-1"
			/>
			<SingleCircle
				styles={{
					height: "455px",
					bottom: "0",
					right: "0",
					transform: "translate(25vw, 35%)",
					zIndex: 2,
					backgroundColor: $bluemid,
				}}
				uniqueClass="emailIntake-decor-2"
			/>
			<div className="section--heading">
				<ScrollAnimation
					animateIn="animate__fadeInDown"
					duration={0.625}
					animateOnce={true}
					delay={335}>
					<h3 className="h3">Be the first to know.</h3>
				</ScrollAnimation>
				<ScrollAnimation
					animateIn="animate__fadeInUp"
					duration={0.625}
					animateOnce={true}
					delay={445}>
					<p className="p-sm">
						Follow along as we test, tweak, and improve the beta to make sure
						you never miss a beat.
					</p>
				</ScrollAnimation>
			</div>
			<ScrollAnimation
				animateIn="animate__fadeIn"
				duration={0.555}
				animateOnce={true}
				delay={488}
				className="section--form__wrapper">
				<form onSubmit={handleSubmit(onSubmit)} className="section--form">
					<div
						className={`section--form--input__wrapper ${
							watchAllInputs?.email?.length > 0 ? "has-value" : ""
						}`}>
						<input
							type="email"
							{...register("email", { required: true })}
							className="section--form--input"
						/>
						<AiFillMail className="section--form--input__icon" />
						<label htmlFor="email" className="section--form--input__label">
							Email Address
						</label>
					</div>
					<input
						id="submit"
						type="submit"
						value="subscribe"
						className="btn btn--filled capitalize"
					/>
				</form>
			</ScrollAnimation>
		</Section>
	);
};
