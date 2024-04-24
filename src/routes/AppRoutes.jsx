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
  SeeStudentsByCourse,
} from "@pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Spinner } from "@utils";
import Protected from "./Protected";
const Root = lazy(() => import("@layouts/Root"));

export default function AppRoutes() {
  const routes = [
    {
      path: "/dashboard",
      name: "Root",
      element: (
        <Suspense fallback={<Spinner />}>
          <Root />
        </Suspense>
      ),
      children: [
        {
          path: "/dashboard",
          name: "Dashboard",
          element: (
            <Protected>
              <Dashboard />
            </Protected>
          ),
          children: [
            {
              path: "students",
              name: "Students",
              element: (
                <Protected>
                  <Students />
                </Protected>
              ),
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
                {
                  path: "search",
                  name: "Search students by course",
                  element: <SeeStudentsByCourse />,
                },
              ],
            },
            {
              path: "payments",
              name: "Payments",
              element: (
                <Protected>
                  <Payments />
                </Protected>
              ),
              children: [
                {
                  path: "search",
                  name: "Search students by course",
                  element: <SeeStudentsByCourse />,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      path: "/",
      name: "StudentFormUpload",
      element: (
        <Suspense fallback={<Spinner />}>
          <Auth />
        </Suspense>
      ),
    },
    {
      path: "login",
      name: "Login",
      element: (
        <Suspense fallback={<Spinner />}>
          <Login />
        </Suspense>
      ),
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}
