import React from "react";
import "./itemUser.css";
import Card from "../../shared/components/Card";
import Avatar from "../../shared/components/Avatar";
import {Link} from 'react-router-dom'
const ItemUser = (props) => {
  const { id, name, image, loction } = props;


  return (
    <>
     
     
          <Card>
          <li className='user-item user-item__content'>
              <Link to ={`/${id}/place`}>
            <div className='user-item__image'>
              <Avatar image={image} alt={name} />
            </div>
            <div className='item__info'>
              <h2>{name}</h2>
              <h3>
                {loction}
                {loction === 1 ? "place" : "places"}{" "}
              </h3>
            </div>
            </Link>
            </li>
          </Card>
        
     
    </>
  );
};

export default ItemUser;
