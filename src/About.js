import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

const CERTS = [
  {
    img: "/images/certificates/cert7.jpg",
    title: "Green Belt",
    org: "Ying Yee Kwoon",
    date: "December 9th, 1983",
    location: "305 Roebling St, Williamsburg, Brooklyn, NY",
  },
  {
    img: "/images/certificates/cert6.jpg",
    title: "Purple Belt",
    org: "Ying Yee Kwoon",
    date: "January 31st, 1984",
    location: "281 Broadway, Williamsburg, Brooklyn, NY",
  },
  {
    img: "/images/certificates/cert5.jpg",
    title: "Brown Belt",
    org: "Ying Yee Kwoon",
    date: "May 4th, 1985",
    location: "281 Broadway, Williamsburg, Brooklyn, NY",
  },
  {
    img: "/images/certificates/cert4.jpg",
    title: "1st Degree Blackbelt",
    org: "Ying Yee Kwoon",
    date: "June 13th, 1987",
    location: "281 Broadway, Williamsburg, Brooklyn, NY",
  },
  {
    img: "/images/certificates/cert3.jpg",
    title: "2nd Degree Blackbelt",
    org: "Ying Yee Kwoon",
    date: "August 12th, 1991",
    location: "190 Glen Cove Avenue, Glen Cove, NY",
  },
  {
    img: "/images/certificates/cert8.jpg",
    title: "Teaching Certificate",
    org: "Yoshido Goju-Ryu Karate",
    date: "March 11th, 1995",
    location: "",
  },
  {
    img: "/images/certificates/cert2.jpg",
    title: "3rd Degree Blackbelt",
    org: "Yoshido Goju-Ryu Karate",
    date: "May 4th, 1996",
    location: "",
  },
  {
    img: "/images/certificates/cert9.jpg",
    title: "Teaching Certificate",
    org: "Yoshido Goju-Ryu Karate",
    date: "February 1st, 1997",
    location: "",
  },
  {
    img: "/images/certificates/cert1.jpg",
    title: "4th Degree Blackbelt",
    org: "Yoshido Goju-Ryu Karate",
    date: "September 9th, 2003",
    location: "",
  },
  {
    img: "/images/certificates/cert10.jpg",
    title: "Advanced Forms Seminar Certificate",
    org: "Yoshido Goju-Ryu Karate",
    date: "December 9th, 2007",
    location: "Bushwick, Brooklyn, NY",
  },
];

const imgStyle = {
  width: "100%",
  height: "180px",
  objectFit: "cover",
  borderRadius: "6px",
};

function ExhibitionCollapsible({ open, onToggle, children }) {
  return (
    <div style={{ width: "100%", marginTop: "80px" }}>
      <button
        type="button"
        onClick={onToggle}
        className="goldFrame"
        style={{
          width: "100%",
          background: "rgba(0,0,0,0.35)",
          color: "#c9a227",
          cursor: "pointer",
          borderRadius: "14px",
          padding: "18px",
          fontSize: "22px",
          fontWeight: 900,
          textAlign: "center",
          letterSpacing: "1px",
        }}
        aria-expanded={open}
      >
        Ying Yee Kwoon Martial Arts Exhibition Program ’88
      </button>

      {open && <div style={{ marginTop: "36px" }}>{children}</div>}
    </div>
  );
}

export default function Certificates() {
  const [showExhibition, setShowExhibition] = useState(false);

  return (
    <div className="page">
      <section className="gallerySection">
        {/* TITLE */}
        <h1
          className="heroTitleBig"
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          Certificates
        </h1>

        {/* CERTIFICATES GRID */}
        <div className="certSimpleGrid">
          {CERTS.map((c, i) => (
            <div key={i} className="certSimpleCard">
              <img src={c.img} alt={c.title} className="certSimpleImg" />
              <div className="certSimpleText">
                <strong>{c.title}</strong>
                <div>{c.org}</div>
                {c.location && <div>{c.location}</div>}
                <div>{c.date}</div>
              </div>
            </div>
          ))}
        </div>

        {/* PATCHES OF THE PAST */}
        <div style={{ marginTop: "80px", width: "100%" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "32px",
              fontWeight: 800,
              marginBottom: "32px",
            }}
          >
            Patches of the Past
          </h2>

          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              gap: "24px",
            }}
          >
            <img
              src="/images/patchesofthepast.png"
              alt="Patches of the Past"
              style={{ width: "100%", objectFit: "contain" }}
            />
          </div>
        </div>

        {/* DOCUMENTS HEADER */}
        <div className="documentsHeader" style={{ marginTop: "70px" }}>
          <h2 className="documentsTitle">Documents</h2>
        </div>

        {/* DOJO RULES — ALWAYS VISIBLE + SIDE BY SIDE */}
        <div style={{ width: "100%", marginTop: "60px", clear: "both" }}>
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              alignItems: "center",
              gap: "32px",
            }}
          >
            <img
              src="/images/dojo-rules/dojo-rules-left.jpg"
              alt="Dojo Rules Left"
              style={{ width: "100%", maxHeight: "350px", objectFit: "contain" }}
            />

            <div style={{ textAlign: "center" }}>
              <h2
                style={{
                  fontSize: "36px",
                  fontWeight: 900,
                  letterSpacing: "2px",
                  margin: 0,
                }}
              >
                Dojo Rules
              </h2>
            </div>

            <img
              src="/images/dojo-rules/dojo-rules-right.jpg"
              alt="Dojo Rules Right"
              style={{ width: "100%", maxHeight: "350px", objectFit: "contain" }}
            />
          </div>
        </div>

        {/* EXHIBITION — COLLAPSIBLE */}
        {/* EXHIBITION PROGRAM */}
<div style={{ width: "100%", marginTop: "100px" }}>
  <h2
    style={{
      textAlign: "center",
      fontSize: "28px",
      fontWeight: 800,
      marginBottom: "40px",
    }}
  >
    Ying Yee Kwoon Martial Arts Exhibition Program '88
  </h2>

  <div
    className="exhibitionGrid"
    style={{ maxWidth: "1400px", margin: "0 auto" }}
  >
    <img
      src="/images/YingYeeKwoonExhibition/GlenCove1.jpg"
      alt=""
      style={imgStyle}
    />
    <img
      src="/images/YingYeeKwoonExhibition/GlenCove2.jpg"
      alt=""
      style={imgStyle}
    />
    <img
      src="/images/YingYeeKwoonExhibition/GlenCove3.jpg"
      alt=""
      style={imgStyle}
    />
    <img
      src="/images/YingYeeKwoonExhibition/GlenCove4.jpg"
      alt=""
      style={imgStyle}
    />
    <img
      src="/images/YingYeeKwoonExhibition/GlenCove5.jpg"
      alt=""
      style={imgStyle}
    />
    <img
      src="/images/YingYeeKwoonExhibition/GlenCove6.jpg"
      alt=""
      style={imgStyle}
    />
    <img
      src="/images/YingYeeKwoonExhibition/GlenCove7.jpg"
      alt=""
      style={imgStyle}
    />
  </div>
</div>


        {/* 281 b'way  */}
        <div className="flyerCardSection">
          <div className="flyerCardGrid">
            {/* LEFT */}
            <div className="flyerCardCol">
              <h2 className="flyerCardTitle">Dojo Flyer</h2>
              <img
                src="/images/DojoFlyer.jpg"
                alt="Dojo Flyer"
                className="flyerCardImg"
              />
            </div>

            {/* RIGHT */}
            <div className="flyerCardCol">
              <h2 className="flyerCardTitle">Business Card</h2>
              <img
                src="/images/DojoBuisnessCard.jpg"
                alt="Business Card"
                className="flyerCardImg"
              />
            </div>
          </div>
        </div>

        {/* STOCK CERTIFICATE */}
        <div className="stockCertificateSection">
          <h2 className="stockCertificateTitle">
            Sensei John Benedict&apos;s Stock Certificate
          </h2>

          <img
            src="/images/StockCertificate.jpg"
            alt="Stock Certificate"
            className="stockCertificateImg"
          />
        </div>

        {/* BACK BUTTON */}
        <div style={{ textAlign: "center", marginTop: "60px" }}>
          <Link className="cta" to="/about">
            ABOUT
          </Link>
        </div>
      </section>
    </div>
  );
}
