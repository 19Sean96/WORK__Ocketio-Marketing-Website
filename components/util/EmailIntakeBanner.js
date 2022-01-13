import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import ContentWrapper from "../ContentWrapper";
import EmailIntakeInput from "./EmailIntakeInput";
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
        <EmailIntakeInput />
      </section>
    </ContentWrapper>
  );
};

export default EmailIntakeBanner;
