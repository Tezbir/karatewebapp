import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

export default function About() {
  const [activeVideoId, setActiveVideoId] = useState(null);
  const modalRef = useRef(null);

  const openVideo = (id) => setActiveVideoId(id);
  const closeVideo = () => setActiveVideoId(null);

  // Close on ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeVideo();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Prevent background scroll while modal is open
  useEffect(() => {
    if (activeVideoId) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [activeVideoId]);

  return (
    <div className="page aboutPage">
      <section className="gallerySection" style={{ paddingTop: "32px" }}>
        {/* TITLE */}
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
            in a turbulent childhood. Upon returning to Brooklyn in 1981 his
            father, eager to pass on to his son the discipline and strong work
            ethic he had acquired from his career in the military brought him to
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

            {/* Grid controlled by CSS (.sparringGrid) */}
            <div className="sparringGrid">
              {/* VIDEO 1 */}
              <div
                onClick={() => openVideo("1tYMM611g4k")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openVideo("1tYMM611g4k")}
                style={{
                  borderRadius: "14px",
                  overflow: "hidden",
                  background: "#000",
                  height: "220px",
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                <img
                  src="https://img.youtube.com/vi/1tYMM611g4k/hqdefault.jpg"
                  alt="Video preview"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
                    color: "#fff",
                  }}
                >
                  ▶
                </div>
              </div>

              {/* VIDEO 2 */}
              <div
                onClick={() => openVideo("HjzxpKWVTpc")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openVideo("HjzxpKWVTpc")}
                style={{
                  borderRadius: "14px",
                  overflow: "hidden",
                  background: "#000",
                  height: "220px",
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                <img
                  src="https://img.youtube.com/vi/HjzxpKWVTpc/hqdefault.jpg"
                  alt="Video preview"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
                    color: "#fff",
                  }}
                >
                  ▶
                </div>
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

      {/* EXTRA MOBILE SPACE */}
      <div style={{ height: "140px" }} />

      {/* MODAL PLAYER (stays on your site) */}
      {activeVideoId && (
        <div
          onClick={closeVideo}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            display: "grid",
            placeItems: "center",
            zIndex: 9999,
            padding: "18px",
          }}
        >
          <div
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "min(980px, 95vw)",
              aspectRatio: "16 / 9",
              background: "#000",
              borderRadius: "16px",
              overflow: "hidden",
              position: "relative",
              border: "3px solid #c9a227",
            }}
          >
            {/* Close button */}
            <button
              onClick={closeVideo}
              aria-label="Close video"
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                zIndex: 2,
                background: "rgba(0,0,0,0.65)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: "10px",
                padding: "8px 10px",
                cursor: "pointer",
                fontWeight: 900,
              }}
            >
              ✕
            </button>

            <iframe
              title="Video"
              src={`https://www.youtube-nocookie.com/embed/${activeVideoId}?autoplay=1&playsinline=1&modestbranding=1&rel=0`}
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
              style={{ width: "100%", height: "100%", border: "none" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
