import React, { useState } from "react";
import {
  Box,
  Toolbar,
  Paper,
  Grid,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";

function RegistroTransacao() {
  const [tipos] = useState(["Entrada", "Saída"]);
  const [categorias] = useState([
    "Alimentação",
    "Educação",
    "Entretenimento",
    "Saúde",
    "Transporte",
  ]);

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
      <Grid container>
        <Grid item lg={12} md={12}>
          <Typography variant="h5" sx={{ fontWeight: "700", color: "#4e4f50" }}>
            Registrar Transação
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Aqui você poderá registrar suas transações.
          </Typography>
        </Grid>
      </Grid>
      <Paper elevation={3} sx={{ padding: "24px", marginTop: "24px" }}>
        <Grid container spacing={3}>
          <Grid item lg={3}>
            <TextField label="Título" fullWidth />
          </Grid>
          <Grid item lg={3}>
            <TextField label="Valor" fullWidth />
          </Grid>
          <Grid item lg={3}>
            <TextField select label="Tipo" fullWidth>
              {tipos.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item lg={3}>
            <TextField select label="Categoria" fullWidth>
              {categorias.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item lg={2}>
            <Button variant="contained" fullWidth sx={{ marginTop: "24px" }}>
              Registrar
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default RegistroTransacao;
