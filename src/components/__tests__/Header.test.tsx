import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
    it('always shows the word "SkillSprint" in headings', () => {
        render(<Header />);
        const heading = screen.getByText('SkillSprint');
        expect(heading).toBeInTheDocument();
    });

    it('matches the snapshot', () => {
        const { asFragment } = render(<Header />);
        expect(asFragment()).toMatchSnapshot();
    });
});