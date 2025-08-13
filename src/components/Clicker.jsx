import { useState } from "react";

function Clicker() {
  const handleClick = () => {
    alert("you clicked the button");
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default Clicker;
