import { useEffect, useState } from "react";
import { getDataFromLS } from "../utilities/local.storage";
import { useLoaderData } from "react-router-dom";
import Book from "./Book";

export default function ReadBook() {
  const [readBooksData, setReadBooksData] = useState([]);
  const getAllData = useLoaderData();

  useEffect(() => {
    const getReadBooksData = getDataFromLS();

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
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
}
