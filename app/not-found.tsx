import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center px-4">
      <h1 className="font-heading text-8xl font-bold gradient-text">404</h1>
      <p className="mt-4 text-xl text-muted-foreground">Page not found.</p>
      <Link
        href="/"
        className="mt-8 btn-gradient inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium"
      >
        Back to Home
      </Link>
    </div>
  );
}
