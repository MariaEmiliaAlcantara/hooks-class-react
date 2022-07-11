import React, { useEffect, useState } from "react";
import "../IfoodCounter/IfoodCounter.css";

function IfoodCounter() {
  const [value, setValue] = useState(1);
  const [buttonStyle, setButtonStyle] = useState("counter-button-minus-active");

  useEffect(() => {
    document.getElementById("moeda").innerHTML = `Total: R$${2 * value},00`;
  }, [value]);

  function down() {
    if (value <= 1) {
      setButtonStyle("counter-button-minus-desactive");
    }
    if (value > 0) {
      setValue(value - 1);
    }
  }

  function up() {
    setValue(value + 1);
    setButtonStyle("counter-button-minus-active");
  }

  return (
    <div className="counter-wrapper">
      <div className="counter">
        <button className={buttonStyle} onClick={down}>
          -
        </button>
        <p>{value}</p>
        <button className="counter-button-plus-active" onClick={up}>
          +
        </button>
      </div>
      <div className="total">
        <button id="moeda">12,00</button>
      </div>
    </div>
  );
}

export default IfoodCounter;
