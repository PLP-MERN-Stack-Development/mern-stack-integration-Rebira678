import useFetchPosts from "../hooks/useFetchPosts";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function Home() {
  const { posts, loading } = useFetchPosts(4);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Welcome to MERN Vlog
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Explore the latest posts before you register!
      </p>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <Card
              key={post._id}
              id={post._id}
              title={post.title}
              description={post.description}
              image={post.image}
              author={post.author}
            />
          ))}
        </div>
      )}

      <div className="text-center mt-10">
        <Link
          to="/register"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 mr-4"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
