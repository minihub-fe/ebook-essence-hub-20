
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PdfViewerProps {
  url: string;
  maxPages?: number;
}

const PdfViewer = ({ url, maxPages = 3 }: PdfViewerProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  
  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };
  
  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, maxPages));
  };

  return (
    <div className="flex flex-col w-full h-full min-h-[600px] md:min-h-[800px]">
      <div className="relative flex-1 bg-slate-100 rounded-xl overflow-hidden">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}
        <iframe 
          src={`${url}#page=${currentPage}`}
          className="w-full h-full"
          onLoad={() => setLoading(false)}
          title="PDF Preview"
        />
      </div>
      
      <div className="flex items-center justify-between mt-4 bg-white p-4 rounded-lg shadow-sm">
        <span className="text-sm text-slate-600 font-medium">
          Page {currentPage} of {maxPages}
        </span>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4 mr-1" /> Previous
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleNextPage}
            disabled={currentPage === maxPages}
          >
            Next <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PdfViewer;
