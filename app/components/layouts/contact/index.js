import ContactForm from "@modules/contact/ContactForm";
import ContactFAQs from "@modules/contact/ContactFAQs";
import StyledMain from "./index.styled";
export default () => (
	<StyledMain className="main" id="main">
		<ContactForm />
		<ContactFAQs />
	</StyledMain>
);
