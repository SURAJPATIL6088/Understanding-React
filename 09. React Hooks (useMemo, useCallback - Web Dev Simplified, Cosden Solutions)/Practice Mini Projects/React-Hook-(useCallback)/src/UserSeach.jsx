import React, { useCallback, useState } from "react";
import "./App.css";

const UserSeach = ({ allUsers }) => {
  const [searchItem, setSearchItem] = useState("");

  const handleSearch = useCallback((e) => {
    setSearchItem(e.target.value);
  });

  const filteredUser = allUsers.filter((user) =>
    user.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div>
      <h2>User Search Function</h2>
      <input
        type="text"
        value={searchItem}
        placeholder="search here.."
        onChange={handleSearch}
      />

      <ul>
        {filteredUser.map((name, index) => (
          <li className="list-container" key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserSeach;
