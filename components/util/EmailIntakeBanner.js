import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import ContentWrapper from "../ContentWrapper";
const EmailIntakeBanner = (props) => {
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
        id="emailIntake"
      >
        <div className="section--heading">
          <h5 className="h5">
            Be the first to know.
          </h5>
          <p className="p-small">Follow along as we test, tweak, and improve the beta to make sure you never miss a beat.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="section--form">
          <div
            className={`section--form--input__wrapper ${
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
              Your email
            </label>
          </div>
          <input
            id="submit"
            type="submit"
            value="subscribe"
            className="btn btn--filled capitalize"
          />
        </form>
      </section>
    </ContentWrapper>
  );
};

export default EmailIntakeBanner;
