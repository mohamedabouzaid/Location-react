import React from 'react';
import ListUser from '../components/ListUsers'

const Users = () => {
  const users=[{id:1,name:'omar',image:'https://dummyimage.com/600x400/000000/0011ff.jpg&text=dummy',loction:3}]
    return (
       <ListUser users={users}  />
    );
};

export default Users;