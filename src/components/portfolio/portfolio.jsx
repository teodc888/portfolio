import React, {useEffect, useState} from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from "@mui/material";
export default function Portfolio() {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    axios.get("https://push-porfolio.herokuapp.com/portfolio").then((res) => {
      console.log(res.data);
      setProyectos(res.data);
    });
  }, []);

  return (
    <>
      <Box sx={{ width: "100%", marginTop: "50px" }}>
        <Grid
          container
          spacing={{ xs: 4, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {proyectos.map((proyecto) => {
            return (
              <Grid item xs={4} sm={4} md={4} key={proyecto.id}>
                <Card sx={{ maxWidth: 545 }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={proyecto.imagen}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {proyecto.titulo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {proyecto.descripcion}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link href={proyecto.github}>
                    <Button size="small">GitHub</Button>
                    </Link>
                    <Link href={proyecto.link}>
                    <Button size="small">Ver</Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
