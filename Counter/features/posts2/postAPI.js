export const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};
