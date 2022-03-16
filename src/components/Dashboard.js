import React from "react";
import {
  Box,
  Toolbar,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

function Dashboard() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { md: `calc(100% - 250px)` },
        margin: "0 auto",
      }}
    >
      <Toolbar />
      <Grid container spacing={3}>
        <Grid item lg={12} md={12}>
          <Typography variant="h5" sx={{ fontWeight: "700", color: "#4e4f50" }}>
            Dashboard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Aqui você encontrará informações sobre suas transações.
          </Typography>
        </Grid>
        <Grid item lg={4} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Grid container alignItems="center">
                <Grid item>
                  <Add
                    style={{
                      backgroundColor: "#5c8c38",
                      fill: "#fff",
                      borderRadius: "50%",
                      padding: "4px",
                      marginRight: "20px",
                      boxShadow: "2px 5px 9px -3px #000000a6",
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h5">12</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Transações de Entrada
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={4} md={6}>
          <Card variant="outlined">
            <CardContent>
            <Grid container alignItems="center">
                <Grid item>
                  <Remove
                    style={{
                      backgroundColor: "#e42629",
                      fill: "#fff",
                      borderRadius: "50%",
                      padding: "4px",
                      marginRight: "20px",
                      boxShadow: "2px 5px 9px -3px #000000a6",
                    }}
                  />
                </Grid>
                <Grid item>
                <Typography variant="h5">5</Typography>
              <Typography variant="body2" color="text.secondary">
                Transações de Saída
              </Typography>
                </Grid>
              </Grid>
              
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={4} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5">R$ 2.000,00</Typography>
              <Typography variant="body2" color="text.secondary">
                Subtotal de Entrada
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={4} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5">R$ 2.000,00</Typography>
              <Typography variant="body2" color="text.secondary">
                Subtotal de Saída
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={4} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5">R$ 2.000,00</Typography>
              <Typography variant="body2" color="text.secondary">
                Subtotal da Conta
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
