import React from "react";

function Card() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <p>Numero di click: {count}</p>
      <button onClick={() => setCount(count + 2)}>Cliccami...</button>
    </>
  );
}

export default Card;