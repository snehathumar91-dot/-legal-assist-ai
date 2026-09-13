import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('LegalAssist AI Application', () => {
  it('renders the main dashboard successfully', () => {
    render(<App />);
    const headerElement = screen.getByText(/Legal Document Simplifier/i);
    expect(headerElement).toBeInTheDocument();
  });

  it('contains the essential action buttons for accessibility', () => {
    render(<App />);
    const simplifyButton = screen.getByRole('button', { name: /Simplify & Scan Document/i });
    expect(simplifyButton).toBeInTheDocument();
  });
});
