import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Engineering Consulting" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

import React from 'react'


const Home = () => {
  return (
      <div style={{padding: "3rem"}}>
       <h1>Home</h1>

      </div>
  )
}
export default Home
