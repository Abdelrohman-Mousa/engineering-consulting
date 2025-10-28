import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Engineering Consulting" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

import React from 'react'
import HeroSection from "~/routes/hero-section/HeroSection";


const Home = () => {
  return (
      <div>
       <HeroSection />
      </div>
  )
}
export default Home
