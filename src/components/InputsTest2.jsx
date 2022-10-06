import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import useInput from "../customHooks/useInput";

const InputsTest2 = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submitName = (e) => {
    e.preventDefault(); // If used materil ui automatically handled.
    console.log("NAME -->", firstName, " ", lastName);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <TextField {...bindFirstName} size="small" placeholder="First Name" />
        <TextField {...bindLastName} size="small" placeholder="Last Name" />
        <Button key="submit" size="small" variant="outlined" onClick={submitName}>
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default InputsTest2;
