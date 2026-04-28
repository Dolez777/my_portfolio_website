import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock window.open for SecureLink tests
window.open = vi.fn();

// Mock toast
vi.mock('sonner', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));
