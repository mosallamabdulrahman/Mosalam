import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="py-28 px-4 text-center">
      <h1 className="text-5xl font-display font-bold text-heading-light dark:text-white mb-4">
        404
      </h1>
      <p className="text-text-muted-light dark:text-text-muted-dark mb-8">
        The page you requested could not be found.
      </p>
      <Link
        to="/"
        className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary-hover transition-colors"
      >
        Back to Home
      </Link>
    </section>
  );
}
