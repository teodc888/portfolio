import React from "react";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Typed from "react-typed";
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
        <Typography variant="h3" component="div" sx={{ color: "white" }}>
          <Typed
            strings={["Mateo", "DellAcqua", "Castro", "Mateo DellAcqua Castro"]}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
        </Typography>
        <Typography variant="h5" component="div" sx={{ color: "white" }}>
          <Typed
            strings={[
              "Frontend Developer",
              "Backend Developer",
              "Fullstack Developer",
            ]}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
        </Typography>
        <img src={Img} className="imagen" width="350" height="350" />
      </Stack>
    </div>
  );
}
