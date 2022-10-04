import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import useDocumentTitle from "../customHooks/useDocumentTitle";

const CountTest1 = () => {
  const [count, setCount] = useState(0);
  useDocumentTitle(count);

  return (
    <div>
      {count}
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
        <ButtonGroup size="small" aria-label="small button group">
          <Button key="increment" onClick={() => setCount(count + 1)}>
            Increment
          </Button>
          <Button key="decrement" onClick={() => setCount(count - 1)}>
            Decrement
          </Button>
        </ButtonGroup>
      </Box>
    </div>
  );
};

export default CountTest1;
