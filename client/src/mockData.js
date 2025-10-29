export const posts = [
  {
    _id: "1",
    title: "My First Post",
    content: "This is the content of the first post",
    featuredImage: "https://via.placeholder.com/600x400",
    author: { name: "John Doe" },
    category: { name: "Tech" },
    tags: ["React", "MERN"],
    viewCount: 100,
    comments: [{ user: { name: "Alice" }, content: "Great post!" }],
  },
  {
    _id: "2",
    title: "Second Post",
    content: "Another amazing post content here",
    featuredImage: "https://via.placeholder.com/600x400",
    author: { name: "Jane Smith" },
    category: { name: "Design" },
    tags: ["UI", "UX"],
    viewCount: 50,
    comments: [],
  },
];
