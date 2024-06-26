import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { getDataFromLS } from "../utilities/local.storage";
import PropTypes from "prop-types";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function Chart({ data }) {
  const [readBooksData, setReadBooksData] = useState([]);

  useEffect(() => {
    const getReadBooksData = getDataFromLS();

    if (data && data.length > 0) {
      const filteredData = data.filter((data) =>
        getReadBooksData.includes(data.id)
      );
      setReadBooksData(filteredData);
    }
  }, [data]);

  return (
    <div className="w-full bg-gray-100 p-10 mt-10">
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={readBooksData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="title" />
          <YAxis />
          <Bar
            dataKey="pages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {readBooksData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

Chart.demoUrl =
  "https://codesandbox.io/p/sandbox/bar-chart-with-customized-shape-jpsj68";

Chart.propTypes = {
  data: PropTypes.array,
};
