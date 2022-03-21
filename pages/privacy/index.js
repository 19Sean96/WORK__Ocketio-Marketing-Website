import ContentWrapper from "../../components/ContentWrapper";
import Head from "../../components/Pages.Head/Privacy";
export default function Privacy() {
  const paragraphs = [
    {
      title: `General Privacy Policy Introduction`,
      body: `This privacy policy (Policy) explains the privacy rules applicable to all information collected or submitted when you access Unwired Revolution services and visit our website. By visiting this website, submitting your personal data to us, or using our services you confirm that you have read this Policy and you agree to be bound by this Policy.`,
    },
    {
      title: `Information you provide Contact information`,
      body: `We encourage you to contact us via email or our contact form. We may use the provided information to contact you regarding future offers that may be of interest to you.`,
    },
    {
      title: `‍Links to third-party websites`,
      body: `Our website may include links to other websites whose privacy practices may be different from ours. If you submit personal information to any of those sites, your information is governed by their privacy policies.`,
    },
    {
      title: `‍Other Data`,
      body: `We may also collect other types of information in the manner disclosed by us at the time such information is collected.`,
    },
    {
      title: `‍Data collected on our website Access logs.`,
      body: `Our website may collect access logs (e.g. your IP address, operating system, browser information). We use this information to help us to better design our site, to help diagnose problems, and to administer our website.`,
    },
    {
      title: `Traffic data`,
      body: `To analyze and improve our services and user experience we use analytics service providers (e. g. Google Analytics, Hotjar). Aggregate information they collect does not directly identify you, but provides various statistics such as which channels visitors enter the site through, pages they visit and for how long they stay there. We may also see the following: your device's IP address, device type, browser information, geographic location (country only), preferred language, title of the page being viewed, screen size and resolution, outlinks, referrers, page and website speed. For collection of such information our service providers mostly use cookies.`,
    },
    {
      title: `‍Advertising`,
      body: `We may receive certain data about you, such as cookie ID, mobile device ID, your name, position or email address, and inferences about your interests and preferences from certain advertisers and advertising partners for advertising purposes. Our advertising partners help us deliver more relevant ads and promotional messages to you, which may include interest-based advertising and account-based advertising.`,
    },
    {
      title: `‍Data Sharing`,
      body: `We do not share your personal information with third parties except as described in this Policy. We may share your personal information with third party service providers, affiliated companies within our corporate structure and as needed for legal purposes. We have the following third party service providers: an email automation service provider, website analytics service providers, providers for website customization, data storage providers and others that help us enhance our Services. Our service providers have access to personal information only as needed to perform their functions and they must process the personal information in accordance with this Policy.`,
    },
    {
      title: `‍Third Party Tools`,
      body: `We may use various third-party tools to store contacts, send communications to you, or confirm your sign up to news subscriptions or waitlists. These tools may collect information about you, such as IP address, location, device information and track the actions such as unsubscribe or email forward. This information is used to optimize our email campaigns.`,
    },
    {
      title: `‍Data Security`,
      body: `We take data security very seriously and take all steps reasonably necessary to secure your data. However, no company can guarantee the absolute security of Internet communications. By providing any personal information to us, you expressly acknowledge that we cannot guarantee the security of any data provided to or received by us through the Services and that any information received from you through the website or our Services is provided at your own responsibility. If you have any questions about how we secure your information, contact us at our email address provided below.`,
    },
    {
      title: `‍Your Data Protection Rights`,
      body: `If you wish us to edit or delete your information, please contact us at our email address provided below.`,
    },
    {
      title: `‍Personal data of underage persons`,
      body: `Persons younger than 16 years old shall not use our Services and provide any personal data to us without the supervision of parents or guardians. We do not knowingly collect personal information from persons younger than 16. Based on the above, it is presumed that any person using the Services and supplying personal data to us is at least 16 years of age. If you learn that anyone younger than 16 has unlawfully provided us with personal data, please contact us and we will take steps to delete such personal information.`,
    },
    {
      title: `‍Term for Storing Personal Information`,
      body: `Personal data is processed and/or stored for purpose of providing you the best possible service by enabling us to: Properly administer business communication with users; Operate our services and ensure their secure, reliable performance; Receive knowledge of how our website and applications are being used. We may process your personal data for marketing purposes in the following cases: when we obtain your consent (the legal basis for processing, in this case, is your consent) or when applicable law permits us to contact you without separate consent. We keep your personal data for as long as reasonably necessary for the purposes set out in this Privacy Policy. The data might be kept longer if required for tax, accounting, payment processing purposes, to ensure we would be able to defend or raise a claim, or where we have a specific need - though we will generally not keep personal data for longer than two years following the last date of communication with you unless the data is necessary in order to provide a contractual service.`,
    },
    {
      title: `‍GDPR`,
      body: `Unless expressly noted otherwise, Unwired Revolution shall act as the responsible personal data controller for any data processed. Users based in the European Economic Area (EEA) receive additional rights related to their personal data. You may: Request us to erase your personal data; Object to the processing of your personal data which is done on the basis of our legitimate interests (e. g. for marketing purposes); Request us to provide you with a copy of your personal data in a structured, commonly used and machine-readable format or to transmit (if technically feasible) your personal data to another controller (only where our processing is based on your consent and carried out by automated means); Restrict the processing of your personal data (when there is a legal basis for that); Withdraw your consent where processing is based on a consent you have previously provided; Exercise your rights by contacting us directly or, if all else fails, by lodging a complaint with a supervisory authority.`,
    },
    {
      title: `‍Changes to Our Policy`,
      body: `‍This Policy may be modified and updated at any time, at our sole discretion, for any or no reason, and without liability, as indicated below. The amendment of Policy may be communicated to you via email or by publishing the updated Policy on the Unwired Revolution Website. The date of the most current wording of the Policy is indicated at the top of the text. We ask all users to ensure that they are familiar with the most current wording of the Policy.`,
    },
    {
      title: `Applicable Law`,
      body: `This Policy shall be governed in all respects by the substantive laws of the United States, in the particular state where Unwired Revolution is headquartered. Any controversy, claim, or dispute arising out of or relating to the Policy shall be subject to the jurisdiction of a state or federal court in the state in which Unwired Revolution is headquartered.`,
    },
    {
      title: `‍Contact Information`,
      body: `If you have questions, requests, concerns, or complaints about our Policy or our data collection or processing practices, or if you want to report any security violations, please contact us at`,
    },
  ];
  return (
    <>
      <Head />
      <main className="main" id="main">
        <ContentWrapper>
          <section
            className="section all-columns section__with-grid"
            id="privacyPolicy"
          >
            <div className="section--heading">
              <h2 className="h2 capitalize">Privacy Policy</h2>
              <p className="p-small">Effective Date: January 1, 2022</p>
            </div>
            <div className="section--body">
              <h4 className="h4 capitalize">introduction</h4>
              {paragraphs.map((par) => (
                <article className="section--body__item">
                  <h6 className="h6">{par.title}</h6>
                  <p className="p-small">{par.body}</p>
                </article>
              ))}
            </div>
          </section>
        </ContentWrapper>
      </main>
    </>
  );
}
