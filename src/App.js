import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import ErrorPage from "./pages/ErrorPage";
import Profile from "./pages/Profile";
import Layout from "./components/Layout/Layout";
import MainNavigation from "./components/Layout/MainNavigation";

function App() {
  //localhost:3000/products - domena
  //my-page.com/
  return (
    <div>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AllMeetupsPage />} />
            <Route path="/new-meetup" element={<NewMeetupPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;

//routing
