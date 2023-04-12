import image from "./heroImage.jpg";
import "./SucceedWithData.scss";

const SucceedWithData = () => {
  return (
    <>
      <section className="succeedWithData-section">
        <div className="hero__text-content">
          <p className="hero__title">Succeed with data</p>
          <p className="hero__subtitle">
            PowerMetrics is a lightweight BI tool that helps you explore and
            share the right insights at the right time.
          </p>

          <div className="hero__cta-group">
            <button type="button" className="hero__button">
              Get PowerMetrics Free
            </button>
            <p className="hero__req-demo">Request a demo</p>
          </div>
        </div>

        <img src={image} alt="the man" />
      </section>
    </>
  );
};

export default SucceedWithData;
