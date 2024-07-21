import React from "react";
import Brand from "./shopBy/Brand";
import ShoesCategory from "./shopBy/ShoesCategory";
import Color from "./shopBy/Color";
import Price from "./shopBy/Price";

const ShoesSideNav = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <ShoesCategory icons={false} />
      <Brand />
      <Color />
      <Price />
    </div>
  );
};

export default ShoesSideNav;
