import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet"; // ✅ Add Helmet for SEO

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      {/* ✅ Helmet for page-specific SEO */}
      <Helmet>
        <title>404 - Page Not Found | Smart Expense Tracker</title>
        <meta
          name="description"
          content={`The page "${location.pathname}" does not exist. Return to the Smart Expense Tracker home page to manage your expenses.`}
        />
      </Helmet>

      {/* Page content */}
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
          {/* ✅ H1 for 404 page */}
          <h1 className="mb-4 text-4xl font-bold">404 - Page Not Found</h1>

          {/* H2 / optional subheading */}
          <h2 className="mb-4 text-xl text-muted-foreground">
            Oops! The page you are looking for does not exist.
          </h2>

          <a
            href="/"
            className="text-primary underline hover:text-primary/90"
          >
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
