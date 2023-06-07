import React from "react";

const SliderCard = ({ data, index }) => {
  return (
    <div className=" bg-LightOverlay hover:drop-shadow-lg backdrop-blur-md rounded-xl flex items-center justify-between relative px-4 py-2 w-full md:w-340 md:min-w-350 gap-3  ">
      <img src={data.imageURL} className="w-40 h-40 object-contain" alt="" />
      <div className="realtive pt-12">
        <p className="text-xl text-headingColor font-semibold">
          {data.product_name}
        </p>
      </div>
    </div>
  );
};

export default SliderCard;
