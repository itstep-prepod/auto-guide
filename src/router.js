import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "./views/main";
import { FavoritesPage } from "./views/favorites";
import { ComparisonPage } from "./views/comparison";
import { NotFound } from "./views/not-found";
import { DetailsPage } from "./views/details";

export const Router = () => {

    return (
        <Routes>
            <Route index element={<Main />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/comparison" element={<ComparisonPage />} />
            <Route path="/details/:model" element={<DetailsPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}