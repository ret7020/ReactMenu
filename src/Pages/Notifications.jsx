import React, { useContext } from 'react';
import userContext from '../Contexts/user';

export const Notifications = () => {
  const { userInfo } = useContext(userContext);
  return <h2>Notifications for {}</h2>;
}
