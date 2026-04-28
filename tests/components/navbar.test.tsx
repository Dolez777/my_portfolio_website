import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Navbar } from '@/components/layout/navbar';
import { usePathname } from 'next/navigation';

// Mock next/navigation
vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
}));

// Mock next/link to just render children
vi.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string; [key: string]: any }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

describe('Navbar', () => {
  it('renders navigation links', () => {
    (usePathname as any).mockReturnValue('/');
    render(<Navbar />);
    
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Projects/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });

  it('highlights the active link', () => {
    (usePathname as any).mockReturnValue('/projects');
    render(<Navbar />);
    
    // Find the links and check the first one (desktop)
    const projectsLinks = screen.getAllByRole('link', { name: /projects/i });
    expect(projectsLinks[0]).toHaveClass('text-accent');
    expect(projectsLinks[0]).toHaveAttribute('href', '/projects');
  });

  it('renders the logo', () => {
    (usePathname as any).mockReturnValue('/');
    render(<Navbar />);
    
    expect(screen.getByText(/Portfolio/i)).toBeInTheDocument();
  });
});
