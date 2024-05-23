import { useEffect, useState } from "react";
import Banner from "./Banner";
import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Home() {
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBooksData(data));
  }, []);

  return (
    <div>
      <Banner />
      <div className="mt-20">
        <h1 className="text-3xl text-center font-semibold">Books</h1>
        <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {booksData.map((book) => (
            <Link to={`/details/${book.id}`} key={book.id}>
              <div className="border p-4 rounded-lg cursor-pointer">
                <div className="bg-gray-100 rounded-xl p-6">
                  <img
                    className="block mx-auto h-[230px]"
                    src={`${book.image}`}
                    alt=""
                  />
                </div>
                <div>
                  <div className="flex gap-4 mt-6">
                    {book.audience.map((aud, idx) => (
                      <p
                        key={idx}
                        className="text-green-400 font-medium bg-green-100 px-4 py-2 rounded-xl"
                      >
                        {aud}
                      </p>
                    ))}
                  </div>
                  <div className="mt-4">
                    <h1 className="text-3xl font-semibold">{book.title}</h1>
                  </div>
                  <p className="mt-4">By : {book.author}</p>
                  <hr className="mt-4 border-dashed" />
                  <div className="mt-4 flex justify-between items-center">
                    <p>{book.type}</p>
                    <div className="flex items-center gap-2">
                      <p>{book.rating}</p>
                      <FaRegStar />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
