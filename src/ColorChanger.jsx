import React, { useState } from "react";

function ColorChanger() {
  const [bgColor, setBgColor] = useState("");

  const handleColorChange = (color) => {
    setBgColor(color);
  };

  return (
    <div style={{backgroundColor: bgColor || "pink", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Choose a Color</h1>
      <div style={{ display: "flex", gap: "15px" }}>
        <button onClick={() => handleColorChange("red")} style={{  padding: "15px 30px", fontSize: "16px", backgroundColor: "black", color: "white",border: "none",borderRadius: "5px",cursor: "pointer",width: "100px" // Ensures all buttons have the same width
          }}> Red</button>
        <button onClick={() => handleColorChange("blue")} style={{  padding: "15px 30px", fontSize: "16px", backgroundColor: "black", color: "white",border: "none",borderRadius: "5px",cursor: "pointer",width: "100px" // Same width as the other buttons
          }}>Blue</button>
        <button onClick={() => handleColorChange("green")} style={{  padding: "15px 30px", fontSize: "16px",  backgroundColor: "black",  color: "white",border: "none",borderRadius: "5px",cursor: "pointer",
            width: "100px" // Same width for consistent button size
          }}>Green</button>
      </div>
    </div>
  );
}

export default ColorChanger;
