import React from "react";
import ReactDOM from "react-dom/client";

import "@/assets/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilmPage from "./pages/Film/FilmPage.tsx";
import HomePage from "./pages/Home/HomePage.tsx";
import CastPage from "./pages/Cast/CastPage.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/film/:id" element={<FilmPage />}/>
          <Route path="/cast/:id" element={<CastPage />}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
