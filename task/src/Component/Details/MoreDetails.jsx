import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

const MoreDetails = () => {
  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Grid item>
        <Typography variant="h5">TRANSFER CREDITS</Typography>
        <Typography>
          We make transferring credits easy. Let us know which institution you've attended
          and upload your digital transcripts. We'll review them and let you know which courses
          are eligible for transfer.
        </Typography>
      </Grid>

      <Grid item>
        <Select value="USA">
          <MenuItem value="USA">USA</MenuItem>
          {/* Add more MenuItem components as needed */}
        </Select>
        <Button variant="contained" color="primary">TELL US MORE</Button>
      </Grid>

      <Grid item>
        <Select value="">
          <MenuItem value="">Select State</MenuItem>
          {/* Add more state options here */}
        </Select>
        <TextField label="Name of Institution" placeholder="Begin typing the name of your institution to search. Please do not use abbreviations" />
        <TextField label="Program Type" placeholder="Select program type" />
        <Select value="">
          <MenuItem value="">Select</MenuItem>
          {/* Add graduated options here */}
        </Select>
      </Grid>

      <Grid item>
        <Button>BACK</Button>
        <Button variant="contained" color="primary">SAVE & CONTINUE</Button>
      </Grid>
    </Grid>
  );
};

export default MoreDetails;
