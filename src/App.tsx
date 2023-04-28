import { FC } from 'react';
import { Route, Routes } from 'react-router';
import Layout from './components/layouts/Layout';
import Article from './pages/Article';
import FrontPage from './pages/FrontPage';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App: FC = () => {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={<FrontPage />}
        />
        <Route
          path="/:profile"
          element={<Profile />}
        />
        <Route
          path="/:profile/favorites"
          element={<Profile />}
        />
        <Route
          path="/article/:slug"
          element={<Article />}
        />
        <Route
          path="/sign-up"
          element={<SignUp />}
        />
          <Route
          path="/sign-in"
          element={<SignIn />}
        />
      </Routes>
    </Layout>
  );
};

export default App;
