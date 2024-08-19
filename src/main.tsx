import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import GameProvider from "./Context/GameContext.tsx";
import MenuPage from "./Pages/MenuPage.tsx";
import GamePage from "./Pages/GamePage.tsx";
import CreateGame from "./components/CreateGame.tsx";
import WinnerPage from "./Pages/WinnerPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuPage />,
    errorElement: <MenuPage />,
  },
  {
    path: "/game",
    element: <GamePage />,
    errorElement: <MenuPage />,
    children: [
      {
        path: ":gamemode",
        element: <CreateGame />,
      },
      {
        path: "winner",
        element: <WinnerPage />,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GameProvider>
      <RouterProvider router={router} />
    </GameProvider>
  </React.StrictMode>
);
