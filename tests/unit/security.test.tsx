import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SecureLink } from '@/components/shared/secure-link';
import { SecureText } from '@/components/shared/secure-text';

describe('Security Components', () => {
  describe('SecureLink', () => {
    it('does not render a raw <a> tag with href initially', () => {
      const { container } = render(
        <SecureLink 
          hrefParts={['https://github.com/', 'user']} 
          labelParts={['GitHub']} 
        />
      );
      
      // Should be a button, not an anchor
      const button = container.querySelector('button');
      expect(button).toBeInTheDocument();
      expect(button).not.toHaveAttribute('href');
    });

    it('opens the joined URL when clicked', () => {
      render(
        <SecureLink 
          hrefParts={['https://github.com/', 'user']} 
          labelParts={['GitHub']} 
        />
      );
      
      const button = screen.getByRole('button');
      fireEvent.click(button);
      
      expect(window.open).toHaveBeenCalledWith(
        'https://github.com/user', 
        '_blank', 
        'noopener,noreferrer'
      );
    });
  });

  describe('SecureText', () => {
    it('assembles text parts on mount', async () => {
      render(<SecureText textParts={['John', ' ', 'Doe']} />);
      
      // Need to wait for mount effects
      const name = await screen.findByText('John Doe');
      expect(name).toBeInTheDocument();
    });
  });
});
