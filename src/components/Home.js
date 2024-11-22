import React from "react";

const Home = () => {
  return (
    <div className="container" style={{ marginTop: "10rem" }}>
      <h2>Crud App With JSON Server</h2>
      <p className="btn btn-success ny-3">Create +</p>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>EMAIL</td>
            <td>
              <button className="btn btn-sm btn-primary">Edit</button>
              <button className="btn btn-sm btn-danger ms-2">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;
