import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from "react";
import Admin from "./pages/admin/Admin";
import Index from "./pages/front/Index";
import UserInfo from "./pages/myinfo/UserInfo";
import Home from "./pages/admin/pages/Home";
import Join from "./pages/front/pages/Join";
import MyInfo from "./pages/admin/pages/MyInfo";
import Login from "./pages/front/pages/Login";
import Modify from "./pages/myinfo/pages/Modify";
import ClassMain from "./pages/front/pages/ClassMain";
import ViewClass from "./pages/front/pages/ViewClass";
import AddClass from "./pages/myinfo/pages/AddClass";
import Modal from "./pages/myinfo/pages/Modal";
import ListClass from "./pages/myinfo/pages/ListClass";
import CountClass from "./pages/admin/pages/countclass";
import AddClass from "./pages/admin/pages/addclass";
import ClassList from "./pages/admin/pages/classlist";



const router = createBrowserRouter([
  {
    path:'/',
    element:<Index />,
    children: [
      {index:"main", element: <ClassMain />},
      {path: "login", element: <Login />},
      {path: "join", element: <Join />},
      {path: "viewclass", element: <ViewClass />}
    ]
  },
  {
    path:'/admin',
    element:<Admin />,
    children: [
      {index: true, element: <Home />},
      {path: "myinfo", element: <MyInfo />},
      {path: "addclass", element: <AddClass />},
      {path: "countclass", element: <CountClass />},
      {path: "classlist", element: <ClassList />}
    ]
  },
  {
    path:'/myinfo',
    element:<UserInfo />,
    children: [
      {path: "modify", element: <Modify />},
      {path: "listclass", element: <ListClass />},
      {path: "modal", element: <Modal />},
      {path: "addclass", element: <AddClass />},
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
