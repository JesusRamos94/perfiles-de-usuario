import React, { useState } from "react";
import {BsSearch} from 'react-icons/bs'

import { useFilter } from "../hook/useUser";
import CardComponet from "./CardComponent.js";

export const Users = () => {
  const [getUsersFilteredBy, deleteUsers] = useFilter();
  const [text, setText] = useState("");

  const handleChange = (value) => setText(value.target.value);

  return (
    <div className="page">
      <h1>Perfiles de usuario</h1>
      <div className="finderContainer">
        <input type="text" className="search" onChange={handleChange}/>
        <label htmlFor="" className="search-icon"> <BsSearch/> </label>
      </div>
      <div className="container">
        {getUsersFilteredBy(text).map((user) => (
          <CardComponet onDelete={deleteUsers} key={user.email} user={user} />
        ))}
      </div>
    </div>
  );
};
