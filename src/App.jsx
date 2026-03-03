import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/ScrollToTop";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const PlansPage = lazy(() => import("./pages/PlansPage"));
const ClientsPage = lazy(() => import("./pages/ClientsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const SitemapPage = lazy(() => import("./pages/SitemapPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

export default function App({ onToggleTheme }) {
  return (
    <>
      <ScrollToTop />
      <Suspense
        fallback={
          <div className="min-h-screen bg-background-light dark:bg-background-dark" />
        }
      >
        <Routes>
          <Route element={<Layout onToggleTheme={onToggleTheme} />} path="/">
            <Route element={<HomePage />} index />
            <Route element={<AboutPage />} path="about" />
            <Route element={<PlansPage />} path="plans" />
            <Route element={<ClientsPage />} path="clients" />
            <Route element={<ContactPage />} path="contact" />
            <Route element={<SitemapPage />} path="sitemap" />
            <Route element={<NotFoundPage />} path="*" />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
