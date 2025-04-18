import React from "react";

export default function EventPro() {
  const evCl = () => {
    alert("🔘 Button clicked");
  };
  const onCLic = (e) => {
    alert("📦 Card clicked");
  };

  return (
    <div>
      <h3 onClick={onCLic}>Card</h3>

      <button onClick={evCl}> Click me </button>
    </div>
  );
}
