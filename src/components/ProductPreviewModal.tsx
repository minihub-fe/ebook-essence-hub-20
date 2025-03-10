
import React from "react";
import { BookOpen } from "lucide-react";
import PdfViewer from "@/components/PdfViewer";
import { Product } from "@/lib/products";

interface ProductPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
  onBuyNow: () => void;
}

const ProductPreviewModal = ({ isOpen, onClose, product, onBuyNow }: ProductPreviewModalProps) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col border-4 border-retro-primary animate-scale-in">
        <div className="flex items-center justify-between p-4 border-b-2 border-retro-primary bg-retro-accent">
          <h2 className="retro-heading text-xl">Preview: {product.title}</h2>
          <button 
            onClick={onClose}
            className="rounded-full w-10 h-10 flex items-center justify-center hover:bg-retro-primary/10 border-2 border-retro-primary text-retro-primary font-mono font-bold"
          >
            <span aria-hidden className="text-2xl">×</span>
          </button>
        </div>
        <div className="flex-1 overflow-auto p-6 bg-retro-background">
          {product.pdfSampleUrl ? (
            <PdfViewer url={product.pdfSampleUrl} maxPages={3} isModal={true} />
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center p-8 retro-card border-retro-secondary shadow-retro-secondary">
                <BookOpen className="h-12 w-12 mx-auto text-retro-secondary" />
                <h3 className="mt-4 retro-heading">No preview available</h3>
                <p className="mt-2 text-sm text-retro-muted-foreground retro-body">
                  Preview for this product is not yet available.
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="p-4 border-t-2 border-retro-primary flex justify-between items-center bg-retro-muted">
          <span className="text-sm text-retro-secondary retro-body">Limited preview of {product.title}</span>
          <div className="space-x-2">
            <button 
              onClick={onClose}
              className="retro-button retro-button-secondary"
            >
              Close
            </button>
            <button 
              onClick={onBuyNow} 
              className="retro-button retro-button-primary"
            >
              Buy Full Version
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPreviewModal;
