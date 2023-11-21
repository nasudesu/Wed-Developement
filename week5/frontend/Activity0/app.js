// app.js

const apiUrl = "https://jsonplaceholder.typicode.com/posts";
const blogIdToDelete = 6; // Replace with the desired blog ID for testing
const blogId = 5;
const updatedData = {
  title: "Updated Blog",
  body: "This blog has been updated.",
};

// const blog = {
//   title: "New Blog",
//   body: "This is the content of the new blog.",
//   userId: 1,
// };

// const addBlog = async () => {
//   const response = await fetch(apiUrl, {
//     method: "POST",
//     body: JSON.stringify(blog),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   const json = await response.json();
//   console.log("New Blog added:", json);
// };

// // Example Usage
// addBlog();

// const fetchBlogs = async () => {
//   const response = await fetch(apiUrl);
//   const data = await response.json();
//   console.log("All Blogs:", data);
// };

// // Example Usage
// fetchBlogs();

// const fetchBlog = async (id) => {
//   const response = await fetch(`${apiUrl}/${id}`);
//   const data = await response.json();
//   console.log("Single Blog:", data);
// };

// // Example Usage
// fetchBlog(blogId);

// const updateBlog = async (blogId, updatedData) => {
//   const response = await fetch(`${apiUrl}/${blogId}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(updatedData),
//   });

//   const updatedBlog = await response.json();
//   console.log("Blog updated:", updatedBlog);
// };

// // Example Usage
// updateBlog(blogId, updatedData);

const deleteBlog = async (blogId) => {
  await fetch(`${apiUrl}/${blogId}`, {
    method: "DELETE",
  });

  console.log("Blog deleted successfully");
};

// Example Usage
deleteBlog(blogIdToDelete);
