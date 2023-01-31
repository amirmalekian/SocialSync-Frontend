import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

function App() {
  const currentUser = true;

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <Outlet />
          <RightBar />
        </div>
      </div>
    );
  };

  type ProtectedRouteProps = {
    currentUser: boolean;
    component: React.ComponentType;
  };

  // const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  //   currentUser,
  //   component: Component,
  // }) => {
  //   if (!currentUser) {
  //     return <Navigate to="/login" />;
  //   }
  //   return <Component />;
  // };

  const ProtectedRoute = ({
    currentUser,
    component: Component,
  }: ProtectedRouteProps) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return <Component />;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute currentUser={currentUser} component={Layout} />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
