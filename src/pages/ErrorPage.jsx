import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <h1 className="text-4xl font-bold">404 Not Found</h1>
      <p className="text-xl font-semibold">
        The page you are looking for is not found. Please check the path again.
      </p>
      <Link
        to="/"
        className="bg-blue-400 text-white text-xl font-bold p-4 rounded-md"
      >
        <button>Go Back Home</button>
      </Link>
    </div>
  );
}
