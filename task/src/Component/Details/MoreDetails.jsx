import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";

const MoreDetails = () => {
  const [selectedProgramType, setSelectedProgramType] = useState("");

  const handleProgramTypeChange = (event) => {
    setSelectedProgramType(event.target.value);
  };

  const [graduated, setGraduated] = useState("");

  const handleGraduationChange = (event) => {
    setGraduated(event.target.value);
  };

  const [institutionName, setInstitutionName] = useState("");

  const handleInstitutionNameChange = (event) => {
    setInstitutionName(event.target.value);
  };

  const [selectedState, setSelectedState] = useState("");

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      style={{
        padding: "20px",
        backgroundColor: "white",
        borderRadius: "10px",
        border: "1px solid #c3c6c9",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
    >
      <Grid item>
        <Typography variant="h5" style={{ marginBottom: "10px" }}>
          TRANSFER CREDITS
        </Typography>
        <Typography variant="p">
          We make transferring credits easy. Let us know which institution
          you've attended and upload your digital transcripts. We'll review them
          and let you know which courses are eligible for transfer.
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
        <Typography
          variant="p"
          style={{ fontSize: "18px", fontWeight: "bold" }}
        >
          Where did you earn your higher Education credits?
        </Typography>
      </Grid>

      <Grid item sx={{ width: "100%", marginTop: "10px" }}>
        <Typography>State/U.S. Territory*</Typography>
        <Select
          value={selectedState}
          onChange={handleStateChange}
          sx={{ width: "100%" }}
        >
          <MenuItem value="">Select State</MenuItem>
          {/* Add more state options here */}
          <MenuItem value="Alabama">Alabama</MenuItem>
          <MenuItem value="Alaska">Alaska</MenuItem>
          {/* Add more state options here */}
        </Select>
      </Grid>

      <Grid item sx={{ width: "100%", marginTop: "10px" }}>
        <Typography>Name of Institution*</Typography>
        <TextField
          value={institutionName}
          onChange={handleInstitutionNameChange}
          placeholder="Begin typing the name of your institution to search. Please do not use abbreviations"
          sx={{ width: "100%" }}
        />
      </Grid>

      <Grid item sx={{ width: "100%", marginTop: "10px" }}>
        <Typography>Program Type*</Typography>
        <Select
          value={selectedProgramType}
          onChange={handleProgramTypeChange}
          sx={{ width: "100%" }}
        >
          <MenuItem value="">Select program type</MenuItem>
          <MenuItem value="Bachelor">Bachelor</MenuItem>
          <MenuItem value="Master">Master</MenuItem>
          {/* Add more program type options here */}
        </Select>
      </Grid>

      <Grid item sx={{ width: "100%", marginTop: "10px" }}>
        <Typography>Have you graduated?*</Typography>
        <Select
          value={graduated}
          onChange={handleGraduationChange}
          sx={{ width: "100%" }}
        >
          <MenuItem value="">Select</MenuItem>
          <MenuItem value="Yes">Yes</MenuItem>
          <MenuItem value="No">No</MenuItem>
        </Select>
      </Grid>

      <Grid item sx={{ width: "100%", marginTop: "10px" }}>
        <Button sx={{ width: "50%", marginTop: "10px" }}>BACK</Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ width: "50%", marginTop: "10px" }}
        >
          SAVE & CONTINUE
        </Button>
      </Grid>
    </Grid>
  );
};

export default MoreDetails;
