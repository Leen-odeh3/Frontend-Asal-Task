import React from "react";
import Grid from "@mui/material/Grid";
import LeftSide from "../LeftSide/LeftSide";
import RightSide from "../RightSide/RightSide";

const MainPage = () => {
  return (
    <Grid
      container
      spacing={3}
      style={{ backgroundColor: "#f5f5f5", padding: "30px 20px" }}
    >
      <Grid item xs={12} sm={5}>
        <LeftSide />
      </Grid>
      <Grid item xs={12} sm={7}>
        <RightSide />
      </Grid>
    </Grid>
  );
};

export default MainPage;
