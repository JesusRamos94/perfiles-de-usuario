import React, { useEffect, useState } from "react";
import { fetchApi } from "../helpers/axios.js";
import CardComponet from  "./CardComponent.js";

export const Users = () => {
  const [user, setUser] = useState([]);

  const getAllUsers = async () => {
    try {
      const getUsers = await fetchApi( 'results=15', 'GET' );
        console.log(getUsers.data.results);
        setUser(getUsers.data.results);
    } catch (error) {}
  };

  useEffect(() => {
    getAllUsers();
  }, [])


  return (
  <div>
    <div className="container">
      { user.map(user => <CardComponet key={user.id} user={user} />) }
    </div>
  </div>
  );
};
