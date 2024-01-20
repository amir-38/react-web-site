import Carousel from "../../Interactive/Carousel";
import "./aboutStyles.css";
import "../Home/homeSteyles.css";
export default function About() {
  const texts = [
    `
    <h1 className="corusel-text">
      <span className="first-text">by</span>
      <span className="second-text">colorlib.</span>GO!
    </h1>`,
    `
    <h1 className="corusel-text">
      <span className="first-text">by</span>
      <span className="second-text">colorlib.</span>GO!
    </h1>`,
    `
    <h1 className="corusel-text">
      <span className="first-text">by</span>
      <span className="second-text">colorlib.</span>GO!
    </h1>`,
  ];

  return (
    <div className="about">
      <Carousel visibleItemsCount={1} isInfinite>
        {texts.map((text, index) => (
          <div
            style={{ fontSize: 3 }}
            key={index}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        ))}
      </Carousel>
    </div>
  );
}
