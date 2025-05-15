import React, { type FC } from "react";
interface Props {
  image: string;
}
const Images: FC<Props> = ({ image }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-4 mt-4 w-full">
      <div className="w-full">
        <img
          className="object-cover size-full rounded-lg"
          src={image}
          alt="image"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <img
          className="object-cover size-full rounded-lg"
          src="/image-2.jpeg"
          alt="image2"
        />
        <img
          className="object-cover size-full rounded-lg"
          src="/image-3.jpeg"
          alt="image2"
        />
        <img
          className="object-cover size-full rounded-lg"
          src="/image-4.jpeg"
          alt="image2"
        />
        <img
          className="object-cover size-full rounded-lg"
          src="/image-5.jpg"
          alt="image2"
        />
      </div>
    </div>
  );
};

export default Images;
