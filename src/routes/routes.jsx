import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Messages = React.lazy(
  () => import("../features/messages/containers/messages/messages.container")
);


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/messages" />} />
      <Route
        path="/messages"
        element={
          <React.Suspense fallback={<>Loading...</>}>
            <Messages />
          </React.Suspense>
        }
      />
      <Route
        path="/messages/:userId"
        element={
          <React.Suspense fallback={<>Loading...</>}>
            <Messages />
          </React.Suspense>
        }
      />
    </Routes>
  );
}
