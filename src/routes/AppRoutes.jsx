import { Suspense, lazy } from "react";
import {
  Dashboard,
  Students,
  Payments,
  Auth,
  Docket,
  EnrollStudent,
  EditProfile,
  Login,
} from "@pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const Root = lazy(() => import("@components/Root"));

export default function AppRoutes() {
  const routes = [
    {
      path: "/",
      name: "Root",
      element: (
        <Suspense fallback={<div>loading...</div>}>
          <Root />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          name: "Auth",
          element: <Auth />,
        },
        {
          path: "dashboard",
          name: "Dashboard",
          element: <Dashboard />,
          children: [
            {
              path: "students",
              name: "Students",
              element: <Students />,
              children: [
                {
                  path: "generate-docket/:studentId",
                  name: "Students Docket",
                  element: <Docket />,
                },
                {
                  path: "new-student",
                  name: "Enroll Student",
                  element: <EnrollStudent />,
                },
                {
                  path: "edit-profile/:studentId",
                  name: "EditProfile ",
                  element: <EditProfile />,
                },
              ],
            },
            {
              path: "payments",
              name: "Payments",
              element: <Payments />,
            },
          ],
        },
        {
          path: "login",
          name: "Login",
          element: <Login />,
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}
