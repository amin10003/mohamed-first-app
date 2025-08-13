import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#ff0000"); // initial value is red

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Pick a Color</h2>

      <input
        type="color"
        value={color}
        onChange={e => setColor(e.target.value)}
      />

      <p>Selected Color: <strong>{color}</strong></p>

      <div
        style={{
          width: "600px",
          height: "150px",
          backgroundColor: color,
          border: "2px solid #000",
          marginTop: "10px",
          borderRadius: "10px", // add some curvature
        }}
      ></div>
    </div>
  );
}

export default ColorPicker;
