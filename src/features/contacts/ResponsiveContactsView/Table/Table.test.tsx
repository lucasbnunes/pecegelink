import { fireEvent, render, screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import { theme } from "../../../../styles/theme"
import { Table } from "."

const testData = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
]

describe('Contacts table component', () => {
  it('render the contacts', () => {
    render(
      <ThemeProvider theme={theme}>
        <Table data={testData} onClick={() => { }} />
      </ThemeProvider>
    )

    expect(screen.getByText(testData[0].name)).toBeInTheDocument()
    expect(screen.getByText(testData[1].name)).toBeInTheDocument()
  })

  it('calls the onClick function with the contact when a table row is clicked', () => {
    const fn = vitest.fn()
    render(
      <ThemeProvider theme={theme}>
        <Table data={testData} onClick={fn} />
      </ThemeProvider>
    )

    const firstRow = screen.getByText(testData[0].name)
    fireEvent.click(firstRow)

    expect(fn).toBeCalledWith(testData[0])
  })
})