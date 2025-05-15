import type { FC } from "react";
import type { Place } from "../../types";
import { Link } from "react-router-dom";
import Status from "./status";
import Raiting from "./raiting";

interface Props {
  place: Place;
}
const Card: FC<Props> = ({ place }) => {
  return (
    <Link
      className="border border-zinc-300 rounded-md  p-4 gap-3 grid grid-cols-3 min-h-[300px] hover:shadow-md "
      to={`/place/${place.id}`}
    >
      <div>
        <img
          className="size-full object-cover rounded-lg"
          src={place.image_url}
          alt={place.name}
        />
      </div>
      <div className="col-span-2 flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-lg"> {place.name} </h1>
            <Status availability={place.availability} />
          </div>
          <p> {place.location} </p>
          <div className="flex gap-4 mb-2">
            {place.amenities.slice(0, 2).map((item, key) => (
              <span
                className="border py-1 px-2 rounded-md border-zinc-200 whitespace-nowrap line-clamp-1"
                key={key}
              >
                {item}
              </span>
            ))}
          </div>
          <Raiting rating={place.rating} />
        </div>
        <div className="flex flex-col items-end">
          <span className="text-2xl font-bold">$ {place.price_per_night} </span>
          <span className="text-xs text-gray-400">
            Vergiler ve ücretler dahildir.
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
