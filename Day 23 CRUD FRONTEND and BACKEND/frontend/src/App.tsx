import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/layout";
import Hero from "./pages/home";
import NotFound from "./components/pageNotFund";
import UsersPage from "./pages/userPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AddStudentForm from "./pages/addNewStudent";
import EditStudentForm from "./pages/editStudent";

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        { path: '/', element: <Hero /> },
        { path: '/all-users', element: <UsersPage /> },
        { path: '/add-user', element: < AddStudentForm /> },
        { path: '/edit-user/:id', element: < EditStudentForm/> },
        { path: '*', element: <NotFound /> }
      ]
    }
  ])
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  )
}