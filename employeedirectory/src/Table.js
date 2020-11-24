import React, { useState, useEffect } from "react";

const Table = ({ users }) => {
  const [sortedUsers, updateSortedUsers] = useState([]);

  useEffect(() => updateSortedUsers(users), [users]);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th
              scope="col"
              onClick={() => {
                const usersCopy = [...users];
                const updateSort = usersCopy.sort((a, b) => {
                  const nameA = a.name.first;
                  const nameB = b.name.first;

                  if (nameA < nameB) {
                    return -1;
                  }
                  if (nameA > nameB) {
                    return 1;
                  }

                  return 0;
                });

                updateSortedUsers(updateSort);
              }}
            >
              First
            </th>
            <th scope="col">Last</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map(
            ({
              location: { city, state },
              gender,
              email,
              name: { first, last, title }
            }) => (
              <tr key={email}>
                <td>{title}</td>
                <th>{first}</th>
                <td>{last}</td>
                <td>{gender}</td>
                <td>{email}</td>
                <td>{city}</td>
                <td>{state}</td>
                <td></td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;