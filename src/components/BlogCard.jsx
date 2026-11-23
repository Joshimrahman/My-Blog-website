
import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 border border-gray-100 flex flex-col">

      <span className="text-sm text-indigo-600 font-semibold mb-3">
        Article #{blog.id}
      </span>

      <h2 className="text-xl font-bold text-gray-800 mb-3">
        {blog.title}
      </h2>

      <p className="text-gray-600 leading-7 mb-6 flex-grow">
        {blog.body}
      </p>

      <Link
        to={`/blog/${blog.id}`}
        className="inline-block text-center bg-indigo-600 text-white px-5 py-3 rounded-lg hover:bg-indigo-700 transition"
      >
        Read More →
      </Link>

    </div>
  );
}

export default BlogCard;
