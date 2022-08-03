import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const getInvalidFormMessage = () => {
    return "Enter correct e-mail and password.";
};

const getValidFormMessage = () => {
    return "Enter correct e-mail and password.";
};

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/register");
    };

    return (
        <>
            <Tooltip
                title={
                    !isFormValid
                        ? getValidFormMessage()
                        : getInvalidFormMessage()
                }
            >
                <div>
                    <CustomPrimaryButton
                        label="Log in"
                        additionalStyle={{ marginTop: "30px" }}
                        disabled={!isFormValid}
                        onClick={handleLogin}
                    />
                </div>
            </Tooltip>
            <RedirectInfo
                text="Need an account? "
                redirectText="Create an account"
                additionalStyle={{ marginTop: "5px" }}
                redirectHandler={handleClick}
            />
        </>
    );
};

export default LoginPageFooter;
