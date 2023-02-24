import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([{
    path: "/",
    element: <div>Hello world!</div>,
}])

export default function Auth() {

  const isAuthentication = true;

  return <RouterProvider router={router} />;
}
