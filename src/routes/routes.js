import React from 'react';

import {
  UserOutlined,
} from '@ant-design/icons';

// Pages

import { Notifications } from "../Pages/Notifications.jsx";
import { Events } from "../Pages/Events.jsx";
import { Docs } from "../Pages/Docs.jsx";
import { Me } from "../Pages/Me.jsx";

export const routes = [
  {
    index: true,
    path: '',
    element: <Me />,
    icon: <UserOutlined />,
    label: 'Аккаунт'
  },
  {
    path: 'events',
    element: <Events/>,
    icon: <UserOutlined />,
    label: 'Мероприятия'
  },
  {
    path: 'notifications',
    element: <Notifications/>,
    icon: <UserOutlined />,
    label: 'Уведомления'
  },
  {
    path: 'docs',
    element: <Docs/>,
    icon: <UserOutlined />,
    label: 'Документация'
  }
]
