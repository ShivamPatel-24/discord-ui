import React from "react";
import { styled } from "@mui/system";

const Wrapper = styled("div")({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    marginTop: "10px",
});

const Label = styled("p")({
    color: "#b9bbbe",
    textTransform: "uppercase",
    fontSize: "16px",
    fontWeight: "600",
});

const Input = styled("input")({
    flexGrow: "1",
    height: "40px",
    border: "1px solid black",
    color: "#dcddde",
    backgroundColor: "#35393f",
    margin: 0,
    fontSize: "16px",
    padding: "0 5px",
});

const InputWithLabel = ({ label, setValue, value, placeholder, type }) => {
    const handleValueChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Wrapper>
            <Label>{label}</Label>
            <Input
                value={value}
                onChange={handleValueChange}
                type={type}
                placeholder={placeholder}
            />
        </Wrapper>
    );
};

export default InputWithLabel;
