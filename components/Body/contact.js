import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import NumberFormat from "react-number-format";
import ContentWrapper from "../ContentWrapper";
import FAQList from "../util/FAQ";

import {
  BsTelephone,
  BsEnvelope,
  BsBriefcase,
  BsLifePreserver,
  BsNewspaper,
} from "react-icons/bs";

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

  return (
    <ContentWrapper>
      <section
        className="section section__with-grid all-columns"
        id="contactPortal"
      >
        <div className="section--heading">
          <h2 className="h2 capitalize">contact us</h2>
          <p className="p-small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
            gravida sem enim sed.
          </p>
        </div>
        <div className="section--info">
          <a href="mailto:support@wirewise.io" className="section--info--item">
            <div className="section--info--icon">
              <BsEnvelope
                style={{
                  height: "25px",
                  width: "25px",
                }}
              />
            </div>
            <div className="section--info--text">
              <h6 className="h6">Send us an email</h6>
              <p className="p-small">support@wirewise.io</p>
            </div>
          </a>
          <a href="tel:4878701054" className="section--info--item">
            <div className="section--info--icon">
              <BsTelephone
                style={{
                  width: "25px",
                  height: "25px",
                }}
              />
            </div>
            <div className="section--info--text">
              <h6 className="h6">Call us</h6>
              <p className="p-small">(487) 870-1054</p>
            </div>
          </a>
        </div>
        <div className="section--form__wrapper">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="section--form"
            id="contactform"
          >
            <div
              className={`section--form--input__wrapper half ${
                watchAllInputs?.fullName?.length > 0 ? "has-value" : ""
              }`}
            >
              <input
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
            </div>
            <div
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
            </div>
            <div
              className={`section--form--input__wrapper half ${
                watchAllInputs?.email?.length > 0 ? "has-value" : ""
              }`}
            >
              <input
                type="email"
                {...register("email", { required: true })}
                className="section--form--input"
              />
              <label
                htmlFor="email"
                className="section--form--input__label j-display _400"
              >
                Email Address
              </label>
            </div>
            <div
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
            </div>
            <div
              className={`section--form--input__wrapper full ${
                watchAllInputs?.message?.length > 0 ? "has-value" : ""
              }`}
            >
              <textarea
                {...register("message", { required: false })}
                className="section--form--input"
              />
              <label
                htmlFor="message"
                className="section--form--input__label j-display _400"
              >
                How can we help?
              </label>
            </div>
            <div className="section--form--input__wrapper full">
              <input
                id="submit"
                type="submit"
                value="contact us"
                className="btn btn--filled capitalize"
              />
            </div>
          </form>
        </div>
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
        <div className="section--heading">
          <h4 className="h4 capitalize">more points of contact</h4>
          <p className="p-small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
            felis, et id aliquam ac tincidunt. Sapien vel tellus mattis
            hendrerit orci. Ut etiam nullam.
          </p>
        </div>
        <article className="section--body">
          <a href="mailto:sales@wirewise.io" className="section--body--item">
            <BsBriefcase />
            <h6 className="h6 capitalize">sales</h6>
            <p className="p-small text">
              Lorem ipsum dolor sit amet, lomilio consecteturol adipiscing elit
              element
            </p>
            <p className="p-small capitalize cta">contact sales</p>
          </a>
          <a href="mailto:support@wirewise.io" className="section--body--item">
            <BsLifePreserver />
            <h6 className="h6 capitalize">help & support</h6>
            <p className="p-small text">
              Lorem ipsum dolor sit amet, lomilio consecteturol adipiscing elit
              element
            </p>
            <p className="p-small capitalize cta">contact support</p>
          </a>
          <a href="mailto:press@wirewise.io" className="section--body--item">
            <BsNewspaper />
            <h6 className="h6 capitalize">media & press</h6>
            <p className="p-small text">
              Lorem ipsum dolor sit amet, lomilio consecteturol adipiscing elit
              element
            </p>
            <p className="p-small capitalize cta">contact media</p>
          </a>
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
        <div className="section--heading">
          <h4 className="h4 capitalize">frequently asked questions</h4>
          <p className="p-small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
            felis, et id aliquam ac tincidunt. Sapien vel tellus mattis
            hendrerit orci. Ut etiam nullam.
          </p>
        </div>
        <div className="section--body">
          <FAQList list={faqs}/>
        </div>
      </section>
    </ContentWrapper>
  );
};

export { ContactPortal, MoreContact, ContactFAQ };
