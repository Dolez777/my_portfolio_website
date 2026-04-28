import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ProjectCard } from '@/components/project-card';
import { Project } from '@/lib/projects';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => <div {...(props as React.HTMLAttributes<HTMLDivElement>)}>{children}</div>,
  },
}));

// Mock next/image
vi.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  default: (props: { src: string; alt: string }) => <img {...props} />,
}));

const mockProject: Project = {
  id: 'test-project',
  title: 'Test Project',
  description: 'A test project description',
  categories: ['web', 'ai'],
  techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis'],
  githubUrl: 'https://github.com/test/project',
  liveUrl: 'https://test-project.com',
  image: '/test.png',
  featured: true,
};

describe('ProjectCard', () => {
  it('renders project information correctly', () => {
    render(<ProjectCard project={mockProject} index={0} />);
    
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('A test project description')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('renders badges for categories', () => {
    render(<ProjectCard project={mockProject} index={0} />);
    
    expect(screen.getByText('web')).toBeInTheDocument();
    expect(screen.getByText('ai')).toBeInTheDocument();
  });

  it('shows "+n more" if tech stack is long', () => {
    render(<ProjectCard project={mockProject} index={0} />);
    
    expect(screen.getByText('+1 more')).toBeInTheDocument();
  });

  it('links to the correct URLs', () => {
    render(<ProjectCard project={mockProject} index={0} />);
    
    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/test/project');
    
    const demoLink = screen.getByRole('link', { name: /demo/i });
    expect(demoLink).toHaveAttribute('href', 'https://test-project.com');
  });
});
