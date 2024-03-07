import { Suspense, lazy } from "react";
import { Dashboard, Students, Payments, Auth } from "@pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const Root = lazy(() => import("@components/Root"));

export default function AppRoutes() {
  const routes = [
    {
      path: "/",
      name: "Auth",
      element: <Auth />,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      element: <Dashboard />,
    },
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
  ];
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<div>loading...</div>}>
          <Root routes={routes} />
        </Suspense>
      ),
      children: routes.map((route) => ({
        index: route.path === "/",
        path: route.path === "/" ? undefined : route.path,
        element: route.element,
      })),
    },
  ]);
  return <RouterProvider router={router} />;
}
