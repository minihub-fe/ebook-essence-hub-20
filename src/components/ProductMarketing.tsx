
import React from "react";
import { CheckCircle2 } from "lucide-react";

const ProductMarketing = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className="p-6 bg-[#FEF7CD] rounded-xl border-2 border-[#F97316] shadow-[4px_4px_0px_#F97316] transform hover:translate-y-[-4px] transition-transform duration-200">
        <h3 className="font-serif font-bold text-[#F97316] text-xl">What You'll Learn</h3>
        <p className="text-slate-700 mt-2 font-mono">
          Master essential concepts and gain practical knowledge through comprehensive content and real-world examples.
        </p>
      </div>
      <div className="p-6 bg-[#E5DEFF] rounded-xl border-2 border-[#8B5CF6] shadow-[4px_4px_0px_#8B5CF6] transform hover:translate-y-[-4px] transition-transform duration-200">
        <h3 className="font-serif font-bold text-[#8B5CF6] text-xl">Who This Is For</h3>
        <p className="text-slate-700 mt-2 font-mono">
          Perfect for both beginners and advanced practitioners looking to enhance their skills.
        </p>
      </div>
      <div className="p-6 bg-[#D3E4FD] rounded-xl border-2 border-[#0EA5E9] shadow-[4px_4px_0px_#0EA5E9] transform hover:translate-y-[-4px] transition-transform duration-200">
        <h3 className="font-serif font-bold text-[#0EA5E9] text-xl">Premium Benefits</h3>
        <ul className="mt-3 space-y-2">
          <li className="flex items-center text-slate-700 font-mono">
            <CheckCircle2 className="h-5 w-5 mr-2 text-[#0EA5E9]" />
            Lifetime access to all content
          </li>
          <li className="flex items-center text-slate-700 font-mono">
            <CheckCircle2 className="h-5 w-5 mr-2 text-[#0EA5E9]" />
            Regular content updates
          </li>
        </ul>
      </div>
      <div className="p-6 bg-[#FFDEE2] rounded-xl border-2 border-[#D946EF] shadow-[4px_4px_0px_#D946EF] transform hover:translate-y-[-4px] transition-transform duration-200">
        <h3 className="font-serif font-bold text-[#D946EF] text-xl">Support Included</h3>
        <ul className="mt-3 space-y-2">
          <li className="flex items-center text-slate-700 font-mono">
            <CheckCircle2 className="h-5 w-5 mr-2 text-[#D946EF]" />
            Priority email support
          </li>
          <li className="flex items-center text-slate-700 font-mono">
            <CheckCircle2 className="h-5 w-5 mr-2 text-[#D946EF]" />
            Community access
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductMarketing;
