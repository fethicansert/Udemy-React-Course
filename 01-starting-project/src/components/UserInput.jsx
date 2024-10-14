import { useEffect, useState } from "react";
import Input from "./Input";
import InputGroup from "./InputGroup";
import { calculateInvestmentResults } from "../util/investment";
const UserInput = ({ }) => {

    const [userInput, setUserInput] = useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    function handleChange(inputIdentifier, newValue) {
        console.log(inputIdentifier, newValue);
        
        setUserInput(prev => ({...prev, [inputIdentifier]:newValue}))
    }


    useEffect(() => {
        const result = calculateInvestmentResults(
            parseInt(userInput.initialInvestment),
            parseInt(userInput.annualInvestment),
            parseInt(userInput.expectedReturn),
            parseInt(userInput.duration));
        console.log(result);


    }, [userInput])
    return (
        <div id="user-input">

            <InputGroup>
                <Input
                    label={"Initial Investment"}
                    value={userInput.initialInvestment}
                    identifier={'initialInvestment'}
                    onChange={handleChange}
                />
                <Input
                    label={"Annual Investment"}
                    value={userInput.annualInvestment}
                    identifier={'annualInvestment'}
                    onChange={handleChange}
                />
            </InputGroup>

            <InputGroup>
                <Input
                    label={"Expected Return"}
                    value={userInput.expectedReturn}
                    identifier={'expectedReturn'}
                    onChange={handleChange}
                />
                <Input
                    label={"Duration"}
                    value={userInput.duration}
                    identifier={'duration'}
                    onChange={handleChange}
                />
            </InputGroup>
        </div>
    )
}


export default UserInput;