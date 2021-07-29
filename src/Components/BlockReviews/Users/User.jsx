import React from 'react';
function User(props) {
  return <div>{props.user?.firstName}</div>;
}

export default User;
