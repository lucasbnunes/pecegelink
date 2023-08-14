import { ThemeProvider } from 'styled-components';
import { Button } from '.';
import { fireEvent, render } from '@testing-library/react';
import { theme } from '../../styles/theme';

describe('Button component', () => {
  it('renders button with default props', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button>Click me</Button>
      </ThemeProvider>
    );

    const button = getByText('Click me');

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('variant', 'solid');
    expect(button).toHaveAttribute('color', 'primary');
  });

  it('renders button with custom props', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button variant="outline" color="gray">
          Click me
        </Button>
      </ThemeProvider>
    );

    const button = getByText('Click me');

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('variant', 'outline');
    expect(button).toHaveAttribute('color', 'gray');
  });

  it('calls onClick handler when button is clicked', () => {
    const handleClick = vitest.fn();
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button onClick={handleClick}>Click me</Button>
      </ThemeProvider>
    );

    const button = getByText('Click me');

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});