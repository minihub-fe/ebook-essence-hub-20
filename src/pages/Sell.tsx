
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SellHero from "@/components/sell/SellHero";
import HowItWorks from "@/components/sell/HowItWorks";
import WhatYouCanSell from "@/components/sell/WhatYouCanSell";
import FeesAndPricing from "@/components/sell/FeesAndPricing";
import SellerSuccess from "@/components/sell/SellerSuccess";
import SellerFAQ from "@/components/sell/SellerFAQ";
import SellerCTA from "@/components/sell/SellerCTA";

const Sell = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <SellHero />
        <HowItWorks />
        <WhatYouCanSell />
        <FeesAndPricing />
        <SellerSuccess />
        <SellerFAQ />
        <SellerCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Sell;
