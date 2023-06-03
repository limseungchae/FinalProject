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
import Like from "./pages/myinfo/pages/Like";
import Search from "./pages/search/Search";
import Oauth from "./pages/front/pages/Oauth";
import ClassList from "./pages/myinfo/pages/classlist";
import Paylist from "./pages/myinfo/pages/Paylist";
import Payclass from "./pages/front/pages/Payclass";
import Approval from "./pages/front/pages/Approval";
import AddClass from "./pages/myinfo/pages/addclass"


const router = createBrowserRouter([
  {
    path:'/',
    element:<Index />,
    children: [
      {index:"main", element: <ClassMain />},
      {path: "login", element: <Login />},
      {path: "join", element: <Join />},
      {path: "viewclass", element: <ViewClass />},
      {path: "auth/kakao", element: <Oauth />},
      {path: "payclass", element: <Payclass />},
      {path: "approval", element: <Approval />}
    ]
  },
  {
    path:'/search',
    element:<Search />
  },
  {
    path:'/admin',
    element:<Admin />,
    children: [
      {index: true, element: <Home />},
      {path: "myinfo", element: <MyInfo />}
    ]
  },
  {
    path:'/myinfo',
    element:<UserInfo />,
    children: [
      {path: "like", element: <Like />},
      {path: "modify", element: <Modify />},
      {path: "addclass", element: <AddClass />},
      {path: "classlist", element: <ClassList />},
      {path: "paylist", element: <Paylist />},
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
