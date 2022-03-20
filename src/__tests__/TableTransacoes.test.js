import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TableTransacoes from "../components/TableTransacoes";
import { SnackbarProvider } from "notistack";

describe("Componente TableTransacoes", () => {
  test("deve conter o título 'Transações'", () => {
    render(
      <SnackbarProvider>
        <TableTransacoes />
      </SnackbarProvider>
    );
    const transacoesTitle = screen.getByRole("heading", {
      level: 5,
      name: "Transações",
    });
    expect(transacoesTitle).toBeInTheDocument();
  });

  test("deve conter o subtítulo 'Aqui você poderá visualizar as informações das suas transações, bem como editar e/ou excluí-las.'", () => {
    render(
      <SnackbarProvider>
        <TableTransacoes />
      </SnackbarProvider>
    );
    const transacoesSubtitle = screen.getByText("Aqui você poderá visualizar as informações das suas transações, bem como editar e/ou excluí-las.");
    expect(transacoesSubtitle).toBeInTheDocument();
  });
});
