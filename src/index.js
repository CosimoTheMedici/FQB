import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//router
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
//store
import { Provider } from "react-redux";
//reducer


import { IndexRouters } from "./router";
import { SimpleRouter } from "./router/simple-router";
import { DefaultRouter } from "./router/default-router";
import SignIn from "./views/dashboard/auth/sign-in";
import { AuthProvider } from "./context/AuthProvider";
import store from "./redux/store";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <SignIn />,
//   },
//   ...DefaultRouter,
//   ...IndexRouters,
//   ...SimpleRouter
// ] ,{basename: process.env.PUBLIC_URL });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
     
        <AuthProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </AuthProvider>
       
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
