import { useEffect, useState } from "react";
import Input from "./Input";
import InputGroup from "./InputGroup";
const UserInput = ({ userInput, handleChange }) => {


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