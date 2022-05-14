import React, { useState } from "react";

import { useFilter } from "../hook/useUser";
import CardComponet from  "./CardComponent.js";

export const Users = () => {
  const [getUsersFilteredBy, deleteUsers] = useFilter();
  const [text, setText] = useState('');

  const handleChange = (value) => setText(value.target.value)


  return (
  <div>
    <div>
      <input type="text"  onChange={handleChange} />
    </div>
    <div className="container">
      { getUsersFilteredBy(text).map(user => <CardComponet onDelete={ deleteUsers } key={user.email} user={user} />) }
    </div>
  </div>
  );
};
