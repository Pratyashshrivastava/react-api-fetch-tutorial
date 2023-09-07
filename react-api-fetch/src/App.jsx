import React, { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    const [columns, setColumns] = useState([]);
    const [records, setrecords] = useState([]);
    axios.get("http://localhost:3030/users").then((res) => {
      setColumns(Object.keys(res.data[0]));
      setrecords(res.data);
    });
  }, []);
  return (
    <div className="container mt-5">
      <table className="table">
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={i}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {records.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
