import "./homeSteyles.css";
import Carousel from "../../Interactive/Carousel";
import CarouselWrap from "../../Interactive/CarouselCard/CarouselCard";
import Footer from "./Footer/Footer";
export default function Home() {
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
    <>
      <div className="home-hero">
        <img
          src="https://preview.colorlib.com/theme/rango/images/slider_background.jpg.webp"
          alt=""
        />
        <div className="about">
          <Carousel visibleItemsCount={1} isInfinite>
            {texts.map((text, index) => (
              <div
                style={{ fontSize: 32 }}
                key={index}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            ))}
          </Carousel>
        </div>
      </div>
      <section className="hero-texts">
        <div className="section-first-column">
          <h2>Buil your entire website in minutes</h2>
          <button className="discover">Discover more</button>
        </div>
        <div className="section-second-column">
          <h3>
            Great team{" "}
            <span>
              Etiam euismod sapien nec est tempus consequat. Nullam eget pretium
              mi. Curabitur rhoncus finibus quam quis sodales.
            </span>
          </h3>
          <h3>
            Modern Design{" "}
            <span>
              Etiam euismod sapien nec est tempus consequat. Nullam eget pretium
              mi. Curabitur rhoncus finibus quam quis sodales.
            </span>
          </h3>
        </div>
        <div className="section-third-column">
          <h3>
            Online Marketing{" "}
            <span>
              Etiam euismod sapien nec est tempus consequat. Nullam eget pretium
              mi. Curabitur rhoncus finibus quam quis sodales.
            </span>
          </h3>
          <h3>
            Easy to use{" "}
            <span>
              Etiam euismod sapien nec est tempus consequat. Nullam eget pretium
              mi. Curabitur rhoncus finibus quam quis sodales.
            </span>
          </h3>
        </div>
      </section>
      <section className="main-slide">
        <div className="slide-img-left">
          <img
            src="https://preview.colorlib.com/theme/rango/images/v_slider_section.jpg.webp"
            alt="dachboard"
          />
        </div>
        <div className="slider">
          <div className="slider-text-1">
            <div className="slide-right">
              <div className="slide-right-text">
                <h3>
                  Quick, efficient client support at your service. Take a leap
                  with us.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                  quibusdam!loerm5 Lorem ipsum dolor sit amet.lorem10 Lorem
                  ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatibus, fugiat.
                </p>
              </div>
              <div className="avatar">
                <img
                  className="avatar-img"
                  src="https://preview.colorlib.com/theme/rango/images/person_1.png.webp"
                  alt="avatar"
                />

                <div>
                  <p>Michael Smith</p>
                  <span>Manager</span>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-text-2">
            <div className="slide-right">
              <div className="slide-right-text">
                <h3>
                  Rapid assistance tailored for every client's needs. Try us
                  once.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                  quibusdam!loerm5 Lorem ipsum dolor sit amet.lorem10 Lorem
                  ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatibus, fugiat.
                </p>
              </div>
              <div className="avatar">
                <img
                  className="avatar-img"
                  src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvNDc5LW1rLTk2OTAtam9iNTgzXzEucG5n.png"
                  alt="avatar"
                />
                <div>
                  <p>Wilyam Maka</p>
                  <span>CEO</span>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-text-3">
            <div className="slide-right">
              <div className="slide-right-text">
                <h3>Fast support to all our clients.Just give us a shot</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                  quibusdam!loerm5 Lorem ipsum dolor sit amet.lorem10 Lorem
                  ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatibus, fugiat.
                </p>
              </div>
              <div className="avatar">
                <img
                  className="avatar-img"
                  src="https://freepngimg.com/download/girl/22195-5-girl.png"
                  alt="avatar"
                />
                <div>
                  <p>Jenifer Doe</p>
                  <span>Marketing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h4 className="middle-text">
        RanGO. We take care of your business <span>Explore our services</span>
      </h4>
      <section className="carousel-card">
        <CarouselWrap />
      </section>
      <section className="modern-features">
        <h2>Modern Features</h2>
        <div className="text-features">
          <div className="first-column">
            <p>
              <span>Responsive</span>
              Etiam nec odio vestibulum est mattis effic iturut magna. Pel
              lentesque sit am et tellus.
            </p>
            <p>
              <span>Clean code</span>
              Nec odio vestibulum est mattis effic iturut magna. Pel lentesque
              sit am et tellus bla ndit.
            </p>
          </div>
          <div className="img-column">
            <img
              src="https://preview.colorlib.com/theme/rango/images/features.png.webp"
              alt="tablet"
            />
          </div>
          <div className="last-column">
            <p>
              <span>Retina ready</span>
              Nec odio vestibulum est mattis effic iturut magna. Pel lentesque
              sit am et tellus bla ndit.
            </p>
            <p>
              <span>Great team</span>
              Etiam nec odio vestibulum est mattis effic iturut magna. Pel
              lentesque sit am et tellus.
            </p>
          </div>
        </div>
        <div className="btn-center">
          <button className="discover">Discover more</button>
        </div>
      </section>
      <div className="midle-img">
        <div>
          <h3>We love our customers </h3>
          <p>
            Cursus, enim a ultrices venenatis, ante magna varius felis, ac
            sodales turpis lectus a odio. Quisque facilisis lacus vitae leo
            tincidunt, id cursus dui blandit.
          </p>
        </div>
        <div>
          <img
            src="https://preview.colorlib.com/theme/rango/images/cta.png.webp"
            alt=""
          />
        </div>
      </div>
      <div className="last-section-hero">
        <div className="last-section-img">
          <img
            src="https://preview.colorlib.com/theme/rango/images/line.jpg.webp"
            alt=""
          />
        </div>
        <div className="last-section-text">
          <h3>We integrate the future</h3>
          <p>
            Etiam nec odio vestibulum est mattis effic iturut magna. Pelle
            ntesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec
            odio vestibulum est mattis effic iturut
          </p>
          <button className="discover">Discover more</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
