import { Link, useLoaderData, useParams } from "react-router-dom";

export default function Details() {
  const bookData = useLoaderData();
  const bookID = useParams();
  const findBook = bookData.find((book) => book.id === parseInt(bookID.id));

  return (
    <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 mt-10">
      <div className="bg-gray-100 p-8">
        <img
          className="h-full w-full"
          src={`../../${findBook.image}`}
          alt={findBook.title}
        />
      </div>
      <div className="grid gap-4">
        <h1 className="text-4xl font-bold">{findBook.title}</h1>
        <p className="text-md font-medium">By: {findBook.author}</p>
        <hr />
        <p className="text-md font-medium">{findBook.type}</p>
        <hr />
        <p>
          <b>Review : </b>
          <span className="text-gray-500">{findBook.description}</span>
        </p>
        <div className="flex items-center gap-4">
          <b>Tag</b>
          {findBook.audience.map((aud, idx) => (
            <p
              key={idx}
              className="text-green-400 font-medium bg-green-100 px-4 py-1 rounded-xl"
            >
              {aud}
            </p>
          ))}
        </div>
        <hr />
        <table className="inline-block">
          <tbody>
            <tr>
              <td className="text-gray-500">Number of Pages:</td>
              <td className="pl-16 py-2">
                <b>{findBook.pages}</b>
              </td>
            </tr>
            <tr>
              <td className="text-gray-500">Publisher:</td>
              <td className="pl-16 py-2">
                <b>{findBook.publisher}</b>
              </td>
            </tr>
            <tr>
              <td className="text-gray-500">Year of Publishing:</td>
              <td className="pl-16 py-2">
                <b>{findBook.year_published}</b>
              </td>
            </tr>
            <tr>
              <td className="text-gray-500">Rating:</td>
              <td className="pl-16 py-2">
                <b>{findBook.rating}</b>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <Link>
            <button className="border rounded-md px-8 py-4 font-bold mr-4">
              Read
            </button>
          </Link>
          <Link>
            <button className="bg-blue-500 rounded-md px-8 py-4 font-bold text-white">
              Wishlist
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
