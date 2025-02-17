import { useEffect, useState } from "react";
import "../../App.css"; // Add this for external CSS

function AlbumList() {
  const [data, setData] = useState([]); // Updated to hold an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
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
    <div className="album">
      <h1>Album List</h1>
      <table className="data-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {data.map((album) => (
            <tr key={album.id}>
              <td>{album.userId}</td>
              <td>{album.id}</td>
              <td>{album.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AlbumList;
AlbumList