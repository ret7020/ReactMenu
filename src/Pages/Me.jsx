import React from 'react';
import userContext from '../Contexts/user';

export const Me = () => (
  <userContext.Consumer>
    {user => (<>
      <h1>Profile of {user.userInfo?.firstName}</h1>
    </>)}
  </userContext.Consumer>
);
