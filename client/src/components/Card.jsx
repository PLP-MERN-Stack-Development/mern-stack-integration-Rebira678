import { Link } from "react-router-dom";

export default function Card({ title, description, image, author, id }) {
  return (
    <Link to={`/posts/${id}`}>
      <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
        <img
          src={image || "/sample1.jpg"}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-bold text-xl mb-2">{title}</h3>
          <p className="text-gray-700 mb-2">
            {description.substring(0, 100)}...
          </p>
          <p className="text-gray-500 text-sm">By {author}</p>
        </div>
      </div>
    </Link>
  );
}
