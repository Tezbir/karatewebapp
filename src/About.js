import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

export default function About() {
  const [activeVideo, setActiveVideo] = useState(null);
  const modalVideoRef = useRef(null);

  const openVideo = (src) => setActiveVideo(src);
  const closeVideo = () => setActiveVideo(null);

  return (
    <div className="page">
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

            {/* SIDE-BY-SIDE GRID */}
            <div
              className="sparringGrid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
            >
              {/* BOX 1 */}
              <div
                className="sparringBox"
                onClick={() => openVideo("/videos/SenseiBreakingDemo.mp4")}
                style={{
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "14px",
                  minHeight: "220px",
                  background: "#0b0b0b",
                }}
              >
                <video
                  muted
                  playsInline
                  preload="metadata"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                >
                  <source
                    src="/videos/SenseiBreakingDemo.mp4"
                    type="video/mp4"
                  />
                </video>

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "grid",
                    placeItems: "center",
                    background: "rgba(0,0,0,0.25)",
                    fontWeight: 800,
                    letterSpacing: "1px",
                    pointerEvents: "none",
                  }}
                >
                  CLICK
                </div>
              </div>

              {/* BOX 2 */}
              <div
                className="sparringBox"
                onClick={() => openVideo("/videos/SenseiCompHighlights.mp4")}
                style={{
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "14px",
                  minHeight: "220px",
                  background: "#0b0b0b",
                }}
              >
                <video
                  muted
                  playsInline
                  preload="metadata"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                >
                  {/* FIX: matches what opens */}
                  <source src="/videos/SecondVideo.mp4" type="video/mp4" />
                </video>

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "grid",
                    placeItems: "center",
                    background: "rgba(0,0,0,0.25)",
                    fontWeight: 800,
                    letterSpacing: "1px",
                    pointerEvents: "none",
                  }}
                >
                  CLICK
                </div>
              </div>
            </div>

            {/* BUTTONS (spaced so they don't touch) */}
            <div
              className="sparringButtons"
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

        {/* VIDEO MODAL */}
        {activeVideo && (
          <div
            onClick={closeVideo}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.75)",
              zIndex: 9999,
              display: "grid",
              placeItems: "center",
              padding: "18px",
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "min(1000px, 96vw)",
                background: "#000",
                borderRadius: "14px",
                overflow: "hidden",
              }}
            >
              <div style={{ padding: "10px", textAlign: "right" }}>
                <button
                  onClick={closeVideo}
                  style={{
                    background: "none",
                    border: "1px solid rgba(255,255,255,0.4)",
                    color: "#fff",
                    padding: "6px 14px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    boxShadow: "none",
                    outline: "none",
                  }}
                >
                  CLOSE
                </button>
              </div>

              <video
                ref={modalVideoRef}
                controls
                autoPlay
                playsInline
                style={{
                  width: "100%",
                  maxHeight: "80vh",
                  display: "block",
                }}
              >
                <source src={activeVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        )}

        {/* BACK TO HOME (spaced, centered) */}
        <div style={{ textAlign: "center", marginTop: "28px" }}>
          <Link className="cta" to="/">
            HOME
          </Link>
        </div>
      </section>

      {/* Mobile: stack the text/image and videos cleanly */}
      <style>
        {`
          @media (max-width: 640px) {
            .gallerySection > div[style*="gridTemplateColumns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
            }
            .sparringGrid {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </div>
  );
}
