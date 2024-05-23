import { useEffect, useState } from "react";
import { getWishlistDataFromLS } from "../utilities/local.storage";
import { useOutletContext } from "react-router-dom";
import List from "./List";

export default function WishlistBook() {
  const [readBooksData, setReadBooksData] = useState([]);
  const [data] = useOutletContext();

  useEffect(() => {
    const getReadBooksData = getWishlistDataFromLS();

    if (data.length > 0) {
      const filteredData = data.filter((data) =>
        getReadBooksData.includes(data.id)
      );
      setReadBooksData(filteredData);
    }
  }, [data]);

  return (
    <div>
      {readBooksData.map((book) => (
        <List key={book.id} book={book} />
      ))}
    </div>
  );
}
