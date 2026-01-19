import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

export default function OldDojo() {
  return (
    <div className="page" style={{ background: "#000" }}>
      <section className="gallerySection" style={{ paddingTop: "28px" }}>
        {/* TITLE */}
        <h1
          className="heroTitleBig"
          style={{ textAlign: "center", marginBottom: "10px", fontSize: "42px",}}
        >
          Whai Yee Kwoon Dojo
        </h1>

        {/* SUBTITLE */}
        <p
          style={{
            textAlign: "center",
            fontSize: "18px",
            opacity: 0.85,
            marginBottom: "44px",
          }}
        >
          281 Broadway, Williamsburg, Brooklyn, NY
        </p>

        {/* SECTION 1 */}
        <SectionGrid
          title="Sensei John Benedict Performing Techniques"
          images={[
            "/images/281BWay/281_B_way_001.jpg",
            "/images/281BWay/281_B_way_002.jpg",
            "/images/281BWay/281_B_way_003.jpg",
            "/images/281BWay/281_B_way_004.jpg",
          ]}
        />

        {/* SECTION 2 */}
        <SectionGrid
          title="Group Photos"
          images={[
            "/images/281BWay/281BwayGroup/GroupN281_0.jpg",
            "/images/281BWay/281BwayGroup/GroupN281_1.jpg",
            "/images/281BWay/281BwayGroup/GroupN281_2.jpg",
            "/images/281BWay/281BwayGroup/GroupN281_3.jpg",
          ]}
        />

        {/* SECTION 3 — SINGLE IMAGE */}
        <SectionSingle
          title="Fellow Students"
          image="/images/281BWay/281FellowStudents.png"
        />

        {/* SECTION 4 — IMAGE / TEXT / IMAGE */}
        <SectionTournament
          title="Ying Yee Invitational Cup Tournament"
          leftImage="/images/281BWay/281TournamentFlyer.jpg"
          rightImage="/images/281BWay/john_045.jpg"
          description="John Benedict wins Grand Champion at the Ying Yee Invitational Cup Karate Tournament"
        />

        {/* GLEN COVE (TITLE LEFT + CARD RIGHT + 3 PHOTOS) */}
        <GlenCoveSection
  title="Ying Yee Kwoon Dojo"
  subtitle="190 Glen Cove Avenue, Glen Cove, NY"
  cardImage="/images/GlenCove/GlenCoveCard.jpg"
  photos={[
            { src: "/images/GlenCove/Exhibition1988.png", caption: "Ying Yee Kwoon Photo Shoot" },
            { src: "/images/GlenCove/YingYeeKwoonPhotoShoot.png", caption: "Ying Yee Kwoon Martial Arts Exhibition '88"  },
            { src: "/images/GlenCove/GlenCoveGroupPhoto.jpg", caption: "Group Photo" },
          ]}
        />

        {/* HOLBROOK (HEADER + SUBHEADER + 3 PHOTO SLOTS) */}
        <HolbrookSection
          title="Seigi Dai Dojo"
          subtitle="1150 Lincoln Ave, Holbrook, NY"
          photos={[
            { src: "/images/Holbrook/Holbrook1.png", caption: "" },
            { src: "/images/Holbrook/Holbrook2.png", caption: "" },
            { src: "/images/Holbrook/Holbrook3.jpg", caption: "" },
            { src: "/images/Holbrook/Holbrook4.png", caption: "" },
          ]}
        />

        {/* BACK */}
       <div style={{ textAlign: "center", marginTop: "48px" }}>
  <Link className="cta" to="/about">
    ABOUT
  </Link>

</div>
      </section>
    </div>
  );
}

/* ---------- REUSABLE COMPONENTS ---------- */

function SectionGrid({ title, images }) {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto 48px", padding: "0 16px" }}>
      <h2 style={{ fontSize: "22px", marginBottom: "16px", fontWeight: 700 }}>
        {title}
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px",
        }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${title} ${i + 1}`}
            style={{ width: "100%", display: "block" }}
          />
        ))}
      </div>
    </div>
  );
}

function SectionSingle({ title, image }) {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto 48px", padding: "0 16px" }}>
      <h2 style={{ fontSize: "22px", marginBottom: "16px", fontWeight: 700 }}>
        {title}
      </h2>

      <div
        style={{
          width: "100%",
          border: "1px solid rgba(255,255,255,0.12)",
          background: "#0b0b0b",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{ width: "100%", display: "block" }}
        />
      </div>
    </div>
  );
}

function SectionTournament({ title, leftImage, rightImage, description }) {
  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto 106px",
        padding: "0 16px",
        display: "grid",
        gridTemplateColumns: "1fr 1.2fr 1fr",
        gap: "24px",
        alignItems: "center",
      }}
    >
      <img
        src={leftImage}
        alt={`${title} left`}
        style={{ width: "100%", display: "block" }}
      />

      <div style={{ textAlign: "center", padding: "0 12px" }}>
        <div style={{ fontSize: "20px", fontWeight: 700, marginBottom: "10px" }}>
          {title}
        </div>

        <p style={{ fontSize: "16px", lineHeight: "26px", opacity: 0.9 }}>
          {description}
        </p>
      </div>

      <img
        src={rightImage}
        alt={`${title} right`}
        style={{ width: "100%", display: "block" }}
      />
    </div>
  );
}

function GlenCoveSection({ title, subtitle, cardImage, photos }) {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto 60px", padding: "0 16px" }}>
      {/* TOP: TITLE LEFT, CARD RIGHT */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: "28px",
          alignItems: "center",
          marginBottom: "28px",
        }}
      >
        {/* LEFT TEXT (NO BOX, NO YELLOW) */}
        <div>
          <div
            style={{
              fontSize: "32px",
              fontWeight: 700,
              lineHeight: "38px",
              color: "#fff",
            }}
          >
            {title}
          </div>

          {subtitle && (
            <div
              style={{
                marginTop: "6px",
                fontSize: "16px",
                opacity: 0.75,
                color: "#fff",
              }}
            >
              {subtitle}
            </div>
          )}
        </div>

        {/* RIGHT CARD IMAGE */}
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            background: "#0b0b0b",
          }}
        >
          {cardImage ? (
            <img
              src={cardImage}
              alt="Dojo card"
              style={{ width: "100%", display: "block" }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                paddingTop: "48%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#666",
                fontSize: "13px",
              }}
            >
              Card Placeholder
            </div>
          )}
        </div>
      </div>

      {/* BOTTOM: 3 PHOTOS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "18px",
        }}
      >
        {photos.map((p, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <img
              src={p.src}
              alt={p.caption}
              style={{ width: "100%", display: "block" }}
            />

            <div style={{ marginTop: "10px", fontSize: "15px", opacity: 0.9 }}>
              {p.caption}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HolbrookSection({ title, subtitle, photos }) {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto 60px", padding: "0 16px" }}>
      <div style={{ textAlign: "center", marginBottom: "22px" }}>
        <div style={{ fontSize: "32px", fontWeight: 700, lineHeight: "38px", color: "#fff" }}>
          {title}
        </div>
        {subtitle && (
          <div style={{ marginTop: "6px", fontSize: "16px", opacity: 0.75, color: "#fff" }}>
            {subtitle}
          </div>
        )}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "18px",
        }}
      >
        {photos.map((p, i) => (
          <div
            key={i}
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              background: "#0b0b0b",
            }}
          >
            {p.src ? (
              <img
                src={p.src}
                alt={p.caption || `${title} ${i + 1}`}
                style={{ width: "100%", display: "block" }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  paddingTop: "66%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#666",
                  fontSize: "13px",
                }}
              >
                Photo Placeholder
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 