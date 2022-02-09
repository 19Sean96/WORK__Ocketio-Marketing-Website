import { useForm, Controller } from "react-hook-form";
import NumberFormat from "react-number-format";
import ContentWrapper from "../ContentWrapper";
import FAQList from "../util/FAQ";
import ScrollAnimation from "react-animate-on-scroll";

import {
  BsTelephone,
  BsEnvelope,
  BsBriefcase,
  BsLifePreserver,
  BsNewspaper,
} from "react-icons/bs";
import { useEffect } from "react";

const animateOnce = true;

const ContactPortal = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const watchAllInputs = watch();
  useEffect(() => {
    console.log(watchAllInputs)
  }, [watchAllInputs])
  return (
    <ContentWrapper>
      <section
        className="section section__with-grid all-columns"
        id="contactPortal"
      >
        <ScrollAnimation
          animateOnce={animateOnce}
          animateIn="animate__fadeInDown"
          duration={0.9}
          className="section--heading"
        >
          <h2 className="h2 capitalize" style={{
            color: '#f6f6f6'
          }}>contact us</h2>
          <p className="p-small" style={{
            color: '#f6f6f6',
            opacity: .6
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
            gravida sem enim sed.
          </p>
        </ScrollAnimation>
        <div className="section--info">
          <a href="mailto:support@wirewise.io" className="section--info--item">
            <ScrollAnimation
              animateOnce={animateOnce}
              animateIn="animate__fadeInUp"
              duration={0.4}
              delay={400}
              className="section--info--icon"
            >
              <BsEnvelope
                style={{
                  height: "25px",
                  width: "25px",
                }}
              />
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce={animateOnce}
              animateIn="animate__fadeInRight"
              duration={1.1}
              className="section--info--text"
            >
              <h6 className="h6">Send us an email</h6>
              <p className="p-small">support@wirewise.io</p>
            </ScrollAnimation>
          </a>
          <a href="tel:4878701054" className="section--info--item">
            <ScrollAnimation
              animateOnce={animateOnce}
              animateIn="animate__fadeInUp"
              duration={0.4}
              delay={400}
              className="section--info--icon"
            >
              <BsTelephone
                style={{
                  width: "25px",
                  height: "25px",
                }}
              />
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce={animateOnce}
              animateIn="animate__fadeInRight"
              duration={1.1}
              className="section--info--text"
            >
              <h6 className="h6">Call us</h6>
              <p className="p-small">(487) 870-1054</p>
            </ScrollAnimation>
          </a>
        </div>
        <ScrollAnimation
          animateOnce={animateOnce}
          animateIn="animate__fadeInRight"
          delay={0}
          duration={0.7}
          className="section--form__wrapper"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="section--form"
            id="contactform"
          >
            <ScrollAnimation
              animateOnce={animateOnce}
              animateIn="animate__fadeInDown"
              delay={200}
              duration={0.6}
              className={`section--form--input__wrapper half ${
                watchAllInputs?.fullName?.length > 0 ? "has-value" : ""
              }`}
            >
              <input
                required
                className="section--form--input"
                type="text"
                {...register("fullName", { required: true })}
                // onChange={e => console.log(e)}
              />
              <label
                htmlFor="fullName"
                className="section--form--input__label j-display _400"
              >
                Full Name
              </label>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce={animateOnce}
              animateIn="animate__fadeInDown"
              delay={200}
              duration={0.6}
              className={`section--form--input__wrapper half ${
                watchAllInputs?.companyName?.length > 0 ? "has-value" : ""
              }`}
            >
              <input
                className="section--form--input"
                type="text"
                {...register("companyName", { required: false })}
              />
              <label
                htmlFor="companyName"
                className="section--form--input__label j-display _400"
              >
                Company Name
              </label>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce={animateOnce}
              animateIn="animate__fadeInDown"
              delay={300}
              duration={0.6}
              className={`section--form--input__wrapper half ${
                watchAllInputs?.emailInput?.length > 0 ? "has-value" : ""
              }`}
            >
              <input
                required
                type="email"
                {...register("emailInput", { required: true })}
                className="section--form--input"
              />
              <label
                htmlFor="emailInput"
                className="section--form--input__label j-display _400"
              >
                Email Address
              </label>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce={animateOnce}
              animateIn="animate__fadeInDown"
              delay={300}
              duration={0.6}
              className={`section--form--input__wrapper half ${
                watchAllInputs?.phone?.length > 0 ? "has-value" : ""
              }`}
            >
              <Controller
                name="phone"
                control={control}
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <NumberFormat
                    required
                    format="+1 (###) ###-####"
                    mask="_"
                    onValueChange={(v) => onChange(v.value)}
                    value={value}
                    className="section--form--input"
                  />
                )}
              />
              <label
                htmlFor="phone"
                className="section--form--input__label j-display _400"
              >
                Phone Number
              </label>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce={animateOnce}
              animateIn="animate__fadeInDown"
              delay={400}
              duration={.6}
              className={`section--form--input__wrapper full ${
                watchAllInputs?.contactType?.length > 0 ? "has-value" : ""
              }`}
            >
              <select name="contactType" id="contactType" className="section--form--input" {...register('contactType', { required: false })}>
                  <option value="" selected></option>
                  <option className="capitalize" value="I'd like to learn more about the platform.">I'd like to learn more about the platform.</option>
                  <option className="capitalize" value="Feature request.">Feature request.</option>
                  <option className="capitalize" value="I need help/support">I need help/support</option>
                  <option className="capitalize" value="Media/Press Questions">Media/Press Questions</option>
                  <option className="capitalize" value="Other (please describe)">Other (please describe)</option>
              </select>
              <label htmlFor="contactType" className="section--form--input__label j-dsiplay _400">How can we help?</label>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce={animateOnce}
              animateIn="animate__fadeInDown"
              delay={400}
              duration={0.6}
              className={`section--form--input__wrapper full ${
                watchAllInputs?.message?.length > 0 ? "has-value" : ""
              }`}
            >
              <textarea
                {...register("message", { required: false })}
                className="section--form--input"
                required
              />
              <label
                htmlFor="message"
                className="section--form--input__label j-display _400"
              >
                Tell us more 
              </label>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce={animateOnce}
              animateIn="animate__fadeInUp"
              delay={600}
              duration={0.8}
              className="section--form--input__wrapper full"
            >
              <input
                id="submit"
                type="submit"
                value="contact us"
                className="btn btn--filled capitalize"
              />
            </ScrollAnimation>
          </form>
        </ScrollAnimation>
      </section>
    </ContentWrapper>
  );
};

const MoreContact = (props) => {
  return (
    <ContentWrapper>
      <section
        className="section section__with-grid all-columns"
        id="moreContact"
      >
        <ScrollAnimation
          animateOnce={animateOnce}
          animateIn="animate__fadeInDown"
          duration={0.6}
          className="section--heading"
        >
          <h4 className="h4 capitalize">more points of contact</h4>
          <p className="p-small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
            felis, et id aliquam ac tincidunt. Sapien vel tellus mattis
            hendrerit orci. Ut etiam nullam.
          </p>
        </ScrollAnimation>
        <article className="section--body">
          <ScrollAnimation
            animateOnce={animateOnce}
            animateIn="animate__fadeInUp"
            className="section--body--item__wrapper"
            duration={0.4}
          >
            <div className="section--body--item">
              <BsBriefcase />
              <ScrollAnimation
                animateOnce={animateOnce}
                animateIn="animate__fadeInDown"
                delay={100}
                duration={0.8}
              >
                <h6 className="h6 capitalize">sales</h6>
              </ScrollAnimation>
              <ScrollAnimation
                animateOnce={animateOnce}
                animateIn="animate__fadeInDown"
                delay={200}
                duration={0.8}
              >
                <p className="p-small text">
                  Lorem ipsum dolor sit amet, lomilio consecteturol adipiscing
                  elit element
                </p>
              </ScrollAnimation>
              <ScrollAnimation
                animateOnce={animateOnce}
                animateIn="animate__fadeInUp"
                delay={300}
                duration={0.8}
              >
                <a href="mailto:sales@wirewise.io">
                  <p className="p-small capitalize cta">contact sales</p>
                </a>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce={animateOnce}
            animateIn="animate__fadeInUp"
            className="section--body--item__wrapper"
            duration={0.4}
            delay={111}
          >
            <div className="section--body--item">
              <BsLifePreserver />
              <ScrollAnimation
                animateOnce={animateOnce}
                animateIn="animate__fadeInDown"
                delay={100}
                duration={0.8}
              >
                <h6 className="h6 capitalize">help & support</h6>
              </ScrollAnimation>
              <ScrollAnimation
                animateOnce={animateOnce}
                animateIn="animate__fadeInDown"
                delay={200}
                duration={0.8}
              >
                <p className="p-small text">
                  Lorem ipsum dolor sit amet, lomilio consecteturol adipiscing
                  elit element
                </p>
              </ScrollAnimation>
              <ScrollAnimation
                animateOnce={animateOnce}
                animateIn="animate__fadeInUp"
                delay={300}
                duration={0.8}
              >
                <a href="mailto:support@wirewise.io">
                  <p className="p-small capitalize cta">contact support</p>
                </a>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce={animateOnce}
            animateIn="animate__fadeInUp"
            className="section--body--item__wrapper"
            duration={0.4}
            delay={222}
          >
            <div className="section--body--item">
              <BsNewspaper />
              <ScrollAnimation
                animateOnce={animateOnce}
                animateIn="animate__fadeInDown"
                delay={100}
                duration={0.8}
              >
                <h6 className="h6 capitalize">media & press</h6>
              </ScrollAnimation>
              <ScrollAnimation
                animateOnce={animateOnce}
                animateIn="animate__fadeInDown"
                delay={200}
                duration={0.8}
              >
                <p className="p-small text">
                  Lorem ipsum dolor sit amet, lomilio consecteturol adipiscing
                  elit element
                </p>
              </ScrollAnimation>
              <ScrollAnimation
                animateOnce={animateOnce}
                animateIn="animate__fadeInUp"
                delay={300}
                duration={0.8}
              >
                <a href="mailto:press@wirewise.io">
                  <p className="p-small capitalize cta">contact media</p>
                </a>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
        </article>
      </section>
    </ContentWrapper>
  );
};

const ContactFAQ = (props) => {
  const faqs = [
    {
      question: "Does Wirewise offer free trials?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget facilisi sit commodo tristique tincidunt eget egestas quam. Gravida mattis urna, bibendum feugiat vulputate feugiat mauris. Lacus facilisi viverra.",
    },
    {
      question: "How many users can I invite to my account?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget facilisi sit commodo tristique tincidunt eget egestas quam. Gravida mattis urna, bibendum feugiat vulputate feugiat mauris. Lacus facilisi viverra.",
    },
    {
      question: "Do you offer discounts for non-profits?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget facilisi sit commodo tristique tincidunt eget egestas quam. Gravida mattis urna, bibendum feugiat vulputate feugiat mauris. Lacus facilisi viverra.",
    },
    {
      question: "Can I get a refund if I don't like the product?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget facilisi sit commodo tristique tincidunt eget egestas quam. Gravida mattis urna, bibendum feugiat vulputate feugiat mauris. Lacus facilisi viverra.",
    },
  ];

  return (
    <ContentWrapper>
      <section
        className=" section section__with-grid all-columns"
        id="contactFAQ"
      >
        <ScrollAnimation
          animateOnce={animateOnce}
          animateIn="animate__fadeInDown"
          duration={0.48}
          className="section--heading"
        >
          <h4 className="h4 capitalize">frequently asked questions</h4>
          <p className="p-small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
            felis, et id aliquam ac tincidunt. Sapien vel tellus mattis
            hendrerit orci. Ut etiam nullam.
          </p>
        </ScrollAnimation>
        <div className="section--body">
          <FAQList list={faqs} />
        </div>
      </section>
    </ContentWrapper>
  );
};

export { ContactPortal, MoreContact, ContactFAQ };
