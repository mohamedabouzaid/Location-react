import React from 'react';
import ItemUser from './ItemUser'
import classes from './listUser.module.css'

const ListUsers = (props) => {
    const{users}=props

    if(users.length===0){
  
      return(<div className={classes.center}><h1>No User Found</h1></div>)
    }
    

    return(<>
    <div className={classes.list}>
    {
        users.map(user=>(<ItemUser key={user.id} {...user} />))
  
    }</div></>)
};

export default ListUsers;