import { type FC } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

interface Props {
  children: React.ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return (
    <div className="container">
      <div className="flex mb-5">
        <Link
          className="border border-zinc-200 p-2 rounded-md transition hover:bg-zinc-100"
          to="/"
        >
          <FaArrowLeft />
        </Link>
      </div>
      {children}
    </div>
  );
};

export default Container;
