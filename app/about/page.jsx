import Hero from "@/components/about/Hero";
import Sec1 from "@/components/about/Sec1";
import Sec2 from "@/components/about/Sec2";
import Sec4 from "@/components/home/Sec4";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <Sec4 />
      <Sec1 />
      <Sec2 />
    </>
  );
};

export default page;
