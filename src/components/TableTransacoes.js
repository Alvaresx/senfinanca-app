import React, { useState } from "react";
import {
  Box,
  Toolbar,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFooter,
  TablePagination,
  Paper,
  Tooltip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

function TableTransacoes() {
  const [rows, setRows] = useState([
    {
      titulo: "Mariana",
      tipo: "Entrada",
      categoria: "Alimentação",
      valor: "R$ 2.000,00",
      data: "16/03/2022",
    },
  ]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [dataLogStorage] = useState([]);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
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
            Transações
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Aqui você poderá visualizar as informações das suas transações, bem como editar e/ou excluí-las.
          </Typography>
        </Grid>
      </Grid>
        <TableContainer component={Paper} sx={{ marginTop: "24px" }}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Título</TableCell>
                <TableCell align="center">Tipo</TableCell>
                <TableCell align="center">Categoria</TableCell>
                <TableCell align="center">Valor</TableCell>
                <TableCell align="center">Data/Hora</TableCell>
                <TableCell align="center">Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((row) => (
                <TableRow
                  key={row.titulo}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{row.titulo}</TableCell>
                  <TableCell align="center">{row.tipo}</TableCell>
                  <TableCell align="center">{row.categoria}</TableCell>
                  <TableCell align="center">{row.valor}</TableCell>
                  <TableCell align="center">{row.data}</TableCell>
                  <TableCell align="center">
                    <Tooltip title="Editar" placement="left">
                      <IconButton>
                        <Edit />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Excluir" placement="right">
                      <IconButton
                      // onClick={() => handleOpenDeleteDialog(row.cpf, row.nome)}
                      >
                        <Delete />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[
                    5,
                    10,
                    25,
                    { label: "Todas", value: -1 },
                  ]}
                  colSpan={6}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  labelRowsPerPage="Linhas por página:"
                  labelDisplayedRows={({ from, to, count }) =>
                    `${from}-${to} de ${count}`
                  }
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Box>

      {/* DIALOG DE EXCLUSÃO DO USUÁRIO */}
      <Dialog
        onClose={() => setOpenDeleteDialog(false)}
        open={openDeleteDialog}
      >
        <DialogTitle>Excluir usuário</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Tem certeza que deseja excluir este usuário?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteDialog(false)}>Cancelar</Button>
          <Button /*onClick={handleDeleteUser}*/>Excluir</Button>
        </DialogActions>
      </Dialog>

      {/* DIALOG DE EDIÇÃO DO USUÁRIO */}
      <Dialog
        onClose={() => setOpenDeleteDialog(false)}
        open={openDeleteDialog}
      >
        <DialogTitle>Excluir usuário</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Tem certeza que deseja excluir este usuário?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteDialog(false)}>Cancelar</Button>
          <Button /*onClick={handleDeleteUser}*/>Excluir</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default TableTransacoes;
