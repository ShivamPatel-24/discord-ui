import React, { useState, useEffect } from "react";
import AuthBox from "../../shared/components/AuthBox";
import { validateLoginForm } from "../../shared/utils/validators";
import LoginPageFooter from "./LoginPageFooter";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInputs from "./LoginPageInputs";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(validateLoginForm({ email, password }));
    }, [email, password, setIsFormValid]);

    const handleLogin = () => {
        console.log("login");
    };

    return (
        <AuthBox type="login">
            <LoginPageHeader />
            <LoginPageInputs
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
            />
            <LoginPageFooter
                isFormValid={isFormValid}
                handleLogin={handleLogin}
            />
        </AuthBox>
    );
};

export default LoginPage;
