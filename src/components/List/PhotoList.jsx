import { useEffect, useState } from "react";
import "../../App.css"; // Add this for external CSS

function PhotoList() {
  const [data, setData] = useState([]); // Updated to hold an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data.slice(0, 10)); // Limit to the first 10 items
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container">
      <h1>Photo List</h1>
      <table className="data-table">
        <thead>
          <tr>
            <th>Album ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>URL</th>
            <th>Thumnail</th>
          </tr>
        </thead>
        <tbody>
          {data.map((photo) => (
            <tr key={photo.id}>
              <td>{photo.albumId}</td>
              <td>{photo.id}</td>
              <td>{photo.title}</td>
              <td>{photo.url}</td>
              <td>{photo.thumbnailUrl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PhotoList;
