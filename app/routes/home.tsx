import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Engineering Consulting" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

import React from 'react'
import HeroSection from "~/routes/hero-section/HeroSection";
import HeroSection2 from "~/routes/hero-section-2/HeroSection2";
import ClientFeedback from "~/routes/client-feedback/ClientFeedback";


const Home = () => {
  return (
      <div>
          <HeroSection />
          <HeroSection2 />
          <ClientFeedback />
      </div>
  )
}
export default Home
