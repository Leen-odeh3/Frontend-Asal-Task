import { Box } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";

const LeftSide = () => {
  const notes = [
    "Tell Us More",
    "Upload Transcripts & Documents",
    "Transfer Credit Evaluation",
  ];
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "white",
        borderRadius: "10px",
      }}
    >
      <Typography variant="h6" style={{ marginBottom: "20px" }}>
        TRANSFER CREDITS
      </Typography>
      <p style={{ lineHeight: "2" }}>
        We make transferring credits easy. Let us know which institution you've
        attended and upload your digital transcripts. We'll review them and let
        you know which courses are eligible for transfer. It's never been
        easier, just follow the steps below.
      </p>
      <Box style={{}}>
        {notes.map((note, index) => (
          <div key={index}>
            <p style={{ marginTop: "20px", marginBottom: "20px" }}>{note}</p>
          </div>
        ))}
      </Box>
      <span
        style={{
          fontWeight: "bolder",
          marginTop: "10px",
          marginBottom: "15px",
        }}
      >
        *We will add link click here
      </span>
    </div>
  );
};

export default LeftSide;