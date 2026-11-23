
import { useEffect, useState } from "react";
import { getAllBlogs } from "../services/api";
import BlogCard from "../components/BlogCard";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getAllBlogs();
      setBlogs(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">

      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
          Welcome to Joshim's Blog
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Explore insightful articles, learn new technologies,
          discover programming tips, and improve your knowledge.
        </p>
      </section>

      {loading && <Loading />}

      {!loading && error && (
        <ErrorMessage
          message={error}
          onRetry={fetchBlogs}
        />
      )}

      {!loading && !error && (
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Latest Articles
            </h2>

            <span className="text-gray-500">
              {blogs.length} Articles
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </section>
      )}

    </main>
  );
}

export default Home;
