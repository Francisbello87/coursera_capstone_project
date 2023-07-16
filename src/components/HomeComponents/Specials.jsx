import React from "react";
import SpecialDish from "./SpecialDish";
import Button from "../Button/Button";


const Specials = () => {
  const doSomething = () => {
    // navigate('/reservations')
  }
  return (
    <div className=" py-28 md:pt-40 w-full px-4 md:px-64">
      <div className="flex items-center justify-between mb-16">
        <h3 className="markazi md:text-[40px] text-[24px] font-semibold">
          This week's specials!
        </h3>
        <Button onClick={doSomething} text="Online Menu" />
      </div>
      <SpecialDish/>
    </div>
  );
};

export default Specials;
