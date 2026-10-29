import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SiteLayout from "./components/site/SiteLayout";
import CareerPage from "./pages/CareerPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectPage from "./pages/ProjectPage";
import ProjectsIndexPage from "./pages/ProjectsIndexPage";
import QuotePage from "./pages/QuotePage";
import ServicePage from "./pages/ServicePage";
import ServicesIndexPage from "./pages/ServicesIndexPage";
import "./styles/portfolio-v2.scss";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

const router = createBrowserRouter(
  [
    {
      element: <SiteLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/servicos", element: <ServicesIndexPage /> },
        { path: "/servicos/:slug", element: <ServicePage /> },
        { path: "/projetos", element: <ProjectsIndexPage /> },
        { path: "/projetos/:slug", element: <ProjectPage /> },
        { path: "/carreira", element: <CareerPage /> },
        { path: "/orcamento", element: <QuotePage /> },
        { path: "/en", element: <HomePage /> },
        { path: "/en/services", element: <ServicesIndexPage /> },
        { path: "/en/services/:slug", element: <ServicePage /> },
        { path: "/en/projects", element: <ProjectsIndexPage /> },
        { path: "/en/projects/:slug", element: <ProjectPage /> },
        { path: "/en/career", element: <CareerPage /> },
        { path: "/en/quote", element: <QuotePage /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ],
  { basename },
);

export default function App() {
  return <RouterProvider router={router} />;
}
