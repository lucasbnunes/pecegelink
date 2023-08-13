import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/global'
import { Home } from './pages/home'
import { Layout } from './components/layout'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Home />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
