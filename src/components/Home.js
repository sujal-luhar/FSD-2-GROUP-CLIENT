import React from "react";
import { Card } from "./Card";

function Home() {
  return (
    <div
      className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-16 bg-[#ffffff] p-10"
      style={{ userSelect: "none" }}
    >
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Home;
