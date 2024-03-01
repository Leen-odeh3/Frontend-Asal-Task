import React, { useState } from "react";
import {
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Box,
} from "@mui/material";

const TransferCreditsComponent = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "white",
        borderRadius: "10px",
      }}
    >
      <Typography variant="h6" style={{ marginBottom: "20px" }}>
        WE ACCEPT TRANSFER CREDITS!
      </Typography>
      <Typography>
        Earn your degree even faster by transferring course credits to UoPeople.
        It's never been easier, just follow the steps below.
      </Typography>
      <Box
        style={{
          backgroundColor: "#FFDEF0",
          borderRadius: "7px",
          padding: "12px",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        <Typography variant="p" style={{ fontSize: "18px" }}>
          Tell Us More
        </Typography>
      </Box>
      <Typography>
        If you have credits you'd like to transfer, just send them in for
        evaluation and you'll be able to review a list of your approved courses
        here. Select the ones you'd like to transfer and pay the $17 per course
        transfer fee. Learn more here.
      </Typography>
      <Typography variant="h6" style={{ marginTop: "20px" }}>
        Have you taken courses at any other university, college, or accredited
        higher institution?
      </Typography>

      <FormControl component="fieldset">
        <RadioGroup value={selectedOption} onChange={handleOptionChange}>
          <FormControlLabel value="YES" control={<Radio />} label="YES" />
          <FormControlLabel value="NO" control={<Radio />} label="NO" />
        </RadioGroup>
      </FormControl>

      <div style={{ marginTop: "20px" }}>
        <Button variant="contained" color="primary" disabled={!selectedOption}>
          SAVE & CONTINUE
        </Button>
      </div>
    </div>
  );
};

export default TransferCreditsComponent;
