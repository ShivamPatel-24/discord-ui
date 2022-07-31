import React from "react";
import { Typography } from "@mui/material";

const LoginPageHeader = () => {
    return (
        <>
            <Typography variant="h5" sx={{ color: "#fff" }}>
                Welcome Back!
            </Typography>
            <Typography sx={{ color: "#b9bbbe" }}>
                Glad to have you with us.
            </Typography>
        </>
    );
};

export default LoginPageHeader;
