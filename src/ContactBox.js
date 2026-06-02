import React, { useState } from "react";

export default function ContactBox() {
  const [info, setInfo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://karatewebapp-backend.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            info,
          }),
        }
      );

      const data = await response.json();

      alert(data.message);

      setInfo("");
    } catch (error) {
      console.error(error);
      alert("Error sending form");
    }
  };

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <textarea
        className="contactInput"
        placeholder="leave your name, and phone number here and we will get back to you..."
        value={info}
        onChange={(e) => setInfo(e.target.value)}
        required
      />

      <button className="contactButton" type="submit">
        SUBMIT
      </button>
    </form>
  );
}