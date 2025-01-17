import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {LoginPage} from "./pages/Login.tsx";
import {Provider} from "react-redux";
import {store} from "./store/Store.ts";
import {SignupPage} from "./pages/Signup.tsx";


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
