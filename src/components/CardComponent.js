import React from "react";
import { IoMdClose } from 'react-icons/io';

const CardComponet = ({ user, onDelete }) => (
  <div className="card">
    <img src={user.picture.large} alt="user-face" className="card-picture" />
    <h2>
      {user.name.first} {user.name.last}, <span>{user.dob.age}</span>
    </h2>
    <p>{user.email}</p>
    <br />
    <p>
      Ubicación: {user.location.state}, {user.location.country}
    </p>
    <p>WhatsApp: <span className="cell"> {user.cell} </span></p>
    <button className="btn-delete btn" onClick={()=> onDelete(user.email)} ><IoMdClose /></button>
  </div>
);

export default CardComponet;
