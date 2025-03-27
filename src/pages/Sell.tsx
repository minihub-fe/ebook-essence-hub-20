
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SellHero from "@/components/sell/SellHero";
import HowItWorks from "@/components/sell/HowItWorks";
import WhatYouCanSell from "@/components/sell/WhatYouCanSell";
import FeesAndPricing from "@/components/sell/FeesAndPricing";
import SellerSuccess from "@/components/sell/SellerSuccess";
import SellerCTA from "@/components/sell/SellerCTA";
import SellerFAQ from "@/components/sell/SellerFAQ";

const Sell = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
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
