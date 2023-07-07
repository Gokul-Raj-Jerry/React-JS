import { useEffect, useState } from "react";

const Fetch = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setText(data);
        console.log(text, "TEXT");
      } catch (err) {
        console.log("Error", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
          {text.map((item, index) => (
            <tr key={index}>
            <td>{item.userId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
          </tr>
             ))}
        </tbody>
      </table>
    </div>
  );

  {
    /* <div>{text.map((item)=><p>{item.title}</p>)}</div>; */
  }
};

export default Fetch;
