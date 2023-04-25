import React from 'react';


import {
  UserOutlined,
} from '@ant-design/icons';


// Pages
export const routes = [
  {
    index: true,
    path: '', // Hack
    async lazy() {
      let { Me } = await import("../Pages/Me.jsx");
      return { Component: Me };
    },
    icon: <UserOutlined />,
    label: 'Аккаунт'
  },
  {
    path: 'events',
    async lazy() {
      let { Events } = await import("../Pages/Events.jsx");
      return { Component: Events };
    },
    icon: <UserOutlined />,
    label: 'Мероприятия'
  },
  {
    path: 'notifications',
    async lazy() {
      let { Notifications } = await import("../Pages/Notifications.jsx");
      return { Component: Notifications };
    },
    icon: <UserOutlined />,
    label: 'Уведомления'
  },
  {
    path: 'docs',
    async lazy() {
      let { Docs } = await import("../Pages/Docs.jsx");
      return { Component: Docs };
    },
    icon: <UserOutlined />,
    label: 'Документация'
  },
  {
    path: 'admin',
    async lazy() {
      let { Admin } = await import("../Pages/Admin.jsx");
      return { Component: Admin };
    },
    icon: <UserOutlined />,
    label: 'Админ-панель',
    private: true
  }
]
