import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import ServicesPage from "./pages/ServicesPage";
import AppointmentPage from "./pages/AppointmentPage";
import ContactPage from "./pages/ContactPage";
import FaqPage from "./pages/FaqPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "team", Component: TeamPage },
      { path: "services", Component: ServicesPage },
      { path: "appointment", Component: AppointmentPage },
      { path: "contact", Component: ContactPage },
      { path: "faq", Component: FaqPage },
    ],
  },
]);
