import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <p>Interruttore: {isOn ? "Acceso" : "Spento"}</p>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "Spegni" : "Accedi"}
      </button>
    </>
  );
}

export default Toggle;