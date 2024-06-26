import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getDataFromLS } from "../utilities/local.storage";
import { useOutletContext } from "react-router-dom";
import List from "./List";

export default function ReadBook() {
  const [readBooksData, setReadBooksData] = useState([]);
  const [data, selectValue] = useOutletContext();

  useEffect(() => {
    const getReadBooksData = getDataFromLS();

    if (data.length > 0) {
      const filteredData = data.filter((data) =>
        getReadBooksData.includes(data.id)
      );

      if (selectValue === "Rating") {
        filteredData.sort((a, b) => b.rating - a.rating);
      } else if (selectValue === "Publisher Year") {
        filteredData.sort((a, b) => b.year_published - a.year_published);
      } else if (selectValue === "Number of Pages") {
        filteredData.sort((a, b) => b.pages - a.pages);
      }

      setReadBooksData(filteredData);
    }
  }, [selectValue, data]);

  return (
    <div>
      {readBooksData.map((book) => (
        <List key={book.id} book={book} />
      ))}
    </div>
  );
}

ReadBook.propTypes = {
  data: PropTypes.array,
};
