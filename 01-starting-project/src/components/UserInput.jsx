import { useEffect, useState } from "react";
import Input from "./Input";
import InputGroup from "./InputGroup";
import { calculateInvestmentResults } from "../util/investment";
const UserInput = ({ }) => {

    const [initialInvestment, setInitialInvestment] = useState(0);
    const [annualInvestment, setAnnualInvestment] = useState(0);
    const [expectedReturn, setExpectedReturn] = useState(0);
    const [duration, setDuration] = useState(0);


    useEffect(() => {
        const result = calculateInvestmentResults(
            parseInt(initialInvestment), 
            parseInt(annualInvestment), 
            parseInt(expectedReturn), 
            parseInt(duration));  
        console.log(result);
        
  
    }, [initialInvestment, annualInvestment, expectedReturn, duration])
    return (
        <div id="user-input">

            <InputGroup>
                <Input
                    label={"Initial Investment"}
                    value={initialInvestment}
                    onChange={setInitialInvestment}
                />
                <Input
                    label={"Annual Investment"}
                    value={annualInvestment}
                    onChange={setAnnualInvestment}
                />
            </InputGroup>

            <InputGroup>
                <Input
                    label={"Expected Return"}
                    value={expectedReturn}
                    onChange={setExpectedReturn}
                />
                <Input
                    label={"Duration"}
                    value={duration}
                    onChange={setDuration}
                />
            </InputGroup>
        </div>
    )
}


export default UserInput;