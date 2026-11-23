
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getBlogById } from "../services/api";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

function BlogDetails() {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchBlog = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getBlogById(id);
      setBlog(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [id]);

  if (loading) return <Loading />;

  if (error) {
    return (
      <ErrorMessage
        message={error}
        onRetry={fetchBlog}
      />
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link
        to="/"
        className="text-indigo-600 font-semibold hover:underline"
      >
        ← Back to Home
      </Link>

      {blog && (
        <article className="bg-white rounded-xl shadow-lg p-8 md:p-12 mt-8">
          <span className="text-indigo-600 font-semibold">
            Blog Post #{blog.id}
          </span>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6 capitalize">
            {blog.title}
          </h1>

          <p className="text-gray-600 leading-8 text-lg">
            {blog.body}
          </p>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-gray-500">
              Author ID: {blog.userId}
            </p>
          </div>
        </article>
      )}
    </main>
  );
}

export default BlogDetails;