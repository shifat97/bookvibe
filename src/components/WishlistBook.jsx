import { useEffect, useState } from "react";
import { getWishlistDataFromLS } from "../utilities/local.storage";
import { useLoaderData } from "react-router-dom";
import List from "./List";

export default function WishlistBook() {
  const [readBooksData, setReadBooksData] = useState([]);
  const getAllData = useLoaderData();

  useEffect(() => {
    const getReadBooksData = getWishlistDataFromLS();

    if (getAllData.length > 0) {
      const filteredData = getAllData.filter((data) =>
        getReadBooksData.includes(data.id)
      );
      setReadBooksData(filteredData);
    }
  }, [getAllData]);

  return (
    <div>
      {readBooksData.map((book) => (
        <List key={book.id} book={book} />
      ))}
    </div>
  );
}
