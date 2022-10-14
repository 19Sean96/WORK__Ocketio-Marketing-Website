import { useForm, Controller } from "react-hook-form";
import NumberFormat from "react-number-format";
import ContentWrapper from "@util/ContentWrapper";
import ScrollAnimation from "react-animate-on-scroll";
import Link from "next/link";
import { BsCaretDownFill } from "react-icons/bs";
import { useEffect } from "react";
import { useAppContext } from "@context/app";
import SingleCircle from "@elements/decorations/SingleCircle";

export default () => {
	const {
		register,
		handleSubmit,
		watch,
		control,
		formState: { errors },
	} = useForm();
	const onSubmit = async (data) => {
		let [firstName, lastName] = data.fullName.split(" ");
		lastName = lastName ? lastName : "";
		const result = await fetch("/api/processContactForm", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		const res = await result.json();

		if (res.addContactResponse.status === 200) {
			sendinblue.identify(data.emailInput, {
				EMAIL: data.emailInput,
				FIRSTNAME: firstName,
				LASTNAME: lastName,
				id: res.addContactResponse.data.id,
				emailSent: true,
			});

			sendinblue.track(
				"contact_added",
				{
					EMAIL: data.emailInput,
					FIRSTNAME: firstName,
					LASTNAME: lastName,
				},
				{
					id: "1234",
					data: {
						contact_type: data.contactType,
						subscribed: data.newsletterOptIn,
					},
				}
			);
		}
		console.log("RESULTING: ", res);
	};

	const { isMobile } = useAppContext();

	const watchAllInputs = watch();
	useEffect(() => {
		console.log(watchAllInputs);
	}, [watchAllInputs]);
	return (
		<ContentWrapper>
			<SingleCircle
				styles={{
					height: "525px",
					width: "525px",
					bottom: "0",
					left: "0",
					transform: "translate(-20vw, 33%)",
					backgroundColor: "#151779",
					ringColor: "#339BFC",
					ringSize: "132.5%",
				}}
				withRing
			/>
			<section
				className="section section__with-grid all-columns"
				id="contactPortal">
				<div className="bg"></div>
				<ScrollAnimation
					animateOnce={true}
					animateIn="animate__fadeInDown"
					duration={0.9}
					className="section--heading">
					<h1 className="h1 capitalize">contact us</h1>
					<p className="p-lg">
						We're always here to help. Fill out this form and we'll get back to
						you right away.
					</p>
				</ScrollAnimation>
				<ScrollAnimation
					animateOnce={true}
					animateIn="animate__fadeInRight"
					delay={0}
					duration={0.7}
					className="section--form__wrapper">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="section--form"
						id="contactform">
						<ScrollAnimation
							animateOnce={true}
							animateIn="animate__fadeInDown"
							delay={200}
							duration={0.6}
							className={`section--form--input__wrapper half ${
								watchAllInputs?.fullName?.length > 0 ? "has-value" : ""
							}`}
							offset={isMobile ? -1500 : 0}>
							<input
								required
								className="section--form--input"
								type="text"
								{...register("fullName", { required: true })}
							/>
							<label htmlFor="fullName" className="section--form--input__label">
								Full Name
							</label>
						</ScrollAnimation>
						<ScrollAnimation
							animateOnce={true}
							animateIn="animate__fadeInDown"
							delay={200}
							duration={0.6}
							className={`section--form--input__wrapper half ${
								watchAllInputs?.companyName?.length > 0 ? "has-value" : ""
							}`}
							offset={isMobile ? -1500 : 0}>
							<input
								className="section--form--input"
								type="text"
								{...register("companyName", { required: false })}
							/>
							<label
								htmlFor="companyName"
								className="section--form--input__label">
								Company Name
							</label>
						</ScrollAnimation>
						<ScrollAnimation
							animateOnce={true}
							animateIn="animate__fadeInDown"
							delay={300}
							duration={0.6}
							className={`section--form--input__wrapper half ${
								watchAllInputs?.emailInput?.length > 0 ? "has-value" : ""
							}`}
							offset={isMobile ? -1500 : 0}>
							<input
								required
								type="email"
								{...register("emailInput", { required: true })}
								className="section--form--input"
							/>
							<label
								htmlFor="emailInput"
								className="section--form--input__label">
								Email Address
							</label>
						</ScrollAnimation>
						<ScrollAnimation
							animateOnce={true}
							animateIn="animate__fadeInDown"
							delay={300}
							duration={0.6}
							className={`section--form--input__wrapper half ${
								watchAllInputs?.phone?.length > 0 ? "has-value" : ""
							}`}
							offset={isMobile ? -1500 : 0}>
							<Controller
								name="phone"
								control={control}
								render={({
									field: { onChange, onBlur, value, name, ref },
									fieldState: { invalid, isTouched, isDirty, error },
								}) => (
									<NumberFormat
										required={false}
										format="+1 (###) ###-####"
										mask="_"
										onValueChange={(v) => onChange(v.value)}
										value={value}
										className="section--form--input"
									/>
								)}
							/>
							<label htmlFor="phone" className="section--form--input__label">
								Phone Number
							</label>
						</ScrollAnimation>
						<ScrollAnimation
							animateOnce={true}
							animateIn="animate__fadeInDown"
							delay={400}
							duration={0.6}
							className={`with-caret section--form--input__wrapper full ${
								watchAllInputs?.contactType?.length > 0 ? "has-value" : ""
							}`}
							style={{
								maxWidth: "583px",
							}}
							offset={isMobile ? -1500 : 0}>
							<select
								name="contactType"
								id="contactType"
								className="section--form--input"
								{...register("contactType", { required: false })}>
								<option value="" selected></option>
								<option className="capitalize" value="learn more">
									I'd like to learn more about the solution
								</option>
								<option className="capitalize" value="feature requested">
									I need help/support
								</option>
								<option className="capitalize" value="needs help/support">
									I have a feature request
								</option>
								<option className="capitalize" value="media/press">
									I have a media/press question
								</option>
								<option className="capitalize" value="general">
									Other (please describe)
								</option>
							</select>
							<label
								htmlFor="contactType"
								className="section--form--input__label j-dsiplay _400">
								How can we help?
							</label>
							<BsCaretDownFill className="section--form--input__caret" />
						</ScrollAnimation>
						<ScrollAnimation
							animateOnce={true}
							animateIn="animate__fadeInDown"
							delay={400}
							duration={0.6}
							className={`section--form--input__wrapper full ${
								watchAllInputs?.message?.length > 0 ? "has-value" : ""
							}`}
							offset={isMobile ? -1500 : 0}>
							<textarea
								{...register("message", { required: false })}
								className="section--form--input"
								required
							/>
							<label htmlFor="message" className="section--form--input__label">
								Tell us more
							</label>
						</ScrollAnimation>
						<div className="section--form--footer">
							<ScrollAnimation
								animateOnce={true}
								animateIn="animate__fadeInDown"
								delay={isMobile ? 0 : 400}
								duration={0.6}
								className={`optInWrapper section--form--input__wrapper full`}
								offset={isMobile ? -1500 : 0}>
								<label
									htmlFor="newsletterOptIn"
									className="section--form--input__label">
									<input
										type="checkbox"
										name="newsletterOptIn"
										id="newsletterOptIn"
										{...register("newsletterOptIn", { required: false })}
									/>
									<span> Sign up for our newsletter</span>
								</label>
								<span className="disclaimer">
									See our <Link href="/privacy">Privacy Policy.</Link> for more
									information.
								</span>
							</ScrollAnimation>
							<ScrollAnimation
								animateOnce={true}
								animateIn="animate__fadeInUp"
								delay={isMobile ? 0 : 600}
								duration={0.8}
								className="section--form--input__wrapper full"
								offset={isMobile ? -1500 : 0}>
								<input
									id="submit"
									type="submit"
									value="submit"
									className="btn btn--filled capitalize"
								/>
							</ScrollAnimation>
						</div>
					</form>
				</ScrollAnimation>
			</section>
		</ContentWrapper>
	);
};