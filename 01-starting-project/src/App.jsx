import Header from "./components/Header"
import Results from "./components/Results";
import UserInput from "./components/UserInput"
import {  useState } from "react";




function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });
  
  function handleChange(inputIdentifier, newValue) {
    setUserInput(prev => ({ ...prev, [inputIdentifier]:  parseInt(newValue)}));
  };

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />
      <Results userInput={userInput}/>
    </>


  )
}

export default App