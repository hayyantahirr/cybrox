import Hero from "@/components/home/Hero";
import Sec1 from "@/components/home/Sec1";
import Sec2 from "@/components/home/Sec2";
import Sec3 from "@/components/home/Sec3";
import Sec6 from "@/components/about/Sec3";

import React from "react";
import Sec5 from "@/components/home/Sec5";

const page = () => {
  return (
    <>
      <Hero />
      <Sec1 />
      <Sec2 />
      <Sec3 />

      <Sec6 />
      <Sec5 />
    </>
  );
};

export default page;
