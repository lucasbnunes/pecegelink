import { render, screen } from "@testing-library/react";
import { ResponsiveContactsView } from ".";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import useViewport from "../../../hooks/useViewport";
import { Mock } from "vitest";
import { useContacts } from "../useContacts";

vitest.mock('../../../hooks/useViewport', () => ({
  __esModule: true,
  default: vitest.fn(() => ({ width: 1000 })),
}))

vitest.mock("../useContacts", () => ({
  __esModule: true,
  useContacts: vitest.fn(() => ({
    data: [
      { id: 1, name: "John Doe", email: "john.doe@example.com" },
      { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    ],
    isLoading: false,
  })),
}));

describe('ResponsiveContactsView component', () => {
  it('renders the contacts table', () => {
    (useViewport as Mock).mockReturnValueOnce({ width: 1600 })

    render(
      <ThemeProvider theme={theme}>
        <ResponsiveContactsView />
      </ThemeProvider>
    )

    const table = screen.getByRole('table')

    expect(table).toBeInTheDocument()
  })

  it('renders the contacts list', () => {
    (useViewport as Mock).mockReturnValueOnce({ width: 600 })

    render(
      <ThemeProvider theme={theme}>
        <ResponsiveContactsView />
      </ThemeProvider>
    )

    const list = screen.getByRole('list')

    expect(list).toBeInTheDocument()
  })

  it('renders the loading state when isLoading is true', () => {
    (useContacts as Mock).mockReturnValueOnce({ data: [], isLoading: true })

    render(
      <ThemeProvider theme={theme}>
        <ResponsiveContactsView />
      </ThemeProvider>
    )

    const loading = screen.getByText('Carregando')

    expect(loading).toBeInTheDocument()
  })
})