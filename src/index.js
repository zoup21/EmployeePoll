import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/home";
import RootLayout from "./root-layout/RoutLayout";
import ShowQuestion from "./components/showQuestion";
import DoneQuestions from "./components/DoneQuestions";
import Leaderboard from "./components/leaderboard";
import NotFound from "./components/NotFound";
import CreateQuestion from "./components/createQuestion";
import RequireAuth from "./components/RequireAuth";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
        children: [
          {
            path:'home' , element: <RequireAuth component={Home} />
          },
          {
            path:'leaderboard' , element: <RequireAuth component={Leaderboard} />
          },
          {
            path:'add' , element: <RequireAuth component={CreateQuestion} />
          },
        ]
      },
      {
        path:'question/:id' , element: <RequireAuth component={ShowQuestion} />
      },
      {
        path:'question/done/:id' , element: <RequireAuth component={DoneQuestions} />
      },
      {
        path:'question/*' , element:<NotFound />
      },
      {
        path: "*", element:<NotFound />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <App /> */}
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
