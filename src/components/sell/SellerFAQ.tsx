
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SellerFAQ = () => {
  const faqs = [
    {
      question: "How do I get started selling digital products?",
      answer: "Getting started is simple. Create an account, set up your seller profile, and upload your first digital product. Our step-by-step guide will walk you through the entire process, from pricing your product to optimizing your listing."
    },
    {
      question: "What types of files can I sell?",
      answer: "You can sell almost any type of digital file, including PDFs, images, videos, audio files, software, code, templates, and more. If you're unsure about your specific file type, please contact our support team."
    },
    {
      question: "How and when do I get paid?",
      answer: "We process payments biweekly. Once your earnings reach $50, they'll be automatically transferred to your connected payment account (PayPal, bank account, etc.). You can view your earnings and pending payouts in your seller dashboard."
    },
    {
      question: "What if I need to update my product after selling it?",
      answer: "You can update your product at any time through your seller dashboard. Customers who have already purchased your product will receive a notification about the update and can download the new version at no additional cost."
    },
    {
      question: "Do I need to handle customer support?",
      answer: "Yes, you're responsible for providing support related to your product's content. However, we handle all technical support related to downloads, payments, and platform issues. We also provide tools to help you manage customer inquiries efficiently."
    },
    {
      question: "Can I offer discounts or run promotions?",
      answer: "Absolutely! You can create discount codes, run time-limited promotions, and even participate in platform-wide sales events. These features are available in your seller dashboard under the 'Marketing' section."
    },
    {
      question: "What happens if someone asks for a refund?",
      answer: "We have a 30-day refund policy for digital products. If a customer requests a refund within this period, we'll process it and notify you. Refunds are deducted from your next payout. Excessive refunds may affect your seller status."
    },
    {
      question: "Can I sell subscription-based products?",
      answer: "Yes, you can offer subscription products with recurring payments. You can set up monthly, quarterly, or annual billing cycles and manage your subscribers through your dashboard."
    }
  ];

  return (
    <section className="py-16 bg-retro-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="retro-heading text-2xl md:text-4xl mb-4">Frequently Asked Questions</h2>
          <p className="text-retro-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about selling on our platform.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white border-2 border-retro-secondary rounded-xl overflow-hidden shadow-retro-sm">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-retro-secondary/20 last:border-0">
                <AccordionTrigger className="px-6 py-4 hover:bg-retro-muted/20 font-mono font-medium text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-retro-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-retro-muted-foreground">
            Still have questions? <a href="#" className="text-retro-primary font-bold hover:underline">Contact our support team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SellerFAQ;
