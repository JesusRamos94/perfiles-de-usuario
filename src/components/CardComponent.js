import React from "react";

const CardComponet = ({user})=>(
<div className="card">
    {/* <div className="card-info-top" key={user.id}> */}
      <img src={user.picture.large} alt="user-face"  className="card-picture"/>
      <h2>{user.name.first} {user.name.last}, <span>{user.dob.age}</span></h2>
      <p>{user.gender}</p>
      <p>Ubicación: {user.location.state}, {user.location.country}</p>
    {/* </div>
    <div className='card-info-bottom'> */}
      <p>WhatsApp: {user.cell}</p>
      <p>Email: {user.email}</p>
    {/* </div> */}
</div>
);

export default CardComponet;