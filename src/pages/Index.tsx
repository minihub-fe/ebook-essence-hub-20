
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <section className="mb-12 text-center">
          <span className="text-sm font-medium text-primary/60">Digital Library</span>
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Discover Premium Digital Content
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of ebooks, templates, and educational resources designed to help you grow.
          </p>
        </section>
        <ProductGrid />
      </main>
    </div>
  );
};

export default Index;
