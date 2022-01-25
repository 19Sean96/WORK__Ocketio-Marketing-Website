import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import ContentWrapper from "../ContentWrapper";
import ScrollAnimation from "react-animate-on-scroll";

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
      <ScrollAnimation
        animateIn="animate__fadeInUp"
        animateOnce={true}
        duration={0.623}
        className="section__with-grid all-columns"
      >
        <section
          className="section section__with-grid all-columns"
          id="emailIntake"
        >
          <div className="section--heading">
            <ScrollAnimation
              animateIn="animate__fadeInDown"
              duration={0.625}
              animateOnce={true}
              delay={335}
              className="section--heading--title"
            >
              <h4 className="h4">Be the first to know.</h4>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="animate__fadeInUp"
              duration={0.625}
              animateOnce={true}
              delay={445}
              className="section--heading--title"
            >
              <p className="p-small">
                Follow along as we test, tweak, and improve the beta to make
                sure you never miss a beat.
              </p>
            </ScrollAnimation>
          </div>
          <ScrollAnimation
            animateIn="animate__fadeIn"
            duration={0.555}
            animateOnce={true}
            delay={488}
            className="section--form__wrapper"
          >
            <EmailIntakeInput />
          </ScrollAnimation>
        </section>
      </ScrollAnimation>
    </ContentWrapper>
  );
};

export default EmailIntakeBanner;
