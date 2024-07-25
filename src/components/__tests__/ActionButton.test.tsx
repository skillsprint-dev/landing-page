import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ActionButton from '../ActionButton';

describe('ActionButton', () => {
    it('links to the Calendly page', () => {
        render(<ActionButton />);
        const actionButton = screen.getByRole('link', {
            name: 'Book a Free Assessment'
        });
        expect(actionButton).toHaveAttribute('href', 'https://calendly.com/skillsprint/free-assessment');
    });

    it('matches the snapshot', () => {
        const { asFragment } = render(<ActionButton />);
        expect(asFragment()).toMatchSnapshot();
    });
});