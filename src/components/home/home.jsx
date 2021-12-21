import React from "react";
import Avatar from "@mui/material/Avatar";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Img from "../../img/yo.jpeg";
export default function Home() {
  return (
    <div>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Typography variant="h3" component="div" sx={{color:"white"}} >
            Mateo DellAcqua Castro
        </Typography>
        <img src={Img} className="imagen" width="350" height="350"  />
      </Stack>
    </div>
  );
}
