import { useEffect, useState } from "react";
import { postService } from "../services/api";
import { useAuth } from "../context/AuthContext";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await postService.getAllPosts(1, 20);
        setPosts(data.posts || []);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Sidebar */}
        <div className="w-full lg:w-1/4 bg-white shadow-md rounded-lg p-4">
          <div className="flex flex-col items-center">
            <img
              src={user?.avatar || "/sample-profile.jpg"}
              alt="Profile"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="font-bold text-xl">{user?.name}</h3>
            <p className="text-gray-500 text-sm">{user?.email}</p>
            <Link
              to="/create"
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Create Post
            </Link>
          </div>
          <hr className="my-4" />
          <p className="text-gray-600">
            Your Posts: {posts.filter((p) => p.author === user?.name).length}
          </p>
        </div>

        {/* Posts Grid */}
        <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {loading ? (
            <p>Loading posts...</p>
          ) : posts.length === 0 ? (
            <p>No posts found</p>
          ) : (
            posts.map((post) => (
              <Card
                key={post._id}
                title={post.title}
                description={post.description}
                image={post.image || "/sample1.jpg"}
                author={post.author}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
