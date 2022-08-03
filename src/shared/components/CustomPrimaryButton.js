import React from "react";
import Button from "@mui/material/Button";

const CustomPrimaryButton = ({ label, additionalStyle, disabled, onClick }) => {
    return (
        <>
            <Button
                variant="contained"
                sx={{
                    bgColor: "#5865F2",
                    color: "white",
                    textTransform: "none",
                    fontSize: "16px",
                    fontWeight: "500",
                    width: "100%",
                    height: "40px",
                }}
                style={additionalStyle ? additionalStyle : {}}
                onClick={onClick}
                disabled={disabled}
            >
                {label}
            </Button>
        </>
    );
};

export default CustomPrimaryButton;
