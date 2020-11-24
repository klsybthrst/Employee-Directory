import React, { useEffect, useState } from "react";
import FilterInput from "./FilterInput";
import Table from "./Table";
import { getUsers } from "./API";
import "./App.css";

function App() {
  const [initialUsers, updateAvailableUsers] = useState([]);
  const [usersToRender, updateUsersToRender] = useState([]);

  useEffect(() => {
    getUsers().then(({ data: { results } }) => updateAvailableUsers(results));
  }, []);

  return (
    <div className="App">
      <div className="jumbotron">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">Please search or sort by first name</p>
        <FilterInput users={initialUsers} updateUsers={updateUsersToRender} />
        <hr className="my-4" />
        <Table users={usersToRender} />
      </div>
    </div>
  );
}

export default App;
