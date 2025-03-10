
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
    <div className={cn("flex flex-col w-full h-full min-h-[600px] md:min-h-[700px]", className)}>
      <div className="relative flex-1 bg-[#FEF7CD] rounded-xl overflow-hidden border-4 border-[#FEC6A1] shadow-[8px_8px_0px_#FEC6A1]">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80">
            <Loader2 className="h-8 w-8 animate-spin text-[#F97316]" />
          </div>
        )}
        <iframe 
          src={`${url}#page=${currentPage}`}
          className="w-full h-full"
          onLoad={() => setLoading(false)}
          title="PDF Preview"
        />
      </div>
      
      <div className="flex items-center justify-between mt-4 bg-[#E5DEFF] p-4 rounded-lg border-2 border-[#8B5CF6] shadow-[4px_4px_0px_#8B5CF6]">
        <span className="text-sm font-medium text-[#8B5CF6] font-mono">
          Page {currentPage} of {maxPages}
        </span>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="bg-white border-2 border-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white transition-colors duration-200"
          >
            <ChevronLeft className="h-4 w-4 mr-1" /> Previous
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleNextPage}
            disabled={currentPage === maxPages}
            className="bg-white border-2 border-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white transition-colors duration-200"
          >
            Next <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PdfViewer;
