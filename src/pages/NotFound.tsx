
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-retro-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-md mx-auto text-center">
          <div className="retro-card retro-card-secondary p-8 animate-fade-in">
            <h1 className="text-6xl font-bold retro-heading mb-6">404</h1>
            <h2 className="text-2xl font-serif mb-4">Page Not Found</h2>
            <p className="font-mono text-retro-muted-foreground mb-8">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link to="/" className="retro-button retro-button-secondary inline-flex items-center">
              <Home className="mr-2 h-5 w-5" /> Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
