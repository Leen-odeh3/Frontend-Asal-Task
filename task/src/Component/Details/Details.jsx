import React from 'react'
import Grid from "@mui/material/Grid";
import LeftSide from '../LeftSide/LeftSide';
import MoreDetails from './MoreDetails';



const Details = () => {
  return (
    <Grid
      container
      spacing={3}
      style={{ backgroundColor: "#f5f5f5", padding: "30px 20px" }}
    >
      <Grid item xs={12} sm={5}>
        <LeftSide/>
      </Grid>
      <Grid item xs={12} sm={7}>
    <MoreDetails/>
      </Grid>
    </Grid>
  )
}

export default Details
