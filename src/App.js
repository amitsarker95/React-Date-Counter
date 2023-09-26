import "./styles.css";
import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1> Simple Date Update By React</h1>
      <Step step={step} setStep={setStep} count={count} setCount={setCount} />
      <Counter count={count} setCount={setCount} />
      <Message step={step} count={count} setStep={setStep} />
    </div>
  );
}

const data = [
  "HTML",
  "CSS",
  "BootStrap",
  "Tailwind",
  "Javascript",
  "React",
  "Scratch programing",
  "C",
  "C++",
  "Python",
  "Data Structure",
  "Algorith",
  "Database",
  "Django",
  "RestAPI"
];

function Message(props) {
  const date = new Date("26 Sep 2023");
  date.setDate(date.getDate() + props.count);
  console.log(date);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  const formattedDate = `${day} ${month} ${year}`;
  return (
    <>
      <div className="messageDiv">
        <p>{data[props.count]}</p>
        <h3>{formattedDate.toString()}</h3>
        <hr></hr>
      </div>
    </>
  );
}

function Step(props) {
  function handlePlus() {
    if (props.step < 13) props.setStep(() => props.step + 1);
    if (props.step < 4) props.setCount(() => (props.count += props.step));
  }
  function handleMinus() {
    if (props.step > 0) props.setStep(() => props.step - 1);
    props.setCount((step) => props.count > 1 && props.count - 1);
  }

  return (
    <>
      <div className="step">
        <button onClick={handleMinus}>-</button>
        <span>Step : {props.step}</span>
        <button onClick={handlePlus}>+</button>
      </div>
    </>
  );
}

function Counter(props) {
  function handlePlus() {
    if (props.count <= 13) props.setCount((count) => count + 1);
  }
  function handleMinus() {
    if (props.count > 1) props.setCount((count) => count - 1);
  }
  return (
    <>
      <div className="counterDiv">
        <button onClick={handleMinus}>-</button>
        <span>Count : {props.count}</span>
        <button onClick={handlePlus}>+</button>
      </div>
    </>
  );
}
