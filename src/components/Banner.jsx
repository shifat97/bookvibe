import { NavLink } from "react-router-dom";
import BookImage from "../../public/assets/Book1.png";

export default function Banner() {
  return (
    <div className="bg-gray-100 flex flex-col gap-10 justify-around items-center lg:flex-row lg:px-28 py-20 mt-6 rounded-2xl">
      <div>
        <h1 className="text-5xl text-center lg:text-left font-semibold leading-normal">
          Books to freshen up your bookshelf
        </h1>
        <NavLink to="/wishlist">
          <button className="bg-green-500 text-white px-4 py-3 mt-8 rounded-md block mx-auto lg:mx-0">
            View the List
          </button>
        </NavLink>
      </div>
      <div>
        <img height={400} width={400} src={BookImage} alt="" />
      </div>
    </div>
  );
}
