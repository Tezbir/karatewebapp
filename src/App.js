import React, { useEffect, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";

import ScrollToTop from "./ScrollToTop";
import About from "./About";
import Certificates from "./Certificates";
import OldDojo from "./OldDojo";

export default function App() {
  const phone = "5163819660";
  const phonePretty = "(516) 381-9660";
  const heroVideoRef = useRef(null);

  useEffect(() => {
    const v = heroVideoRef.current;
    if (!v) return;

    v.muted = true;
    v.playsInline = true;

    const tryPlay = async () => {
      try {
        await v.play();
      } catch {
        const resume = () => {
          v.play().catch(() => {});
          window.removeEventListener("touchstart", resume);
          window.removeEventListener("click", resume);
        };

        window.addEventListener("touchstart", resume, { once: true });
        window.addEventListener("click", resume, { once: true });
      }
    };

    tryPlay();
    v.addEventListener("canplay", tryPlay);

    return () => v.removeEventListener("canplay", tryPlay);
  }, []);

  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <div className="page">
              <div className="homeContainer">
                {/* TOP BAR */}
                <div className="topBar">
                  <a
                    className="topLink"
                    href="mailto:seigiddaidojo@optonline.net"
                  >
                    seigiddaidojo@optonline.net
                  </a>

                  <a
                    className="topLink"
                    href="https://www.facebook.com/john.benedict.862370/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </div>

                {/* HERO TEXT */}
                <section className="heroTextSection">
                  <div className="heroTitleSmall">SEITOUHA GOJU RYU</div>
                  <h1 className="heroTitleBig">OLD SCHOOL KARATE</h1>

                  <p className="heroCallout">
                    Call or Text <span className="bold">Today</span> for a{" "}
                    <span className="red bold">FREE</span> Trial
                    <br />
                    <span className="bold">{phonePretty}</span>
                  </p>

                  {/* CTA BUTTONS */}
                 <div className="ctaRow">
  <a className="cta" href={`sms:${phone}`}>
    TEXT US
  </a>

  <a className="cta" href={`tel:${phone}`}>
    CALL US
  </a>
</div>
                </section>

                {/* VIDEO */}
                <section className="photoWrap">
                  <video
                    ref={heroVideoRef}
                    className="photo heroVideo"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                  >
                    <source
                      src="/videos/KarateFightVidLoop.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </section>

                {/* GALLERY */}
                <section className="gallerySection">
                  <div className="galleryRow">
                    <div className="goldFrame">
                      <img
                        className="galleryImage"
                        src="/images/group.jpg"
                        alt="Group class"
                      />
                    </div>

                    <div className="goldFrame">
                      <img
                        className="galleryImage"
                        src="/images/gym2.png"
                        alt="Training area"
                      />
                    </div>
                  </div>

                  <div className="slogan">
                    BECOME A WARRIOR AND LET GO OF EXCUSES.
                  </div>
                </section>

                {/* RATES */}
                <section className="ratesSection">
                  <div className="rateImages">
                    <img
                      className="rateImage"
                      src="/images/gym1.png"
                      alt="Karate class"
                    />
                    <img
                      className="rateImage"
                      src="/images/breaking.png"
                      alt="Board breaking"
                    />
                  </div>

                  <div className="rateText">
                    <span className="red">LOW</span> monthly rates.{" "}
                    <span className="red">NO</span> promotion fees.
                  </div>
                </section>

                {/* BANNER */}
                <section className="heroBanner">
                  <img
                    className="heroBannerImg"
                    src="/images/hero.png"
                    alt="Banner"
                  />
                </section>

                {/* ABOUT US BUTTON */}
                <div style={{ textAlign: "center", margin: "24px 0 32px" }}>
                  <Link className="cta" to="/about">
                    ABOUT US
                  </Link>
                </div>

                {/* JOIN */}
                <section className="joinSection">
                  <img
                    className="bullyLogo"
                    src="/images/bullying.png"
                    alt="Bullying prevention"
                  />

                  <h2 className="joinTitle">JOIN NOW!</h2>

                  <a className="joinPhone" href={`tel:${phone}`}>
                    {phonePretty}
                  </a>

                  <p className="joinSmall">
  All classes are taught by Sensei John Benedict, 7th Degree Black Belt (Renshi),
  with 40 years of martial arts experience.
  <br />
                    Seitouha Goju Ryu Karate offers traditional karate and MMA classes
                    <br />
                    Teaching adults and kids all throughout Long Island seeking high-quality martial arts training, 
                    discipline, and self confidence.
                    <br />
                    Ronkonkoma, NY
                    <br />
                    KARATE • MIXED MARTIAL ARTS (MMA)
                  </p>

                  <div className="website">www.MMALongIsland.com</div>
                </section>

                <div className="footerPad" />
              </div>
            </div>
          }
        />

        {/* PAGES */}
        <Route path="/about" element={<About />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/old-dojo" element={<OldDojo />} />
      </Routes>

      <Analytics />
    </>
  );
}
