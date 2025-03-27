
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesHeader from "@/components/resources/ResourcesHeader";
import ResourceContent from "@/components/resources/ResourceContent";

const Resources = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mt-24">
        <ResourcesHeader />
        <ResourceContent />
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
