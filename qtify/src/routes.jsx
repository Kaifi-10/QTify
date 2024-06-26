
import AlbumsPage from "./pages/AlbumsPage";
import HomePage from "./pages/HomePage";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/",
        element: <AlbumsPage />,
      },
      
    ],
  },
];
