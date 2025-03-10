import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Download, File, FileText, FileSearch, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import { mockProducts } from "@/lib/products";
import Footer from "@/components/Footer";

// Mock downloads for demonstration
const downloadItems = [
  { id: "1", downloadDate: "2023-09-15", downloads: 2, expiresAt: "2025-09-15" },
  { id: "3", downloadDate: "2023-08-22", downloads: 1, expiresAt: "2025-08-22" }
];

const Downloads = () => {
  const items = downloadItems.map(item => {
    const product = mockProducts.find(p => p.id === item.id);
    return { ...item, product };
  }).filter(item => item.product);

  return (
    <div className="min-h-screen bg-retro-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-28 pb-16">
        <Link to="/" className="inline-flex items-center text-sm text-retro-secondary hover:text-retro-secondary/80 retro-body mb-6 border-b-2 border-dashed border-retro-secondary">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Store
        </Link>

        <div className="flex items-center mb-8">
          <Download className="h-8 w-8 text-retro-secondary mr-3" />
          <h1 className="retro-heading text-3xl">My Downloads</h1>
        </div>

        {items.length === 0 ? (
          <div className="retro-card border-retro-secondary shadow-retro-secondary p-8 text-center">
            <div className="mb-4">
              <Download className="h-12 w-12 text-retro-secondary mx-auto opacity-50" />
            </div>
            <h2 className="retro-heading text-xl mb-4">No downloads available</h2>
            <p className="retro-body mb-6">You haven't purchased any downloadable products yet.</p>
            <Link to="/" className="retro-button retro-button-primary inline-block">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {items.map(item => (
              <div key={item.id} className="retro-card border-retro-secondary shadow-retro-secondary overflow-hidden">
                <div className="p-6 border-b-2 border-dashed border-retro-secondary/50 bg-retro-muted">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex gap-4">
                      <div className="w-20 h-20 overflow-hidden border-2 border-retro-primary rounded-md flex-shrink-0">
                        <img 
                          src={item.product?.coverImage} 
                          alt={item.product?.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="retro-heading text-lg">{item.product?.title}</h3>
                        <p className="text-sm retro-body text-retro-muted-foreground">{item.product?.author}</p>
                        <p className="text-xs retro-body mt-1">
                          Purchase date: {new Date(item.downloadDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="text-xs retro-body md:text-right">
                      <p>Downloads: {item.downloads} of 5</p>
                      <p>Expires: {new Date(item.expiresAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="retro-heading text-md mb-4">Available Files</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="retro-card border-retro-primary shadow-retro-primary p-4 hover:-translate-y-1 transition-transform">
                      <div className="flex items-center">
                        <FileText className="h-6 w-6 mr-3 text-retro-primary" />
                        <div>
                          <p className="retro-heading text-sm">Full Book (PDF)</p>
                          <p className="text-xs text-retro-muted-foreground">21.4 MB</p>
                        </div>
                      </div>
                      <button className="retro-button retro-button-primary text-xs w-full mt-3">
                        <Download className="h-3.5 w-3.5 mr-1" /> Download
                      </button>
                    </div>
                    <div className="retro-card border-retro-secondary shadow-retro-secondary p-4 hover:-translate-y-1 transition-transform">
                      <div className="flex items-center">
                        <File className="h-6 w-6 mr-3 text-retro-secondary" />
                        <div>
                          <p className="retro-heading text-sm">Sample Chapter</p>
                          <p className="text-xs text-retro-muted-foreground">3.8 MB</p>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <button className="retro-button retro-button-secondary text-xs flex-1">
                          <Download className="h-3.5 w-3.5 mr-1" /> Download
                        </button>
                        <button className="retro-button retro-button-accent text-xs px-2">
                          <FileSearch className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                    <div className="retro-card border-retro-accent shadow-retro-accent p-4 hover:-translate-y-1 transition-transform">
                      <div className="flex items-center">
                        <ExternalLink className="h-6 w-6 mr-3 text-retro-accent-foreground" />
                        <div>
                          <p className="retro-heading text-sm">Bonus Content</p>
                          <p className="text-xs text-retro-muted-foreground">Online Access</p>
                        </div>
                      </div>
                      <button className="retro-button retro-button-accent text-xs w-full mt-3">
                        Access Online
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Downloads;
