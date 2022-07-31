import React from "react";
import InputWithLabel from "../../shared/components/InputWithLabel";

const LoginPageInputs = ({ email, setEmail, password, setPassword }) => {
    return (
        <>
            <InputWithLabel
                value={email}
                setValue={setEmail}
                placeholder="Enter Email Address"
                label="E-mail"
                type="text"
            />
            <InputWithLabel
                value={password}
                setValue={setPassword}
                placeholder="Enter Password"
                label="password"
                type="text"
            />
        </>
    );
};

export default LoginPageInputs;
