import { FC } from 'react';
import { Route, Routes } from 'react-router';
import Layout from './components/layouts/Layout';
import FrontPage from './pages/FrontPage';
import Profile from './pages/Profile';

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
      </Routes>
    </Layout>
  );
};

export default App;
