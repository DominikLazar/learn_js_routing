import { Routes, Route } from "react-router-dom";
import React from "react";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import ErrorPage from "./pages/ErrorPage";
import Profile from "./pages/Profile";
import Layout from "./components/Layout/Layout";
// import MainNavigation from "./components/Layout/MainNavigation";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/learn_js_routing" element={<AllMeetupsPage />} />
          <Route path="/new-meetup" element={<NewMeetupPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

//routing
