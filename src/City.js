import React from "react";
import react, { useState } from "react";
export default function City(props) {
  let [temperature, setTemperature] = useState(props.temperature);
  let [unit, setUnit] = useState("Metric");

  function showFahrenheit(event) {
    event.preventDefault();
    let Fahrenheit = Math.round((props.temperature * 9) / 5 + 32);
    setTemperature(Fahrenheit);
    alert(`${Fahrenheit}`);
    setUnit("Imperial");
  }
  function showcelsius(event) {
    event.preventDefault();
    setTemperature(props.temperature);
    setUnit("Metric");
  }
  return (
    <div class="City">
      It is {temperature} ({unit}){" "}
      <a href="#" onClick={showcelsius}>
        °C
      </a>{" "}
      |
      <a href="#" onClick={showFahrenheit}>
        °F
      </a>{" "}
      in {props.name}
    </div>
  );
}
