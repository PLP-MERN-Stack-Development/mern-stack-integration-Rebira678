import { useState, useEffect } from "react";
import { postService } from "../services/api";

export default function useFetchPosts(limit = 4) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await postService.getAllPosts(1, limit);
        setPosts(data.posts || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [limit]);

  return { posts, loading };
}
