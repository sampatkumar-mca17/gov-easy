import {
    createBrowserRouter,
    redirect,
  } from "react-router";
    import Wrapper from "./gov-easy-vendor/Wrapper";
    import LoaderComponent from "./shared-components/dummy-components/loader.component";
    import { Suspense, lazy } from "react";
    const DashboardLazy = lazy(() => import("./dashboard/Dashboard"));
    const BookingsLazy = lazy(() => import("./bookings/Bookings"));
    const ServicesLazy = lazy(() => import("./services/services.component"));
    export const routes = createBrowserRouter([
    {
      path: "/",
      Component:Wrapper,
      children:[
        
        {
          path:"dashboard",
          element:
          <Suspense fallback={<LoaderComponent/>}>
            <DashboardLazy/>
          </Suspense>,
          index:true
        },
        {
          path:"bookings",
          element:
          <Suspense fallback={<LoaderComponent/>}>
            <BookingsLazy/>
          </Suspense>
        },
        {
          path:'services',
          element:
          <Suspense fallback={<LoaderComponent/>}>
            <ServicesLazy/>
          </Suspense>
        },
        {
          path:'',
          loader:()=> redirect('dashboard')
        }
      ]
    },
  ]);