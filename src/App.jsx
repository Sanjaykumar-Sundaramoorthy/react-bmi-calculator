import { useState } from 'react'
import './App.css'

function App() {

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const calculateBmi = () => {
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);

    if (isValidHeight && isValidWeight) {
      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters ** 2);
      setBmi(bmi.toFixed(2));
      if (bmi < 18.5) {
        setBmiStatus("Underweight");
        } else if (bmi < 25) {
          setBmiStatus("Normal");
        } else if (bmi < 30) {
          setBmiStatus("Overweight");
        } else {
          setBmiStatus("Obese");
        }
        setErrorMessage("");
    } else {
      setBmi(null);
      setBmiStatus("");
      setErrorMessage("please enter valid numeric values for height and weight.")
    }
  }

  const clearAll = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setBmiStatus("");
  }


  return (
    <>
      <div className="bmi-calculator">
        <div className="box"></div>
        <div className="data">
          <h1>BMI Calculator</h1>
          {errorMessage && <p className='error'>{errorMessage}</p>}
          <div className="input-container">
            <label htmlFor='height'>height (cm):</label>
            <input type="text" value={height} onChange={(e)=> setHeight(e.target.value)} id="height" />
          </div>
          <div className="input-container">
            <label htmlFor='weight'>Weight (kg):</label>
            <input type="text" value={weight} onChange={(e)=> setWeight(e.target.value)} id="weight" />
          </div>
          <div className='button-box'>
          <button onClick={calculateBmi}>Calculate BMI</button>
          <button onClick={clearAll}>Clear</button>
          </div>
          <div className="result">
            <p>Your BMI is: {bmi}</p>
            <p>Status: {bmiStatus}</p>
          </div>
          <p className='footer'>designed by <a href="https://www.linkedin.com/in/sanjaykumar-21csr092/" target='blank'>Sanjaykumar</a></p>
        </div>
      </div>
    </>
  )
}

export default App
