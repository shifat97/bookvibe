import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getDataFromLS } from "../utilities/local.storage";
import { useOutletContext } from "react-router-dom";
import List from "./List";

export default function ReadBook() {
  const [readBooksData, setReadBooksData] = useState([]);
  const [data] = useOutletContext();

  useEffect(() => {
    const getReadBooksData = getDataFromLS();

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

ReadBook.propTypes = {
  data: PropTypes.array,
};
