import { Suspense, lazy } from "react";
import { Dashboard, Students, Payments, Auth } from "@pages";
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
            },
            {
              path: "payments",
              name: "Payments",
              element: <Payments />,
            },
          ],
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}
