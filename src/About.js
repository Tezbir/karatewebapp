import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

export default function About() {
  const [video1Playing, setVideo1Playing] = useState(false);
  const [video2Playing, setVideo2Playing] = useState(false);

  return (
    <div className="page aboutPage">
      <section className="gallerySection" style={{ paddingTop: "32px" }}>
        <h1
          className="heroTitleBig"
          style={{ textAlign: "center", marginBottom: "28px" }}
        >
          About Sensei John Benedict
        </h1>

        {/* TEXT + IMAGE */}
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "26px",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "18px", lineHeight: "30px", margin: 0 }}>
            Sensei John Benedict was born on June 25, 1965 in Brooklyn, New York.
            He began his martial arts training in Florida, one of the many stops
            in a turbulent childhood. Upon returning to Brooklyn some time later,
            his father, eager to pass on to his son the discipline and strong work
            ethic he had acquired from his career in the military, brought him to
            the Ying Yee Kwoon Martial Arts studio on Roebling Street in
            Williamsburg, Brooklyn.
          </p>

          <div className="goldFrame" style={{ borderRadius: "16px" }}>
            <img
              src="/images/RenshiJohnTournament.jpeg"
              alt="Sensei John"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "14px",
              }}
            />
          </div>
        </div>

        {/* VIDEOS */}
        <div className="sparringWrap" style={{ marginTop: "34px" }}>
          <div className="sparringInner">
            <h2 className="sparringTitle" style={{ marginBottom: "16px" }}>
              VIDEOS
            </h2>

            <div
              className="sparringGrid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
            >
              {/* VIDEO 1 */}
              <div
                style={{
                  borderRadius: "14px",
                  overflow: "hidden",
                  background: "#000",
                  height: "220px",
                }}
              >
                {!video1Playing ? (
                  <div
                    onClick={() => setVideo1Playing(true)}
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src="https://img.youtube.com/vi/1tYMM611g4k/hqdefault.jpg"
                      alt="Video preview"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />

                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "grid",
                        placeItems: "center",
                        background: "rgba(0,0,0,0.35)",
                        fontSize: "48px",
                        fontWeight: "900",
                      }}
                    >
                      ▶
                    </div>
                  </div>
                ) : (
                  <iframe
                    src="https://www.youtube.com/embed/1tYMM611g4k?autoplay=1"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                  />
                )}
              </div>

              {/* VIDEO 2 */}
              <div
                style={{
                  borderRadius: "14px",
                  overflow: "hidden",
                  background: "#000",
                  height: "220px",
                }}
              >
                {!video2Playing ? (
                  <div
                    onClick={() => setVideo2Playing(true)}
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      cursor: "pointer",
                    }}
                  >
                    <iframe
  src="https://www.youtube.com/embed/1tYMM611g4k?autoplay=1&playsinline=1"
  allow=" encrypted-media; fullscreen; picture-in-picture"
  allowFullScreen
  style={{
    width: "100%",
    height: "100%",
    border: "none",
  }}
/>


                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "grid",
                        placeItems: "center",
                        background: "rgba(0,0,0,0.35)",
                        fontSize: "48px",
                        fontWeight: "900",
                      }}
                    >
                      ▶
                    </div>
                  </div>
                ) : (
                  <iframe
  src="https://www.youtube.com/embed/HjzxpKWVTpc?autoplay=1&playsinline=1"
  allow=" encrypted-media; fullscreen; picture-in-picture"
  allowFullScreen
  style={{
    width: "100%",
    height: "100%",
    border: "none",
  }}
/>

                )}
              </div>
            </div>

            {/* BUTTONS */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "12px",
                flexWrap: "wrap",
                marginTop: "18px",
              }}
            >
              <Link className="cta" to="/certificates">
                CERTIFICATES
              </Link>
              <Link className="cta" to="/old-dojo">
                OLD DOJOS
              </Link>
            </div>
          </div>
        </div>

        {/* BACK HOME */}
        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <Link className="cta" to="/">
            HOME
          </Link>
        </div>
      </section>

      {/* EXTRA MOBILE BOTTOM SPACE */}
      <div style={{ height: "140px" }} />
    </div>
  );
}
