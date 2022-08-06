import { useForm } from "react-hook-form";
import ContentWrapper from "../Site.Globals/ContentWrapper";
import ScrollAnimation from "react-animate-on-scroll";

import EmailInput from "./EmailInput";
const EmailIntake = () => {

  return (
    <ContentWrapper>
      <ScrollAnimation
        animateIn="animate__fadeInUp"
        animateOnce={true}
        duration={0.623}
        className="section__with-grid all-columns"
        style={{
          justifyItems: 'center'
        }}
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
              <h4 className="h4">Stay in the loop.</h4>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="animate__fadeInUp"
              duration={0.625}
              animateOnce={true}
              delay={445}
              className="section--heading--title"
            >
              <p className="p-small">
              Follow along as we release updates and add features to make sure you never miss a beat.
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
            <EmailInput />
          </ScrollAnimation>
        </section>
      </ScrollAnimation>
    </ContentWrapper>
  );
};

export default EmailIntake;
