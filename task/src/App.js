import React from "react";
import Grid from "@mui/material/Grid";
import LeftSide from "./Component/LeftSide/LeftSide";
import RightSide from "./Component/RightSide/RightSide";

const App = () => {
  return (
    <Grid
      container
      spacing={3}
      style={{ backgroundColor: "#F5F5F5", padding: "25px" }}
    >
      <Grid item xs={5}>
        <LeftSide />
      </Grid>
      <Grid item xs={7}>
        <RightSide />
      </Grid>
    </Grid>
  );
};

export default App;
