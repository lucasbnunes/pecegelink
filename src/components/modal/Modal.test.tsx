import { fireEvent, render, screen } from "@testing-library/react"
import { Modal } from "."
import { ThemeProvider } from "styled-components"
import { theme } from "../../styles/theme"
import { Button } from "../Button"

describe('Modal component', () => {
  it('renders the children when open is true', () => {
    render(
      <ThemeProvider theme={theme}>
        <Modal open setOpen={() => { }}>
          <Modal.Title>Modal title</Modal.Title>
          <Modal.Body>
            <span>Modal body</span>
          </Modal.Body>
          <Modal.Footer>
            <Button>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </ThemeProvider>
    )

    const modal = screen.getByRole('dialog')
    const title = screen.getByText('Modal title')
    const body = screen.getByText('Modal body')
    const button = screen.getByText('Cancel')

    expect(modal).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(body).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('does not render the modal when open is false', () => {
    render(
      <ThemeProvider theme={theme}>
        <Modal open={false} setOpen={() => { }}>
        </Modal>
      </ThemeProvider>
    )

    const modal = screen.queryByRole('dialog')
    const title = screen.queryByText('Modal title')
    const body = screen.queryByText('Modal body')
    const button = screen.queryByText('Cancel')

    expect(modal).not.toBeInTheDocument()
    expect(title).not.toBeInTheDocument()
    expect(body).not.toBeInTheDocument()
    expect(button).not.toBeInTheDocument()
  })

  it('renders the close modal button with aria-label', () => {
    render(
      <ThemeProvider theme={theme}>
        <Modal open setOpen={() => { }}>
        </Modal>
      </ThemeProvider>
    )

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-label', 'fechar')
  })

  it('calls the setOpen function with false when the close button is clicked', () => {
    const closeFn = vitest.fn()

    render(
      <ThemeProvider theme={theme}>
        <Modal open setOpen={closeFn}>
        </Modal>
      </ThemeProvider>
    )

    const button = screen.getByRole('button')

    fireEvent.click(button)

    expect(closeFn).toBeCalledWith(false)
  })
})