
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 items-center justify-center py-20">
        <div className="mx-auto max-w-md px-4 text-center">
          <h1 className="font-serif text-4xl font-bold md:text-5xl">404</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="mt-8 inline-block rounded-md bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90"
          >
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
