import ContentWrapper from "@util/ContentWrapper";
import Head from "@head/Privacy";
import privacyPolicy from "@constants/privacy/privacyPolicy";
export default function Privacy() {
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
              {privacyPolicy.map((par) => (
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
