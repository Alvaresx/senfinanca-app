import React, { useContext } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import Context from "../Context";

function EditarTransacao() {
  const { openEditDialog, setOpenEditDialog } = useContext(Context);

  const handleCloseDialog = () => {
    setOpenEditDialog(false);
  };

  return (
    <Dialog onClose={handleCloseDialog} open={openEditDialog}>
      <DialogTitle>Editar transação</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Tem certeza que deseja excluir este usuário?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog}>Cancelar</Button>
        <Button /*onClick={handleDeleteUser}*/>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditarTransacao;
