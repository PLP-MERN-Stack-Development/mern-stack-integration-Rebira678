import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postService } from "../services/api";

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await postService.getPost(id);
        setPost(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading) return <p className="text-center py-10">Loading post...</p>;
  if (!post) return <p className="text-center py-10">Post not found</p>;

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={post.image || "/sample1.jpg"}
          alt={post.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-2">{post.title}</h2>
          <p className="text-gray-500 mb-4">By {post.author}</p>
          <p className="text-gray-700">{post.description}</p>
        </div>
      </div>
    </div>
  );
}
