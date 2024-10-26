import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  it('always shows the word "TalentsFlow" in headings', () => {
    render(<Header />);
    const heading = screen.getByText('TalentsFlow');
    expect(heading).toBeInTheDocument();
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
