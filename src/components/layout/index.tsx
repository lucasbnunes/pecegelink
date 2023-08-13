import { Container } from "./styles"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return <Container>
    {children}
  </Container>
}