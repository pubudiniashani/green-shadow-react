import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {LoginPage} from "./pages/Login.tsx";
import {Provider} from "react-redux";
import {store} from "./store/Store.ts";
import {SignupPage} from "./pages/Signup.tsx";
import {Dashboard} from "./pages/Dashboard.tsx";

import {RootLayout} from "./components/RootLayout.tsx";
import {Field} from "./pages/Field.tsx";
import {Crop} from "./pages/Crop.tsx";


function App() {

  const router = createBrowserRouter([
    {
      path: "/", // Root path
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignupPage />,
    },
    // {
    //   path: "/dashboard",
    //   element: <Dashboard />,
    // },
    // {
    //   path: "/field",
    //   element: <Field />,
    // },
    {
      path : '',
      element : <RootLayout/>,
      children : [
        { path : '/dashboard',element : <Dashboard/>},
        { path : '/field', element : <Field/>},
        { path: '/crop', element:<Crop/>},

      ]
    } ,

  ]);

  return (
      <>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </>
  );
}

export default App
