import Layout from "./components/Layout";
import Home from "./pages/Home";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import Movie from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <Layout />, // Use Layout as the wrapper
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/directors", element: <Directors /> },
      { path: "/actors", element: <Actors /> },
      { path: "/movie/:id", element: <Movie /> },
    ],
  },
];

export default routes;