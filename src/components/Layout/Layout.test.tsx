
import { render, screen } from '@testing-library/react'
import { Layout } from '.'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/theme'

describe('Layout component tests', () => {
  it('should render the children', () => {
    render(
      <ThemeProvider theme={theme}>
        <Layout>
          <h1>Title</h1>
        </Layout>
      </ThemeProvider>
    )

    const children = screen.getByRole('heading')

    expect(children).toBeTruthy()
  })
})