
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PdfViewerProps {
  url: string;
  maxPages?: number;
  className?: string;
}

const PdfViewer = ({ url, maxPages = 3, className }: PdfViewerProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  
  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };
  
  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, maxPages));
  };

  return (
    <div className={cn("flex flex-col w-full h-full min-h-[400px] md:min-h-[600px]", className)}>
      <div className="relative flex-1 bg-retro-accent rounded-xl overflow-hidden border-2 border-retro-primary shadow-retro-md shadow-retro-primary">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80">
            <Loader2 className="h-8 w-8 animate-spin text-retro-primary" />
          </div>
        )}
        <iframe 
          src={`${url}#page=${currentPage}`}
          className="w-full h-full"
          onLoad={() => setLoading(false)}
          title="PDF Preview"
        />
      </div>
      
      <div className="flex items-center justify-between mt-4 bg-retro-muted p-4 rounded-lg border-2 border-retro-secondary shadow-retro-sm shadow-retro-secondary">
        <span className="text-sm font-medium text-retro-secondary retro-body">
          Page {currentPage} of {maxPages}
        </span>
        <div className="flex gap-2">
          <button 
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="retro-button retro-button-secondary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-4 w-4 mr-1 inline" /> Previous
          </button>
          <button 
            onClick={handleNextPage}
            disabled={currentPage === maxPages}
            className="retro-button retro-button-secondary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next <ChevronRight className="h-4 w-4 ml-1 inline" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PdfViewer;
