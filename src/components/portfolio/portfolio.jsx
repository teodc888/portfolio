import React from "react";
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
  const proyectos = [
    {
      id: 1,
      nombre: "Ecommerce ADIDAS",
      descripcion: "Ecommerce de zapatillas Adidas",
      imagen:
        "https://user-images.githubusercontent.com/29457718/146104286-e40f459a-36d4-47a8-87a8-0d4e226df2ca.png",
      url: "https://deploy-front-pf-ecommerce-adidas.vercel.app/home",
      github: "https://github.com/teodc888/COUNTRIES_APP"
    },
    {
      id: 2,
      nombre: "SPA Countries",
      descripcion: "Con esta App podrás buscar cualquier PAIS del mundo, ver su informacion mas importante y agregarle actividades a cada uno de ellos!!!",
      imagen:
        "https://user-images.githubusercontent.com/29457718/141840473-8439d751-d03a-40f1-b391-726102ba1609.png",
      url: "",
      github: "https://github.com/teodc888/COUNTRIES_APP"
    },
    {
      id: 3,
      nombre: "APP CLIMA",
      descripcion: "Con esta App podrás informate sobre la temperatura que hace en cualquier parte del mundo y su extendido en 5 dias y 8 horas diarias",
      imagen:
        "https://user-images.githubusercontent.com/29457718/146102186-e3ba5915-976b-44b2-8ec6-04c9aada9d15.png",
      url: "https://clima-six.vercel.app/",
      github: "https://github.com/teodc888/Clima"
    },
    {
      id: 4,
      nombre: "APP PELICULAS",
      descripcion: "Con esta App podrás buscar la Peliculas/Serie/Programa de TV que quieras, saber su informacion y guardar las favoritas !!!",
      imagen:
        "https://user-images.githubusercontent.com/29457718/146437972-3d0c5883-443e-4b9a-b5cc-a577ab3f8019.png",
      url: "https://peliculas-app.vercel.app/",
      github: "https://github.com/teodc888/Peliculas-App"
    },
  ];
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
                      {proyecto.nombre}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {proyecto.descripcion}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link href={proyecto.github}>
                    <Button size="small">GitHub</Button>
                    </Link>
                    <Link href={proyecto.url}>
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
