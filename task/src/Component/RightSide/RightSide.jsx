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
import { useNavigate } from "react-router-dom";

const TransferCreditsComponent = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const handleSaveAndContinue = () => {
    navigate("/details");
  };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "white",
        borderRadius: "10px",
        border: "1px solid #c3c6c9",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
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
          marginBottom: "25px",
          marginTop: "20px",
        }}
      >
        <Typography variant="p" style={{ fontSize: "18px" }}>
          Tell Us More
        </Typography>
      </Box>
      <Box
        style={{
          backgroundColor: "#f5f5f5",
          padding: "13px",
          borderRadius: "5px",
          border: "1px solid #c3c6c9",
        }}
      >
        <Typography style={{ fontFamily: "-moz-initial" }}>
          If you have credits you'd like to transfer, just send them in for
          evaluation and you'll be able to review a list of your approved
          courses here. Select the ones you'd like to transfer and pay the $17
          per course transfer fee. Learn more here.
        </Typography>
      </Box>
      <Typography
        variant="h6"
        style={{ marginTop: "25px", fontSize: "15px", fontWeight: "bold" }}
      >
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
        <Button
          variant="contained"
          color="primary"
          disabled={!selectedOption}
          style={{ marginBottom: "10px" }}
          onClick={handleSaveAndContinue}
        >
          SAVE & CONTINUE
        </Button>
      </div>
    </div>
  );
};

export default TransferCreditsComponent;
