import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  editContactAction,
  getContactActions,
} from "./actions/contactsActions";
import ErrorPage from "./ErrorPage";
import "./index.css";
import { getContactLoader, getContactsLoader } from "./loaders/contactsLoader";
import Contact from "./routes/Contact";
import EditContact from "./routes/Edit";
import Root from "./routes/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getContactsLoader,
    action: getContactActions,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: getContactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: getContactLoader,
        action: editContactAction,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
