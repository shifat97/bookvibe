import PropTypes from "prop-types";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { FaRegFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Book({ book }) {
  const {
    id,
    image,
    title,
    author,
    audience,
    year_published,
    publisher,
    pages,
    type,
    rating,
  } = book;

  return (
    <div className="flex items-center gap-6 rounded-xl border p-6 mt-10">
      <div className="bg-gray-100 p-4">
        <img className="h-[200px]" src={image} alt="" />
      </div>
      <div className="flex-1">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="mt-2">By: {author}</p>
        <div className="mt-2 flex gap-6 items-center">
          <div className="flex items-center gap-4">
            <b>Tags: </b>
            {audience.map((aud, idx) => (
              <p
                className="text-green-400 font-medium bg-green-100 px-4 py-1 rounded-xl"
                key={idx}
              >
                {aud}
              </p>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineLocationOn />
            <p>Year of Publishing: {year_published}</p>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-6">
          <div className="flex gap-2 items-center">
            <IoPeopleOutline />
            <p>Publisher: {publisher}</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaRegFileAlt />
            <p>Pages: {pages}</p>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-4">
          <p className="bg-blue-100 text-blue-500 rounded-xl px-4 py-1">
            Category: {type}
          </p>
          <p className="bg-green-100 text-green-500 rounded-xl px-4 py-1">
            Rating: {rating}
          </p>
          <Link to={`/details/${id}`}>
            <button className="bg-green-400 text-white px-4 py-1 rounded-xl">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.object,
};
