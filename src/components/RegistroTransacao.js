import React from "react";
import {Box, Toolbar} from "@mui/material"

function RegistroTransacao() {
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
      <div>Registro</div>
    </Box>
  );
}

export default RegistroTransacao;
