
import React from "react";
import { CheckCircle2 } from "lucide-react";

const ProductMarketing = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-sm transition-shadow">
        <h3 className="font-semibold text-slate-900 text-lg">What You'll Learn</h3>
        <p className="text-slate-600 mt-2">
          Master essential concepts and gain practical knowledge through comprehensive content and real-world examples.
        </p>
      </div>
      <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-sm transition-shadow">
        <h3 className="font-semibold text-slate-900 text-lg">Who This Is For</h3>
        <p className="text-slate-600 mt-2">
          Perfect for both beginners and advanced practitioners looking to enhance their skills.
        </p>
      </div>
      <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-sm transition-shadow">
        <h3 className="font-semibold text-slate-900 text-lg">Premium Benefits</h3>
        <ul className="mt-3 space-y-2">
          <li className="flex items-center text-slate-600">
            <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
            Lifetime access to all content
          </li>
          <li className="flex items-center text-slate-600">
            <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
            Regular content updates
          </li>
        </ul>
      </div>
      <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-sm transition-shadow">
        <h3 className="font-semibold text-slate-900 text-lg">Support Included</h3>
        <ul className="mt-3 space-y-2">
          <li className="flex items-center text-slate-600">
            <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
            Priority email support
          </li>
          <li className="flex items-center text-slate-600">
            <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
            Community access
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductMarketing;
